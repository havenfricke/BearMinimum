export class Post{
    constructor(data){
        this.id = data.id
        this.author = data.creator.name
        this.title = data.title
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.upVote = data.upVote
        this.downVote = data.downVote
    }
    get Template(){
        return `
        <div> ${this.author} </div>
        <div> ${this.title} </div>
        <div> ${this.description} </div>
        `
    }
}