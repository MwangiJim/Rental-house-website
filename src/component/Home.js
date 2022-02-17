import React from 'react';
import styled from 'styled-components';
import Sliders from './Slider';
import About from './About';
import NewHomes from './NewHomes';
import Interior from './Interior';
import Design from './Design';

function Home() {
  return (
    <Container>
        <Sliders
          img1 = '/Images/bg10.jpg'
          img2 = '/Images/bg11.jpg'
          img3 = '/Images/bg12.jpg'
          img4 = '/Images/bg13.jpg'
          img5 = '/Images/bg14.jpg'
          img6 = '/Images/bg15.jpg'
         />
        <About />
        <NewHomes />
        <Interior />
        <Design />
      </Container>
  )
}

export default Home;

let Container = styled.div`
overflow:hidden;
`