import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import ContactInner from "../section/ContactInner";

function ContactUs() {

    return (
        <>

        <div className="page-wrapper">
            <Layout FooterStyle="two">
                <PageTitle pageName="Contact Us" />
                <ContactInner />
            </Layout>
        </div>

        </>
    )
}
export default ContactUs