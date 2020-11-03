import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
    padding-top: 5px;
   
`;

const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

const Text = styled.div`
    margin: 10px;
`;

const Button = styled.button`
    width: 60px;
`;

const Home = () => {
    return(
        <Container>
            <Content>
                <Text>"Text"</Text>
                <NavLink to="/calculate" ><Button>Start</Button></NavLink>
            </Content>
        </Container>
    )
};

export default Home;