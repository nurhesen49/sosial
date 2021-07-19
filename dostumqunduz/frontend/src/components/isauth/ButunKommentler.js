import React, { Component, useEffect, useState, useRef, useImperativeHandle } from "react";
import CommentYaz from "./CommentYaz";
import { DeleteComment, CommentFetch, CommentMapper } from "./Functions";







export default class ButunKommentler extends Component{
    
    
    constructor(props) {
        super(props);
        this.state = { Comment_Count: props.post.comment_count, Current_Profile:props.profile, All_Comments:props.post.comment, Post_Id:props.post.id, Show_More:false };
        this.DeleteComment = this.DeleteComment.bind(this)
        this.CommentFetch = this.CommentFetch.bind(this)
        this.SubmitComment = this.SubmitComment.bind(this)
        this.MoreComments = this.MoreComments.bind(this)

    }
DeleteComment=(c_id)=>{
     DeleteComment(c_id).then((response) => {
        if(response.status===204){
            console.log('deleted')
            this.CommentFetch(this.state.Post_Id)
            this.setState({Comment_Count:this.state.Comment_Count-1, Show_More:true})
        }
    })
}

CommentFetch = (post_id)=>{
    return (CommentFetch(post_id).then((comm)=>{
            this.setState({All_Comments:comm})
        })
        )
}

SubmitComment = ()=>{
    this.CommentFetch(this.state.Post_Id)
}
MoreComments= ()=>{
    this.CommentFetch(this.state.Post_Id)
    this.setState({Show_More:true})
}

render(){
    return(
        <div>
            <ul>
            {(()=>{
                if(!this.state.Show_More && this.state.Comment_Count>2){
                    return <div onClick={this.MoreComments}>Əlavə {this.state.Comment_Count-2} komment</div>
                }
            })()}

                {
                    this.state.All_Comments.map((c)=>{
                        return(<div className="singleComment" key={c.id}>
                        <div className="singleCommentleft">
                            <div className="commentProfDiv">
                                <img className="profImg" src={c.c_owner.picture} />
                            </div>
                        <div className="commentProf">
    
    
                            <div className="profNameLN">
                            <div className="divName">{c.c_owner.name} {c.c_owner.last_name}</div>
                            </div>
                            <div>{c.comment}</div>
                        </div>
                        </div>
                        <button onClick={()=>this.DeleteComment(c.id)}>Delete</button>
    
                </div>
                        )
                    })
                }
                <CommentYaz SubmitComment={this.SubmitComment} profil={this.state.Current_Profile} postId={this.state.Post_Id} />
            </ul>
        </div>
    )
    


   

    
    }
}

