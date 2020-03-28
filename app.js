const express = require("express"); // import server side framework
const app = express(); //  assign "express()" to "app" object
const PORT = process.env.PORT || 9000; // define PORT
const TimeRightNow = new Date().getHours(); // time right now in hours

// time middleware
app.use(
  (time = (req, res, next) => {
    console.log(TimeRightNow);
    next();
  })
);

// set "public" as a static folder
app.use(express.static((__dirname, "public")));

app.get("*", (req, res) => {
  if (TimeRightNow > 8 && TimeRightNow < 17) {
    res.sendFile(__dirname + "/public/home.html");
  } else res.send("we are close now!");
});

// create local server

app.listen(PORT, err => {
  if (err) console.log("server is down");
  else console.log(`server is up on port ${PORT} `);
});
