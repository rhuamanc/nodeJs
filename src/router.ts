import { Router } from "express";
import User from "./models/User";
import { createAccount } from "./handlers";

const router = Router();

router.get('/',(request,response)=>{
    response.send('Hola mundo');
});

router.post('/auth/register',createAccount);

export default router;