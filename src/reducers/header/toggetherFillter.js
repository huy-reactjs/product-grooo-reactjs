import {HEADER} from "../../action/header";

const toggetherFillter = (state = false, action) => {
    switch (action.type) {
        case HEADER.TOGGETHER_FILLTER:
            return !state;
        default:
            return state;
    }
};
export default toggetherFillter;
