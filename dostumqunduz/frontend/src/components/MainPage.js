import React, { Component } from "react";
import AuthHome from './isauth/AuthHome';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state={'isauthenticated': false,
    'profile':{
      'name':null,
      'last_name':null,
      'picture':'',
      'gender':null
    },
    'fr_posts':[]
  };
    this.loadScreen = this.loadScreen.bind(this);


  }

  componentDidMount = ()=>{
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    console.log(csrftoken)

    const is_authenticated = document.getElementById('is_authenticated').textContent;
    if(is_authenticated=='True'){
      this.setState({'isauthenticated':true})
      this.loadScreen()
      this.loadFriendsPosts()
    }else{
      this.setState({'isauthenticated':false})
    }

  }
  
  loadScreen = ()=>{
const url = window.location.protocol+'//'+window.location.host;
    fetch(url+'/api/get_profile/', {
      method: 'GET',
    }).then((response) => {
      
      console.log(response.status); 
      if(response.status==200){
        return response.json()
      }else{
        console.log('error')
      }
      
      }).then(data=>{ 

this.setState({
  'profile':{
    'name':data.name,
    'last_name':data.last_name,
    'picture':data.picture,
    'gender':data.gender?'male':'female',
    'id':data.user
  }
})
    })

  }
  loadFriendsPosts = ()=>{
    const url = window.location.protocol+'//'+window.location.host;
        fetch(url+'/api/friends_posts/', {
          method: 'GET',
        }).then((response) => {
          
          console.log(response.status); 
          if(response.status==200){
            return response.json()
          }else{
            console.log('error')
          }
          
          }).then(data=>{ 
            this.setState({
              'fr_posts':data})
              console.log(this.state.fr_posts)
        })
    
      }

  render() {
    if(this.state.isauthenticated){
      return (
        <AuthHome fr_posts={this.state.fr_posts} profile={this.state.profile}/>
      );
    }else{
      return <div>Is Not Auth</div>

    }

  }
}