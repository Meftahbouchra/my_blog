import React , {useState}from 'react'
import './style.css'
import {SiYourtraveldottv } from 'react-icons/si'  
import {AiFillCloseCircle } from 'react-icons/ai'  
import {TbGridDots } from 'react-icons/tb'  
import {GrFacebookOption} from 'react-icons/gr' 
import {FiInstagram} from 'react-icons/fi' 
import {FiMail} from 'react-icons/fi' 
import {BsSearch} from 'react-icons/bs' 
import imgFr from '../../Assets/fr.png'



const Index = () => {

const [active , setActive] = useState('navBar')
const showNav=()=>{ setActive('navBar  activeNavbar') }
const removeNav=()=>{ setActive('navBar ') }

const [transparent,setTransparent]=useState('header')
const addBg =()=>{
  if(window.scrollY >= 10){
    setTransparent('header  activeHeader')
  }
  else{
    setTransparent('header')
  }
}

window.addEventListener('scroll',addBg)

  return (

    <section className='navBarSection'>
               
      <div className={transparent}>
 
        <div className='logoDiv'>
   
          <a href="#" className='logo'>
           
           <h1 className='flex'> <SiYourtraveldottv className='icon'/>
           Dot
           </h1>
          </a>
          
        </div>



        <div className={active}>
  <ul className='navLists  flex'>
   <li className='navItem'>
    <a href="#" className='navLink'>Acceuil</a>
    </li> 
    <li className='navItem'>
    <a href="#" className='navLink'>Destinations</a>
    </li> 
    <li className='navItem'>
    <a href="#" className='navLink'>Conseil aux voyageurs</a>
    </li> 
    <li className='navItem'>
    <a href="#" className='navLink'>Bons plans</a>
    </li> 
     <li className='navItem'>
    <a href="#" className='navLink '>a propos</a>
    </li> 
    <li className='navItem'>
     <img  className="max-h-4 " src={imgFr} alt=''/> 
    
    </li>

    <li className='navItem'>
    <a href="#" className='navLink '>
     < GrFacebookOption />
    </a>
    </li> 
    <li className='navItem'>
    <a href="#" className='navLink '>
     < FiInstagram />
    </a>
    </li> 
    <li className='navItem'>
    <a href="#" className='navLink '>
     < FiMail />
    </a>
    </li> 
    <li className='navItem'>
    <a href="#" className='navLink '>
     < BsSearch />
    </a>
    </li> 
    
  </ul>
  

  <div  onClick={removeNav} className='closeNavbar'>
    <AiFillCloseCircle className='icon'/>

  </div>
</div>

<div  onClick={showNav}  className='toggleNavbar'>
  <TbGridDots className='icon'/>

</div>

      </div> 
    </section>
  )
}

export default Index;