import React from 'react'
import Section_1 from "../components/Section_1.jsx";
import Section_2 from "../components/Section_2.jsx";
import Section_3 from "../components/Section_3.jsx";
import Section_4 from "../components/Section_4.jsx";
import Section_5 from "../components/Section_5.jsx";

function Home() {
  return (
    <div>THIS IS THE HOME PAGE FOR DOING ALL THE WORK
      <div className='flex justify-center'>
        <Section_1/>
      </div>
      <div className='flex justify-center'>
        <Section_2/>
      </div>
      <div className='flex justify-center'>
        <Section_3/>
      </div>
      <div className='flex justify-center'>
        <Section_4/>
      </div>
      <div className='flex justify-center'>
        <Section_5/>
      </div>


    </div>
  )
}

export default Home