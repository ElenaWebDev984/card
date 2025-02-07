import styled, {css} from 'styled-components';
import {BtnAnimation, BtnAnimationOut} from '../styles/animations/Animations.tsx';


type ButtonPropsType = {
    color?: string
    btnType?: 'primary' | 'outlined'
}


export const Button = styled.button<ButtonPropsType>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    text-align: center;
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
    border: none;

    &:hover {
        background-color: #1a1a91;
        animation: ${BtnAnimation} 2s ease-in-out;
    }

    &:not(:hover) {
        background-color: #4E71FE;
        animation: ${BtnAnimationOut} 2s ease-in-out;
    }
    
    
    // 📌 ПЕРЕДЕЛАТЬ hover чтобы проверялся через boolean нажат или нет ❓❓❓ работает или анимация или обратный разворот 😈😈😈
    
    ${props => props.btnType === 'outlined' && css<ButtonPropsType>`
        border: 2px solid ${props => props.color || '#4E71FE'};
        color: ${props => props.color || '#4E71FE'};
        background-color: transparent;
        
        &:hover {
            border-color: #1a1a91;
            color: #1a1a91;
            background-color: transparent;
            animation: ${BtnAnimation} 2s ease-in-out;
        }
        
        &:not(:hover) {
            border-color: #4E71FE;
            color: #4E71FE;
            background-color: transparent;
            animation: ${BtnAnimationOut} 2s ease-in-out;
        }
    `}

    ${props => props.btnType === 'primary' && css<ButtonPropsType>`
        background-color: ${props => props.color || '#4E71FE'};
        color: #FFFFFF;
    `}
`



