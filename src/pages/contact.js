import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';

const ContactPage = () => {
    return(
        <div>
            <Layout>
            <h1>Contact Us</h1>
            <p>For more info please contact us on </p>
            <p>To know more go to  <Link to="/about">About page</Link></p>
            </Layout>
        </div>
    );
}

export default ContactPage;