import { connectDB } from '../../src/lib/db'
import User from '../../src/models/User'

export async function list(start = 0, limit = 0){

    try{

        await connectDB()
        
        const users = await User.find({})
        const result = users.map(user => ({
            ...user.toObject(),
            _id: user._id.toString()
        }))
    
        return result

    }catch(err){
        console.error(err)
    }
    

}