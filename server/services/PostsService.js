import { dbContext } from "../db/DbContext"

class PostsService {

    async getAllPosts(query = {}){
        const posts = await dbContext.Posts.find(query)
        return posts
    }
    async create(body){
        const post = await dbContext.Posts.create(body)
        return post
    }



}

export const postsService = new PostsService()