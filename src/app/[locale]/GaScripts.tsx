'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function GaScripts({ gaId }: { gaId?: string }) {
    const [hasConsent, setHasConsent] = useState(false);

    useEffect(() => {
        // Check consent on mount
        const consent = localStorage.getItem('analytics_consent');
        setHasConsent(consent === 'granted');

        // Listen for consent changes
        const handleConsentGranted = () => {
            setHasConsent(true);
        };

        window.addEventListener('consentGranted', handleConsentGranted);
        return () => window.removeEventListener('consentGranted', handleConsentGranted);
    }, []);

    if (!gaId || !hasConsent) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
            </Script>
        </>
    );
}
