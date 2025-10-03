/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=604800, stale-while-revalidate=86400, public"
          }
        ]
      },
      {
        source: "/cv.pdf",
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=604800, stale-while-revalidate=86400, public"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
