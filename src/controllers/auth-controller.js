import User from "../models/user.js";
import UserService from "../services/user-service.js";

const userService = new UserService();

export const signup = async (req,res) => {
    try {
        if (!req.body?.email || !req.body?.password || !req.body?.name) {
            return res.status(400).json({
                success: false,
                message: "email, password, and name are required",
                data: {},
                err: {}
            });
        }

        const response = await userService.signup({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(201).json({
            success:true,
            message:'successfully created a new user',
            data:response,
            err:{}
        });
    } catch (error) {
        if (error?.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "user already exists",
                data: {},
                err: error
            });
        }

        return res.status(500).json({
            message: "something went wrong",
            data: {},
            success: false,
            err: error
        });
    }
}
