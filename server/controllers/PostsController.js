import { postsService } from "../services/PostsService";
import BaseController from "../utils/BaseController";

export class PostsController extends BaseController{
    constructor(){
        super('api/posts')
        this.router
        .get('', this.getAllPosts)

    }


    async getAllPosts(req, res, next){
        try {
            const posts = await postsService.getAllPosts(req.query)
            res.send(posts)
            
        } catch (error) {
            next(error)
        }
       
    }
} 