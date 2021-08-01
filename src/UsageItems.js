import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import UsageItem from './UsageItem'

function UsageItems( ) {

    const [ rows, setRows] = useState([]);

    const convertToTotalCost = array => {

        for (var i = 0; i < array.length - 1; i++) {
            var diff = array[i + 1].reading - array[i].reading;
            if(diff <= 100 && diff >= 0)
                array[i].usage = diff; 
            else{
                array[i].usage = ((array[i + 2].reading - array[i + 1].reading) + (array[i].reading - array[i - 1].reading)) / 2;
            }                    
        }
                
        array.splice(-1,1);  
 
        
        for (var k = 0; k < array.length; k++) {

            const date = new Date(array[k].createdAt*1000);
            array[k].time = date;

            array[k].weekday = date.getDay();
            if(array[k].weekDay === 6 || array[k].weekDay === 7)
            {
                array[k].isWeekend = 1;
            }
            else
            {
                array[k].isWeekend = 0
            }

            array[k].hour = date.getHours();
            if(array[k].hour >= 7 && array[k].hour <= 23)
            {
                array[k].isDayTime = 1;
            }
            else
            {
                array[k].isDayTime = 0
            }
        }

        for (var j = 0; j < array.length; j++) {
            if(array[j].type === 2)
            {
                array[j].usage = array[j].usage * 9.769;
                array[j].cost = array[j].usage * 0.06;
            }
            else if(array[j].type === 1 && array[j].isDaytime === 1 && array[j].isWeekend === 0) {
                array[j].usage = array[j].usage / 1000;
                array[j].cost = array[j].usage * 0.20;
            }
            else{
                array[j].usage = array[j].usage * 9.769;
                array[j].cost = array[j].usage * 0.18;                
            }
        }

        console.log(array)

        return array;

        /*var sumValues =  array.reduce(function(final,item){
            if(final[item.meteringsPointId]){
              final[item.meteringsPointId] = {meteringsPointId: item.meteringsPointId, type: item.type, cost: item.cost+final[item.meteringsPointId].cost, reading: item.reading};
            }else{
              final[item.meteringsPointId] = {meteringsPointId: item.meteringsPointId, type: item.type, cost: item.cost, reading: item.reading};
            }
          return final;
          },{});
        var new_data = Object.values(sumValues);
    
        return new_data;
        */



    };
  
    useEffect(() => {
  
      const results = [
        { meteringsPointId: 1, type: 1, reading: 166606, createdAt: 1415963700 },
        { meteringsPointId: 1, type: 1, reading: 166694, createdAt: 1415964600 },
        { meteringsPointId: 1, type: 1, reading: 166714, createdAt: 1415965500
        },
        //{ meteringsPointId: 2, type: 1, reading: 166754, createdAt: ///1415966400
        //},
      ];      
  
      const totalCostRows = convertToTotalCost(results);
  
      setRows(totalCostRows);

      const totalCost = results.reduce((a,v) =>  a = a + v.cost , 0 );
  
    }, []);

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

const Container = styled.div`
    height: 300px;
    background-color: rgb(255, 16, 96);
    flex: 0.8;
    margin-right: 18px;
    padding: 20px;
    border-radius: 5px;
`

const Title = styled.div`
    font-weight: 700;
    margin-bottom: 20px;

`

