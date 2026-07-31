import {UserRespository} from '../repository/index.js';

class UserService{
    constructor(){
        this.UserRepository = new UserRespository();
    }

    async signup(data){
        try {
            const user = await this.UserRepository.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    }
    async getUserByEmail(email){
        try {
            const user = await this.UserRepository.findBy({email});
            return user;
        } catch (error) {
            throw error;
        }
    }

    async signin(data){
        try {
            console.log(data);
            console.log(data.email);
            const user = await this.getUserByEmail(data.email);
            if(!user){
                throw {
                    message:'no user found',
                };
            }
        
            if(!user.comparePassword(data.password)){
                throw{
                    message:'incorrect password',
                };
            }
            const token= user.genJWT();
            return token;
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;