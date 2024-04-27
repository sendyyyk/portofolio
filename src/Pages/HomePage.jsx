import { Fragment } from "react";
import { Helmet } from 'react-helmet';
import Header from "../components/Fragments/Header/Header";
import MainHome from "../components/Fragments/Home/Main";
import Footer from "../components/Fragments/Footer/Footer";
import Container from "../components/Layouts/Container";

const Home = () => {

    return (
        <Fragment>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Container>
                <Header></Header>
                <MainHome></MainHome>
                <Footer></Footer>
            </Container>
        </Fragment>
    )
}

export default Home;