import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
    padding-top: 5px;
   
`;

const Status = () => {
    return(
        <Container>
            <div>
                <div>cjwpadsfsfsf</div>
                <NavLink to="/" ><div>Start</div></NavLink>
            </div>
        </Container>
    )
};

export default Status;