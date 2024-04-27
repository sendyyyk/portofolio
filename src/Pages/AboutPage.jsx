import { Fragment } from "react";
import { Helmet } from 'react-helmet';
import Container from '../components/Layouts/Container';
import Header from "../components/Fragments/Header/Header";
import MainAbout from '../components/Fragments/About/Main';
import Footer from "../components/Fragments/Footer/Footer";

const About = () => {
    return (
        <Fragment>
            <Helmet>
                <title>About</title>
            </Helmet>
            <Container>
                <Header></Header>
                <MainAbout></MainAbout>
                <Footer></Footer>
            </Container>
        </Fragment>
    )
}

export default About;