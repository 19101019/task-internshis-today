import React from 'react'
import ReactStar from 'react-stars'
import './Card.css'

function Card(props) {
    
    var options ={
        edit: false,
        color: "rgba(20 , 20, 20, 01)",
        activeColor : "yellow",
        size: window.innerWidth < 600 ? 20 : 25,
        value: props.rating,
        isHalf: true
    }

  return (
      <div className='card1' style={{borderColor:props, background:props.bg }}>
        <div className='card-img'>
            <i className='fa-regular fa-heart' style={{fontSize:24,color:(props.color)}}/>
            <img src={props.img} alt=''/>
        </div>
        <div className='card-profile'>
            <div className='card-profile-img'>
                <img src={props.profile} alt=''/>
            </div>
            <div className='card-profile-name'>
                <span>{props.name}</span>
                <a href='/home'>view profile</a>
            </div>
        </div>
        <div className='card-rating'>
            <span>{props.rating}</span>
            <ReactStar {...options} />
        </div>
        <div className='card-desc'>
            <span>Duo amet amet invidunt et invidunt vero. Sit.</span>
        </div>
        {/* <hr/> */}
        <div className='card-price'>
            <div className='price'>
                <span style={{fontWeight:'bold'}}>₹ {props.price}<br/></span>
                <span>Starting Price</span>
            </div>
            <button className='card-button'>Select</button>
        </div>
      </div>
  )
}

export default Card