import React, { Component } from 'react';
import './App.css';
import Sharepics from './components/Sharepics';
import 'bootstrap/dist/css/bootstrap.css';




class App extends Component {

  constructor(){
    super()
    this.state = {
      posts : [{
        id: '0',
        description:'beautiful landscape',
        imageLink:'https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940_'
      }, 
      {
        id:'1',
        description:'amazing picture',
        imageLink:'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      
      },
      {
        id:'2',
        description:'nice pics',
        imageLink:'https://images.pexels.com/photos/3445715/pexels-photo-3445715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

      },
      {
        id: '3',
      description:'beautiful pics',
      imageLink:'https://images.pexels.com/photos/1922633/pexels-photo-1922633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }, 
    {
      id:'4',
      description:'beauty pics',
      imageLink:'https://images.pexels.com/photos/1147296/pexels-photo-1147296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    
    },
    {
      id:'5',
      description:'best pics',
      imageLink:'https://images.pexels.com/photos/4047719/pexels-photo-4047719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',}]
      
    }
    this.removePhoto = this.removePhoto.bind(this);
  }
  removePhoto(postedRemoved){
    console.log(postedRemoved.description )
    this.setState((state) => ({
      posts: state.posts.filter(post => post!== postedRemoved)

    }))

  }

  render(){
  return (
    <div className="App">
     <h3> SHARE - PICS</h3>

     <Sharepics posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
    </div>
  );
}
}

export default App;
