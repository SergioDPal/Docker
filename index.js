require("dotenv").config();
const GREETINGS = process.env.GREETINGS;

require("express")()

  .get("/health", (req, res) => {
    if (GREETINGS) {
      res.send(GREETINGS);
    } else {
      res.send("OK");
    }
  })

  .listen(5000, () => {
    console.log("Server listening");
  });
