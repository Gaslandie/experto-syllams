import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import ServiceGrid from "../section/ServiceGrid";

function ServicesPage() {

    return (
        <>

        <div className="page-wrapper">
            <Layout FooterStyle="two">
                <PageTitle pageName="Service Grid" />
                <ServiceGrid />
            </Layout>
        </div>

        </>
    )
}
export default ServicesPage