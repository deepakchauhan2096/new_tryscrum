import React, { useState } from "react"
import ReactModal from 'react-modal'
import { graphql , Link } from "gatsby"
import "../components/Chat/style.css";
import "../components/Chat/townscript.css";


ReactModal.setAppElement('#___gatsby')

export const query = graphql`
  query category {
  
    wpPost(categories: {nodes: {elemMatch: {name: {eq: "Scrum"}}}}) {
        uri
        id
      }

  }
`

const PostTemplate = ({ data }) => {

    console.log("wp post", data.wpPost.uri )
    return (
      
            <div>
                hello
            </div>
                
    )

 
}

export default PostTemplate
