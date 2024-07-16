import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql, PageProps } from "gatsby"
import "../css/base.css"
import "../css/custom.css"

const page_entry = {
  title: "Podcast #1",
  url: "https://runacast.github.io/nukichi",
  description: "Katik podcast uyana"
}

const IndexPage = () => {

  return (
    <body>
      <div class="container" id="header">
        <div class="content">
          <div class="title">
            <h2>RunaCast</h2>
          </div>
        </div>
      </div>
      <div class="container" id="page">
      <Helmet>
      <title>RunaCast Salasakas</title>
      </Helmet>
      <div class="content">
      <div class="row">
        <div class="col-6">
        <h3>Parluk Uyana kaypi</h3>
        <br/>
        <div class="row">
          <h4>{page_entry.title}</h4>
          <p>{page_entry.description}</p>
        </div>
        </div>
        <div class="col-6">
        <h3>Yachana</h3>
        </div>
      </div>
      </div>
    </div>
    </body>
  )
}

export default IndexPage
