import express from "express"
import cors from 'cors'
import { sequelize as conn } from "./db/conn.js";

import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import likeRoutes from "./routes/likeRoutes.js";
import answerRoutes from "./routes/answerRoutes.js";
import likeAnswerRoutes from "./routes/likeAnswerRoutes.js";
import authRoutes from "./routes/authRoutes.js";


const port = 3000
const app = express()

app.use(cors({ credentials: true, origin: "http://localhost:3000"}))

app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/answers", answerRoutes)
app.use("/api/like", likeRoutes, likeAnswerRoutes)


conn.sync().then(()=> {
    app.listen(port)
}).catch((error) => {
    console.log(error)
})



