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

    async addUpVote(id) {
        window.event.preventDefault()
        await postsService.upVote(id)

    }
}



