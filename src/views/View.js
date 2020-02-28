import React from 'react';
import InputFormHelper from "../helpers/InputFormHelper";
import History from "../History";
import TextFormHelper from "../helpers/TextFormHelper";
import InputCoinFormHelper from "../helpers/InputCoinFormHelper";
import MessageHelper from "../helpers/MessageHelper";
import FormHelper from "../helpers/FormHelper";

class View extends React.Component {

    form: false;

    constructor(props) {
        super(props);

        this.messageHelper = new MessageHelper(this);
        this.formHelper = new FormHelper(this);
    }

    componentDidMount(): void {
        this.setState({
            errors: []
        });
    }

    handleInputChange = ({target}): void => {

        const input = new InputFormHelper(target);

        this.appendToState(input.name, input.value);
    };

    handleTextArea = ({target}) : void => {

        const element = new TextFormHelper(target);

        this.appendToState(element.name, element.value);
    };

    handleInputCoin = ({target}, locale) : void => {

        const element = new InputCoinFormHelper(target, locale);

        this.appendToState(element.name, element.value);
    };

    appendToState = (name, value) : View => {
        if (this.form) {
            this.setState({
                form: {
                    ...this.state.form,
                    [name]: value
                }
            });
        } else {
            this.setState({
                [name]: value
            });
        }

        return this;
    };

    handleError (ref) {
        return this.state[`error_${ref}`];
    }

    go(link: string): void {
        History.push(`${process.env.PUBLIC_URL}/${link}`);
    }

    back(): void {
        History.goBack();
    }
}

export default View;
