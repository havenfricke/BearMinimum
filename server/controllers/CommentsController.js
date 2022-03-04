import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService";
import BaseController from "../utils/BaseController";

export class CommentsController extends BaseController{
    constructor(){
        super('api/comments')
        this.router
        .get('', this.getAllComments)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.create)
    }


    async getAllComments(req, res, next){
        try {
            const comments = await commentsService.getAllComments(req.query)
            res.send(comments)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            req.body.creatorId = req.userInfo.id 
            const newComment = await commentsService.create(req.body)
            res.send(newComment)
        } catch (error) {
            next(error)
        }
    }


}