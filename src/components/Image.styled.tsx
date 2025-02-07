import styled from 'styled-components';

type ImagePropsType = {
    src?: string
}

export const Image = styled.image<ImagePropsType>`
    width: 280px;
    height: 170px;
    border-radius: 10px;
    margin: 10px;
    src: ${props => props.src || './assets/image-card.svg'}
`;