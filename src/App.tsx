import './App.css'
import styled from 'styled-components';

function App() {

  return (
    <div className={'App'}>
        <Box>

        </Box>
    </div>
  )
}

export default App


const Box = styled.div`
    width: 300px;
    height: 350px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

