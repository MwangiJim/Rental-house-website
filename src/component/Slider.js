import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade  from 'react-reveal/Fade';

function Sliders(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
  return (
           <Carousel {...settings}>
               <Wrap>
                   <img src={props.img1}/>
                   <Textbox>
                      <Fade bottom>
                       <h1>HOUSE IN SAN JOSE,COSTA RICA</h1>
                       <p>$2,860,000</p>
                       <a href=''>View Home</a>
                      </Fade>
                   </Textbox>
               </Wrap>
               <Wrap>
                   <img src={props.img2}/>
                   <Textbox>
                      <Fade bottom>
                       <h1>HOUSE IN VIKINGS,USA</h1>
                       <p>$4,860,000</p>
                       <a href=''>View Home</a>
                      </Fade>
                   </Textbox>
               </Wrap>
               <Wrap>
                   <img src={props.img3}/>
                   <Textbox>
                      <Fade bottom>
                       <h1>HOUSE IN PARIS,FRANCE</h1>
                       <p>$3,860,000</p>
                       <a href=''>View Home</a>
                      </Fade>
                   </Textbox>
               </Wrap>
               <Wrap>
                   <img src={props.img4}/>
                   <Textbox>
                      <Fade bottom>
                       <h1>HOUSE IN TOKYO,JAPAN</h1>
                       <p>$2,060,000</p>
                       <a href=''>View Home</a>
                      </Fade>
                   </Textbox>
               </Wrap>
               <Wrap>
                   <img src= {props.img5}/>
                   <Textbox>
                      <Fade bottom>
                       <h1>HOUSE IN MEXICO CITY</h1>
                       <p>$6,860,000</p>
                       <a href=''>View Home</a>
                      </Fade>
                   </Textbox>
               </Wrap>
               <Wrap>
                   <img src={props.img6}/>
                   <Textbox>
                      <Fade bottom>
                       <h1>HOUSE IN BELARUS</h1>
                       <p>$2,360,000</p>
                       <a href=''>View Home</a>
                      </Fade>
                   </Textbox>
               </Wrap>
           </Carousel>
  )
}

export default Sliders;

let Carousel = styled(Slider)`
// ul li button{
//     ::before{
//         font-size:10px;
//         color:rgb(150,158,171)
//     }
// }
// li.slick-active button::before{
//     color:white
// }
// button{
//     z-index:1;
// }
`
let Wrap = styled.div`
 img{
     width:100%;
     height:100vh;
     object-fit:cover;
 }
`

let Textbox = styled.div`
  bottom:300px;
  left:100px;
  text-align:left;
  position:relative;
  z-index:5;
  h1{
      color:#fff;
      font-size:50px;
      font-weight:300;
  }
  p{
      margin:15px 0;
      color:#fff;
  }
  a{
      text-decoration:none;
      background-color:#000;
      color:#fff;
      font-size:17px;
      border:none;
      border-radius:5px;
      margin-top:10px;
      padding:12px 36px;
  }
   @media(max-width:400px){
      h1{
          font-size:25px;
      }
  }
`