require('dotenv').config()
module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.node = {
          fs: 'empty'
        };
      }
  
      return config;
    },
    env :{
      SPACE_ID: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      ACCESS_TOKEN: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
    }
  };