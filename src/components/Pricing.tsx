import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";

interface Plan {
    name: string;
    subtitle: string;
    monthlyPrice: number;
    yearlyPrice: number;
    isPopular?: boolean;
    features: string[];
}

const PricingPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [billingPeriod, setBillingPeriod] = useState("yearly");
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const plans = [
        {
            name: "Starter",
            subtitle: "For getting started",
            monthlyPrice: 0,
            yearlyPrice: 0,
            features: [
                "2 concurrent notes",
                "2 templates",
                "2 timers",
                "2 concurrent blocks",
                "Utility tools",
                "Overall data insights",
            ],
        },
        {
            name: "Pro",
            subtitle: "For everyday productivity",
            monthlyPrice: 4.99,
            yearlyPrice: 52.5,
            isPopular: true,
            features: [
                "Everything in Starter, plus:",
                "Unlimited notes & templates",
                "Unlimited timers & blocks",
                "Category breakdowns",
                "Evolution tracking",
                "Advanced insights",
            ],
        },
        {
            name: "Plus",
            subtitle: "For power users",
            monthlyPrice: 7.99,
            yearlyPrice: 84.0,
            features: [
                "Everything in Pro, plus:",
                "Data export (CSV/JSON)",
                "Weekly insights",
                "Pattern recognition",
                "Early access to features",
            ],
        },
    ];

    const getDisplayPrice = (plan: Plan) => {
        if (plan.monthlyPrice === 0) return "Free";
        const price =
            billingPeriod === "yearly"
                ? (plan.yearlyPrice / 12).toFixed(2)
                : plan.monthlyPrice.toFixed(2);
        return `$${price}`;
    };

    const getSavingsPercentage = () => {
        // Calculate average savings across paid plans
        const proSavings = ((4.99 * 12 - 52.5) / (4.99 * 12)) * 100;
        const plusSavings = ((7.99 * 12 - 84.0) / (7.99 * 12)) * 100;
        return Math.round(((proSavings + plusSavings) / 2) * 10) / 10;
    };

    return (
        <section
            ref={sectionRef}
            className="min-h-screenbg-[var(--bg)] py-20"
            id="pricingpage"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className={`transition-all duration-1000 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <h2 className="text-5xl font-semibold tracking-tight mb-3 text-gray-900">
                            Choose your plan
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-14">
                            Start with a 14-day free trial. No credit card
                            required.
                        </p>

                        {/* Billing Toggle */}
                        <div className="inline-flex items-center bg-white rounded-xl p-1 shadow-sm border border-gray-200">
                            <button
                                onClick={() => setBillingPeriod("yearly")}
                                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all flex items-center ${
                                    billingPeriod === "yearly"
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                            >
                                Yearly
                                <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                    Save {getSavingsPercentage()}%
                                </span>
                            </button>
                            <button
                                onClick={() => setBillingPeriod("monthly")}
                                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                                    billingPeriod === "monthly"
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                            >
                                Monthly
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`
                                relative bg-white rounded-3xl border border-gray-200 overflow-hidden
                                transition-all duration-700 hover:shadow-lg
                                ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-12"
                                }
                                ${
                                    plan.isPopular
                                        ? "ring-2 ring-blue-500 ring-opacity-20"
                                        : ""
                                }
                            `}
                            style={{
                                transitionDelay: `${index * 150}ms`,
                            }}
                        >
                            {/* Plan Header */}
                            <div className="p-8 pb-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                        {plan.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {plan.subtitle}
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    <div className="flex items-baseline">
                                        <span className="text-4xl font-semibold text-gray-900">
                                            {getDisplayPrice(plan)}
                                        </span>
                                        {plan.monthlyPrice > 0 && (
                                            <span className="text-gray-600 ml-2">
                                                / month{" "}
                                                {billingPeriod === "yearly"
                                                    ? "billed annually"
                                                    : "billed monthly"}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button
                                    className={`
                                    w-full py-3 px-6 rounded-xl font-medium transition-all mb-8
                                    ${
                                        plan.isPopular || plan.name === "Plus"
                                            ? "bg-gray-900 text-white hover:bg-gray-800"
                                            : "border border-gray-300 text-gray-900 hover:bg-gray-50"
                                    }
                                `}
                                >
                                    {plan.monthlyPrice === 0
                                        ? "Get started"
                                        : billingPeriod === "yearly"
                                        ? `Get ${plan.name} annual plan`
                                        : `Get ${plan.name} plan`}
                                </button>
                            </div>

                            {/* Features */}
                            <div className="px-8 pb-8">
                                <div className="space-y-4">
                                    {plan.features.map(
                                        (feature, featureIndex) => (
                                            <div
                                                key={featureIndex}
                                                className="flex items-start"
                                            >
                                                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                                    <Check className="w-3 h-3 text-green-600" />
                                                </div>
                                                <span className="text-sm text-gray-700 leading-relaxed">
                                                    {feature}
                                                </span>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div
                    className={`text-center mt-12 transition-all duration-1000 delay-500 ${
                        isVisible ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <p className="text-sm text-gray-500">
                        Prices shown do not include applicable tax. All plans
                        include a 14-day free trial.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingPage;
