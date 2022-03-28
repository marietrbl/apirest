import { Request, Response, Router } from 'express';
import { userService } from '..';

export const userController = Router()

userController.get("/", (req: Request, res: Response) => res.send('crashed on the route/users/'))
userController.post("/create", (req: Request, res: Response) => userService.CreateUser(req, res))
