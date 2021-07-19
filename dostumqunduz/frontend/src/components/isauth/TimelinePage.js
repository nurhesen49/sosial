import React, { Component, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import NavBar from "./authpage/NavBar";
import { SearchMethod } from "./Functions";
import queryString from 'query-string'
// React Router does not have any opinions about
// how you should parse URL query strings.
//
// If you use simple key=value query strings and
// you do not need to support IE 11, you can use
// the browser's built-in URLSearchParams API.
//
// If your query strings contain array or object
// syntax, you'll probably need to bring your own
// query parsing function.

export default function ProfilePage (){


    return (
        <QueryParams />
    );


}

// A custom hook that builds on useLocation to parse
// the query string for you.
function UseQuery() {
  return useLocation().search

  

}

function QueryParams (){
  let quer = UseQuery()
    let [SResult, SetSResult ] = useState({res:null, Rendered:false})
    let [Rendered, SetRendered ] = useState(false)
    let name = queryString.parse(quer).name
    let last_name = queryString.parse(quer).last_name

useEffect(()=>{
  let NLN = last_name!='undefined' ? [name, last_name] : [name];
  SearchMethod(...NLN).then((x)=>{
console.log(x)
    if(x.length>0){
      SetSResult({res:x, Rendered:true})

    }else{
      SetSResult({res:null, Rendered:true})
    }
  })

}, [name, last_name])








if(SResult.Rendered){
  return (
    <div>
      <NavBar/>
      {SResult.res ? (
        SResult.res.map((res)=>(
            <div className="searchProf" key={res.user}><div className="postProfPic"><img className="profImg" src={res.picture}/></div><div className="searchName"><div>{res.name} {res.last_name}</div>{res.isfriend?(
              <div>Friend</div>
            ):res.sentreq?(<div>Sent Request</div>):res.recreq?(<div>Accept Request</div>):(<></>)}</div></div>
        ))
      ) : (
        <h3>Nəticə tapılmadı</h3>
      )}

    </div>
  )
}else{
  return <NavBar/>
}





}
