import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <HeaderTitle>
                <TitleLineOne>🍕 Menu Check</TitleLineOne>
                <TitleLineTwo>see photos of your meal before you order</TitleLineTwo>
            </HeaderTitle>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 60px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
`

const HeaderLogo = styled.div`
    img {
        width: 30px;
    }
`
const HeaderTitle = styled.div`
    text-align: center;
`

const TitleLineOne = styled.div`
    font-weight: 700;
    color: rgb(255, 16, 96);
    font-size: 32px;
    padding-top: 70px;
`

const TitleLineTwo = styled.div`
    color: grey;
    font-weight: 400;
    font-size: 20px;
    padding-top: 5px;
`


    
