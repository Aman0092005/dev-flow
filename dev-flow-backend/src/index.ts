import http from "node:http";
import express from "express";
import type {Request, Response, NextFunction} from "express";
import cors from "cors";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import type {JwtPayload} from "jsonwebtoken";

import {PrismaClient} from "@prisma/client";

import {signin, login} from "./utils/auth.js";



const app = express();

const server = http.createServer(app);

const PORT = 3000;

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));



interface AuthRequest extends Request{
    email?: string
}


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
        const secretKey = process.env.JWT_SECRET || "secret-key";
        const token = jwt.sign({email: email}, secretKey, {expiresIn: "10m"});
        return res.status(data.status).json({err: data.err, msg: data.msg, token: token});
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
        {
            const secretKey = process.env.JWT_SECRET || "secret-key";
            const token = jwt.sign({email: email}, secretKey, {expiresIn: "10m"});
            return res.status(data.status).json({err:data.err, msg: data.msg, token: token});
        }
        return res.status(400).json({err:true, msg: "Password is incorrect"});
    } catch(err){
        return res.status(400).json({err: true, msg: err});
    }
});


app.get("/data", jwtMiddleware, (req: AuthRequest, res: Response) => {
    console.log(req.email);
    res.json({ok: "lol"});
});


server.listen(PORT, '0.0.0.0' ,() => {
    console.log("Server is listening at port", PORT);
});







interface MyjwtPayload extends JwtPayload{
    email: string
}



// JWT Middleware
function jwtMiddleware(req: AuthRequest, res: Response, next: NextFunction) : void
{
    const header: string | undefined = req.headers.authorization;

    if(!header)
    {
        res.status(401).json({err: true, msg: "Header is not present in request"});
        return;
    }

    const token = header.split(" ")[1];
    if(!token)
    {
        res.status(401).json({err: true, msg: "Token not present in request"});
        return;
    }
        
    try{
        const secretKey = process.env.JWT_SECRET || "secret-key"
        const decoded = jwt.verify(token, secretKey) as MyjwtPayload;
        req.email = decoded.email
        console.log(req.email);
        next();
    } catch(err){
        res.status(401).json({err: true, msg: "Invalid token"})
        return;
    }

}