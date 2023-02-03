const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/do8pjvazp/**',
      },
    ],
  },
};
