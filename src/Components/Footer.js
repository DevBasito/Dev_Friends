import React from "react";

class Footer extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div >
                <h1>Powered by <i> <a href="https://github.com/DevBasito" target='_blank' style={{color: '#0ccac4'}}> DevBasito </a> </i> </h1>
            </div>
        );
    }
}

export default Footer;