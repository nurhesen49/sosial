import React, { Component, useState } from "react";
import Search from "../Search";


export default function NavBar(props){




    return(
            <div className="navbar">
                <div className="brandname"></div>
                <div className="searchbar"><Search /></div>
                <div className="profilestuff"></div>
                </div>
      );
}

