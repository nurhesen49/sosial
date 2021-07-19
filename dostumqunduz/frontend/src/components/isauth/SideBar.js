import React, { Component, useEffect, useState, useRef } from "react";
import { icons } from "./Icons";



function SideBar({props}){

return(
<div className="leftBar">
<div className='containerLeft'>
<div className='left'>
    <div className='picframe'><img className='picture' src={props.profile.picture} /></div>
    <div>Name: {props.profile.name}</div>
    <div>Last Name: {props.profile.last_name}</div>
    <div>{props.profile.gender}</div>
<div className="menuWrapper">

<ul className="menuList">
<li className="listItem">{icons.events}<span className="listItemText">Həyat yolu</span></li>
<li className="listItem">{icons.videos}<span className="listItemText">Videolar</span></li>
<li className="listItem">{icons.chat}<span className="listItemText">Çat</span></li>

</ul>
</div>
</div>
<div>
</div>
</div>
</div>)
}

export {
    SideBar
};