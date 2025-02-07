import styled from 'styled-components';

type TitlePropsType = {
    text?: string
}

export const Title = styled.h1<TitlePropsType>`
    width: 70px;
    height: 19px;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    text-align: left;
    color: #000;
    text: ${props => props.text || 'Headline'}
    
    
`

// Headline