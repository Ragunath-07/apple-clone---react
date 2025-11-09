function Footer() {
    return (
        <div className="bg-gray-100 text-xs 2xl:px-52 text-gray-500 p-8 mt-16">
            <p>◊Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001 applies. Click here to see instant cashback amounts and eligible devices.
                Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied.
                Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated,
                and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply.
                Instant cashback is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing.
                Multiple separate orders cannot be combined for instant cashback.
            </p>
            <p className="my-5">‡No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3- or 6-month tenures from most leading card issuers. Monthly pricing is rounded to the nearest rupee.
                Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to business customers and
                cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer.
                Offer may be revised or withdrawn at any time without any prior notice. Terms apply.
            </p>
            <p>1. Testing conducted by Apple in July 2025 using AirPods Pro 3 paired with iPhone 16 with pre-release AirPods firmware and iOS 26.
                Noise reduction was tested in accordance with IEC 60268-24. Comparison made against the best-selling wireless in-ear headphones commercially available at the time of testing.
                Performance depends on device settings, environment and many other factors.
            </p>
            <p className="my-5">A subscription is required for Apple TV+.</p>
            <p>Features are subject to change. Some features, applications and services may not be available in all regions or all languages.</p>

            <hr class="border border-gray-300 my-4" />

            <div className="flex justify-between gap-5">
                <ul>
                    <li className="text-black font-semibold my-1">Shop and Learn</li>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>Watch</li>
                    <li>AirPods</li>
                </ul>
                <ul>
                    <li className="text-black font-semibold my-1">Account</li>
                    <li>Manage your Apple Account</li>
                    <li>Apple Store Account</li>
                    <li>iCloud.com</li>
                </ul>
                <ul>
                    <li className="text-black font-semibold my-1">Apple Store</li>
                    <li>Find a Store</li>
                    <li>Genius Bar</li>
                    <li>Today at Apple</li>
                    <li>Group Reservations</li>
                </ul>
                <ul>
                    <li className="text-black font-semibold my-1">For Business</li>
                    <li>Apple and Business</li>
                    <li>Shop for Business</li>
                </ul>
                <ul>
                    <li className="text-black font-semibold my-1">Apple Values</li>
                    <li>Accessibility</li>
                    <li>Education</li>
                    <li>Environment</li>
                    <li>Privacy</li>
                    <li>Supply Chain Innovation</li>
                </ul>
            </div>

            <p className="mt-10">More ways to shop: <a href="#" className="text-blue-700 underline">Find an Apple Store</a> or <a href="#" className="text-blue-700 underline">other retailer</a> near you.</p>

            <hr class="border border-gray-300 my-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:text-center">
                <h1>Copyright © 2025 Apple Inc. All rights reserved.</h1>
                <p className="text-gray-700 cursor-pointer">Privacy Policy | Terms of Use | Sales Policy | Legal | Site Map</p>
                <h1>India</h1>
            </div>
        </div>
    )
}

export default Footer