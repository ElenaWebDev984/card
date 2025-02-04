import './App.css';
import styled from 'styled-components';
import {Img} from './components/Img.styled.tsx';
import {H1} from './components/H1.styled.tsx';
import {P} from './components/P.styled.tsx';

function App() {

    return (
        <div className={'App'}>
            <Box>
                <Img />
                <H1>Headline</H1>
                <P>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</P>
            </Box>
        </div>
    );
}

export default App;


const Box = styled.div`
    width: 300px;
    height: 350px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


