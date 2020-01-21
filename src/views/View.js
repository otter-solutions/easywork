import React from 'react';
import InputFormHelper from "../helpers/InputFormHelper";
import History from "../History";
import TextFormHelper from "../helpers/TextFormHelper";

class View extends React.Component {

    form: false;

    handleInputChange = ({target}): void => {

        const input = new InputFormHelper(target);

        this.appendToState(input.name, input.value);
    };

    handleTextArea = ({target}) : void => {

        const element = new TextFormHelper(target);

        this.appendToState(element.name, element.value);
    };

    appendToState = (name, value) => {
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
    };

    go(link: string = "", routeName : string = ""): void {
        History.push(`${process.env.PUBLIC_URL}/${link}`);
    }

    back(): void {
        History.goBack();
    }
}

export default View;
