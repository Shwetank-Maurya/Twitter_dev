import CrudRepository from "./crud-repository.js";
import Comment from "../models/comment.js";

class CommentRepository{
    constructor(){
        super(Comment);
    }

}

export default CommentRepository;