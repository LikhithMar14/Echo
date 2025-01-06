import db from "@/db"


export const getUserById = async(id:string)=>{
    try{

        const user = await db.user.findFirst({
            where:{id}
        })

        return user

    }catch(err){
        console.log(err);
        return null;
    }
}