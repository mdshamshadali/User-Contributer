import { User } from "../model/user.module.js";

export const userRegister = async (req, res)=>{
    const {name, email, phone} = req.body;

    console.log(name);

    const user = User.create({
        name,
        email,
        phone
    })

    res.send(user);
    
}