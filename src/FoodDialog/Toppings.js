import React from 'react';
import styled from 'styled-components';


const ToppingGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const ToppingCheckBox = styled.input`
    margin-right: 10px;
    cursor: pointer;
`

const CheckBoxLabel = styled.label`
    cursor: pointer;
`

export function Toppings({toppings, checkTopping}){
    return(
        <ToppingGrid>
            {toppings.map((topping, i) => (<CheckBoxLabel>
                <ToppingCheckBox
                    type="checkbox"
                    checked={topping.checked}
                    onClick={()=>{
                    checkTopping(i);
                }}/>
                {topping.name}
            </CheckBoxLabel>
            ))}
        </ToppingGrid>

    )
}
