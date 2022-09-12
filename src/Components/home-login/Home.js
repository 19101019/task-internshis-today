import React from 'react'
import Card from './Card'
import Navbar from './Navbar'
import profile from './assests/freelancers/albert.png'
import v1 from './assests/1.png'
import v2 from './assests/2.png'
import g from './assests/6.png'
import im from './assests/3.png'
import imgs from './assests/4.png'
import image from './assests/5.png'
import Footer from './Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <div className='d-none d-md-flex  justify-content-around p-2' style={{background:'#c7f3ea',fontWeight:'bold'}}>
            <span>Programming & Tech</span>
            <span>Design & Art</span>
            <span>Writing & Translation</span>
            <span>SEO & Digital Marketing</span>
            <span>Music & Audio</span>
            <span>Video & Animation</span>
        </div>
        {/* 1 container */}
        <div className='container-fluid py-2' style={{background:'#07a189'}}>
            <div className='row justify-content-between p-4'>
                <div className='col' style={{paddingTop:50, color:'white', fontSize:24}}>
                    <p>Velit officia consequent</p>
                    <span>
                        Sadipscing amet est gubergren duo takimata et lorem accusam, ut accusam consetetur ipsum dolor elitr ipsum dolores amet, vero ipsum.
                    </span>
                </div>
                <div className='col d-flex justify-content-between'>
                    <div className='col'>
                        <Card img={v2} profile={profile} name="Viral" rating={4.8} price="299" color='white'/>
                    </div>
                    <div className='col'>
                        <Card img={g} profile={profile} name="Yah" rating={3.5} price="3999" color='white'/>
                    </div>
                    <div className=' col d-none d-lg-flex justify-content-between '>
                        <Card img={v1} profile={profile} name="Shubham" rating={5.0} price="5999" color='white'/>
                    </div>
                </div>
            </div>
            <div className='col d-flex justify-content-between'>
                <Card img={im} profile={profile} name="Sagar" rating={1.8} price="99" color='white'/>
                <Card img={imgs} profile={profile} name="Nikhil" rating={3.6} price="9999" color='white'/>
                <div className='d-none d-lg-flex justify-content-between'>
                    <Card img={v1} profile={profile} name="Anuj" rating={2.3} price="5999" color='white'/>
                </div>
                <div className='d-none d-lg-flex justify-content-between'>
                    <Card img={v2} profile={profile} name="Miit" rating={2.0} price="6999" color='white'/>
                </div>
                <div className='d-none d-lg-flex justify-content-between'>
                    <Card img={image} profile={profile} name="Suraj" rating={1.2} price="6999" color='white'/>
                </div>
            </div>
            <div className='d-flex text-justify justify-content-end p-3' >
                <button style={{color:'white',background:'#07a189' ,border:'none'}}>See More<i className='fa fa-arrow-right' style={{color:'white'}}/></button>
            </div>
        </div>
        {/* 2nd container */}
        <div className='p-5' style={{background:'#e7fefb'}}>
            <div className='col'>
                <div>
                    <p style={{color:'#07a189', fontSize:24}}>Velit officia consequent</p>
                    <span style={{color:'black', fontSize:24}}>
                        Sadipscing amet est gubergren duo takimata et lorem accusam.
                    </span>
                </div>
                <div className='d-flex text-justify justify-content-end ' >
                    <button style={{color:'black',background:'#e7fefb' ,border:'none'}}>See More<i className='fa fa-arrow-right' style={{color:'black'}}/></button>
                </div>
            </div>
            <div className='col d-flex justify-content-between'>
                <Card className="col" img={v1} profile={profile} name="Viral" rating={4.8} price="2699" color='yellow' bg='#e7fefb' border='#07a189'/>
                <Card className="col" img={v2} profile={profile} name="Yash" rating={2.5} price="8699" color='yellow' bg='#e7fefb' border='#07a189'/>
                <div className='d-none d-lg-flex'>
                    <Card className="col" img={g} profile={profile} name="Anuj" rating={3.7} price="2899" color='yellow' bg='#e7fefb' border='#07a189'/>
                </div>
                <div className='d-none d-lg-flex'>
                    <Card className="col" img={imgs} profile={profile} name="Shubham" rating={1.5} price="25699" color='yellow' bg='#e7fefb' border='#07a189'/>
                </div>
                <div className='d-none d-lg-flex'>
                    <Card className="col" img={im} profile={profile} name="Nikhil" rating={4.7} price="9999" color='yellow' bg='#e7fefb' border='#07a189'/>
                </div>
            </div>
        </div>
        {/* 3rd container */}
        <div className= ' row d-flex justify-content-around m-3'>
            <div className='col' style={{height:300}}>
                <img style={{maxHeight:'100%'}} src={g} alt=''/>
            </div>
            <div className=' col p-5'>
                <p style={{color:'#07a189',fontWeight:'bold', fontSize:24}}>Velit officia consequent</p>
                <span style={{color:'#000',fontWeight:'bold', fontSize:24}}>Sadipscing amet est gubergren duo<br/> takimata et lorem accusam.</span>
                <div className='d-flex align-middle justify-content-between py-5'>
                    <p style={{color:'#07a189',fontWeight:'bold', fontSize:20}}>Start Your Journet as</p>
                    <button style={{background:'white',borderRadius:8, padding:10, justifyContent:'space-between'}}>Freelancer<i className='fa fa-arrow-right'/></button>
                </div>
            </div>
        </div>
        {/* 4th container */}
        <div className='p-5' style={{background:'#07a189'}}>
            <div className='col'>
                <div className='text-center'>
                    <p style={{fontSize:24}}>Velit officia consequent</p>
                    <span style={{color:'white', fontSize:24}}>
                        Sadipscing amet est gubergren duo takimata et lorem accusam.
                    </span>
                </div>
                <div className='d-flex text-justify justify-content-end ' >
                    <button style={{color:'white',background:'#07a189' ,border:'none'}}>See More<i className='fa fa-arrow-right' style={{color:'white'}}/></button>
                </div>
            </div>
            <div className='col d-flex justify-content-between'>
                <Card className="col" img={v1} profile={profile} name="Anuj" rating={1.8} price="4299" color='yellow' bg='white' border='#07a189'/>
                <Card className="col" img={v1} profile={profile} name="Yash" rating={2.5} price="5549" color='yellow' bg='white' border='#07a189'/>
                <div className='d-none d-lg-flex'>
                    <Card className="col" img={im} profile={profile} name="Shubham" rating={4.7} price="5268" color='yellow' bg='white' border='#07a189'/>
                </div>
                <div className='d-none d-lg-flex'>
                    <Card className="col" img={image} profile={profile} name="Viral" rating={3.5} price="97545" color='yellow' bg='white' border='#07a189'/>
                </div>
                <div className='d-none d-lg-flex'>
                    <Card className="col" img={g} profile={profile} name="Suraj" rating={2.7} price="9271" color='yellow' bg='white' border='#07a189'/>
                </div>
            </div>
        </div>
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Home