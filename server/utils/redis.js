const redis = require("redis");
const dotenv = require("dotenv");

dotenv.config();

const redisClient = redis.createClient(process.env.DB_REDISPORT);

module.exports = redisClient;
