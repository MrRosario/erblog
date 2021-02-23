const path =  require('path');

require('dotenv').config();

module.exports = {
  images: {
    loader: 'imgix',
    path: 'https://strapifileupload.s3.sa-east-1.amazonaws.com/'
  },
  env: {
    API_URL: process.env.API_URL
  },
  webpack: config => {
      config.resolve.alias['components'] = path.join(__dirname, 'components')
      config.resolve.alias['public'] = path.join(__dirname, 'public')

      return config
  },
}