module.exports = {
  async redirects() {
    return [
      // if category does not have a product means 404 page occur then redirects to the all product page
      // {
      //   source: '/product/:slug',
      //   destination: '/',
      //   permanent: false,
      // },
      // {
      //   source: '/category/:slug',
      //   destination: '/category',
      //   permanent: false,
      // },
      // // if subcatgory/slug throw an error then redirects to the all category page
      // {
      //   source: '/subcategory/:slug',
      //   destination: '/category',
      //   permanent: false,
      // },
    ]
  },
}