import { getTranslations } from 'next-intl/server';

export default async function PrivacyPage() {
    const t = await getTranslations();

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Privacy & Analytics Notice</h1>

            <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        This website uses <strong>Google Analytics 4</strong>, a web analytics service provided by Google LLC,
                        to understand how visitors use the site and to help improve its content and performance.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">What data is collected?</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Google Analytics collects information such as:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                        <li>Pages visited and time spent on each page</li>
                        <li>Approximate location (derived from IP address)</li>
                        <li>Device and browser information</li>
                        <li>Interactions with the site (clicks, scrolls, etc.)</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>IP addresses are anonymized</strong> before being processed.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">How is this data used?</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Analytics data is processed by Google on our behalf and may be stored on servers outside the
                        European Union. Google uses this data solely to provide analytics services and does not share
                        it with us in a way that identifies individual users.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Your consent</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We use Google Analytics <strong>only after you give your consent</strong>. You can withdraw
                        or change your consent at any time by:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                        <li>Clearing your browser's stored site data</li>
                        <li>Adjusting your browser settings to block cookies</li>
                        <li>Refreshing the page to see the consent banner again (if you've cleared your choice)</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Google's Privacy Policy</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        For more information about how Google processes data, please see:{' '}
                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                        >
                            https://policies.google.com/privacy
                        </a>
                    </p>
                </section>

                <section className="mb-8">
                    <p className="text-sm text-gray-600 italic">
                        Last updated: December 2025
                    </p>
                </section>
            </div>
        </div>
    );
}
