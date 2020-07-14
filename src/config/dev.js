const baseConfigs = {
  env : process.env.ENV ? process.env.ENV : 'dev',
  port: process.env.PORT ? process.env.PORT : 3000
};


module.exports = { baseConfigs };