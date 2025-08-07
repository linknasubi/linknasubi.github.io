/** @type {import('next').NextConfig} */
const repo = 'gabrielaragao.github.io';

const nextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
