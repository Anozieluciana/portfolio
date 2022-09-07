import React from 'react'
import styled from 'styled-components';

function About() {
  return (
    <>
        <Con>
            <Wrap>
                <Box1>
                    <Hold>
                    <Icon src='./figma.png'/>
                    <Stack>Ui Design</Stack>
                    <P> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </P>
                    <Line/>
                    </Hold>
                </Box1>
                <Box2>
                <Hold>
                    <Icon src='./react.png'/>
                    <Stack>React.Js</Stack>
                    <P> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </P>
                    <Line/>
                    </Hold>
                </Box2>
                <Box3>
                <Hold>
                    <Icon src='./node.png'/>
                    <Stack>Node.Js</Stack>
                    <P> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </P>
                    <Line/>
                    </Hold>
                </Box3>
            </Wrap>
        </Con>
    </>
  )
}

export default About
const Hold = styled.div`
width: 80%;
/* background-color: gold; */
`
const Box1 = styled.div`
height: 300px;
width: 30%;
padding: 10px 10px;
background-color: black;
border-radius: 5px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
display: flex;
justify-content: center;
align-items: center;
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

const Icon = styled.img`
height: 60px;
width: 60px;
margin-bottom: 20px;
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

const Line = styled.div`
height: 3px;
width: 100px;
background-color: hotpink;
margin-top: 20px;
`

const Box2 = styled.div`
height: 300px;
width: 30%;
padding: 10px 10px;
background-color: black;
border-radius: 5px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
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
height: 300px;
width: 30%;
padding: 10px 10px;
background-color: black;
border-radius: 5px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
display: flex;
justify-content: center;
align-items: center;
/* background-color: pink; */
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
justify-content: center;
width: 100%;
background-color: black;
align-items: center;
background-color: #181818;
`

const Wrap = styled.div`
width: 70%;
background-color: #181818;
/* height: 500px; */
display: flex;
justify-content: space-between;
/* align-items: center; */
padding-top: 20px;
padding-bottom: 30px;
flex-wrap: wrap;
@media screen and (max-width: 768px){
    justify-content: center;
}
`