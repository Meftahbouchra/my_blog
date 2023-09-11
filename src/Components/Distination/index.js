import React from 'react'

import Img1 from '../../Assets/home-bg.jpg'
import Img2 from '../../Assets/lumineux-du-soleil.jpg'
import Img3 from '../../Assets/portfolio-img4.jpg'

import Dist from'./dist'
import './style.css'
const Index = () => {
  return (
    <section className='distination'>
       <h1>Popular Distinations</h1>
       <p>Tours give th fgkjfnglkjzehkjle</p> 
<Dist 
 className="first-desc" 
heading="helooooooooooooooooo"
text=" mltrhtlrhgkjrtbgrbgkfheurgvbvaoiecjnhvbgeuureiousnviuzbrcohbvhjjjjjjjjjjjjjjjireoooooooooooooooooooooobvvvvvvvvvvaêtzouyrggcvapizeuneubzgggaaaaaaaaaaaaaaaaaaarkr"
img1={Img1}
img2={Img2}
/>
<Dist    className="first-desc-reverse" 
heading="wwwwwwwwwwwwwwwwwwwooooooooooorrrrrrrrrrrd"
text=" mzoirucnaoibriu  rc  iubezorpi,azdjfkjdsbhjezgfyuetfraeriauzehfuaezhfajdfyueusnviuzbrcohbvhjjjjjjjjjjjjjjjireoooooooooooooooooooooobvvvvvvvvvvaêtzouyrggcvapizeuneubzgggaaaaaaaaaaaaaaaaaaarkr"
img1={Img2}
img2={Img3}
/>


    </section>
  )
}

export default Index