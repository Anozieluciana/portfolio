import React from 'react'
import styled from 'styled-components'

function Let() {
  return (
   <Con>
    <Wrap>
        <Box1>
            <H1>Let's work together on your next project</H1>
            <P>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</P>
        </Box1>
        <Box2><a href='tel +08121759954'><But>Contact Me</But></a></Box2>
    </Wrap>
   </Con>
  )
}

export default Let
const H1 = styled.div`
font-size: 35px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 500;
width: 75%;
color:white;

@media screen and (max-width: 768px)
{
  text-align: center;
  width: 90%;
  justify-content: center;
  /* background-color: pink; */
}
`

const P = styled.div`
color:white;
width: 75%;
margin-top: 20px;
@media screen and (max-width: 768px)
{
  text-align: center;
  width: 90%;
  justify-content: center;
  /* background-color: pink; */
}
`

const But = styled.div`
height: 40px;
width: 130px;
font-size: 14px;
color: white;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
background-color:  #C71B27;
:hover{
    background: white;
    color: black;
}
`
const Con = styled.div`
display: flex;
justify-content: center;
width: 100%;
background-color: black;
padding-bottom: 50px;
`

const Wrap = styled.div`
width: 70%;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
padding-top: 40px;
padding-bottom: 40px;
background-color:  #181818;
display: flex;
border-radius: 5px;
margin-top: 40px;
@media screen and (max-width: 768px)
{
    flex-direction: column;
    justify-content: center;
}
`
const Box1= styled.div`
width: 60%;
margin-left: 20px;
@media screen and (max-width: 768px)
{
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: center;
}
`
const Box2= styled.div`
width: 40%;
display: flex;
align-items: center;

a{
  text-decoration: none;
}
@media screen and (max-width: 768px)
{
    align-items: center;
    display: flex;
    /* flex-direction: column; */
    width: 90%;
    justify-content: center;
    margin-top: 20px;
}
`
