import React, { Component, useEffect, useState, useRef } from "react";
import NavBar from "./authpage/NavBar";
import ButunKommentler from "./ButunKommentler";
import ButunLikeler from "./ButunLikeler";
import { icons } from "./Icons";
import { SideBar } from "./SideBar";
import { PostFunc } from "./PostFunc";
import { FriendReqBar } from "./FriendReqBar";
import { PostShareDiv } from "./PostShareDiv";

export default function AuthHome(props){
const [ frp, set_frp ] = useState(null)

useEffect(()=>{
  set_frp(props)


})






    return (
        <div className="root">
            <NavBar/>
            <div className="homeContainer">
            <SideBar props={props}/>
                <div className="middleBar">
                    

{(()=>{
if(frp){

  return (
  <>
  <div><PostShareDiv/></div>
  {frp.fr_posts.map((post)=>{
                    return(
                    <div key={post.id}>
                      <PostFunc post={post}>
                        <ButunLikeler Like_Count={post.like_count} Liked={post.liked} post_id={post.id} w_glass_r={icons.w_glass_r} w_glass_b={icons.w_glass_b} r_like_icon={icons.heart_r} b_like_icon={icons.heart_b} curr_user={props.profile.id}/>
                        <ButunKommentler profile={props.profile} post={post}/>
                      </PostFunc>
                    </div>
                       
)
})
                
}
    
    </>


  )
}else{

  return <div>Yüklənir...</div>
}


})()}

                   
                </div>
                <div className="rightBar"><FriendReqBar/></div>
            </div>
        </div>
      );
}

