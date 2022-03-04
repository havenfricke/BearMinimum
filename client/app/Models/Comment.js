
export class Comment{
    constructor(data){
        this.id = data.id
        this.postId = data.postId
        this.description = data.description
        this.upVotes = data.upVotes
        this.downVotes = data.downVotes

    }
    get Template(){
        return `
        <div>  ${this.description} </div>
        `
    }
}