class InputFormHelper {

    _schema = {
        input: ""
    };

    constructor(input: HTMLInputElement) {
        if (input instanceof HTMLInputElement) {
            this.input = input;
        } else {
            console.error(`${input} não é um elemento HTMLInputElement`);
        }
    }

    set input (input: HTMLInputElement) : void {
        this._schema.input = input;
    }

    get input () : HTMLInputElement {
        return this._schema.input;
    }

    get name () {
        return this.input.name;
    }

    get value () {
        return this.input.value;
    }

}

export default InputFormHelper;
