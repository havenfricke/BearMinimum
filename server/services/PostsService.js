import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"

class PostsService {

    async getAllPosts(query = {}){
        const posts = await dbContext.Posts.find(query).populate('creator', 'name')
        return posts
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
        const post = await dbContext.Posts.findById(postId)
        if(post.creatorId.toString() !== userId){
            throw new Forbidden("this is not your post")
        }
    }



}

export const postsService = new PostsService()