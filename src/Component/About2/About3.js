import React from 'react'
import styled from 'styled-components'
import {FaHeadSideVirus} from 'react-icons/fa'
import {FcWorkflow} from 'react-icons/fc'
import {VscCompassActive} from 'react-icons/vsc'

const About3 = () => {
  return (
    <>
    <Con id='service'>
        <Box>Services</Box>
        <Wrap>
            
            <Box1>
                <Hold>
                <Icon1/>
                <Stack>Stunning designs</Stack>
                <P>ability to create stunning designs that appeals to client sensibility, providing  client with unique and creative idea of their project even before when the project is completed
                    
                </P>
             
                </Hold>
            </Box1>
            <Box2>
            <Hold>
                <Icon2/>
                <Stack>Ability to work with team</Stack>
                <P> Understand the fact that team work improves productivity and brings better business results. 
                    working with team inspires me to work harder. </P>
              
                </Hold>
            </Box2>
            <Box3>
            <Hold>
                <Icon />
                <Stack>24 / 7 support</Stack>
                <P>Very much avalaible to work extensively and render support if need be.</P>
            
                </Hold>
            </Box3>
           
        </Wrap>
    </Con>
</>
  )
}

export default About3
const Box = styled.div`
text-align: center;
font-size: 45px;
font-family: poppins;
color: #fff;
padding-top: 20px;
`

const Hold = styled.div`
/* width: 80%; */
/* background-color: gold; */
`
const Box1 = styled.div`
width: 330px;
padding-top: 20px;
padding-bottom: 20px;
padding-left: 20px;
padding-right: 20px;
margin-left: 20px;
background-color: black;
border-radius: 5px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
/* background-color: pink; */
:hover{
    background-color: #C71B27;
}
@media screen and (max-width: 768px){
    width: 80%;
    height: auto;
    padding-bottom: 30px;
}
`
const Stack = styled.div`
font-family: poppins;
color: white;
font-size: 20px;
`

const Icon1 = styled(FaHeadSideVirus)`
font-size: 50px;
margin-bottom: 20px;
color: #fff;

`
const Icon2 = styled(FcWorkflow)`
font-size: 50px;
margin-bottom: 20px;
color: #fff;

`
const Icon = styled(VscCompassActive)`
font-size: 50px;
margin-bottom: 20px;
color: #fff;

`

const P= styled.div`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color:white;
font-size: 15px;
margin-top: 15px;
opacity: 0.75;
@media screen and (max-width: 400px){
   font-size: 13px;
   
}
`



const Box2 = styled.div`
width: 330px;
padding-top: 20px;
padding-bottom: 20px;
padding-left: 20px;
padding-right: 20px;
margin-left: 20px;
background-color: black;
border-radius: 5px;
cursor: pointer;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
display: flex;
justify-content: center;
align-items: center;
/* background-color: pink; */
:hover{
    background-color: #C71B27;
}
@media screen and (max-width: 768px){
    width: 80%;
    margin-top: 10px;
    height: auto;
    padding-bottom: 30px;
}
`
const Box3 = styled.div`
/* height: 300p; */
width: 330px;
padding-top: 20px;
padding-bottom: 20px;
padding-left: 20px;
padding-right: 20px;
margin-left: 20px;
cursor: pointer;
background-color: black;
border-radius: 5px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
display: flex;
justify-content: center;
align-items: center;

:hover{
    background-color: #C71B27
}
@media screen and (max-width: 768px){
    width: 80%;
    margin-top: 10px;
    height: auto;
    padding-bottom: 30px;
}
`

const Con = styled.div`
display: flex;
/* justify-content: center; */
width: 100%;
background-color: black;
align-items: center;
background-color: #181818;
flex-direction: column;
`

const Wrap = styled.div`
width: 80%;
background-color: #181818;
/* height: 500px; */
display: flex;
justify-content: space-between;
/* align-items: center; */
padding-top: 20px;
padding-bottom: 30px;
justify-content: center;
flex-wrap: wrap;
      /* flex-wrap: nowrap;
      overflow-y: scroll; */
@media screen and (max-width: 768px){
    /* justify-content: center; */
}
`