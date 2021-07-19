import React, { Component, useEffect, useState, useRef, useImperativeHandle } from "react";

const DeleteComment = (c_id)=>{

    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;


   return( fetch(`http://127.0.0.1:8000/api/update_delete_comment/${c_id}/`, {
      method: 'DELETE',
      mode: 'same-origin',
      credentials: 'include',
      headers: {
      'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },

    }))
    }
const CommentFetch = (post_id) => {
    const url = window.location.protocol+'//'+window.location.host;
    return(fetch(url+`/api/get_comment/${post_id}/`, {
      method: 'GET',
    }).then((response) => {
        if(response.status==200){
            const datas = response.json()
          return datas
        }else{
          console.log('error')
        }
        }))
}
const PostShare = (body, image)=>{
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    const formData = new FormData();
    formData.append('body', body);


    
    
    
    return (fetch('http://127.0.0.1:8000/api/post/', {
      method: 'POST',
      mode: 'same-origin',
      credentials: 'include',
      headers: {
      'Content-Type': 'multipart/form-data',
        'X-CSRFToken': csrftoken
      },
      body: formData

    }).then((response) => {
        if(response.status===201){
            console.log(response)

            
            return response.json()

        }
    }))
}

const AcceptRequestFunc = (current)=>{
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  const cdata = {
      "friend": current,
  };
  
  return fetch('http://127.0.0.1:8000/api/accept/', {
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
          console.log(response)

          
          return response.json()

      }
  })
}


const SearchMethod = (...args)=>{


    const url = window.location.protocol+'//'+window.location.host+'/api/search/';
    let name = '';
    if(args.length===1){
        name=args[0]
    }else if(args.length>1){
        name=args[0]+'-'+args[1]
    }


    return(fetch(url+name+'/', {
      method: 'GET',
    }).then((response) => {
        if(response.status==200){
            const datas = response.json()
          return datas
        }else{
          console.log('error')
        }
        }))
}
const GetFriends = () => {
  const url = window.location.protocol+'//'+window.location.host;
  return(fetch(url+`/api/friend_requests/`, {
    method: 'GET',
  }).then((response) => {
      if(response.status==200){
          const datas = response.json()
        return datas
      }else{
        console.log('error')
      }
      }))
}




export {
    DeleteComment,
    CommentFetch,
    PostShare,
    SearchMethod,
    GetFriends,
    AcceptRequestFunc
};