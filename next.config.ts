/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  images: {
    unoptimized: true,
  },
  eslint: {
    // ✅ não falha o build por warnings/erros do ESLint
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
