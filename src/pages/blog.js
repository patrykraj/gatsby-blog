import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

import classes from "./blog.module.css"

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const blogPosts = posts.allContentfulBlogPost.edges.map(edge => {
    const post = (
      <li className={classes.post}>
        <Link to={edge.node.slug}>
          <h2>{edge.node.title}</h2>
          <p>{edge.node.date}</p>
        </Link>
      </li>
    )

    return post
  })

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up here later on.</p>
      <ol className={classes.posts}>{blogPosts}</ol>
    </Layout>
  )
}

export default BlogPage
