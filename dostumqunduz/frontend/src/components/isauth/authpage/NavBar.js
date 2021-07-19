import React, { Component, useState } from "react";
import Search from "../Search";
import { icons } from "../Icons";

export default function NavBar(props){




    return(
            <div className="navbar">
                <div className="brandname">{icons.qunduz_ikon}DostumQunduz</div>
                <div className="searchbar"><Search /></div>
                <div className="profilestuff"></div>
                </div>
      );
}

