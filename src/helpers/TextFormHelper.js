class TextFormHelper {

    _schema = {
        element: ""
    };

    constructor(target: HTMLTextAreaElement) {
        if (target instanceof HTMLTextAreaElement) {
            this.element = target;
        } else {
            console.error(`${target} não é um elemento HTMLTextAreaElement`);
        }
    }

    set element (target: HTMLTextAreaElement) : void {
        this._schema.element = target;
    }

    get element () : HTMLTextAreaElement {
        return this._schema.element;
    }

    get name () {
        return this.element.name;
    }

    get value () {
        return this.element.value;
    }

}

export default TextFormHelper;
