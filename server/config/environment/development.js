'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://balu:admin>@cluster0-shard-00-00.nlbla.mongodb.net:27017,cluster0-shard-00-01.nlbla.mongodb.net:27017,cluster0-shard-00-02.nlbla.mongodb.net:27017/autobackup?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
  },

  seedDB: true
};
