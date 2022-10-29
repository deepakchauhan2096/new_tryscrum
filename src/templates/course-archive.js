import React, { useReact, useState } from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
import Chat from '../components/Chat/index';
import homebanner from "../assets/images/try-Scrum-imgaes/homebanner.png"
import coursesImg from "../assets/images/socialbanners/coaching-banner.jpg";
import CourseArchive from "../components/CourseArchiveHeader";


const BlogIndex = ({data}) => {

  const courses = data.allWpPost.nodes || []

  const allCourses = data.allWpPost.nodes

  const posts = data.allWpPost.nodes || []

  // const { data } = props
  const allPosts = data.allWpPost.nodes

  // courses.map(value =>{
  //   const arr = value.uri.filter(e => e !== '/courses'); 
  //   console.log(arr);
  // })
  
  // const arr = courses.uri.filter(e => e !== '/courses'); 
  // console.log(arr);

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })
 
  const handleInputChange = (event) => {
    
    const query = event.target.value
    /* console.log(query) */

    const filteredData = posts.filter(post => {
  
    return (

        //description.toLowerCase().includes(query.toLowerCase()) ||
      
        post.title.toLowerCase().includes(query.toLowerCase()) 
      
        // ||
        // (tags &&
        //   tags
        //     .join("")
        //     .toLowerCase()
        //     .includes(query.toLowerCase()))
      )

    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const returned = hasSearchResults ? filteredData : allPosts
  
  // console.log("filteredData",filteredData);
  // console.log("hasSearchResults",hasSearchResults);
  // console.log("returned",returned);
  // console.log("allPosts",allPosts);

  const myTitle = "Explore our online and In-Person training to help you succeed with agile"
  const myDesc = "Explore our Agile courses to foster experiential learning through practical and actionable advice, tips andreal-world examples for building a capable and resilient Organisation."

  
  if (!courses.length) {
    return (
      //<Layout pageTitle="Explore our online and In-Person training to help you succeed with agile"  metaDesc="Explore our Agile courses to foster experiential learning through practical and actionable advice, tips andreal-world examples for building a capable and resilient Organisation."  pageName="courses" >
      <Layout pageTitle={myTitle} metaDesc={myDesc} pageName={coursesImg} pageloc="individual" >
      {/* <Seo title="All Courses" /> */}
      <CourseArchive title="tryScrum Courses" /> 
        {/* <Bio /> */}
        <p>
          No Courses found. Add courses to your site and 
        </p>
      </Layout>
    )
  }

  // console.log(returned)
  // add backslash before write uri
  // const indexuri = returned.findIndex(x => x.title ==="Bundle Courses");
  // console.log(indexuri)
  // const removeddata = returned.splice(indexuri,1)
  // console.log(removeddata)
  
  return (
   
    <>

    {/* <Layout pageTitle="Explore our online and In-Person training to help you succeed with agile" metaDesc="Explore our Agile courses to foster experiential learning through practical and actionable advice, tips andreal-world examples for building a capable and resilient Organisation."  pageName="courses" > */}
    <Layout pageTitle={myTitle} metaDesc={myDesc} pageName={coursesImg} pageloc="individual" >

    {/* <PageHeader title="Courses" />  */}
    {/* <News /> */}
 
    <NavTwo />

    <CourseArchive title="tryScrum Courses" /> 

    {/* <Seo title="All Courses" /> */}
    {/* <Bio /> */}

    {/* <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          aria-label="Search"
          placeholder="Type to filter ..."
          onChange={handleInputChange}
        />
      </div> */}
 
      {/* <Chat title={returned} /> */}

    <section className="course-one course-page">
      <div className="container">
        <div className="row">  


    {/* <ol style={{ listStyle: `none` }}> */}

      {/* Below code is made just to hide bundle course in live site */}
      {returned.map(post => { 

      // {returned.filter(post => post.uri != "/bundle-courses/").map(post => {
 

       const title = post.title;
       const uri = post.uri;
       const media = post.featuredImage.node.mediaItemUrl
       console.log("post", post);

       return (
    
          <div className="col-lg-4">
         
            <div className="course-one__single">
              <div className="course-one__image">

                  {/* <img src={media} alt="" style={{ width: 350, height: 220 }} /> */}
                  <Link to={uri}>
                    <img src={media} alt="Course Image" />
                  </Link>
                <i className="far fa-heart"></i>
              </div>
              
              <div className="course-one__content">
                {/* <a href="#none" className="course-one__category">
                  development
                </a> */}
                
                {/* <div className="course-one__admin"> */}
               
                  {/* <img src={team1} alt="" /> */}

                  {/* by <Link to="/teacher-details">Lou Guerrero</Link> */}
                  {/* by {post.acfcoursePage.course1.trainer} */}
                
               

                
                  <Link to={uri}>
                    <h1 className="course-one__title"> 
                    
                      {post.title}
                    </h1>  
                  </Link>
               
                <div className="course-one__stars">
                  <span className="course-one__stars-wrap">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                  <span className="course-one__count">
                  <a href={post.acfcoursePage.options.trustPilotRating} className="course-one__category" target="__blank">
                                     TrustPilot Rating
                  </a>    
                  </span>
                  {/* <span className="course-one__count">4.8</span>
                  <span className="course-one__stars-count">250</span> */}
                </div>
                <div className="course-one__meta">
                  {/* <a href="#">
                    <i className="far fa-clock"></i> 2 Hours
                  </a> */}
                  {/* <a href="/course-details">
                    <i className="far fa-folder-open"></i> 6 Lectures
                  </a>
                  <a href="/course-details">$18</a> */}
                </div>
                  
                <a href={uri} >
                  <p className="course-one__link_course"> 
                    Read About Course
                  </p>
                </a>
              </div>
            </div>
          </div>
       

          // <ol style={{ listStyle: `none` }}>          
          // <section className="about-prokanban">        
          //   <div className="container">
          //     <div className="row">

          //         <div className="col-lg-4">
          //         <div className="blog-one__single">

          //           <div className="blog-one__image">

          //               <img src={media} alt="" style={{ width: 370, height: 300 }} /> 


          //           </div>

          //           <div className="blog-one__content text-center">

          //             <h2 className="blog-one__title">
          //               <Link to={uri}>
          //                 <span itemProp="headline">{parse(title)}</span>
          //               </Link>
          //             </h2>
          //             <p className="blog-one__text">
          //               <section itemProp="description">{parse(post.excerpt)}</section>
          //             </p>
          //             <Link to={uri} itemProp="url" className="blog-one__link">
          //             Read More
          //             </Link>
          //           </div>
          //         </div>
          //       </div>
          //       </div>
          //     </div>  
          //   </section>     
          // </ol>    
                
        
            )
          })}
          </div>
          </div>
        </section>
   {/* </ol> */}

   <Footer />
   </Layout>
   
 </>



  )

}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressCourse {
    allWpPost {
        nodes {
          uri
          title
          excerpt
          id
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          acfcoursePage {
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
              time1
              trainer
              url
            }
          }
        }
      }
  }
`
