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

app.use("/auth", authRoutes)
app.use("/users", userRoutes)
app.use("/posts", postRoutes)
app.use("/answers", answerRoutes)
app.use("/like", likeRoutes, likeAnswerRoutes)


conn.sync().then(()=> {
    app.listen(port)
}).catch((error) => {
    console.log(error)
})



