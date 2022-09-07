import React from 'react'
import styled from 'styled-components'
import {FiFacebook} from 'react-icons/fi'
import {GrLinkedin} from 'react-icons/gr'
import {AiOutlineMail} from 'react-icons/ai'
import {SiSlackware} from 'react-icons/si'

function Page1() {
  return (
    <>
        <Con>
          {/* <ConMe> */}
            <Wrap>
              <Box1>
                <Hold>
                  <Hello>Hello !</Hello>
                  <I>I Am Lucia Dera</I>
                  <Web>I'm a web developer with extensive ability to deliver, i can create website design, mobile design and many more.</Web>
                  <IconHold>
                  <Icon1><a href='https://web.facebook.com/?_rdc=1&_rdr'><FiFacebook/></a></Icon1>
                  <Icon1><a href='https://www.linkedin.com/feed/'><GrLinkedin/></a></Icon1>
                  <Icon1><a href='https://mail.google.com/mail/u/0/#inbox'><AiOutlineMail/></a></Icon1>
                  <Icon1><a href='https://app.slack.com/client/T03KGC2CF5L/setup-calendar-contact-import?source=browser'><SiSlackware/></a></Icon1>
                  </IconHold>
                  </Hold>
              </Box1>
              <Box2>
                <img src='./acopy.png' alt=''/>
              </Box2>
            </Wrap>
            {/* </ConMe> */}
        </Con>
    </>
  )
}

export default Page1
// const ConMe = styled.div`
// background:url('./lucy.jpg') repeat fixed 100%;
// background-position:center;
// background-repeat:no-repeat;
// background-size: cover;
// /* height: 90vh; */
// display: none;
// justify-content: center;
// align-items: center;
// width: 100%;
// @media screen and (max-width: 768px){
//   display: flex;
 
// }

// `
const IconHold = styled.div`
display: flex;
margin-top: 30px;


`

const Hold = styled.div`
margin-top: 80px;
padding-bottom: 20px;
/* background-color: red; */
@media screen and (max-width: 786px){
 width: 100%;
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


`
const I = styled.div`
font-size: 50px;
color: white;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
margin-top: 20px;

@media screen and (max-width: 320px){
text-align: center;
}

`
const Web = styled.div`
font-size: 17px;
color: white;
margin-top: 30px;
width: 70%;
opacity: 0.56;
font-family: poppins;
@media screen and (max-width: 786px){
text-align: center;


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

`

const Wrap = styled.div`
width: 80%;
/* background-color: pink; */
/* height: 500px; */
display: flex;
padding-top: 40px;
align-items: center;
flex-direction: row-reverse;


`
const Box1 = styled.div`
height: 450px;
width:50%;
/* background-color: blue; */

@media screen and (max-width: 786px){
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
}
`

const Box2 = styled.div`
height: 650px;
width:50%;
/* background-color: hotpink; */
img{
  height: 100%;
  width: 100%;
  object-fit: contain;
}
@media screen and (max-width: 786px){
  display: none;
}
`