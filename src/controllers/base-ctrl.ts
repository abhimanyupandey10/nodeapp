import express, { Router } from "express";

export class BaseController {
  public router: Router;

  constructor() {
    this.router = express.Router();
  }
}
