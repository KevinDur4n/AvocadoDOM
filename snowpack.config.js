/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    // Same behavior as the "src" example above:
    src: {url: '/_dist_'},
    // Mount "public" to the root URL path ("/*") and serve files with zero transformations:
    public: {url: '/', static: true, resolve: false},
  },
  buildOptions: {
    baseUrl: 'https://kevindur4n.github.io/AvocadoDOM/',
  },
}
