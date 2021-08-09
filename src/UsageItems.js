import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import UsageItem from './UsageItem'

function UsageItems({ rows }) {

    return (
        <Container>
            <Title>
                Overview of usage 
            </Title>
            
            {rows.map((row, i) => (
                <UsageItem 
                    id={row.meteringsPointId}
                    cost={row.cost}       
                />
            ))}
        </Container>
    )
}

export default UsageItems

const a = 6009;

export { a }

const Container = styled.div`
    height: 300px;
    background-color: rgb(255, 16, 96);
    flex: 0.8;
    margin-right: 18px;
    padding: 20px;
    border-radius: 5px;
    border: 2px solid yellow;
`

const Title = styled.div`
    font-weight: 700;
    margin-bottom: 20px;

`

