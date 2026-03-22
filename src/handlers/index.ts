import { Request, Response } from "express";
import slug from "slug";
import User from "../models/User";
import { hashPassword } from "../utils/auth";

export const createAccount = async (request:Request,response:Response)=>{
    console.log(request.body);
    const user = new User(request.body);
    const {email, password, handle} = user;
    
    const userExists = await User.findOne({email});
    if(userExists){
        const {message} = new Error('User already exists');
        return response.status(409).json({message});
    }

    const handleSlug = slug(handle,'');
    const handleExists = await User.findOne({handle: handleSlug});
    if(handleExists){
        const {message} = new Error('Handle already exists');
        return response.status(409).json({message});
    }
    user.handle = handleSlug;

    const passwordHash = await hashPassword(password);
    user.password = passwordHash;

    console.log(slug(user.handle,''));
    await User.create(user);
    response.status(201).send('Register'); 
}