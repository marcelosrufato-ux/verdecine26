/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/edicao-2026',
        permanent: false, // Use false enquanto estiver testando
      },
    ];
  },
};

export default nextConfig;
