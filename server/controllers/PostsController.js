import { Auth0Provider } from "@bcwdev/auth0provider";
import { postsService } from "../services/PostsService";
import BaseController from "../utils/BaseController";

export class PostsController extends BaseController{
    constructor(){
        super('api/posts')
        this.router
        .get('', this.getAllPosts)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.create)

    }


    async getAllPosts(req, res, next){
        try {
            const posts = await postsService.getAllPosts(req.query)
            res.send(posts)
            
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next){
        try {
            req.body.creatorId = req.userInfo.id
            const post = await postsService.create(req.body)
            res.send(post)
        } catch (error) {
            next(error)
        }
    }
       
    
} 