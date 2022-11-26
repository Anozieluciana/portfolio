import React,{useState} from 'react'
import styled from 'styled-components'
import {FiFacebook} from 'react-icons/fi'
import {GrLinkedin} from 'react-icons/gr'
import {AiOutlineMail} from 'react-icons/ai'
import {SiSlackware} from 'react-icons/si'
import {FcDownload} from "react-icons/fc"
import LUCIACV from "../LetComp/Images/cv.pdf"

function Page1() {


  return (
    <>
        <Con >
          {/* <ConMe> */}
            <Wrap>
            <Box2>
                <img src='./acopy.png' alt=''/>
                {/* <Foto src='./fig.png'/> */}
              </Box2>
              <Box1>
                <Hold> 
                  <I>I Am Luciana Dera <br/><span> fullstack Developer</span></I>
                  <Web>I am a discipline and result oriented person. I’m open to learn new things and also be impactful. Proficient in implementing highly responsive user interface components by deploying REACT concept, integration of API and Server side for dynamic websites, ability to implement readeable and re-useable codes. Great leadership mindset that enables me work with team. </Web>
                  <IconHold>
                  <Icon1><a href='https://web.facebook.com/?_rdc=1&_rdr'><FiFacebook/></a></Icon1>
                  <Icon1><a href='https://www.linkedin.com/feed/'><GrLinkedin/></a></Icon1>
                  <Icon1><a href='https://mail.google.com/mail/u/0/#inbox'><AiOutlineMail/></a></Icon1>
                  <Icon1><a href='https://app.slack.com/client/T03KGC2CF5L/setup-calendar-contact-import?source=browser'><SiSlackware/></a></Icon1>
                  </IconHold>
                  <CV>
                    <a href={LUCIACV} download="CV">DOWNLOAD CV <FcDown /></a>
                </CV>
                  </Hold>
              </Box1>
              
            </Wrap>
            {/* </ConMe> */}
        </Con>
    </>
  )
}

export default Page1
const FcDown = styled(FcDownload )`
color:white;
margin-top: 5px;
font-size: 20px;
`
const CV = styled.div`
    display: flex;
    color:white;
    font-size: 20px;
    cursor: pointer;
    margin-top: 20px;
    /* background-color: darkgray; */
    align-items: center;
    :hover{
        color: #C71B27;
    }
    a{
        text-decoration: none;
        color: inherit;
        display: flex;
    }
`

const IconHold = styled.div`
display: flex;
margin-top: 30px;


`

const Hold = styled.div`
/* margin-top: 80px; */
/* background-color: red; */
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
}

`
const I = styled.div`
font-size: 50px;
color: white;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
margin-top: 20px;

span{
  font-size: 20px;
  color: #3E1370;
  font-weight: 600;
}

@media screen and (max-width: 320px){
text-align: center;
}
@media screen and (max-width: 768px){
font-size: 40px;
text-align: center;
}

`
const Web = styled.div`
font-size: 14px;
color: grey;
margin-top: 30px;
width: 70%;
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
height: auto;

@media screen and (max-width: 786px){
padding-top:120px;
padding-bottom:50px;
}
`

const Wrap = styled.div`
width: 80%;
/* background-color: pink; */
/* height: 500px; */
display: flex;
padding-top: 40px;
align-items: center;

@media screen and (max-width:768px){
  flex-direction:column;
  padding-top: 5px;
}


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
 height: auto;
}
`

const Box2 = styled.div`
height: 650px;
width:50%;
/* background-color: hotpink; */

@media screen and (max-width: 786px){
 height: auto;
}
img{
  height: 100%;
  width: 100%;
  object-fit: contain;
}
@media screen and (max-width: 786px){
  display: flex;
 width:100%;
 /* margin-top: 20px; */
 object-fit: contain;
}
`
// const Foto = styled.img`
// display: none;
 
// @media screen and (max-width:786px){
//   display: flex;
//   width:100%;
//   margin-top: 20px;
//   object-fit: cover;
// }
// `