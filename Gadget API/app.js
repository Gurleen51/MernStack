import cookieParser from 'cookie-parser';
import express from 'express';
import dotenv from "dotenv";
import cors from "cors"
import authRouter from "./api/routes/auth.router.js"
import productRouter from "./api/routes/product.router.js";
const app = express();

// config:
dotenv.config();

// middleware

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["get", "post", "put", "delete", "patch"],
    credentials: true,
}))


// routes
app.use("/api/auth",authRouter )
app.use("/api/product", productRouter);


// const mymiddleware = (req, res, next) => {
//     try {

//         console.log("running")
//         const user = req.params.id;
//         if (user==="gurleen") {
//             next()
//         } else {
//             return res.status(500).json({
//                 message:  "invalid user"
//             })
//         }
//     } catch (err) {
//         return res.status(500).json({
//             message: err.message
//         })
//     }
// }


// //  routes:
// app.get("/home/:id", mymiddleware, (req, res, next) => {
//     return res.json({
//         message: " hy gurleen"
//     })
// })



export default app;