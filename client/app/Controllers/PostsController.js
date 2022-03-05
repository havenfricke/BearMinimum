import { ProxyState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";

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
        try {
        } catch (error) {

        }
    }

}