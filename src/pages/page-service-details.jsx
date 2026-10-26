import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import ServiceDetails from "../section/ServiceDetails";

function ServiceDetailPage() {

    return (
        <>

        <div className="page-wrapper">
            <Layout FooterStyle="two">
                <PageTitle pageName="Service Details" />
                <ServiceDetails />
            </Layout>
        </div>

        </>
    )
}
export default ServiceDetailPage