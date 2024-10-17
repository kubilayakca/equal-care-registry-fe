import createMiddleware from 'next-intl/middleware';
import { pathnames, localePrefix } from './navigation';
import { LOCALES } from './utils/constants';

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: 'en',
  localePrefix,
  localeDetection: false,
  pathnames,
});

import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith(`/en`)) {
    const url = request.nextUrl.clone();
    url.pathname = request.nextUrl.pathname?.replace('/en', '');

    return NextResponse.redirect(url, 301);
  }

  return createMiddleware({
    locales: LOCALES,
    defaultLocale: 'en',
    localePrefix,
    localeDetection: false,
    pathnames,
  })(request);
}

export const config = {
  // Matcher entries are linked with a logical "or", therefore
  // if one of them matches, the middleware will be invoked.
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // However, match all pathnames within `/users`, optionally with a locale prefix
    '/([\\w-]+)?/users/(.+)',
  ],
};
