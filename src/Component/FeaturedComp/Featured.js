import React from 'react'
import styled from 'styled-components'

function Featured() {
  return (
    <Con>
        <Feat>Featured Projects</Feat>
        <P>Bringing ideas to light <span></span></P>
        <Wrap>
            <Box1>
                <Holder>
                    <HoldPic></HoldPic>
                </Holder>
                <Hold>
                    <Des>Car Sales&Repairer</Des>
                   <a href='https://autofrankzee-aupro.netlify.app/'> <But>See More</But></a>
                </Hold>
            </Box1>
            <Box1>
                <Holder>
                    <HoldPic1></HoldPic1>
                </Holder>
                <Hold>
                    <Des>Ecommerce Housing</Des>
                   <a href='https://ecommercehousing.web.app/'> <But>See More</But></a>
                </Hold>
            </Box1>
            <Box1>
                <Holder>
                    <HoldPic3></HoldPic3>
                </Holder>
                <Hold>
                    <Des>Lucia Todo.App</Des>
                   <a href='https://luciatodoapp.web.app/'> <But>See More</But></a>
                </Hold>
            </Box1>
        </Wrap>
    </Con>
  )
}

export default Featured
const Des = styled.div`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 700;
color: white;
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
@media screen and (max-width: 430px){
    width: 150px;
    margin-top: 10px;
}

`
const Holder = styled.div`
    height: 300px;
    width: 100%;
    background-color: #181818;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`
const HoldPic= styled.div`
    height: 80%;
    width: 90%;
    background-image: url('./car.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
`
const HoldPic3= styled.div`
    height: 80%;
    width: 90%;
    background-image: url('./todo.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
`
const HoldPic1= styled.div`
    height: 80%;
    width: 90%;
    background-image: url('./home.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
`

const Hold = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;

@media screen and (max-width: 430px){
  flex-direction: column;
  width: 100%;
    /* background-color: red; */
    justify-content: center;
    align-items: center;
}
`

const Box1 = styled.div`
/* height: 300px; */
width: 30%;
padding: 10px 10px;
background-color:  black;
border-radius: 5px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

@media screen and (max-width: 768px){
    width: 80%;
    margin-top: 10px;
    height: auto;
    padding-bottom: 30px;
}
`
const Feat = styled.div`
width: 70%;
font-family: poppins;
font-size: 25px;
color: white;
@media screen and (max-width: 768px){
    justify-content: center;
    width: 80%;
    display: flex;
    
}
`
const P = styled.div`
color:white;
font-size: 15px;
width: 70%;
display: flex;
align-items: center;
margin-top: 10px;
span{
    width: 100px;
    height: 3px;
    background-color: white;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 10px;
}
@media screen and (max-width: 768px){
    justify-content: center;
    width: 80%;
    display: flex;
    
}
`
const Con =styled.div`
align-items: center;
display: flex;
flex-direction: column;
width: 100%;
background-color: black;
padding-top: 20px;
padding-bottom: 20px;
/* justify-content: center; */
`
const Wrap = styled.div`
width: 70%;
display: flex;
justify-content: space-between;
/* height: 500px; */
/* background-color: pink; */
margin-top: 20px;
flex-wrap: wrap;

@media screen and (max-width: 768px){
    justify-content: center;
}
`