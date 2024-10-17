import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { LOCALES } from './utils/constants';
import deepmerge from 'deepmerge';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!LOCALES.includes(locale as any)) notFound();

  const messages = (await import(`./locales/${locale}/common.json`)).default;
  const defaultMessages = (await import(`./locales/en/common.json`)).default;

  return {
    messages: deepmerge(defaultMessages, messages),
  };
});
