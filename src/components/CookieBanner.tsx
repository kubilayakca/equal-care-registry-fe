'use client';

import { useEffect, useState } from 'react';

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('analytics_consent');
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('analytics_consent', 'granted');
        setShowBanner(false);
        // Dispatch custom event to notify GA scripts to load
        window.dispatchEvent(new Event('consentGranted'));
    };

    const handleReject = () => {
        localStorage.setItem('analytics_consent', 'denied');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-blue-20 shadow-lg">
            <div className="eq-container eq-px py-4 md:py-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex-1">
                        <p className="body-s-400 text-blue-2">
                            We use analytics cookies to understand how this site is used and improve it.{' '}
                            <a
                                href="/privacy"
                                className="text-green-500 hover:text-green-800 body-s-500 underline transition-colors"
                            >
                                Learn more
                            </a>
                        </p>
                    </div>
                    <div className="flex gap-3 w-full sm:w-auto">
                        <button
                            onClick={handleReject}
                            className="flex-1 sm:flex-none flex gap-1.5 items-center py-2.5 md:py-3 body-s-500 px-5 text-blue-2 border border-green-400 rounded bg-white hover:bg-gray-50 transition-colors"
                        >
                            Decline
                        </button>
                        <button
                            onClick={handleAccept}
                            className="flex-1 sm:flex-none flex gap-1.5 items-center py-2.5 md:py-3 body-s-500 px-5 text-white border border-green-500 bg-green-500 rounded hover:bg-green-800 transition-colors"
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
