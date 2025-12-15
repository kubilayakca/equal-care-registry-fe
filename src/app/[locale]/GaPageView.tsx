'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function GaPageView({ gaId }: { gaId?: string }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!gaId) return;
        // Check consent before tracking
        const consent = localStorage.getItem('analytics_consent');
        if (consent !== 'granted') return;

        const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '');
        // @ts-ignore
        window.gtag?.('config', gaId, { page_path: url });
    }, [gaId, pathname, searchParams]);

    return null;
}
