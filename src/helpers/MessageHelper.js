import InputFormHelper from "./InputFormHelper";

class MessageHelper {

    _state = {};

    constructor(props) {
        this.state = props;
    }

    error (ref, text) {
        this.state.setState({
            [`error_${ref}`]: text
        });
    }

}

export default MessageHelper;
