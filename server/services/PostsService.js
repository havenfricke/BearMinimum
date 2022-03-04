import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"

class PostsService {

    async getAllPosts(query = {}){
        const posts = await dbContext.Posts.find(query).populate('creator', 'name')
        return posts
    }
    async getPostById(id){
        const onePost = await dbContext.Posts.findById(id).populate('creator', 'name')
        return onePost
    }
    async create(body){
        const post = await dbContext.Posts.create(body)
        await post.populate('creator', 'name')
        return post
    }

    async update(body){
        const originalPost = await dbContext.Posts.findById(body.id)
        originalPost.description = body.description ? body.description : originalPost.description
        originalPost.title = body.title ? body.title : originalPost.title
        originalPost.imgUrl = body.imgUrl ? body.imgUrl : originalPost.imgUrl
        await originalPost.save()
        await originalPost.populate('creator', 'name')
        return originalPost

    }

    async remove(postId, userId){
        const postToDelete = await dbContext.Posts.findById(postId)
        if(postToDelete.creatorId.toString() !== userId){
            throw new Forbidden("this is not your post")
        }
        await dbContext.Posts.findByIdAndDelete(postId)
        return "Delorted"
    }



}

export const postsService = new PostsService()