
export class Comment{
    constructor(data){
        this.id = data.id
        this.user = data.creator.name
        this.postId = data.postId
        this.description = data.description
        this.upVotes = data.upVotes
        this.downVotes = data.downVotes

    }
    get Template(){
        return `
        <div class="bg-secondary lighten-30 mt-4 p-2 rounded">
          <p><b>${this.user}</b></p>
          <p>${this.description}</p>
          <div class="text-end">
          </div>
          </div>
        
        `
    }
}