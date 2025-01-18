/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: '@svgr/webpack', options: { icon: true } }],
        });

        return config;
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '15mb',
        },
    },
};

export default nextConfig;
