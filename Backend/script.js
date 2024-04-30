import axios from "axios";

var data = JSON.stringify({
  collection: "Plants",
  database: "Gardening",
  dataSource: "MASHEDcluster",
  // This specifies what data/fields we want to get back from the database
  // projection: {
  //   _id: 1,
  //   name: 1,
  //   colour: 1,
  // },
});

var config = {
  method: "post",
  url: "https://eu-west-2.aws.data.mongodb-api.com/app/data-cvwbq/endpoint/data/v1/action/find",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key":
      "eS4s8jXGRxxbfFP8OTmsr5xEFfPErn8COw3o00fLD9JfusMg76NAtWPuN7QQi49C",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
