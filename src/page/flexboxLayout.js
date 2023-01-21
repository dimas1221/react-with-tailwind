import React from 'react';
import styled from 'styled-components';

const Flex1 = styled.div`
display: flex;
gap: 3px;
flex-direction: row-reverse;
`;

const FlexLayout = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    header{
        background-color:#ccc;
        font-size: 3rem;
    }

    main{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    main article{
        background-color: #00C9F2;
        flex-grow: 1;
    }
    main aside {
        background-color: #F9CF93
    }
    
    footer{
        background-color: #ccc;
    }

    @media(min-width: 768px){
        main{
            display:80%;
            margin: 0 auto;
            flex-direction: row;
        }
        main aside{
            flex:0 0 20%
        }

        .leftSidebar{
            order: -1;
        }
    }
`;
function FlexboxLayut() {
    return ( 
        <FlexLayout>
            <header>Header</header>
                <main>
                    <article>main</article>
                    <aside>Right sidebar1</aside>
                    <aside className="leftSidebar">Left sidebar2</aside>
                </main>
            <footer>footer</footer>
             {/* <div>
                <div style={{background:"red"}}>A</div>
                <div>B</div>
                <div>C</div>
                <div>D</div>
                <div>E</div>
            </div> */}
        </FlexLayout>
     );
}

export default FlexboxLayut;