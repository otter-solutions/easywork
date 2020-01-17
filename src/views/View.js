import React from 'react';
import InputFormHelper from "../helpers/InputFormHelper";
import History from "../History";

class View extends React.Component {

    handleInputChange = ({target}): void => {

        const input = new InputFormHelper(target);

        this.setState({
            [input.name]: input.value
        });
    };

    go(link: string = "", routeName : string = ""): void {
        History.push(`${process.env.PUBLIC_URL}/${link}`);
    }

    back(): void {
        History.goBack();
    }
}

export default View;
