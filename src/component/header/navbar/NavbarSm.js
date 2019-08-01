import React from "react";
import {Button} from "antd";
import '../../../styles/header/navbarSm.css'
import {connect} from "react-redux";
import toggetherFillter from "../../../reducers/header/toggetherFillter";
import {HEADER} from "../../../action/header";

class NavbarSm extends React.Component {
    constructor(props) {
        super(props)
    }

    onToggether = () => {
        let {dispatch} = this.props;
        dispatch({
            type: HEADER.TOGGETHER_FILLTER
        });
    };

    render() {
        return (
            <>
                <Button type="default" onClick={this.onToggether} id='hihi' className='btn-menu-sm' icon="menu"
                        size={"large"}/>
            </>
        )
    }
}

export default connect(
    toggetherFillter
)(NavbarSm);
