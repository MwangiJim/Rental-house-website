import React from 'react'
import Sliders from './Slider';
import styled from 'styled-components';

function Rentals() {
  return (
      <Rent>
    <Sliders
      img1 = '/Images/bg16.jpg'
      img2 = '/Images/bg25.jpg'
      img3 = '/Images/bg26.jpg'
      img4 = '/Images/bg28.jpg'
      img5 = '/Images/bg19.jpg'
      img6 = '/Images/bg21.jpg'
     />
     </Rent>
  )
}

export default Rentals
 
 let Rent = styled.div`
   overflow:hidden;
 `
