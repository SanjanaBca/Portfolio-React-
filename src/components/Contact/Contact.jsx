import React from 'react'
import contact from "../../assets/contact.png"
import "./Contact.css"
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Contact() {
    useGSAP(()=>{
        gsap.from(".leftcontact img ",{
            x:-100,
            duration:1,
            opacity:0, 
            stagger:1,
            scrollTrigger:{
              trigger:".leftcontact img ",
              scroll:"body",
              scrub:2,
             
              start:"top 60%",
              end:"top 30%"
            }})
            gsap.from(".form  ",{
                x:100,
                duration:1,
                opacity:0, 
                stagger:1,
                scrollTrigger:{
                  trigger:"form ",
                  scroll:"body",
                  scrub:2,
                  
                  start:"top 60%",
                  end:"top 30%"
                }})
    })
  return (
//    <div className="contact">
<div id="contact"> 
    <div className="leftcontact">
        <img src={contact} alt="" /> </div>
    <div className="right1contact">
        <form action="https://formspree.io/f/xoveqzed" method='post'>
            <input name='Username' type="text" placeholder='Name' />
            <input name='Email' type="email" placeholder='Email'/>
            <textarea name="message" id="textarea" placeholder='message me '></textarea>
            <input type="submit" id="btn" value="Submit" />
        </form>
    </div>
   </div>
  )
}

export default Contact
