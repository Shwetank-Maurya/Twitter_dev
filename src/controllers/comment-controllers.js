import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req,res) => {
    try {
        // console.log(req.query.modelId);
        // console.log(req.query.modelType);
        // console.log(req.user.id);
        // console.log(req.body.content);
        // console.log("Till hrere");
        const response = await commentService.create(req.query.modelId, req.query.modelType, req.user.id, req.body.content);
        // console.log(response);
        return res.status(201).json({
            success:true,
            message:'Successfully created a new comment',
            data:response,
            err:{}
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Something went wrong ',
            data:{},
            err:error
        });
    }
}

