import User from "../models/user";
import CrudRepository from "./crud-repository";

class UserRespository extends CrudRepository{
    constructor (){
        super(User);
    }
}

export default UserRespository;