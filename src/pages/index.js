import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"


const BlogTtitle = styled.h3`
  margin-bottom: 20px;
  color: #0054ee;
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  &:hover {
    color: #1dcaff;
  }
`

const BlogLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const BlogBody = styled.div`
  margin-bottom: 50px;
  `


export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Welcome to My Blog</h1>
      <h4>{ data.allMarkdownRemark.totalCount }</h4>
      { 
        data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
            <BlogTtitle>
            {node.frontmatter.title} - {node.frontmatter.date}
            </BlogTtitle>
            </BlogLink>
            <p>{node.excerpt}</p>
          </div>
        ))
      }
    </div>
  </Layout>
)


export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
          }
          fields {
            slug
          }
          excerpt(truncate: true)
        }
      }
    }
  }
  
`