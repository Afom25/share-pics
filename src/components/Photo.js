import React, { Component } from 'react'

function Photo(props){
          
         const post = props.post

         return (   
             <figure className='figure'>
                 <img className='photo' src={post.imageLink} alt={post.description} id='image'/>
                 <h4>{post.description}</h4>
                 <div className='container text-center'>
                     <button className='remove-button' onClick={()=> {
                         props.onRemovePhoto(post)
                     }} id='buttonid'> Remove</button>
                 </div>
             </figure>

         );
                    
            
    

    
}


export default Photo