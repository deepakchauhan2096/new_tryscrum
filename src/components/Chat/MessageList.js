import React from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";
import { withPrefix, Link } from "gatsby";
import Helmet from "react-helmet";

import "./style.css";
import "./townscript.css";

ReactModal.setAppElement("#___gatsby");

const customStyles = {
  content: {
    top: "60%",
    left: "50%",
    // right: 'auto',
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.renderMessages = this.renderMessages.bind(this);
    this.calleventbrite = this.calleventbrite.bind(this);
    this.state = {
      isModalOpen: false,
      isModalOpen1: false,
      isModalOpen2: false,
      isModalOpen3: false,
      isModalOpen4: false,
      isModalOpen5: false,

      url: "",

      // Details Button State Below
      isDetailOpen: false,

      statepageurl: "",
      statetitle: "",
      statecertificate: "",
      statecertificationBody: "",
      statecurriculum: "",
      stateduration: "",
      statefeeStructure: "",
      stateguidlineUrl: "",
      stateincluded: "",
      stateinstructions:"",
      statethecourse:"",
      statewhoCanAttend:"",
      statewhy: "",

      // Event-Brite
      eventStateId: '',

    };
  }

  // handleModalOpen = (event) => {
  //   console.log("handleModalOpen: ", event);
  //   this.setState({ isModalOpen: true });
  //   document.body.style.overflow = "hidden";
  // };

  handleModalClose = (event) => {
    // console.log('handleModalClose: ', event);
    this.setState({ isModalOpen: false });
    document.body.style.overflow = "unset";
  };

  // handleDetailOpen = (event) => {
  //   console.log("handleDetailOpen: ", event);
  //   this.setState({ isDetailOpen: true });
  //   document.body.style.overflow = "hidden";
  // };

  handleDetailClose = (event) => {
    // console.log("handleDetailClose: ", event);
    this.setState({ isDetailOpen: false });
    document.body.style.overflow = "unset";
  };

  // handleModalOpen1 = (event) => {
  //   //console.log("handleModalOpen1: ", event);
  //   this.setState({ isModalOpen1: true });
  //   document.body.style.overflow = "hidden";
  // };

  // handleModalClose1 = (event) => {
  //   // console.log('handleModalOpen: ', event);
  //   this.setState({ isModalOpen1: false });
  //   document.body.style.overflow = "unset";
  // };

  // handleModalOpen2 = (event) => {
  //   // console.log('handleModalOpen: ', event);
  //   this.setState({ isModalOpen2: true });
  //   document.body.style.overflow = "hidden";
  // };

  // handleModalClose2 = (event) => {
  //   // console.log('handleModalOpen: ', event);
  //   this.setState({ isModalOpen2: false });
  //   document.body.style.overflow = "unset";
  // };

  // handleModalOpen3 = (event) => {
  //   // console.log('handleModalOpen: ', event);
  //   this.setState({ isModalOpen3: true });
  //   document.body.style.overflow = "hidden";
  // };

  // handleModalClose3 = (event) => {
  //   // console.log('handleModalOpen: ', event);
  //   this.setState({ isModalOpen3: false });
  //   document.body.style.overflow = "unset";
  // };

  // handleModalOpen4 = (event) => {
  //   // console.log('handleModalOpen: ', event);
  //   this.setState({ isModalOpen3: true });
  //   document.body.style.overflow = "hidden";
  // };

  // handleModalClose4 = (event) => {
  //   // console.log('handleModalOpen: ', event);
  //   this.setState({ isModalOpen3: false });
  //   document.body.style.overflow = "unset";
  // };

  // handleModalOpen5 = (event) => {
  //   // console.log('handleModalOpen: ', event);
  //   this.setState({ isModalOpen3: true });
  //   document.body.style.overflow = "hidden";
  // };

  // handleModalClose5 = (event) => {
  //   // console.log('handleModalOpen: ', event);
  //   this.setState({ isModalOpen3: false });
  //   document.body.style.overflow = "unset";
  // };

  handleEnroll = (url, isModalOpen) => {

    this.setState({ url: url, isModalOpen: isModalOpen });
    document.body.style.overflow = "hidden";
  
  }

  eventBrite = (eventId) => {
    //this.setState({ eventStateId: eventId.substring(1) });
    //console.log("Eventbrite: ", this.state.eventStateId);

    this.setState({ eventStateId: eventId.substring(1) }, () => {
      this.calleventbrite();
    });
  }

  calleventbrite() {

    // var exampleCallback = function() {
    //   console.log("Order complete!");
    // }

    window.EBWidgets.createWidget({
      widgetType: "checkout",
      eventId: this.state.eventStateId,
      modal: true,
      modalTriggerElementId: "example-widget-trigger",
    })

  }

  handleDetail = (statepageurl, statetitle, statecertificate, statecertificationBody, statecurriculum, stateduration, statefeeStructure, stateguidlineUrl, stateincluded, stateinstructions, statethecourse, statewhoCanAttend, statewhy) => {
    
    this.setState({
      statepageurl: statepageurl,
      statetitle: statetitle,
      statecertificate: statecertificate,
      statecertificationBody: statecertificationBody,
      statecurriculum: statecurriculum,
      stateduration: stateduration,
      statefeeStructure: statefeeStructure,
      stateguidlineUrl: stateguidlineUrl,
      stateincluded: stateincluded,
      stateinstructions: stateinstructions,
      statethecourse: statethecourse,
      statewhoCanAttend: statewhoCanAttend,
      statewhy: statewhy,

      isDetailOpen: true

    })
    document.body.style.overflow = "hidden";
    // console.log("In handleDetail Value of statepageurl: ", statepageurl);
    // console.log("In handleDetail Value of isDetailOpen: ", this.state.isDetailOpen);
  }

  render() {
    // console.log("on message.js file", this.props.messages);
    // console.log(this.props.messages);

    return (
      <div className="messages">
        {this.renderMessages()}
        <div
          ref={(el) => {
            this.messagesEnd = el;
          }}
        ></div>
      </div>
    );
  }

  scrollToBottom() {
    // const node = ReactDOM.findDOMNode(this.messagesEnd);
    // node.scrollIntoView({ behavior: "smooth" });
    var element = document.getElementById("gatsby-focus-wrapper");
    element.scrollIntoView({ behavior: "smooth" });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  getUrl(value){

    if (value.charAt(0) !== "E" && value.charAt(0) !== "e" && value.charAt(8) !== "f" ) {
        return (
          <td>
            <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={() =>
                    this.handleEnroll(value, true) 
                  }
                >
                Enroll
            </button>
          </td>
        )
    }

    if (value.charAt(8) === "f" ) {
      return (
        <td>
            <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={() =>
                    window.open(value, "_blank")
                  }
                >
                Enroll
            </button>
          </td>
      )
    }
    
  }

  renderMessages() {
    
    // console.log("Messages data is ",this.props.messages);

    return (
      <div className="table-responsive">
        <table className="table borderless table-hover table-sm">
          <thead
            style={{
              backgroundColor: "white",
              color: "red",
              fontWeight: "500",
            }}
          >
            <tr>
              <th scope="col">Date</th>
              {/* <th scope="col">Time</th> */}
              <th scope="col">Description</th>
              <th scope="col">Location</th>
              <th scope="col">Price</th>
              <th scope="col">Trainer</th>
              <th scope="col">Spot</th>
              <th scope="col">Details</th>  
            </tr>
          </thead>

          <tbody style={{fontWeight:"bolder"}}>
            {this.props.messages.map((msg) => {
              // debugger
              // console.log("inside msg", msg);
              return (
                <>
                {!msg.acfcoursePage.course1.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course1.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course1.date1}
                        <br />
                        {msg.acfcoursePage.course1.time1}
                      </th>

                      <td>{msg.title}</td> 

                      <td>{msg.acfcoursePage.course1.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course1.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course1.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course1.trainer}</td>

                      {/* <td> */}

                      { (msg.acfcoursePage.course1.url).charAt(0) == "E" || (msg.acfcoursePage.course1.url).charAt(0) == "e" ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course1.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          this.getUrl(msg.acfcoursePage.course1.url)

                      )} 

                      {/* { (msg.acfcoursePage.course1.url).charAt(0) == "E" || (msg.acfcoursePage.course1.url).charAt(0) == "e" ? (

                          <td>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                id="example-widget-trigger"
                                onClick={() =>
                                  this.eventBrite(msg.acfcoursePage.course1.url) 
                                }
                              >
                                Enroll
                            </button> 

                          </td>

                          ) : (

                            <td>
                               <button
                                type="submit"
                                className="btn btn-danger"
                                onClick={() =>
                                  this.handleEnroll(msg.acfcoursePage.course1.url, true) 
                                }
                              >
                              Enroll
                            </button>

                            </td>

                      )} */}






                        {/* <Link
                          onClick={this.handleModalOpen}
                        >

                          <button
                            type="submit"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#enroll1"
                            onClick={() =>
                              this.handleEnroll(msg.acfcoursePage.course1.url) 
                            }
                          >
                            Enroll
                          </button>

                        </Link> */}


                        

                          {/* <button
                            type="submit"
                            className="btn btn-danger"
                            onClick={() =>
                              this.handleEnroll(msg.acfcoursePage.course1.url, true) 
                            }
                          >
                            Enroll
                          </button> */}


                      {/* </td> */}

                      <td>

                        {/* <Link
                            onClick={this.handleDetailOpen}
                          >
                          <button
                            type="submit"
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#detail1"
                            onClick={() =>
                              this.handleDetail(msg.uri, msg.title, msg.acfcoursePage.options.certificate, msg.acfcoursePage.options.certificationBody, msg.acfcoursePage.options.curriculum, msg.acfcoursePage.options.duration, msg.acfcoursePage.options.feeStructure, msg.acfcoursePage.options.guidlineUrl, msg.acfcoursePage.options.included, msg.acfcoursePage.options.instructions, msg.acfcoursePage.options.thecourse, msg.acfcoursePage.options.whoCanAttend, msg.acfcoursePage.options.why )
                            }
                          >
                            Details
                          </button>
                        </Link> */}

                       
                       {/* <Link
                          onClick={this.handleDetailOpen}
                        >  */}

                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() =>
                              this.handleDetail(msg.uri, msg.title, msg.acfcoursePage.options.certificate, msg.acfcoursePage.options.certificationBody, msg.acfcoursePage.options.curriculum, msg.acfcoursePage.options.duration, msg.acfcoursePage.options.feeStructure, msg.acfcoursePage.options.guidlineUrl, msg.acfcoursePage.options.included, msg.acfcoursePage.options.instructions, msg.acfcoursePage.options.thecourse, msg.acfcoursePage.options.whoCanAttend, true )
                            }
                          >
                            Details
                          </button> 
                         

                        {/* </Link>  */}

                      </td> 

                    </tr>
                  )}

                  {/*Table data from different post types*/}

                  {/* {!msg.tabledata.tableDescription.date ? (
                    ""
                  ) : (
                    <tr key={msg.tabledata.tableDescription.url}>
                      <th scope="row">
                        {msg.tabledata.tableDescription.date}
                        <br />
                        {msg.tabledata.tableDescription.time}
                      </th>

                      <td>{msg.tabledata.tableDescription.description}</td>
                      <td>{msg.tabledata.tableDescription.location}</td>
                      <td>
                        <strike>
                          {msg.tabledata.tableDescription.regularPrice}
                        </strike>
                        <br />
                        {msg.tabledata.tableDescription.salePrice}
                      </td>
                      <td>{msg.tabledata.tableDescription.trainer}</td>
                      <td>
                        <Link
                          to="#table-responsive"
                          onClick={this.handleModalOpen}
                        >
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() =>
                              this.handleEnroll(msg.tabledata.tableDescription.url)
                            }
                          >
                            Enroll
                          </button>
                        </Link>
                      </td>
                    </tr>
                  )} */}

                {!msg.acfcoursePage.course2.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course2.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course2.date1}
                        <br />
                        {msg.acfcoursePage.course2.time1}
                      </th>

                      <td>{msg.title}</td> 

                      <td>{msg.acfcoursePage.course2.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course2.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course2.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course2.trainer}</td>

                      { (msg.acfcoursePage.course2.url).charAt(0) == "E" || (msg.acfcoursePage.course2.url).charAt(0) == "e" ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course2.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          this.getUrl(msg.acfcoursePage.course2.url)

                        )} 

                      {/* { (msg.acfcoursePage.course2.url).charAt(0) == "E" || (msg.acfcoursePage.course2.url).charAt(0) == "e"  ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course2.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          <td>
                            <button
                              type="submit"
                              className="btn btn-danger"
                              onClick={() =>
                                this.handleEnroll(msg.acfcoursePage.course2.url, true) 
                              }
                            >
                            Enroll
                          </button>

                          </td>

                        )} */}

                      <td>

                          <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={() =>
                                  this.handleDetail(msg.uri, msg.title, msg.acfcoursePage.options.certificate, msg.acfcoursePage.options.certificationBody, msg.acfcoursePage.options.curriculum, msg.acfcoursePage.options.duration, msg.acfcoursePage.options.feeStructure, msg.acfcoursePage.options.guidlineUrl, msg.acfcoursePage.options.included, msg.acfcoursePage.options.instructions, msg.acfcoursePage.options.thecourse, msg.acfcoursePage.options.whoCanAttend, true )
                                }
                              >
                                Details
                          </button> 
                     

                      </td> 

                    </tr>

                    
                  )}

                      

                  {/* {!msg.tabledata.tableDescription2.date ? (
                    ""
                  ) : (
                    <tr key={msg.tabledata.tableDescription2.url}>
                      <th scope="row">
                        {msg.tabledata.tableDescription2.date}
                        <br />
                        {msg.tabledata.tableDescription2.time}
                      </th>

                      <td>{msg.tabledata.tableDescription2.description}</td>
                      <td>{msg.tabledata.tableDescription2.location}</td>
                      <td>
                        <strike>
                          {msg.tabledata.tableDescription2.regularPrice}
                        </strike>
                        <br />

                        {msg.tabledata.tableDescription2.salePrice}
                      </td>
                      <td>{msg.tabledata.tableDescription2.trainer}</td>
                      <td>
                        <Link
                          to="#table-responsive"
                          onClick={this.handleModalOpen1}
                        >
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() =>
                              this.handleEnroll(msg.tabledata.tableDescription2.url)
                            }
                          >
                            Enroll
                          </button>
                        </Link>
                      </td>

                        
                    </tr>
                  )} */}

                  {!msg.acfcoursePage.course3.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course3.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course3.date1}
                        <br />
                        {msg.acfcoursePage.course3.time1}
                      </th>

                      <td>{msg.title}</td> 

                      <td>{msg.acfcoursePage.course3.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course3.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course3.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course3.trainer}</td>

                      { (msg.acfcoursePage.course3.url).charAt(0) == "E" || (msg.acfcoursePage.course3.url).charAt(0) == "e" ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course3.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          this.getUrl(msg.acfcoursePage.course3.url)

                        )} 


                      {/* { (msg.acfcoursePage.course3.url).charAt(0) == "E" || (msg.acfcoursePage.course3.url).charAt(0) == "e"  ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course3.url) 
                              }
                            >
                              Enroll 
                          </button> 

                        </td>

                        ) : (

                          <td>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                onClick={() =>
                                  this.handleEnroll(msg.acfcoursePage.course3.url, true) 
                                }
                              >
                                Enroll
                            </button>

                          </td>

                        )} */}

                      {/* <td>
                          <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={() =>
                                  this.handleEnroll(msg.acfcoursePage.course3.url, true) 
                                }
                              >
                                Enroll
                            </button>

                      </td> */}

                      <td>

                          <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={() =>
                                  this.handleDetail(msg.uri, msg.title, msg.acfcoursePage.options.certificate, msg.acfcoursePage.options.certificationBody, msg.acfcoursePage.options.curriculum, msg.acfcoursePage.options.duration, msg.acfcoursePage.options.feeStructure, msg.acfcoursePage.options.guidlineUrl, msg.acfcoursePage.options.included, msg.acfcoursePage.options.instructions, msg.acfcoursePage.options.thecourse, msg.acfcoursePage.options.whoCanAttend, true )
                                }
                              >
                                Details
                          </button> 
                     

                      </td> 

                    </tr>
                  )}

                  {/* {!msg.tabledata.tableDescription3.date ? (
                    ""
                  ) : (
                    <tr key={msg.tabledata.tableDescription3.url}>
                      <th scope="row">
                        {msg.tabledata.tableDescription3.date}
                        <br />
                        {msg.tabledata.tableDescription3.time}
                      </th>

                      <td>{msg.tabledata.tableDescription3.description}</td>
                      <td>{msg.tabledata.tableDescription3.location}</td>
                      <td>
                        <strike>
                          {msg.tabledata.tableDescription3.regularPrice}
                        </strike>
                        <br />

                        {msg.tabledata.tableDescription3.salePrice}
                      </td>
                      <td>{msg.tabledata.tableDescription3.trainer}</td>
                      <td>
                        <Link
                          to="#table-responsive"
                          onClick={this.handleModalOpen2}
                        >
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() =>
                              this.handleEnroll(msg.tabledata.tableDescription3.url)
                            }
                          >
                            Enroll
                          </button>
                        </Link>
                      </td>
                    </tr>
                  )} */}

                  {!msg.acfcoursePage.course4.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course4.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course4.date1}
                        <br />
                        {msg.acfcoursePage.course4.time1}
                      </th>

                      <td>{msg.title}</td> 

                      <td>{msg.acfcoursePage.course4.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course4.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course4.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course4.trainer}</td>

                      { (msg.acfcoursePage.course4.url).charAt(0) == "E" || (msg.acfcoursePage.course4.url).charAt(0) == "e" ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course4.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          this.getUrl(msg.acfcoursePage.course4.url)

                        )} 

                      {/* { (msg.acfcoursePage.course4.url).charAt(0) == "E" || (msg.acfcoursePage.course4.url).charAt(0) == "e" ? (

                          <td>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                id="example-widget-trigger"
                                onClick={() =>
                                   this.eventBrite(msg.acfcoursePage.course4.url) 
                                }
                              >
                                Enroll 
                            </button> 

                          </td>

                          ) : (

                            <td>
                              <button
                                  type="submit"
                                  className="btn btn-danger"
                                  onClick={() =>
                                    this.handleEnroll(msg.acfcoursePage.course4.url, true) 
                                  }
                                >
                                  Enroll
                              </button>

                            </td>

                      )} */}

                      <td>

                          <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={() =>
                                  this.handleDetail(msg.uri, msg.title, msg.acfcoursePage.options.certificate, msg.acfcoursePage.options.certificationBody, msg.acfcoursePage.options.curriculum, msg.acfcoursePage.options.duration, msg.acfcoursePage.options.feeStructure, msg.acfcoursePage.options.guidlineUrl, msg.acfcoursePage.options.included, msg.acfcoursePage.options.instructions, msg.acfcoursePage.options.thecourse, msg.acfcoursePage.options.whoCanAttend, true )
                                }
                              >
                                Details
                          </button> 
                     

                      </td> 

                    </tr>
                  )}

                  
                  

                  {/* {!msg.tabledata.tableDescription4.date ? (
                    ""
                  ) : (
                    <tr key={msg.tabledata.tableDescription4.url}>
                      <th scope="row">
                        {msg.tabledata.tableDescription4.date}
                        <br />
                        {msg.tabledata.tableDescription4.time}
                      </th>

                      <td>{msg.tabledata.tableDescription4.description}</td>
                      <td>{msg.tabledata.tableDescription4.location}</td>
                      <td>
                        <strike>
                          {msg.tabledata.tableDescription4.regularPrice}
                        </strike>
                        <br />

                        {msg.tabledata.tableDescription4.salePrice}
                      </td>
                      <td>{msg.tabledata.tableDescription4.trainer}</td>
                      <td>
                        <Link
                          to="#table-responsive"
                          onClick={this.handleModalOpen3}
                        >
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() =>
                              this.handleEnroll(msg.tabledata.tableDescription4.url)
                            }
                          >
                            Enroll
                          </button>
                        </Link>
                      </td>
                    </tr>
                  )} */}

                  {!msg.acfcoursePage.course5.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course5.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course5.date1}
                        <br />
                        {msg.acfcoursePage.course5.time1}
                      </th>

                      <td>{msg.title}</td> 

                      <td>{msg.acfcoursePage.course5.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course5.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course5.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course5.trainer}</td>

                      { (msg.acfcoursePage.course5.url).charAt(0) == "E" || (msg.acfcoursePage.course5.url).charAt(0) == "e" ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course5.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          this.getUrl(msg.acfcoursePage.course5.url)

                        )} 

                      {/* { (msg.acfcoursePage.course5.url).charAt(0) == "E" || (msg.acfcoursePage.course5.url).charAt(0) == "e" ? (

                          <td>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                id="example-widget-trigger"
                                onClick={() =>
                                   this.eventBrite(msg.acfcoursePage.course5.url) 
                                }
                              >
                                Enroll
                            </button> 

                          </td>

                          ) : (

                            <td>
                              <button
                                  type="submit"
                                  className="btn btn-danger"
                                  onClick={() =>
                                    this.handleEnroll(msg.acfcoursePage.course5.url, true) 
                                  }
                                >
                                  Enroll
                              </button>

                            </td>

                      )} */}

                      <td>

                          <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={() =>
                                  this.handleDetail(msg.uri, msg.title, msg.acfcoursePage.options.certificate, msg.acfcoursePage.options.certificationBody, msg.acfcoursePage.options.curriculum, msg.acfcoursePage.options.duration, msg.acfcoursePage.options.feeStructure, msg.acfcoursePage.options.guidlineUrl, msg.acfcoursePage.options.included, msg.acfcoursePage.options.instructions, msg.acfcoursePage.options.thecourse, msg.acfcoursePage.options.whoCanAttend, true )
                                }
                              >
                                Details
                          </button> 
                     

                      </td> 

                    </tr>
                  )}


                  {/* {!msg.tabledata.tableDescription5.date ? (
                    ""
                  ) : (
                    <tr key={msg.tabledata.tableDescription5.url}>
                      <th scope="row">
                        {msg.tabledata.tableDescription5.date}
                        <br />
                        {msg.tabledata.tableDescription5.time}
                      </th>

                      <td>{msg.tabledata.tableDescription5.description}</td>
                      <td>{msg.tabledata.tableDescription5.location}</td>
                      <td>
                        <strike>
                          {msg.tabledata.tableDescription5.regularPrice}
                        </strike>
                        <br />

                        {msg.tabledata.tableDescription5.salePrice}
                      </td>
                      <td>{msg.tabledata.tableDescription5.trainer}</td>
                      <td>
                        <Link
                          to="#table-responsive"
                          onClick={this.handleModalOpen4}
                        >
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() =>
                              this.handleEnroll(msg.tabledata.tableDescription5.url)
                            }
                          >
                            Enroll
                          </button>
                        </Link>
                      </td>
                    </tr>
                  )} */}

                  {!msg.acfcoursePage.course6.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course6.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course6.date1}
                        <br />
                        {msg.acfcoursePage.course6.time1}
                      </th>

                      <td>{msg.title}</td> 

                      <td>{msg.acfcoursePage.course6.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course6.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course6.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course6.trainer}</td>

                      { (msg.acfcoursePage.course6.url).charAt(0) == "E" || (msg.acfcoursePage.course6.url).charAt(0) == "e" ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course6.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          this.getUrl(msg.acfcoursePage.course6.url)

                        )} 

                      {/* { (msg.acfcoursePage.course6.url).charAt(0) == "E" || (msg.acfcoursePage.course6.url).charAt(0) == "e" ? (

                          <td>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                id="example-widget-trigger"
                                onClick={() =>
                                   this.eventBrite(msg.acfcoursePage.course6.url) 
                                }
                              >
                                Enroll 
                            </button> 

                          </td>

                          ) : (

                            <td>
                              <button
                                  type="submit"
                                  className="btn btn-danger"
                                  onClick={() =>
                                    this.handleEnroll(msg.acfcoursePage.course6.url, true) 
                                  }
                                >
                                  Enroll
                              </button>

                            </td>

                      )} */}

                      <td>

                          <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={() =>
                                  this.handleDetail(msg.uri, msg.title, msg.acfcoursePage.options.certificate, msg.acfcoursePage.options.certificationBody, msg.acfcoursePage.options.curriculum, msg.acfcoursePage.options.duration, msg.acfcoursePage.options.feeStructure, msg.acfcoursePage.options.guidlineUrl, msg.acfcoursePage.options.included, msg.acfcoursePage.options.instructions, msg.acfcoursePage.options.thecourse, msg.acfcoursePage.options.whoCanAttend, true )
                                }
                              >
                                Details
                          </button> 
                     

                      </td> 

                    </tr>
                  )}


                  {/* {!msg.tabledata.tableDescription6.date ? (
                    ""
                  ) : (
                    <tr key={msg.tabledata.tableDescription6.url}>
                      <th scope="row">
                        {msg.tabledata.tableDescription6.date}
                        <br />
                        {msg.tabledata.tableDescription6.time}
                      </th>

                      <td>{msg.tabledata.tableDescription6.description}</td>
                      <td>{msg.tabledata.tableDescription6.location}</td>
                      <td>
                        <strike>
                          {msg.tabledata.tableDescription6.regularPrice}
                        </strike>
                        <br />

                        {msg.tabledata.tableDescription6.salePrice}
                      </td>
                      <td>{msg.tabledata.tableDescription6.trainer}</td>
                      <td>
                        <Link
                          to="#table-responsive"
                          onClick={this.handleModalOpen5}
                        >
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() =>
                              this.handleEnroll(msg.tabledata.tableDescription6.url)
                            }
                          >
                            Enroll
                          </button>
                        </Link>
                      </td>        
                    </tr>
                  )} */}

                  {!msg.acfcoursePage.course7.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course7.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course7.date1}
                        <br />
                        {msg.acfcoursePage.course7.time1}
                      </th>

                      <td>{msg.title}</td> 

                      <td>{msg.acfcoursePage.course7.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course7.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course7.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course7.trainer}</td>

                      { (msg.acfcoursePage.course7.url).charAt(0) == "E" || (msg.acfcoursePage.course7.url).charAt(0) == "e" ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course7.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          this.getUrl(msg.acfcoursePage.course7.url)

                        )} 

                      {/* { (msg.acfcoursePage.course7.url).charAt(0) == "E" || (msg.acfcoursePage.course7.url).charAt(0) == "e" ? (

                          <td>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                id="example-widget-trigger"
                                onClick={() =>
                                   this.eventBrite(msg.acfcoursePage.course7.url) 
                                }
                              >
                                Enroll
                            </button> 

                          </td>

                          ) : (

                            <td>
                              <button
                                  type="submit"
                                  className="btn btn-danger"
                                  onClick={() =>
                                    this.handleEnroll(msg.acfcoursePage.course7.url, true) 
                                  }
                                >
                                  Enroll
                              </button>

                            </td>

                      )} */}

                      <td>

                          <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={() =>
                                  this.handleDetail(msg.uri, msg.title, msg.acfcoursePage.options.certificate, msg.acfcoursePage.options.certificationBody, msg.acfcoursePage.options.curriculum, msg.acfcoursePage.options.duration, msg.acfcoursePage.options.feeStructure, msg.acfcoursePage.options.guidlineUrl, msg.acfcoursePage.options.included, msg.acfcoursePage.options.instructions, msg.acfcoursePage.options.thecourse, msg.acfcoursePage.options.whoCanAttend, true )
                                }
                              >
                                Details
                          </button> 
                     

                      </td> 

                    </tr>
                  )}

                  {!msg.acfcoursePage.course8.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course8.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course8.date1}
                        <br />
                        {msg.acfcoursePage.course8.time1}
                      </th>

                      <td>{msg.title}</td> 

                      <td>{msg.acfcoursePage.course8.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course8.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course8.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course8.trainer}</td>

                      { (msg.acfcoursePage.course8.url).charAt(0) == "E" || (msg.acfcoursePage.course8.url).charAt(0) == "e" ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course8.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          this.getUrl(msg.acfcoursePage.course8.url)

                        )} 

                      {/* { (msg.acfcoursePage.course8.url).charAt(0) == "E" || (msg.acfcoursePage.course8.url).charAt(0) == "e" ? (

                          <td>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                id="example-widget-trigger"
                                onClick={() =>
                                   this.eventBrite(msg.acfcoursePage.course8.url) 
                                }
                              >
                                Enroll
                            </button> 

                          </td>

                          ) : (

                            <td>
                              <button
                                  type="submit"
                                  className="btn btn-danger"
                                  onClick={() =>
                                    this.handleEnroll(msg.acfcoursePage.course8.url, true) 
                                  }
                                >
                                  Enroll
                              </button>

                            </td>

                      )} */}

                      <td>

                          <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={() =>
                                  this.handleDetail(msg.uri, msg.title, msg.acfcoursePage.options.certificate, msg.acfcoursePage.options.certificationBody, msg.acfcoursePage.options.curriculum, msg.acfcoursePage.options.duration, msg.acfcoursePage.options.feeStructure, msg.acfcoursePage.options.guidlineUrl, msg.acfcoursePage.options.included, msg.acfcoursePage.options.instructions, msg.acfcoursePage.options.thecourse, msg.acfcoursePage.options.whoCanAttend, true )
                                }
                              >
                                Details
                          </button> 
                     

                      </td> 

                    </tr>
                  )}

                  {!msg.acfcoursePage.course9.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course9.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course9.date1}
                        <br />
                        {msg.acfcoursePage.course9.time1}
                      </th>

                      <td>{msg.title}</td> 

                      <td>{msg.acfcoursePage.course9.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course9.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course9.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course9.trainer}</td>

                      { (msg.acfcoursePage.course9.url).charAt(0) == "E" || (msg.acfcoursePage.course9.url).charAt(0) == "e" ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course9.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          this.getUrl(msg.acfcoursePage.course9.url)

                        )} 

                      {/* { (msg.acfcoursePage.course9.url).charAt(0) == "E" || (msg.acfcoursePage.course9.url).charAt(0) == "e" ? (

                          <td>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                id="example-widget-trigger"
                                onClick={() =>
                                   this.eventBrite(msg.acfcoursePage.course9.url) 
                                }
                              >
                                Enroll 
                            </button> 

                          </td>

                          ) : (

                            <td>
                              <button
                                  type="submit"
                                  className="btn btn-danger"
                                  onClick={() =>
                                    this.handleEnroll(msg.acfcoursePage.course9.url, true) 
                                  }
                                >
                                  Enroll
                              </button>

                            </td>

                      )} */}

                      <td>

                          <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={() =>
                                  this.handleDetail(msg.uri, msg.title, msg.acfcoursePage.options.certificate, msg.acfcoursePage.options.certificationBody, msg.acfcoursePage.options.curriculum, msg.acfcoursePage.options.duration, msg.acfcoursePage.options.feeStructure, msg.acfcoursePage.options.guidlineUrl, msg.acfcoursePage.options.included, msg.acfcoursePage.options.instructions, msg.acfcoursePage.options.thecourse, msg.acfcoursePage.options.whoCanAttend, true )
                                }
                              >
                                Details
                          </button> 
                     

                      </td> 

                    </tr>
                  )}

                  {!msg.acfcoursePage.course10.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course10.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course10.date1}
                        <br />
                        {msg.acfcoursePage.course10.time1}
                      </th>

                      <td>{msg.title}</td> 

                      <td>{msg.acfcoursePage.course10.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course10.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course10.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course10.trainer}</td>

                      { (msg.acfcoursePage.course10.url).charAt(0) == "E" || (msg.acfcoursePage.course10.url).charAt(0) == "e" ? (

                      <td>
                        <button
                            type="submit"
                            className="btn btn-danger"
                            id="example-widget-trigger"
                            onClick={() =>
                              this.eventBrite(msg.acfcoursePage.course10.url) 
                            }
                          >
                            Enroll
                        </button> 

                      </td>

                      ) : (

                        this.getUrl(msg.acfcoursePage.course10.url)

                      )} 

                      {/* { (msg.acfcoursePage.course10.url).charAt(0) == "E" || (msg.acfcoursePage.course10.url).charAt(0) == "e" ? (

                          <td>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                id="example-widget-trigger"
                                onClick={() =>
                                   this.eventBrite(msg.acfcoursePage.course10.url) 
                                }
                              >
                                Enroll 
                            </button> 

                          </td>

                          ) : (

                            <td>
                              <button
                                  type="submit"
                                  className="btn btn-danger"
                                  onClick={() =>
                                    this.handleEnroll(msg.acfcoursePage.course10.url, true) 
                                  }
                                >
                                  Enroll
                              </button>

                            </td>

                      )} */}

                      <td>

                          <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={() =>
                                  this.handleDetail(msg.uri, msg.title, msg.acfcoursePage.options.certificate, msg.acfcoursePage.options.certificationBody, msg.acfcoursePage.options.curriculum, msg.acfcoursePage.options.duration, msg.acfcoursePage.options.feeStructure, msg.acfcoursePage.options.guidlineUrl, msg.acfcoursePage.options.included, msg.acfcoursePage.options.instructions, msg.acfcoursePage.options.thecourse, msg.acfcoursePage.options.whoCanAttend, true )
                                }
                              >
                                Details
                          </button> 
                     

                      </td> 

                    </tr>
                  )}

                  {/* latest commented Below */}

                  <ReactModal
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this.handleModalClose}
                    contentLabel="Buy Course"
                    style={customStyles}
                    // className="Modal"
                    // overlayClassName="Overlay"
                  >
                    <div>
                      <button
                        style={{ position: "absolute", top: "0", right: "0" }}
                        onClick={this.handleModalClose}
                      >
                        [X]
                      </button>
                      <iframe
                        id="ts-iframe"
                        src={this.state.url}
                        height="600"
                        width="100%"
                      >

                     
                       
                      </iframe>
                    </div>
                  </ReactModal>

                  {/* <Helmet>

                        <script>
                          {`
                            console.log("value of state variable",${this.state.eventStateId})

                            var exampleCallback = function() {
                              console.log("Order complete!");
                            }
                          
                            window.EBWidgets.createWidget({
                              widgetType: "checkout",
                              eventId: ${this.state.eventStateId},
                              modal: true,
                              modalTriggerElementId: "example-widget-trigger",
                              onOrderComplete: exampleCallback
                            })
                          `}
                        </script>
   

                  </Helmet> */}

                  {/* Details PopUp */}
                  {/* <div>  */}

                  {/* <button
                          style={{ position: "absolute", top: "0", right: "0", zIndex: "1500" }}
                          onClick={this.handleDetailClose}
                        >
                          [X]
                  </button> */}

                  <ReactModal
                    isOpen={this.state.isDetailOpen}
                    onRequestClose={this.handleDetailClose}
                    contentLabel="Buy Course"
                    //style={customStyles}
                    className="Modal"
                    overlayClassName="Overlay"
                  >
                      {/* <button onClick={this.handleDetailClose}>Close</button> */}
                      <div className="modal-body">

                      <h5 className="modal-title" style={{marginBottom:"10px", color:"red"}}> {this.state.statetitle}</h5>
                      
                       <h5 style={{color:"red"}}>Course Details </h5>
                       <p dangerouslySetInnerHTML={{__html: this.state.statethecourse}}/>

                       <h5 style={{color:"red"}}>Certification </h5>
                       <p dangerouslySetInnerHTML={{__html: this.state.statecertificate}}/> 


                       {/* <h5 style={{color:"red"}}>Course Fee</h5>
                       <p dangerouslySetInnerHTML={{__html: this.state.statefeeStructure}}/> */}

                       <h5 style={{color:"red"}}>Virtual class Instructions</h5>
                       <p dangerouslySetInnerHTML={{__html: this.state.stateinstructions}}/>

                       <a href={this.state.statepageurl} target="_blank">More Details</a>
                       
                       </div>    
                       <div class="text-center">
                         <button className="btn btn-danger" onClick={this.handleDetailClose}>Close</button> 
                       </div>
                  </ReactModal>  

                  {/* </div>  */}

                  {/* <ReactModal
                    isOpen={this.state.isModalOpen1}
                    onRequestClose={this.handleModalClose1}
                    contentLabel="Buy Course"
                    style={customStyles}
                  >
                    <div>
                      <button
                        style={{ position: "absolute", top: "0", right: "0" }}
                        onClick={this.handleModalClose1}
                      >
                        [X]
                      </button>
                      <iframe
                        id="ts-iframe"
                        src={this.state.url}
                        // src={msg.tabledata.tableDescription2.url}
                        frameborder="0"
                        height="600"
                        width="80%"
                      ></iframe>
                    </div>
                  </ReactModal> */}

                  {/* <ReactModal
                    isOpen={this.state.isModalOpen2}
                    onRequestClose={this.handleModalClose2}
                    contentLabel="Buy Course"
                    style={customStyles}
                  >
                    <div>
                      <button
                        style={{ position: "absolute", top: "0", right: "0" }}
                        onClick={this.handleModalClose2}
                      >
                        [X]
                      </button>
                      <iframe
                        id="ts-iframe"
                        src={this.state.url}
                        // src={msg.tabledata.tableDescription3.url}
                        frameborder="0"
                        height="600"
                        width="80%"
                      ></iframe>
                    </div>
                  </ReactModal> */}

                  {/* <ReactModal
                    isOpen={this.state.isModalOpen3}
                    onRequestClose={this.handleModalClose3}
                    contentLabel="Buy Course"
                    style={customStyles}
                  >
                    <div>
                      <button
                        style={{ position: "absolute", top: "0", right: "0" }}
                        onClick={this.handleModalClose3}
                      >
                        [X]
                      </button>
                      <iframe
                        id="ts-iframe"
                        src={this.state.url}
                        // src={msg.tabledata.tableDescription4.url}
                        frameborder="0"
                        height="600"
                        width="80%"
                      ></iframe>
                    </div>
                  </ReactModal> */}

                  {/* <ReactModal
                    isOpen={this.state.isModalOpen4}
                    onRequestClose={this.handleModalClose4}
                    contentLabel="Buy Course"
                    style={customStyles}
                  >
                    <div>
                      <button
                        style={{ position: "absolute", top: "0", right: "0" }}
                        onClick={this.handleModalClose4}
                      >
                        [X]
                      </button>
                      <iframe
                        id="ts-iframe"
                        src={this.state.url}
                        // src={msg.tabledata.tableDescription5.url}
                        frameborder="0"
                        height="600"
                        width="80%"
                      ></iframe>
                    </div>
                  </ReactModal> */}

                  {/* <ReactModal
                    isOpen={this.state.isModalOpen5}
                    onRequestClose={this.handleModalClose5}
                    contentLabel="Buy Course"
                    style={customStyles}
                  >
                    <div>
                      <button
                        style={{ position: "absolute", top: "0", right: "0" }}
                        onClick={this.handleModalClose5}
                      >
                        [X]
                      </button>
                      <iframe
                        id="ts-iframe"
                        src={this.state.url}
                        // src={msg.tabledata.tableDescription6.url}
                        frameborder="0"
                        height="600"
                        width="80%"
                      ></iframe>
                    </div>
                  </ReactModal> */}



                  {/* latest commented out  */}



                  {/* <ReactModal
                isOpen={this.state.isModalOpen1}
                onRequestClose={this.handleModalClose1}
                contentLabel="Buy Course"
                style={customStyles}
              >
                <div>
                <button style={{position: "absolute", top: "0", right: "0"}} onClick={this.handleModalClose1}>[X]</button>
                <iframe id="ts-iframe" src={msg.acfcoursePage.course2.url} frameborder="0" height="600" width="80%" >
                </iframe>
                </div>
              </ReactModal>
              
              
              
              <ReactModal
                isOpen={this.state.isModalOpen2}
                onRequestClose={this.handleModalClose2}
                contentLabel="Buy Course"
                style={customStyles}
              >
                <div>
                <button style={{position: "absolute", top: "0", right: "0"}} onClick={this.handleModalClose2}>[X]</button>
                <iframe id="ts-iframe" src={msg.acfcoursePage.course3.url} frameborder="0" height="600" width="80%" >
                </iframe>
                </div>
              </ReactModal> 

              <ReactModal
                isOpen={this.state.isModalOpen3}
                onRequestClose={this.handleModalClose3}
                contentLabel="Buy Course"
                style={customStyles}
              >
                <div>
                <button style={{position: "absolute", top: "0", right: "0"}} onClick={this.handleModalClose3}>[X]</button>
                <iframe id="ts-iframe" src={msg.acfcoursePage.course4.url} frameborder="0" height="600" width="80%" >
                </iframe>
                </div>
              </ReactModal>  */}
                </>
              );
            })}
          </tbody>
        </table>

                
         
                    {/* { this.state.isModalOpen ?  */}
                              
                    {/* <div className="modal fade" id="enroll1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> */}
                    {/* <div className="modal hide" style={{cursor:"pointer", overflowY:"auto"}} id="enroll1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" style={{color:"red"}} id="exampleModalLabel">Enroll Now</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">

                          <iframe
                              id="ts-iframe"
                              src={this.state.url}
                              frameborder="0"
                              height="600"
                              width="100%"
                            >

                            </iframe>

                        </div>

                      </div>
                    </div>
                  </div> */}
                  
                 {/* : null } */} 


                  {/* {this.state.isDetailOpen ?  */}

                  {/* <div className="modal fade" id="detail1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> */}
                  {/* <div className="modal hide" style={{cursor:"pointer", overflowY:"auto"}} id="detail1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"> {this.state.statetitle} Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                       
                        <h5 style={{color:"red"}}>Course Details </h5>
                        <p dangerouslySetInnerHTML={{__html: this.state.statethecourse}}/>

                        <h5 style={{color:"red"}}>Certification </h5>
                        <p dangerouslySetInnerHTML={{__html: this.state.statecertificate}}/> */}


                        {/* <h5 style={{color:"red"}}>Course Fee</h5>
                        <p dangerouslySetInnerHTML={{__html: this.state.statefeeStructure}}/> */}

                        {/* <h5 style={{color:"red"}}>Virtual class Instructions</h5>
                        <p dangerouslySetInnerHTML={{__html: this.state.stateinstructions}}/>

                        <h5 style={{color:"red"}}>Why tryScrum</h5>
                        <p dangerouslySetInnerHTML={{__html: this.state.statewhy}}/>
                        
                        </div>
                        
                        </div>
                      </div>
                    </div> */}

                 {/* : null} */}

      </div>
    );
  }

  // MessageList.propTypes = {
  //   messages: PropTypes.arrayOf(
  //     React.PropTypes.shape({
  //       by: PropTypes.string.isRequired,
  //       body: PropTypes.string.isRequired,
  //       time: PropTypes.instanceOf(Date).isRequired
  //     })
  //   )
  // };
}
export default MessageList;
