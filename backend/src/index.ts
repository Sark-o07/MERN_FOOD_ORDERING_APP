import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log("database connection successful"))

const app = express();
app.use(express.json());
app.use(cors())

app.get("/test", async (req: Request , res: Response) => {
    res.json({ Message: "Hello!"});
})

app.listen(7000, () =>{
    console.log("server is running on localhost at port 7000");
})