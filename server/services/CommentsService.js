import { dbContext } from "../db/DbContext"

class CommentsService {

    async getAllComments(query = {}){
        const comments = await dbContext.Comments.find(query).populate('creator', 'name')
        return comments
    }
    async create(body){
        const newComment = await dbContext.Comments.create(body)
        newComment.populate('post', 'name')
        return newComment
    }

}



export const commentsService = new CommentsService()