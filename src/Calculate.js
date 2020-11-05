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

const Calculate = () => {
    return(
        <Container>
            <Content>
                <Text>Your infomation</Text>
                <div>
                    <Text>Name:</Text>
                    <input></input>
                </div>
                <div>
                    <Text>Age:</Text>
                    <input type="number" required></input>
                </div>
                <div>
                <Text>Gender:</Text>
                    <input type="radio" name="radio"></input>
                    <label>Male</label>
                    <input type="radio" name="radio"></input>
                    <label>Female</label>
                </div>
                <div>
                    <Text>Height:</Text>
                    <input type="number" required></input>
                </div>
                <div>
                    <Text>Weight:</Text>
                    <input type="number" required></input>
                </div>
                <Text></Text>
                <NavLink to="/status" ><Button>Next</Button></NavLink>
            </Content>
        </Container>
    )
};

export default Calculate;