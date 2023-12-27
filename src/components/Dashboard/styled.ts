import styled from "styled-components";

const colorMap = {
    maismilionaria: "#2E3078",
    megasena: "#209869",
    lotofacil: "#930089",
    quina: "#260085",
    lotomania: "#F78100",
    timemania: "#99FF99",
    duplasena: "#A61324",
    federal: "#103099",
    loteca: "#FB1F00",
    diadesorte: "#CB852B",
    supersete: "#A8CF44",
};

export const StyledBox = styled.main`
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    .infoLottery {    
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        background-color: ${({ background }) => (background ? colorMap[background] : "black")};

        select {
            height: 3rem;
            width: 14rem;
            
            padding: .5rem 1.875rem .5rem .5rem;
            border-radius: .5rem;
            
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;

            background-image: url("src/assets/Polygon.png");
            background-position: 12.5rem;
            background-repeat: no-repeat;
        }

        div {
            height: auto;
            width: 100%;

            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            img {
                padding-right: 1rem;
            }
        }
        
    }

    .numbersDrawn {
        height: 100%;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--color--grey-1);
        
        div {
            height: 90%;
            width: 100%;

            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;

            p {
                height: 2.5rem;
                width: 2.5rem;

                display: inline-block;
                justify-content: center;

                border: .1rem solid var(--color-white);
                border-radius: 50%;
                background-color: var(--color-white);

                padding: 0.31rem;
                margin-left: 1rem;
                margin-right: 1rem;

                text-align: center;
                line-height: 1.875rem;
                font-weight: 900;
            }       
        }
    }

    @media (min-width: 769px) {
        height: 100vh;
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .numbersDrawn {
        height: 100%;
        width: 100%;
        
        div {
            height: 50%;
            width: 100%;
        }
    }
`
