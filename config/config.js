const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI ||"mongodb+srv://nkhamees:9IbqeuQN04rbP5OM@cluster0.49z7ije.mongodb.net/DressStore?retryWrites=true&w=majority" ||
    process.env.MONGO_HOST ||
      'mongodb://' + (process.env.IP || 'localhost') + ':' +
      (process.env.MONGO_PORT || '27017') +'/DressStore'
     
  };
  
  module.exports = config;


