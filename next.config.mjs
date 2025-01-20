import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

// Use the MDX plugin
const mdx = createMDX({
  extension: /\.mdx?$/,
});

// Export the configuration wrapped with the MDX plugin
export default mdx(nextConfig);
