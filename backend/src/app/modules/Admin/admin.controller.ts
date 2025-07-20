import { Request, Response } from "express";
import { AdminService } from "./admin.service";

const getAllAdmin = async (req: Request, res: Response) => {
  try {
    const result = await AdminService.getAllAdmin(req.query);
    res.status(200).json({
      success: true,
      status: 200,
      message: "Admin get successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      status: 500,
      message: error?.name || "something went to wronge from server",
      error,
    });
  }
};

export const AdminController = {
  getAllAdmin,
};
