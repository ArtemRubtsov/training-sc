import React from "react";
import styled from "styled-components";
import { CardInfo } from "./CardInfo";

type CardPropsType = {
    img: string
}


export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <StyledImg img={props.img}></StyledImg>
            <CardInfo tittle="Headline" 
                      info="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."/>
        </StyledCard>
    )
}
const StyledCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  min-height: 350px;
  width: 100%;
  max-width: 300px;
  border-radius: 15px;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
`
const StyledImg = styled.img<CardPropsType>`
    min-height: 170px;
    width: 100%;
    max-width: 280px;
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center;
    margin-bottom: 10px;
`
