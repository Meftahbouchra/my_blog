import React from 'react'
import TripData from './tri'
import Trip1 from '../../Assets/home-bg.jpg'
import Trip2 from '../../Assets/lumineux-du-soleil.jpg'
import Trip3 from '../../Assets/portfolio-img4.jpg'
import './style.css'


const Index = () => {
  return (
    <section className='trip'>
       <h1>Recent Trips</h1>
       <p>you can discover uniquemdlgkhefkjbgzejh</p> 
       <div className='tripcard'>
       <TripData
       image={Trip1}
       heading="juitcùuiv"
       text="pqidfnbez  oipfub pazeoirbvgegfffffbhdjlaeziruuuuuuuuuuuuuuamvznp"
       />
            <TripData
       image={Trip2}
       heading="poizcb  pocbrz"
       text="pqidfnbez  oipfub pazeoirbvgegfffffbgfjsfvgfhbdsncbsnnslkdjzjdpozeufoezuyuifgejfbleakurherzugfhdjlaeziruuuuuuuuuuuuuuamvznp"
       />
            <TripData
       image={Trip3}
       heading="pnpozadxs"
       text="pqidfnbez  oipfukdjgfejhrgaouazbcjhvctyezuzeiufhmqlksjdhfeiuzufgrgb pazeoirbvgegfffffbhdjlaeziruuuuuuuuuuuuuuamvznp"
       />
       </div>
    


    </section>
  )
}

export default Index