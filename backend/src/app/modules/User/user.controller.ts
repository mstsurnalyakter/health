import { Request, Response } from "express";
import { userService } from "./user.service";

const createAdmin = async (req: Request, res: Response) => {
  try {
    const result = await userService.createAdmin(req.body);

  res.status(200).json({
    succes:true,
    message:"Admin created successfully",
    data:result
  })
  } catch (error) {
    res.status(500).json({
      success:false,
      message:error?.name || "something went wrong",
      error
    })
  }
};

export const userController = {
  createAdmin,
};
