import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

import Button from '../components/Button'
import CardRow from '../components/CardRow'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <Link to="/about">About</Link>
    <Link to="/products">Product</Link>
    <hr/>
    <h3>Button</h3>
    <Button
      color="primary"
      text="Enviar"
    />
    <hr/>
    <h3>Card Row</h3>
    <CardRow />
  </Layout>
)

export default IndexPage
