import React from 'react';

import Page from './page.jsx';
import Header from 'component_source/header.jsx';
import Content from 'component_source/content.jsx';
import Footer from 'component_source/footer.jsx';

const Layout = () => {
    return (
        <Page>
            <Header />
            <Content />
            <Footer />
        </Page>
    )
}

export default Layout