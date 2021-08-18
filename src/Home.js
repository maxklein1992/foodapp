import React from 'react'
import styled from 'styled-components'
import UsageItems from './UsageItems'
import UsageTotal from './UsageTotal'

function Home({ rows, totalCost, headerLineOne, headerLineTwo, itemsTitle, totalCostTitle }) { 

    return (
        <Container>
            <Banner>
                <TitleLineOne>
                    {headerLineOne}
                </TitleLineOne>
                <TitleLineTwo>
                    {headerLineTwo}
                </TitleLineTwo>
            </Banner>
            
            <Usage>
                <UsageItems 
                    rows={rows}  
                    itemsTitle={itemsTitle}             
                />
                <UsageTotal 
                    totalCost={totalCost}  
                    totalCostTitle={totalCostTitle} 
                />
            </Usage>
        </Container>
    )
}

export default Home

const Container = styled.div`
    margin: 0 auto;
`

const Banner = styled.div`
    background-color: white;
    min-height: 600px;
    padding-left: 96px;
    padding-top: 50px;
    font-size: 20px;
`

const TitleLineOne = styled.div`
    font-weight: 700;
`

const TitleLineTwo = styled.div``

const Usage = styled.div`    
    margin-top: -530px;
    margin-left: 96px;
    margin-right: 96px;
    border-radius: 5px;
    display: flex;
    color: white;
`
