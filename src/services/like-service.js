import {LikeRespository, TweetRepository} from '../repository/index.js'
class LikeService {
    constructor(){
        this.likeRespository = new LikeRespository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId,modelType,userId){
        if(modelType == 'Tweet'){
            var likeable = await this.tweetRepository.find(modelId);

        }
        else if(modelType == 'Comment'){
            //todo
            
        }
        else{
            throw new Error('Unknown model type');
        }
        const exists = await this.likeRespository.findByUserAndLikeable({
            user:userId,
            onModel:modelType,
            likeable:modelId
        });
        if(exists){
            likeable.likes.pull(exists.is);
            await likeable.save();
            await likeable.modelId;
            var isAdded = false;
        }
    
    else{
        const newLike = await this.likeRespository.create({
            user:userId,
            onModel:modelType,
            likeable:modelId
        });
        likeable.likes.push(newLike);
        await likeable.save();

        var isAdded = true;
    }
    return isAdded;
    }
}

export default LikeService;