import { dbContext } from "../db/DbContext"

class PostsService {

    async getAllPosts(query = {}){
        const posts = await dbContext.Posts.find(query)
        return posts
    }



}

export const postsService = new PostsService()