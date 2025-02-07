import styled from 'styled-components';

type TextPropsType = {
    text?: string
}

export const Text = styled.p<TextPropsType>`
    color: #ABB3BA;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    text: ${props => props.text || 'Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.'}
`

// Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.