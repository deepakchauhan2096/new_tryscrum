import React from 'react'

const WhatsAppShare = () => {

    const float = {
        position:"fixed",
        width:"60px",
        height:"60px",
        bottom:"40px",
        left:"30px",
        backgroundColor:"#25d366",
        color:"#FFF",
        borderRadius:"50px",
        textAlign:"center",
        fontSize:"30px",
        boxShadow: "2px 2px 3px #999",
        zIndex:9999999999,
    }
    
   const my_float = {
        marginTop:"16px"
    }


    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
                <a href="https://wa.me/919789490848" style={float} target="_blank">
                    <i className="fa fa-whatsapp" style={my_float}></i>
                </a>
        </div>
    )
}

export default WhatsAppShare