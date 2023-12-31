import React , {useState}from 'react'
import './style.css'
import {SiYourtraveldottv } from 'react-icons/si'  
import {AiFillCloseCircle } from 'react-icons/ai'  
import {TbGridDots } from 'react-icons/tb'  



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
    <a href="#" className='navLink'> </a>
    </li> 
    <li className='navItem'>
    <a href="#" className='navLink'>resto</a>
    </li> 
    <li className='navItem'>
    <a href="#" className='navLink'>hostel</a>
    </li> 
    <li className='navItem'>
    <a href="#" className='navLink'>idee</a>
    </li> 
<div className='headerBtns  flex'>
<button className='btn  loginBtn'> 
<a href='#'> Login </a>
</button>

<button className='btn  '> 
<a href='#'> Sing up </a>
</button>

</div>
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