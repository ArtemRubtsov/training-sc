import React from "react";  
import styled from "styled-components";


type BtnLinkPropsType = {
    btnText: string,
}

export const BtnLink = (props: BtnLinkPropsType) => {
    return(
        <StyledBtnLink btnText={props.btnText}>
            {props.btnText}
        </StyledBtnLink>
    )
}



const StyledBtnLink = styled.a<BtnLinkPropsType>`
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
    padding: 6px 20px;
    border: 2px solid rgb(78, 113, 254);
    border-radius: 5px;
    text-decoration: none;
    color: rgb(78, 113, 254);
    &:not(:first-child) {
        margin-left: 10px;  
    }
    &:hover{
        cursor: pointer;
        background: rgb(78, 113, 254);
        color: #f0f0f0;
    }
`