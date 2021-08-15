import express from "express";
import { Application } from "express";
import cors from "cors";

class App {
  public app: Application;
  public port: number;

  constructor(appInit: { middleWares: any; routes: any }) {
    this.app = express();
    this.port = Number(process.env.PORT) || 8080; //appInit.port
    this.middlewares(appInit.middleWares);
    this.routes(appInit.routes);
  }

  private middlewares(middleWares: {
    forEach: (arg0: (middleWare: any) => void) => void;
  }) {
    this.app.use(cors());
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare);
    });
  }

  private routes(route: any) {
    this.app.use("/api", route);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`);
    });
  }
}
export default App;
