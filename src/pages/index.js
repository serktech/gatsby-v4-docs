import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            {/*<StaticImage*/}
            {/*    alt="logo gatsby"*/}
            {/*    src="../images/icon.png"*/}
            {/*/>*/}
            <p>Reviewing Gatsby v4.</p>

            <StaticImage
                alt="random cat"
                src="https://images.unsplash.com/photo-1577349516274-37ff88a53627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            />


        </Layout>
    )
}

export default IndexPage
