import { Router } from "express";

const router = Router();

router.get('/',(request,response)=>{
    response.send('Hola mundo');
});

router.post('/auth/register',(request,response)=>{
    console.log(request.body);
    response.send('Register');
});

export default router;