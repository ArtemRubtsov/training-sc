import React from "react";
import styled from "styled-components";
import { BtnLink } from "./btnLink/BtnLink";
import { FlexWrapper } from "../FlexWrapper";

type CardInfoPropsType = {
    tittle: string,
    info: string
}

export const CardInfo = (props: CardInfoPropsType) => {
    return(
        <StyledCardInfo>
            <StyledTittle tittle={props.tittle}>{props.tittle}</StyledTittle>
            <StyledText info={props.info}>{props.info}</StyledText>
            <FlexWrapper>
                <BtnLink btnText="See more"/>
                <BtnLink btnText="Save"/>
            </FlexWrapper>
        </StyledCardInfo>
    )
}

const StyledCardInfo = styled.div`
    max-width: 280px;
`

const StyledTittle = styled.h1<{tittle: string}>`
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    margin-bottom: 20px;
`
const StyledText = styled.p<{info: string}>`
    max-width: 260px;
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    color: rgb(171, 179, 186);
    margin-bottom: 19px;
`
