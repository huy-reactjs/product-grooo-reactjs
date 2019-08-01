import React from "react";
import {Col, Row} from "antd";
import NavbarPc from "./navbar/NavbarPc";
import NavbarSm from "./navbar/NavbarSm";
import '../../styles/header/header.css'
import {connect} from "react-redux";
import toggetherFillter from "../../reducers/header/toggetherFillter";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collape: false
        }
    }

    render() {
        let demo;
        const collape = this.props.toggetherFillter;
        if (collape) {
            demo =
                <ul className='nav navbar-menu-Sm'>
                    <li className='listStyle'>
                        <div className='textCenter'>
                            <a>Login</a>
                        </div>
                    </li>
                    <li className='listStyle'>
                        <div className='textCenter'>
                            <a>Free Sign Up</a>
                        </div>
                    </li>
                </ul>
        }
        return (
            <>
                <Row type="flex" justify="center" style={{paddingTop: 11, paddingBottom: 11}}>
                    <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                        <a>
                            <img className="img-responsive" src="https://planitpoker.azureedge.net/Content/logo.png"
                                 alt="#"/>
                        </a>
                    </Col>
                    <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                        <div style={{float: 'right'}}>
                            <div className='navbarPC'>
                                <NavbarPc/>
                            </div>
                            <div className='navbarSm'>
                                <NavbarSm/>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row type="flex" justify="center" style={{background: '#fff'}} className='menuSm'>
                    <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                        {demo}
                    </Col>
                </Row>
            </>
        );
    }
}

export default connect(
    toggetherFillter
)(Header);
