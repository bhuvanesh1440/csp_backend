const express = require("express");
const Result = require("../Database");
// const Mapping = require("./Operations");
const Router = express.Router();

Router.post("/Insert", (req, res) => {
  let Details = req.body;
  console.log(Details);
  Result("users", "Insert", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.delete("/Delete:ID", (req, res) => {
  let Details = req.params.ID;
  Result("users", "Delete", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.put("/Update:ID", (req, res) => {
  let Details = req.params.ID;
  let UpdatedDetails = req.body;
  console.log(UpdatedDetails);
  console.log(Details);
  Result("users", "Update", Details, UpdatedDetails)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.get("/Read:_ID", (req, res) => {
  const Details = req.params._ID;
Result("users", "Read", Details)
  .then((result) => {
    res.send({ Message: result.Message, Result: result.rows });
    console.log(result);
  })
  .catch((err) => {
    res.send(err);
  });
});

// Array to store the parameters
// const Details = [];

// Route handler function
// const handleGetRequest = (req, res) => {
//   const param1 = req.query.param1;
//   const param2 = req.query.param2;

//   // Add the parameters to the array
//   Details.push({ param1, param2 });
//   Result("users", "Read", Details)
//    .then((result) => {
//       res.send({ Message: result.Message, Result: result.rows });

//       console.log(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });

//   // Send a response
//   // res.send('Parameters stored successfully');
// };

// // Define the GET route
// Router.get('/Read?=', handleGetRequest);
 
//my real code

// Router.get("/Read", (req, res) => {
  // const u_name = req.query.param1;
  // const pass = req.query.param2;
  // const Details=[u_name,pass];
  // Result("users", "Read", Details)
  //  .then((result) => {
  //     res.send({ Message: result.Message, Result: result.rows });

  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });
  Router.get("/Read", (req, res) => {
    const Details = req.params._ID;
  Result("users", "Read", Details)
    .then((result) => {
      res.send({ Message: result.Message, Result: result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = Router;