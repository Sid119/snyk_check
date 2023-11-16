const config = () => ({
    apiUrl: process.env.NEXT_PUBLIC_API_HOST_URL,
    templateApiUrl: process.env.TEMPLATE_API_URL,
    accountApiUrl: process.env.ACCOUNT_API_URL,
});

export default config;
