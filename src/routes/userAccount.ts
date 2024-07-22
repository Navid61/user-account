import { Router, Request, Response } from "express";
import axios from "axios";

const userAcountRouter = Router();


// Define a route that needs data from user-accounts microservice
userAcountRouter.get("/status", async (req: Request, res: Response) => {
    try {
        // Make a request to user-accounts microservice
        const response = await axios.get(`http://user-accounts-service/user/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        // Handle errors
        console.error("Error while fetching user data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});





export default  userAcountRouter;