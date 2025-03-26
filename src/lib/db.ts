import { Redis } from "@upstash/redis";

/*
This code sets up a connection to a Redis database hosted on Upstash using credentials stored in environment variables. The redis client instance or new object can then be used throughout the application to interact with the Redis database.
*/

//@upstash/redis - This package provides a client to interact with Redis databases
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  //This is the endpoint URL of the Redis database
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
  //This is the authentication token needed to access the Redis database
});
//new Redis({}) -  This creates a new instance of the Redis client.
