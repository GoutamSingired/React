import React from 'react';
import styled from 'styled-components';


const StyledBox = styled.div`
    border: 2px solid black;
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
`;

export default StyledBox;