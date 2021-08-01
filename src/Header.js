import React from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function Header() {
    return (
        <Container>
            <HeaderLogo>
                <Link to="/">
                    <img src="https://image.flaticon.com/icons/png/512/4474/4474606.png"  alt="me"></img>
                </Link>
            </HeaderLogo>

            <HeaderTitle>
                <TitleLineOne>An Overview</TitleLineOne>
                <TitleLineTwo>Of Your Usage</TitleLineTwo>
            </HeaderTitle>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 60px;
    background-color: rgb(255, 16, 96);
    display: flex;
    align-items: center;
    justify-content: start;
    color: white;
    font-size: 14px;
`

const HeaderLogo = styled.div`
    img {
        width: 30px;
        margin-left: 41px;
    }
`
const HeaderTitle = styled.div`
    padding-left: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
`

const TitleLineOne = styled.div`
    font-weight: 700;
`

const TitleLineTwo = styled.div`
`
    
