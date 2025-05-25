const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient({ region: "us-west-1" });

const USERS_TABLE = "User";

const userRepository = {
  save: async (user) => {
    const params = {
      TableName: USERS_TABLE,
      Item: user.toItem()
    };
    await dynamoDb.put(params).promise();
  }
};

module.exports = userRepository;
