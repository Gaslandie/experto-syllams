import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/Home3/Banner";
import About from "../section/Home3/About";
import Funfact from "../section/Home3/Funfact";
import Services from "../section/Home3/Services";
import Consult from "../section/Home3/Consult";
import Objective from "../section/Home3/Objective";
import Brand from "../section/Home3/Brand";
import Case from "../section/Home3/Case";
import Pricing from "../section/Home3/Pricing";
import Teams from "../section/Home3/Teams";
import Testimonials from "../section/Home3/Testimonials";
import News from "../section/Home3/News";

function Home3Dark() {
    return (
        <>

        <div className="page-wrapper">
            <Layout HeaderStyle="three" styleMode="Dark" FooterStyle="three">
                <Banner />
                <About />
                <Funfact />
                <Services />
                <Consult />
                <Objective />
                <Brand />
                <Case />
                <Pricing />
                <Teams />
                <Testimonials />
                <News />
            </Layout>
        </div>

        </>
    );
}
export default Home3Dark
