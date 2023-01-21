import React from 'react';
import styled from 'styled-components';

const Grid1 =styled.div`
    display: grid;
    grid-template-column: repeat(3,250px, 1fr);
    grid-template-row: 100px 150px
`;
const Grid2= styled.div`
    display: grid;
    grid-template-areas:
        "header headerheader"
        "aside main main"
        "footer footer footer";
`;
function GridLayout() {
    return ( 
    <div>
        <Grid2>
        <div style={{background:"red", gridArea:"header"}}>Header</div>
        <div style={{background:"green", gridArea:"aside"}}>Sidebar</div>
        <div style={{background:"black", gridArea:"main"}}>Main</div>
        <div style={{background:"blue", gridArea:"footer"}}>Footer</div>
        <div style={{background:"gray"}}>E</div>
        </Grid2>
    </div> 
);
}

export default GridLayout;