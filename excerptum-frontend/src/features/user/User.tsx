import { Outlet } from 'react-router-dom';
import { Container } from '../../ComponentUtils/BoxComponents/Container';

const User = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    )
}

export default User;