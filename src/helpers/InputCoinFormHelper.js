class InputCoinFormHelper {

    _schema = {
        element: "",
        to: ""
    };

    constructor(target: HTMLInputElement, to: string) {
        if (target instanceof HTMLInputElement) {
            this.element = target;
        } else {
            console.error(`${target} não é um elemento HTMLInputElement`);
        }

        this.to = to;
    }

    set element (target: HTMLInputElement) : void {
        this._schema.element = target;
    }

    get element () : HTMLInputElement {
        return this._schema.element;
    }

    set to (to: string) : void {
        this._schema.to = to;
    }

    get to () : string {
        return this._schema.to;
    }

    get name () {
        return this.element.name;
    }

    get value () {
        return this.element.value;
    }

}

export default InputCoinFormHelper;
