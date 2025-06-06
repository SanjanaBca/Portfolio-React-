import React from 'react'
import Card from '../Card/Card'
import "./Projects.css"
import amazon from "../../assets/amazon.png"
import portfolio from "../../assets/portfolio.png"
import myntra from "../../assets/myntra.png"
import PasteApp from "../../assets/PasteApp.png"
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Projects() {
 useGSAP(()=>{
  gsap.from("#para",{
    y:100,
    duration:1,
    opacity:0, 
    stagger:1,
    scrollTrigger:{
      trigger:"#para",
      scroll:"body",
      scrub:2,
      
      start:"top 60%",
      end:"top 30%"
    }})
    gsap.from(".slider",{
      y:100,
      duration:1,
      opacity:0, 
      stagger:1,
      scrollTrigger:{
        trigger:".slider",
        scroll:"body",
        scrub:2,
        
        start:"top 60%",
        end:"top 30%"
      }})
 })

  return (
    <div id="projects"> 
      <h1 id="para">EXPERIENCED IN PROJECTS</h1>
      <div className="slider">
<Card title="PASTE APP" image={PasteApp}/>
<Card title="PERSONAL PORTFOLIO WEBSITE" image={portfolio}/>
<Card title="MYNTRA CLONE" image={myntra}/> 
<Card title="AMAZON CLONE" image={amazon}/>
      </div>
    </div>
  )
}

export default Projects
