import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div>
                <Link to={'/component1'}>Component 1 </Link>
                <Link to={'/component2'}> Component 2 </Link>
                <Link to={'/component3'}> Component 3 </Link>
            </div>
        )
    }
}

export default Header;