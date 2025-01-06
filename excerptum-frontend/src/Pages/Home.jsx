import { Helmet } from 'react-helmet';
import { Container } from '../ComponentUtils/BoxComponents/Container';

const Home = () => {

    return (
        <Container>
            <Helmet>
                <title>Excerptum | Home</title>
                <meta name='description' content='Excerptum | Home' />
            </Helmet>
        </Container>
    )
}

export default Home;