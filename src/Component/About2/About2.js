import React from 'react'
import styled from 'styled-components'
import {AiFillGithub} from 'react-icons/ai'
import {GrLinkedin} from 'react-icons/gr'
import {SiSlackware} from 'react-icons/si'
// import About3 from './About3'

const About2 = () => {
  return (
    <>
    <Con >
      {/* <ConMe> */}
        <Wrap>
          <Box1>
            <Hold>
              <Hello>I'm A Fullstack</Hello>
              <I>Web Developer.</I>
              <Line/>
              <Web>I am a discipline and result oriented Software Developer who is open to learning new things, proficient in implementing highly responsive user interface and components; vast in integration of API and Server-Side for achieving Dynamic Websites. I am also endowed with Good Leadership Acumen and Communication Skills which enable me to work effectively with Teams and  contribute my quota to achieving Our set goals.  </Web>
              <IconHold>
              <Icon1><a href='https://web.facebook.com/?_rdc=1&_rdr'><AiFillGithub/></a></Icon1>
              <Icon1><a href='https://www.linkedin.com/feed/'><GrLinkedin/></a></Icon1>
              <Icon1><a href='https://join.slack.com/t/letschat-zbx8502/shared_invite/zt-1khap7vaa-tWrIdsh8ZpbM0727XNdVKA'><SiSlackware/></a></Icon1>
              </IconHold>
              {/* <a href='tel +08121759954'><But>Get Started</But></a> */}
              </Hold>
          </Box1>
          <Box2>
            <img src='./fig.png' alt=''/>
          </Box2>
        </Wrap>
        {/* </ConMe> */}
    </Con>
    {/* <About3/> */}
</>
  )
}

export default About2
const But = styled.div`
 width:130px;
    height:45px;
    border:none;
    color:white;
    font-size:15px;
    font-weight:500;
    font-family: poppins;
    border-radius: 5px;
    border: 2px solid black;
    background-color:  #C71B27;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

const Line = styled.div`
height: 3px;
width: 300px;
background-color:#C71B27;
margin-top: 10px;
`

const IconHold = styled.div`
display: flex;
margin-top: 30px;


`

const Hold = styled.div`
/* margin-top: 80px; */
/* background-color: red; */
a{
    text-decoration: none;
}
@media screen and (max-width: 786px){
 width: 100%;
 padding-bottom: 20px;
 display: flex;
 /* justify-content: center; */
 align-items: center;
 flex-direction: column;
 margin-top: 0px;
 /* background-color: red; */
}
`
const Hello = styled.div`
font-family: poppins;
font-size: 45px;
color: white;
@media screen and (max-width: 786px){
  margin-top: 15px;
  text-align: center;
  font-size: 35px;
}

`
const I = styled.div`
font-family: poppins;
font-size: 45px;
color: white;

@media screen and (max-width: 320px){
text-align: center;
}
@media screen and (max-width: 768px){
    font-size: 35px;
text-align: center;
}

`
const Web = styled.div`
font-size: 14px;
color: grey;
margin-top: 30px;
width: 80%;
font-family: poppins;
@media screen and (max-width: 786px){
text-align: center;
width: 100%;

}
`
const Icon1 = styled.div`
height: 50px;
width: 50px;
border-radius: 100%;
border: 2px solid gray;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
color: white;
margin-left: 10px;
color: white;
a{
  text-decoration: none;
  background-color: inherit;
}
`
const Con = styled.div`
display: flex;
justify-content: center;
width: 100%;
background-color: black;
align-items: center;
padding-top:30px;
@media screen and (max-width: 786px){
padding-top:70px;
/* padding-bottom:20px; */
}
`

const Wrap = styled.div`
width: 80%;
/* background-color: pink; */
/* height: 500px; */
display: flex;
padding-top: 40px;
align-items: center;
flex-direction: row-reverse;

@media screen and (max-width: 786px){
flex-direction: column;
}
`
const Box1 = styled.div`
height: 450px;
width:50%;
/* background-color: blue; */
padding-top: 20px;
@media screen and (max-width: 786px){
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
}
`

const Box2 = styled.div`
/* height: 650px; */
width:50%;
/* background-color: hotpink; */
img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
@media screen and (max-width: 786px){
  /* display: none; */
  width:100%;
  margin-top: 20px;
}
`