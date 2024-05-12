import { AuthMiddleWare } from "../middlewares/auth-middleware";
import { CityService } from "../services/city-serv";
import { BaseController } from "./base-ctrl";
import { Request, Response } from "express";

export class DataController extends BaseController {
  constructor() {
    super();

    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(
      "/data/cities",
      new AuthMiddleWare().checkLogged,
      (req: Request, res: Response) => {
        console.log("Loading cities");
        let data: any = new CityService().getCities(req.body.currentDate);
        res.send(data);
      }
    );
  }
}
