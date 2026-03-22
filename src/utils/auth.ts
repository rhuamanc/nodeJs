import bcrypt from 'bcrypt';

export const hashPassword = async (password:string)=>{
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hash(password, salt);
}