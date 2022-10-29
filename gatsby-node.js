const path = require(`path`)
const chunk = require(`lodash/chunk`)
const { Console } = require("console")
const { post } = require("jquery")

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */

 exports.createPages = async ({ actions, graphql }) => {


  const result = await graphql(`
    {
     
      allWpNews {
        nodes {
          tags {
            nodes {
              name
            }
          }
          title
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          uri
          id
        }
      }
      allWpPost {
        nodes {
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          title
          uri
          id
          acfcoursePage {
            course1 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
            }
            course2 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
            }
            course3 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
            }
            course4 {
              date1
              fieldGroupName
              location
              trainer
              time1
              url
            }
            options {
              certificate
              certificationBody
              curriculum
              feeStructure
              fieldGroupName
              guidlineUrl
              included
              instructions
              logisticsAndPrerequisites
              pduScrumAllianceSeus
              prerequisites
              trustPilotRating
              video
              whoCanAttend
              why
              duration
              thecourse
            }
          }
          
        }
      }

    }
  `)

  const posts = result.data.allWpNews.nodes
  
  posts.forEach(post => {
    actions.createPage({
      //path: uricoursepage,
      path: post.uri,
      component: require.resolve("./src/templates/post-template.js"),
      context: {
        id: post.id,
      },
    })
  })

 // Blog List Pages

    const graphqlResult = await graphql(/* GraphQL */ `
      {
        wp {
          readingSettings {
            postsPerPage
          }
        }
      }
    `)
  
    const { postsPerPage } = graphqlResult.data.wp.readingSettings
  
    // createPage is an action passed to createPages
    // See https://www.gatsbyjs.com/docs/actions#createPage for more info
    await actions.createPage({
      path: `blogs`,

      // use the blog post archive template as the page component
      component: path.resolve(`./src/templates/blog-post-archive.js`),

      // `context` is available in the template as a prop and
      // as a variable in GraphQL.
      context: {
        // the index of our loop is the offset of which posts we want to display
        // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
        // etc
        
        // We need to tell the template how many posts to display too
        postsPerPage,

      },
    })



   

  //Tags

  const tagAllData = result.data.allWpNews.nodes
  console.log("tagAllData", tagAllData)

  const tagNewData = tagAllData.map(post => post.tags)
  console.log("tagNewData", tagNewData)

  const tagNewData2 = tagNewData.map(post => post.nodes)
  console.log("tagNewData2", tagNewData2)

  const filteredTagVal = [];

  const tagFilterLogic = tagNewData2.map(post => 
    {
      console.log("post", post.length);
      for (var i = 0; i < post.length; i++) {

          console.log("post[i]", post[0]);
          filteredTagVal.push(post[0]);
        
        }
  })
  
  console.log("filteredTagVal_gatsby_node_js_file", filteredTagVal);

  filteredTagVal.forEach(list => {
    actions.createPage({
      path: `/tag/${list.name}`,
      component: require.resolve(`./src/pages/tag.js`),
      context: {
        name : list.name,
      },
    })
  })

  // filteredTagVal.forEach(list => {
  //   actions.createPage({
  //     path:  `blogs/tag/${list.name}/blogs/tag/${list.name}`,
  //     component: require.resolve(`./src/pages/tag.js`),
  //     context: {
  //       name : list.name,
  //     },
  //   })
  // })

  //   const tagdata = await graphql(/* GraphQL */ `
  //     {
  //       allWpNews(sort: {fields: date, order: DESC}) {
  //         nodes {
  //           tags {
  //             nodes {
  //               name
  //               uri
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `)
  

  //   const { tagname } = tagdata.allWpNews.nodes.tags.nodes

  //   tagname.forEach(list => {
  //     console.log(list)
  //   await actions.createPage({
  //     path: l,
  //     component: list.resolve(`./src/pages/tag.js`),
  //     context: {
  //       name : list.name,
  //     },
  //   }
     
  //   )
  // })

    //tag

    // New Blogs URL To Solve Sharing Problem
    await actions.createPage({
      path: `tryscrum-blogs`,

      // use the blog post archive template as the page component
      component: path.resolve(`./src/templates/blog-post-archive.js`),

      // `context` is available in the template as a prop and
      // as a variable in GraphQL.
      context: {
        // the index of our loop is the offset of which posts we want to display
        // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
        // etc
        
        // We need to tell the template how many posts to display too
        postsPerPage,

      },
    })

    //All Courses List
    const courseslist = result.data.allWpPost.nodes

    courseslist.forEach(courseslist => {
      actions.createPage({
        path: `courses`,
        component: require.resolve("./src/templates/course-archive.js"),
        context: {
          id: courseslist.id,
        },
      })
    })

    courseslist.forEach(courseslist => {
      actions.createPage({
        path: `public-events`,
        component: require.resolve("./src/templates/public-events.js"),
        context: {
          id: courseslist.id,
        },
      })
    })
  
    // Single Course template
    const course = result.data.allWpPost.nodes

    course.forEach(course => {
      actions.createPage({
        path: course.uri,
        component: require.resolve("./src/templates/course-template.js"),
        context: {
          id: course.id,
        },
      })
    })

}