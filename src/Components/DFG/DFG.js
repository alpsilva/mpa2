import React from 'react';
import Graph from './MockedValues/mochi.svg'
import styled from'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`
const DFG = () => {
    return (
        <Wrapper>
            <img src={Graph} alt="graph" width='720'/>
        </Wrapper>
    )
}

export default DFG;