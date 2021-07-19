import React, { Component, useEffect, useState } from "react";








export default function CommentYaz({SubmitComment, profil, postId}){
const [Value, setValue] = useState('')

useEffect(()=>{
        
})
function handleChange(event) {
    setValue(event.target.value);
  }

  function CommSubmit(event) {
    event.preventDefault();


    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    const cdata = {
        "post": postId,
        "comment": Value[0].toUpperCase()+Value.slice(1)
    };
    
    fetch('http://127.0.0.1:8000/api/comment/', {
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
    }).then((resp)=>{
        console.log(resp)
        SubmitComment()
        setValue('')
    })
  }

    return (
        <div className="kommentYaz">
            <div className="profDiv"><img className="profImg" src={profil.picture}/></div>
           
            <form className="CommentForm" onSubmit={CommSubmit}>

          <input  className="writeComment" type="text" value={Value} onChange={handleChange} />

      </form>
        </div>
      );
}

