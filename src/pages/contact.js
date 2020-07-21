import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact me</h1>
      <p>
        My twitter:{" "}
        <a href="https://twitter.com/@andrew_j_mead" target="blank">
          @andrew_j_mead
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
