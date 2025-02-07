import './App.css';
import styled from 'styled-components';
import {Title} from './components/Title.styled.tsx';
import {Text} from './components/Text.styled.tsx';
import {Button} from './components/Button.styled.tsx';
import {BoxWrapper} from './components/BoxWrapper.styled.tsx';
import {myTheme} from './styles/Theme.styled.tsx';
import {Image} from './components/Image.styled.tsx';


function App() {

    return (
        <div className={'App'}>
            <Box>
                <Image src={Image} />
                <Title text={'Headline'} />
                <Text text={'Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.'} />
                <BoxWrapper>
                    <Button color={myTheme.colors.button.primary} btnType={'primary'}>See more</Button>
                    <Button btnType={'outlined'}>Save</Button>
                </BoxWrapper>

            </Box>
        </div>
    );
}

export default App;


const Box = styled.div`
    width: 300px;
    height: 350px;
    border-radius: 15px;
    background-color: snow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    margin: 0 auto;
    gap: 20px;
`;

