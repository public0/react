import React from 'react';
import {Link} from 'react-router-dom';

class Navigation extends React.Component {
    render() {

        return (
            <nav>
                <h3>Logo</h3>
                <ul className="nav-links">
                    <Link to='/video'>
                        <li>Video</li>
                    </Link>
                    <Link to='/help'>
                        <li>Help</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}


export default Navigation