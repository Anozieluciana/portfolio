import React from 'react'
import styled from 'styled-components'
import Rating from './Raje'

const Ratings = () => {
  return (
   <Container>
    <Wrap>
    <Raten>
                    <Rate>
                        <Rating percentage="80"/>
                        Front-End
                    </Rate>
                    <Rate>
                        <Rating percentage="85"/>
                        Back-End
                    </Rate> 
                    <Rate>
                        <Rating percentage="80"/>
                        Design Thinking
                    </Rate>
                </Raten>
    </Wrap>
   </Container>
  )
}

export default Ratings

const Raten = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

const Rate = styled.div`
    display: flex;
    flex-direction: column;
    color: #FFC107;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    
`

const Container = styled.div`
width:100%;
display: flex;
justify-content: center;
background-color:  #181818;
`
const Wrap = styled.div`
width: 75%;
display: flex;
align-items: center;
justify-content: space-around;
padding-top: 20px;
padding-bottom: 20px;
`