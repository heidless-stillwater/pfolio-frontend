const withImages = require('next-images');
module.exports = withImages({
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['storage.googleapis.com', process.env.BACKEND_HOST],
    // domains: ['storage.googleapis.com', process.env.BACKEND_HOST],
  },
  async rewrites() {
    return [
      {
        source: '/about',
        destination: `${process.env.BACKEND_URL}/about/`,
      },
      {
        source: '/tools',
        destination: `${process.env.BACKEND_URL}/tools/`,
      },
      {
        source: '/portfolios',
        destination: `${process.env.BACKEND_URL}/portfolios/`,
      },
      {
        source: '/samples',
        destination: `${process.env.BACKEND_URL}/samples/`,
      },
      {
        source: '/demos',
        destination: `${process.env.BACKEND_URL}/demos/`,
      },
      {
        source: '/showcases',
        destination: `${process.env.BACKEND_URL}/showcases/`,
      },
      {
        source: '/examples',
        destination: `${process.env.BACKEND_URL}/examples/`,
      },
      {
        source: '/projects',
        destination: `${process.env.BACKEND_URL}/projects/`,
      },
      {
        source: '/datasciences',
        destination: `${process.env.BACKEND_URL}/datasciences/`,
      },
      {
        source: '/technologies',
        destination: `${process.env.BACKEND_URL}/technologies/`,
      },
      {
        source: '/contact',
        destination: `${process.env.BACKEND_URL}/contact/`,
      },
      {
        source: '/hero',
        destination: `${process.env.BACKEND_URL}/hero/`,
      },
      {
        source: '/footer',
        destination: `${process.env.BACKEND_URL}/footer/`,
      },
    ];
  },
});
