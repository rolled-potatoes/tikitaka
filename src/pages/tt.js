import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class tt extends Component {
    componentDidMount(){
        this.a();
    }
    a= async() =>{
        const {history} = this.props;
        window.opener.location.href = 'http://119.18.120.225:3000'
        await window.close();
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default withRouter(tt);