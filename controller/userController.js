
import user from '../model/usermodel.js'
export const create =async(req,res)=>{
    try{
        let userdata= new user(req.body);
        const {email} =userdata;

        const userExists = await user.findOne({email});

        if(userExists){
            return res.status(400).json({message:"User already exists"});
        }
        const saveduser=await userdata.save();
        res.status(200).json({saveduser})

    }
    catch(err){
        res.status(400).json({err:"internal server error"});
    }
};

export const fetch = async(req, res)=>{
    try{
        const users = await user.find();
        if(users.length===0)
        {
            return res.status(404).json({message:"No user found"})
        }
        res.status(200).json({users});
    }

    catch(err){
        res.status(500).json({error:"internal server error"})
    }

};

export const update = async(req, res)=>{
    try{
        const id = req.params.id;
        const userExist = await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        const UpdateUser = await user.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({UpdateUser});
    }
    catch(err)
    {
        res.status(500).json({error:"internal server error"});
    }
};
export const Delete = async(req, res) => {
    try{
        const id = req.params.id;
        const userExist = await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        await user.findByIdAndDelete(id);
        res.status(200).json({message:"User deleted successfully"});
    }
    catch(err)
    {
        res.status(500).json({error:"internal server error"});
    }
}

export const find=async(req,res)=>
    {
        try{
            const id=req.params.id;
            const founduser =await user.findById(id);
            if(!founduser){
                return res.status(404).json({message:"User not found"});
            }
            
            res.status(200).json({message:"User displayed sucessfully"});
        }
        catch(err){
            res.status(500).json({error:"internal server error"});
        }
    }

    