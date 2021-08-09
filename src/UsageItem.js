import React from 'react'
import styled from 'styled-components'
import { UsageItems } from './UsageItems'

function UsageItem( {id, cost} ) {
    return (
        <Container>
            <ImageContainer>
                <img src="https://image.flaticon.com/icons/png/512/4474/4474606.png"  alt="me"></img>
            </ImageContainer>
            <MeteringPoint>
                {id}
            </MeteringPoint>
    
            <Cost>
                $ {cost.toFixed(2)}                        
            </Cost>
            
        </Container>
        
    )


}

export default UsageItem

const Container = styled.div`
    display: flex;
    padding-top: 10px;
    padding-bottom: 0px;    
`

const MeteringPoint = styled.div`
    font-weight: 700;
    font-size: 15px;
    display: flex;
    margin-left: 20px;
`

const Cost = styled.div`
    font-size: 15px;
    display: flex;
    margin-left: 60px;
`

const ImageContainer = styled.div`
    width: 15px;
    height: 15px;
    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
    flex-shrink:0;
    flex-growth: 0;
    margin-right: 16px;
`
