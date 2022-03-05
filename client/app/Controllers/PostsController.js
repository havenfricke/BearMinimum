import { ProxyState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";
import { logger } from "../Utils/Logger.js";


function _draw() {
    let template = ''
    ProxyState.posts.forEach(p => template += p.Template)
    document.getElementById('posts').innerHTML = template
}

export class PostsController {
    constructor() {
        this.getPosts()
        ProxyState.on('posts', _draw)
        console.log('loaded the controller');
    }

    async filterByNew() {
        try {
            postsService.filterByNew()
        } catch (error) {
            logger.log(error)
        }
    }

    async filterByOld() {
        try {
            postsService.filterByOld()
        } catch (error) {
            logger.log(error)
        }
    }

    async getPosts() {
        try {
            await postsService.getPosts()
        } catch (error) {
            console.error(error);
        }
    }

    async createPost() {
        window.event.preventDefault()
        const form = window.event.target
        const newPost = {

            /**@ts-ignore */
            title: form.title.value,
            /**@ts-ignore */
            description: form.description.value,
            /**@ts-ignore */
            imgUrl: form.imgUrl.value
        }
        console.log('new post', newPost)
        await postsService.createPost(newPost)
        /**@ts-ignore */
        form.reset()
        try {
        } catch (error) {
            console.error(error);
        }
    }

    async upVotesPost(id) {
        try {
            await postsService.upVotesPost(id)
        } catch (error) {
            logger.log(error)
        }
    }

}

