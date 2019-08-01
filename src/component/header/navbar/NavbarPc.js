import React from "react";
import '../../../styles/header/navbarPc.css'

class NavbarPc extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <ul className='nav'>
                    <li className='nav-item'>
                        <a className='btn'>Login</a>
                    </li>
                    <li className='nav-item'>
                        <a className='btn btn-one'>Sign in</a>
                    </li>
                </ul>
            </>
        );
    }
}

export default NavbarPc;
