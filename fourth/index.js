const express = require("express");

const app = express();

app.get("/hello", function (req, res) {
   const { name } = req.query;
   res.send(`Hello ${name}`);
});

const start = () => {
   try {
      app.listen(3000, () => {
         console.log("app is running");
      });
   } catch (e) {
      console.log(e);
   }
};

start()