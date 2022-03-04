import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"

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
    async edit(body){
        const originalComment = await dbContext.Comments.findById(body.id)
        originalComment.description = body.description ? body.description : originalComment.description
        await originalComment.save()
        await originalComment.populate('creator', 'name')
        return originalComment
    }
    async remove(id){
        const commentToDelete = await dbContext.Comments.findById(id)
        if(commentToDelete.id.toString() !== id) {
            throw new Forbidden("This isn't your comment")
        }
        await dbContext.Comments.findByIdAndDelete(commentToDelete.id)
        return "deleted"
    }

}



export const commentsService = new CommentsService()