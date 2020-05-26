import React, { Component } from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'

function Sharepics(props){

        return (
        <div className='photo'>
            {props.posts.map((post,index) => <Photo key ={index}post = {post} onRemovePhoto={props.onRemovePhoto}/>)}
            
        </div>
        );
    }


export default Sharepics