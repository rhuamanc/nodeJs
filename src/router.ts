import { Router } from "express";
import User from "./models/User";

const router = Router();

router.get('/',(request,response)=>{
    response.send('Hola mundo');
});

router.post('/auth/register',async (request,response)=>{
    console.log(request.body);
    response.send('Register'); 
    await User.create(request.body);
});

export default router;