import React, { Component, useEffect, useState, useRef } from "react";



function PostFunc({post, key, children}){

return(
    <div key={key}>
    <div className="postProf">
    <div className="postProfPic"><img className="profImg" src={post.userprof.picture} /></div>
    <div className="postProfName">{post.userprof.name} {post.userprof.last_name}</div>
    </div>
    <div className="postBody">{post.body}</div>
    {(()=>{

if(post.image){
    return <div className="postDivImage"><img className="postImgImage" width="400px" src={post.image} /></div>
}
})()}

{children}
</div>

    )
}

export {
    PostFunc
};