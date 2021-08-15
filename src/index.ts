import App from "./app";
import router from "./routes/routes";
import mongoose from "mongoose";
import * as bodyParser from "body-parser";
import loggerMiddleware from "./middleware/logger";

const app = new App({
  routes: router,
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    loggerMiddleware,
  ],
});

mongoose.connect(
  "mongodb+srv://dbUser:dbUserPassword@todoapp.rq0sc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("connected successfully");
});
app.listen();
