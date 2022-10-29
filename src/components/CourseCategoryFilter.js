import React from "react";
import "swiper/css/swiper.css";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Carousel } from "react-bootstrap";

const CourseOne = ( props ) => {

  const data = useStaticQuery ( graphql`
    query Category {
        allWpPost {
        nodes {
            categories {
            nodes {
                name
                uri
              }
            }
         title    
         uri
         featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    } 
  `)

 
  if(props.title === "Professional Scrum Master (PSM I)") {  

          return (
            <div>
               
                <div className="text-center">
                    <h1 className="course-details__title">
                        Relevant Courses
                    </h1>
                </div>   
                
        
                <Carousel>
                  {data.allWpPost.nodes.map(value => {
        
                      if(value.uri === "/professional-scrum-master-ii/" || value.uri === "/professional-scrum-with-kanban/" || value.uri === "/icagile/" || value.uri === "/icagile-enterprise-coaching/" || value.uri === "/coaching-agile-transitions/") {
  
                          return ( 
                              <Carousel.Item key={value.uri} interval={2000}>
                                  <Link to={value.uri} itemProp="url" >
        
                                      <img
                                        className="d-block w-70"
                                        src={value.featuredImage.node.mediaItemUrl}
                                        alt="Blogs Images"
                                      />
        
                                  </Link>  
        
                                <Carousel.Caption>

                                </Carousel.Caption>

                                <Link to={value.uri} itemProp="url">
                                  <div className="col text-center">
                                    <button type="button" className="btn btn-danger" >Explore</button>
                                  </div>
                                </Link>
                                
                              </Carousel.Item>
        
                            )}})
                      }                      
                </Carousel>
        

            </div>
          )  
    }

    if(props.title === "Advanced Scrum Master (PSM II)") {  

      return (
        <div>
           
            <div className="text-center">
                <h1 className="course-details__title">
                    Relevant Courses
                </h1>
            </div>   
            
    
            <Carousel>
              {data.allWpPost.nodes.map(value => {
    
                  if(value.uri === "/professional-scrum-master/" || value.uri === "/certified-agile-leadership-combo/" || value.uri === "/icagile/" || value.uri === "/icagile-enterprise-coaching/" || value.uri === "/coaching-agile-transitions/") {

                      return ( 
                          <Carousel.Item key={value.uri} interval={2000}>
                              <Link to={value.uri} itemProp="url" >
    
                                  <img
                                    className="d-block w-100"
                                    src={value.featuredImage.node.mediaItemUrl}
                                    alt="Blogs Images"
                                  />
    
                              </Link>  
    
                            <Carousel.Caption>

                            </Carousel.Caption>

                            <Link to={value.uri} itemProp="url">
                                  <div className="col text-center">
                                    <button type="button" className="btn btn-danger" >Explore</button>
                                  </div>
                            </Link>
                               
                          </Carousel.Item>
    
                        )}})
                  }                      
            </Carousel>
    

        </div>
      )  
  }

  if(props.title === "Professional Scrum Product Owner(PSPO I)") {  

    return (
      <div>
         
          <div className="text-center">
              <h1 className="course-details__title">
                  Relevant Courses
              </h1>
          </div>   
          
  
          <Carousel>
            {data.allWpPost.nodes.map(value => {
  
                if(value.uri === "/professional-scrum-product-owner/" || value.uri === "/professional-scrum-product-owner-advanced/" || value.uri === "/icagile-product-management/" ) {

                    return ( 
                        <Carousel.Item key={value.uri} interval={2000}>
                            <Link to={value.uri} itemProp="url" >
  
                                <img
                                  className="d-block w-100"
                                  src={value.featuredImage.node.mediaItemUrl}
                                  alt="Blogs Images"
                                />
  
                            </Link>  
  
                          <Carousel.Caption>

                          </Carousel.Caption>

                          <Link to={value.uri} itemProp="url">
                                  <div className="col text-center">
                                    <button type="button" className="btn btn-danger" >Explore</button>
                                  </div>
                          </Link>
                               
                        </Carousel.Item>
  
                      )}})
                }                      
          </Carousel>
  
      </div>
    )  
}

  if(props.title === "Advanced Product Owner (PSPO-A)") {  

    return (
      <div>
        
          <div className="text-center">
              <h1 className="course-details__title">
                  Relevant Courses
              </h1>
          </div>   
          

          <Carousel>
            {data.allWpPost.nodes.map(value => {

                if(value.uri === "/professional-scrum-product-owner/" || value.uri === "/icagile-product-management/" || value.uri === "/professional-scrum-with-kanban/" ) {

                    return ( 
                        <Carousel.Item key={value.uri} interval={2000}>
                            <Link to={value.uri} itemProp="url" >

                                <img
                                  className="d-block w-100"
                                  src={value.featuredImage.node.mediaItemUrl}
                                  alt="Blogs Images"
                                />

                            </Link>  

                          <Carousel.Caption>

                          </Carousel.Caption>

                          <Link to={value.uri} itemProp="url">
                                  <div className="col text-center">
                                    <button type="button" className="btn btn-danger" >Explore</button>
                                  </div>
                          </Link>
                               
                        </Carousel.Item>

                      )}
                    })
                }                      
          </Carousel>


      </div>
    )  
  }

  //icp-acc
  if(props.title === "Certified Professional Agile Coaching (ICP-ACC)") {  

    return (
      <div>
        
          <div className="text-center">
              <h1 className="course-details__title">
                  Relevant Courses
              </h1>
          </div>   
          

          <Carousel>
            {data.allWpPost.nodes.map(value => {

                if(value.uri === "/coaching-agile-transitions/" || value.uri === "/icagile-enterprise-coaching/" || value.uri === "/certified-agile-leadership-combo/" ) {

                    return ( 
                        <Carousel.Item key={value.uri} interval={2000}>
                            <Link to={value.uri} itemProp="url" >

                                <img
                                  className="d-block w-100"
                                  src={value.featuredImage.node.mediaItemUrl}
                                  alt="Blogs Images"
                                />

                            </Link>  

                          <Carousel.Caption>

                          </Carousel.Caption>

                          <Link to={value.uri} itemProp="url">
                                  <div className="col text-center">
                                    <button type="button" className="btn btn-danger" >Explore</button>
                                  </div>
                          </Link>
                               
                        </Carousel.Item>

                      )}
                    })
                }                      
          </Carousel>


      </div>
    )  
  }

  //icp-ent
  if(props.title === "Enterprise Transformation(ICP-ENT)") {  

    return (
      <div>
        
          <div className="text-center">
              <h1 className="course-details__title">
                  Relevant Courses
              </h1>
          </div>   
          

          <Carousel>
            {data.allWpPost.nodes.map(value => {

                    if(value.uri === "/coaching-agile-transitions/" || value.uri === "/icagile/" || value.uri === "/certified-agile-leadership-combo/" ) {

                    return ( 
                        <Carousel.Item key={value.uri} interval={2000}>
                            <Link to={value.uri} itemProp="url" >

                                <img
                                  className="d-block w-100"
                                  src={value.featuredImage.node.mediaItemUrl}
                                  alt="Blogs Images"
                                />

                            </Link>  

                          <Carousel.Caption>

                          </Carousel.Caption>

                          <Link to={value.uri} itemProp="url">
                                  <div className="col text-center">
                                    <button type="button" className="btn btn-danger" >Explore</button>
                                  </div>
                          </Link>
                               
                        </Carousel.Item>

                      )}
                    })
                }                      
          </Carousel>


      </div>
    )  
  }

  //icp-cat
  if(props.title === "Coaching Agile Transitions (ICP-CAT)") {  

    return (
      <div>
        
          <div className="text-center">
              <h1 className="course-details__title">
                  Relevant Courses
              </h1>
          </div>   
          

          <Carousel>
            {data.allWpPost.nodes.map(value => {

                    if(value.uri === "/icagile-enterprise-coaching/" || value.uri === "/icagile/" || value.uri === "/certified-agile-leadership-combo/" ) {

                    return ( 
                        <Carousel.Item key={value.uri} interval={2000}>
                            <Link to={value.uri} itemProp="url" >

                                <img
                                  className="d-block w-100"
                                  src={value.featuredImage.node.mediaItemUrl}
                                  alt="Blogs Images"
                                />

                            </Link>  

                          <Carousel.Caption>

                          </Carousel.Caption>

                          <Link to={value.uri} itemProp="url">
                                  <div className="col text-center">
                                    <button type="button" className="btn btn-danger" >Explore</button>
                                  </div>
                          </Link>
                               
                        </Carousel.Item>

                      )}
                    })
                }                      
          </Carousel>


      </div>
    )  
  }

  // PSM
  if(props.title === "Professional  Scrum with Kanban (PSK)") {  

    return (
      <div>
         
          <div className="text-center">
              <h1 className="course-details__title">
                  Relevant Courses
              </h1>
          </div>   
          
  
          <Carousel>
            {data.allWpPost.nodes.map(value => {
  
                if(value.uri === "/professional-scrum-master-ii/" || value.uri === "/professional-scrum-master/" || value.uri === "/icagile/" ) {

                    return ( 
                        <Carousel.Item key={value.uri} interval={2000}>
                            <Link to={value.uri} itemProp="url" >
  
                                <img
                                  className="d-block w-100"
                                  src={value.featuredImage.node.mediaItemUrl}
                                  alt="Blogs Images"
                                />
  
                            </Link>  
  
                          <Carousel.Caption>

                          </Carousel.Caption>

                          <Link to={value.uri} itemProp="url">
                                  <div className="col text-center">
                                    <button type="button" className="btn btn-danger" >Explore</button>
                                  </div>
                          </Link>
                               
                        </Carousel.Item>
  
                      )}})
                }                      
          </Carousel>
  

      </div>
    )  
  }

  // SPS
  if(props.title === "Scaled Professional Scrum (SPS)") {  

    return (
      <div>
         
          <div className="text-center">
              <h1 className="course-details__title">
                  Relevant Courses
              </h1>
          </div>   
          
  
          <Carousel>
            {data.allWpPost.nodes.map(value => {
  
                if(value.uri === "/professional-scrum-master-ii/" || value.uri === "/certified-agile-leadership-combo/" || value.uri === "/professional-scrum-product-owner-advanced/" ) {

                    return ( 
                        <Carousel.Item key={value.uri} interval={2000}>
                            <Link to={value.uri} itemProp="url" >
  
                                <img
                                  className="d-block w-100"
                                  src={value.featuredImage.node.mediaItemUrl}
                                  alt="Blogs Images"
                                />
  
                            </Link>  
  
                          <Carousel.Caption>

                          </Carousel.Caption>
                          
                          <Link to={value.uri} itemProp="url">
                                  <div className="col text-center">
                                    <button type="button" className="btn btn-danger" >Explore</button>
                                  </div>
                          </Link>
                               
                        </Carousel.Item>
  
                      )}})
                }                      
          </Carousel>
  

      </div>
    )  
  }

  // Cal-Combo
  if(props.title === "Certified Agile Leadership for Organization(CAL-O)") {  

    return (
      <div>
         
          <div className="text-center">
              <h1 className="course-details__title">
                  Relevant Courses
              </h1>
          </div>   
          
  
          <Carousel>
            {data.allWpPost.nodes.map(value => {
  
                if(value.uri === "/certified-agile-leadership-essentials/" || value.uri === "/certified-agile-leadership-combo/" ) {

                    return ( 
                        <Carousel.Item key={value.uri} interval={2000}>
                            <Link to={value.uri} itemProp="url" >
  
                                <img
                                  className="d-block w-100"
                                  src={value.featuredImage.node.mediaItemUrl}
                                  alt="Blogs Images"
                                />
  
                            </Link>  
  
                          <Carousel.Caption>

                          </Carousel.Caption>

                          <Link to={value.uri} itemProp="url">
                                  <div className="col text-center">
                                    <button type="button" className="btn btn-danger" >Explore</button>
                                  </div>
                          </Link>
                               
                        </Carousel.Item>
  
                      )}})
                }                      
          </Carousel>
  

      </div>
    )  
  }

  // Cal-E
  if(props.title === "Certified Agile Leadership Essentials(CAL-E)") {  

    return (
      <div>
         
          <div className="text-center">
              <h1 className="course-details__title">
                  Relevant Courses
              </h1>
          </div>   
          
  
          <Carousel>
            {data.allWpPost.nodes.map(value => {
  
                if(value.uri === "/certified-agile-leadership-essentials/" || value.uri === "/certified-agile-leadership-combo/" || value.uri === "certified-agile-leadership-for-teams-cal-t/" ) {

                    return ( 
                        <Carousel.Item key={value.uri} interval={2000}>
                            <Link to={value.uri} itemProp="url" >
  
                                <img
                                  className="d-block w-100"
                                  src={value.featuredImage.node.mediaItemUrl}
                                  alt="Blogs Images"
                                />
  
                            </Link>  
  
                          <Carousel.Caption>

                          </Carousel.Caption>

                          <Link to={value.uri} itemProp="url">
                                  <div className="col text-center">
                                    <button type="button" className="btn btn-danger" >Explore</button>
                                  </div>
                          </Link>

                        </Carousel.Item>
  
                      )}})
                }                      
          </Carousel>
  

      </div>
    )  
  }

  // Cal-O
  if(props.title === "Certified Agile Leadership for Organization(CAL-O)") {  

    return (
      <div>
         
          <div className="text-center">
              <h1 className="course-details__title">
                  Relevant Courses
              </h1>
          </div>   
          
  
          <Carousel>
            {data.allWpPost.nodes.map(value => {
  
                if(value.uri === "/certified-agile-leadership-essentials/" || value.uri === "/certified-agile-leadership-combo/" || value.uri === "certified-agile-leadership-for-teams-cal-t/" ) {

                    return (
                       
                        <Carousel.Item key={value.uri} interval={2000}>
                            <Link to={value.uri} itemProp="url" >
  
                                <img
                                  className="d-block w-100"
                                  src={value.featuredImage.node.mediaItemUrl}
                                  alt="Blogs Images"
                                />
  
                            </Link>  
  
                          <Carousel.Caption>

                          </Carousel.Caption>

                          <Link to={value.uri} itemProp="url">
                                  <div className="col text-center">
                                    <button type="button" className="btn btn-danger" >Explore</button>
                                  </div>
                          </Link>
                               
                        </Carousel.Item>
  
                      )}})
                }                      
          </Carousel>
  

      </div>
    )  
  }

  else {

    return (
      <div>
         
          <div className="text-center">
              <h1 className="course-details__title">
                  Relevant Courses
              </h1>
          </div>   
  
          <Carousel>
            {data.allWpPost.nodes.map(value => {
  
                    return ( 
                        <Carousel.Item key={value.uri} interval={2000}>
                            <Link to={value.uri} itemProp="url" >
  
                                <img
                                  className="d-block w-100"
                                  src={value.featuredImage.node.mediaItemUrl}
                                  alt="Blogs Images"
                                />
  
                            </Link>  
  
                          <Carousel.Caption>

                          </Carousel.Caption>
                          
                          <Link to={value.uri} itemProp="url">
                            <div className="col text-center">
                              <button type="button" className="btn btn-danger" >Explore</button>
                            </div>
                          </Link>
                           
                          </Carousel.Item>


  
                      )})
                }                      
          </Carousel>
  

      </div>
    )  

  }


};


export default CourseOne;
