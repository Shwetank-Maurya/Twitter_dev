import User from '../models/user.js';
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
}

export default UserService;