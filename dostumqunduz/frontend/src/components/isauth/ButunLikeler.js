import React, { Component, useEffect, useState, useRef } from "react";








export default function ButunLikeler({Like_Count, Liked, post_id, b_like_icon,r_like_icon, curr_user, w_glass_r, w_glass_b}){

    const [LikeCount, setLikeCount] = useState({liked:Liked, count:Like_Count})

useEffect(()=>{
    console.log('AllLikes')

})

function LikePost(){

    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    const cdata = { "post":post_id };
    
    fetch('http://127.0.0.1:8000/api/like/', {
      method: 'POST',
      mode: 'same-origin',
      credentials: 'include',
      headers: {
      'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify(cdata)

    }).then((response) => {
        if(response.status===201){
            
            setLikeCount({liked:true, count:LikeCount.count+1})
        }
    })
}





function UnLikePost(){

    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
 
    
    fetch(`http://127.0.0.1:8000/api/unlike/${post_id}/`, {
      method: 'DELETE',
      mode: 'same-origin',
      credentials: 'include',
      headers: {
      'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },

    }).then((response) => {

        if(response.status===204){
            setLikeCount({liked:false, count:LikeCount.count-1})


        }
    })
}

    return (
        <div>
            <div className="like_siyahi">

    </div>
        <div>
            {(()=>{
                if(LikeCount.liked){
                    return <div className="liker"><div onClick={UnLikePost} className="likeicon">{w_glass_r}</div><div className="likecount">{LikeCount.count}</div></div>
                }else{
                    return <div className="liker"><div onClick={LikePost} className="likeicon">{w_glass_b}</div><div className="likecount">{LikeCount.count}</div></div>}
            })()}
        </div>
        </div>
      );
}

