import http from "node:http";
import express from "express";
import type {Request, Response} from "express";
import cors from "cors";
import bcrypt, { hash } from "bcrypt";

import {PrismaClient} from "@prisma/client";

import {signin, login} from "./utils/auth.js";



const app = express();

const server = http.createServer(app);

const PORT = 3000;

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));





app.post("/signin", async (req: Request, res: Response) => {
    try{
        const{firstName, lastName, email, password} = req.body;
        const data = signin(req.body);

        if(data.status !== 201)
            return res.status(data.status).json({err: data.err, msg: data.msg});
        const temp = await prisma.users.findUnique({
            where: {email: email}
        });

        if(temp)
            return res.status(409).json({err: true, msg: "Account already exist"});

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = {firstName, lastName, email, password: hashedPassword};
  
        await prisma.users.create({
            data: user
        });
        return res.status(data.status).json({err: data.err, msg: data.msg, user:user});
    } catch(err){
        return res.status(400).json({err: true, msg: err});
    }
});


app.post("/login", async (req: Request, res: Response) => {
    try{
        const{email, password} = req.body;
        const data = login(req.body);
        if(data.status !== 200)
            return res.status(data.status).json({err: data.err, msg: data.msg});
        const user = await prisma.users.findUnique({
            where:{
                email: email
            }
        })
        if(!user)
            return res.status(400).json({err: true, msg: "Account not exist"});
        // password checking
        const ok = await bcrypt.compare(password, user.password)
        if(ok)
            return res.status(data.status).json({err:data.err, msg: data.msg, user: user});
        return res.status(400).json({err:true, msg: "Password is incorrect"});
    } catch(err){
        return res.status(400).json({err: true, msg: err});
    }
});



server.listen(PORT, () => {
    console.log("Server is listening at port", PORT);
});