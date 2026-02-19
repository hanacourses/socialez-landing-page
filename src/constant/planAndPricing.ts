export const PLAN_AND_PRICING = [
    {
        title: "Free",
        price: 0,
        description: "For individuals and creators",
        buttonText: "Get Started",
        buttonVariant: "outline",
        isMostPopular: false,
        buttonLink: () => {
            console.log("Get Started");
        },
        features: ["4 social accounts", "1 user", "100 AI Credits", "Basic content library", "Analytics"],
        subFeature: ["Easy upgrade anytime", "Email support"],
    },
    {
        title: "Standard",
        price: 9.99,
        description: "For growing brands and small teams",
        buttonText: "Start 14-day free trial",
        buttonVariant: "primary",
        isMostPopular: true,
        buttonLink: () => {
            console.log("Get Started");
        },
        features: ["Up to 10 social accounts", "3 users", "1,000 AI Credits", "Full content library", "Analytics","Dedicated account manager","Priority support"],
        subFeature: ["Upgrade anytime"],
    },
    {
        title: "Enterprise",
        price: 49.99,
        description: "For agencies and large teams",
        buttonText: "Start 14-day free trial",
        buttonVariant: "outline",
        isMostPopular: false,
        buttonLink: () => {
            console.log("Get Started");
        },
        features: ["50 social accounts", "Unlimited users and clients", "Unlimited AI credits", "White-label"],
        subFeatureTitle: "Advance Capabilities",
        subFeature: ["Migration support", "Single Sign-On (SSO)", "API access", "Dedicated manager"],
    }
]