import React from 'react';
import styled from 'styled-components'

function UsageTotal( {totalCost} ) {

    return (
        <Container>
            <Title>
                Total
            </Title>
            <TotalValue>
                $ {Math.round(totalCost * 100) / 100}
            </TotalValue>
        </Container>
    )
}

export default UsageTotal

const Container = styled.div`
    height: 100px;
    background-color: rgb(255, 16, 96);
    flex: 0.2;
    padding: 20px;
    border-radius: 5px;
`

const Title = styled.div`
    font-weight: 700;

`

const TotalValue = styled.div`
    margin-top: 30px;

`
