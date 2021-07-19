import React, { Component, useEffect, useState, useRef } from "react";
import { icons } from "./Icons";
import { PostShare } from "./Functions";







class PostShareDiv extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        body: '',
        image:''
      };
      this.ShareNow = this.ShareNow.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    ShareNow=()=>{
        return PostShare(this.state.body, null)
    }

    handleChange(event) {
if(event.target['name']==='body'){
    this.setState({body: event.target.value});

}else if(event.target['name']==='image'){
    this.setState({image: event.target.value});

}
   
      console.log(event.target.files)
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.ShareNow().then((x)=>{
          console.log(x)
      })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <textarea className="w400" name="body" value={this.state.body} onChange={this.handleChange} />
            <input className="w400" name="image" type='file' value={this.state.image} onChange={this.handleChange} />
          <input className="w400" type="submit" value="Submit" />
        </form>
      );
    }
  }




export {
    PostShareDiv
};