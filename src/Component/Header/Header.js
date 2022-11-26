import React,{useState} from 'react'
import styled from 'styled-components'
import {GoThreeBars} from "react-icons/go"
import {GiCancel} from "react-icons/gi"
import {animateScroll as Scroll, Link} from "react-scroll"


 const Header = () => {
    const [change, setChange] = useState(true)

    const Toggle  = () =>{
        setChange(!change)

    }
  return (
    <div>
        <Con>   
            <Wrap>
             <Link to='/'><Logo src='./logooo.png'/></Link> 
                <Navs onClick={Toggle} change={change}>
                    <Nav to='/'>Home</Nav>
                    <Nav to='/about2'>About</Nav>
                    <Nav to='service' duration={1000} smooth={true} offset={-100}>Services</Nav>
                    <Button to='contact' duration={1000} smooth={true} offset={-100}>Contact Me</Button>
                </Navs>  
                <MobileHold onClick={Toggle}>
                    {change ? (<GoThreeBars/>) : ( <GiCancel/>)}    
                </MobileHold>                           
            </Wrap>
        </Con>
    </div>
  )
}

export default Header 
const Con  = styled.div`
  height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    /* background:rgba(90,40,5,40%); */
    background-color: black;
    align-items: center;
    position: fixed;
    top: 0;
    color: white;
    z-index:200;
    backdrop-filter: blur(10px);
`

const Wrap = styled.div`
    width:75%;
    height:90%;
    display:flex;
    justify-content:space-between;
    align-items:center;
  
`
const Logo = styled.img`
        height:120px;
        width:120px;
        object-fit: contain;
        cursor: pointer;
`

const Navs = styled.div`
    display:flex;
    width:480px;
     /* background-color:red; */
   justify-content:space-between;
   align-items:center;


   a{
       text-decoration: none;
   }
    
   button{
    width:130px;
    height:45px;
    border:none;
    color:white;
    font-size:15px;
    font-weight:500;
    font-family: poppins;
    border-radius: 5px;
    border: 2px solid black;
    background-color: #FFB465;
    cursor: pointer;
    @media screen and (max-width: 530px){
        width: 120px;
    }
};
span{
    width:180px;
    background-color:#EF4D39;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-radius:5px;
    @media screen and (max-width: 530px){
        width: 130px;
    }
}
img{
    width:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    // height:45px;
    margin-left:7px;
    @media screen and (max-width: 530px){
        width: 20px;
    }
}

@media screen and (max-width: 768px){
    display:flex;
    flex-direction:column;
    position: absolute;
    height: 80vh;
    width: 100%;
    top: 95px;
    justify-content:space-evenly;
    left: ${({change})=> (change? '-100%' : 0)};
        background-color: black;
        color: white;
        border-radius: 0px 10px 10px 0px;
        transition: all 900ms;

}
 
`

const Button = styled(Link)`
  width:130px;
    height:45px;
    border:none;
    color:white;
    font-size:15px;
    font-weight:500;
    font-family: poppins;
    border-radius: 5px;
    border: 2px solid black;
    background-color: #FFB465;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 530px){
        width: 120px;
    }
`

const Nav = styled(Link)`
        font-size:15px;
        font-weight:600;
        color: #fff;
    font-family: poppins;
    transform: scale(1.10);
    transition: all 500ms;
    cursor: pointer;

:hover{
    transform: scale(1.40);
    transition: all 500ms; 
    /* text-decoration: line-through; */
}
`

const MobileHold = styled.div`
   display: none; 
   @media screen and (max-width: 768px){
    display:flex;
     
}
`
