import MessageHelper from "./MessageHelper";

class FormHelper extends MessageHelper {

    outError (name: string, message: string) {
        return {
            status: false,
            message,
            name
        }
    }

    outSuccess (name: string) {
        return {
            status: true,
            message: "",
            name
        }
    }

    required(ref) {
        const value = this.st[ref];

        if (!value || value === "" || typeof value === "undefined") {
            return this.outError(ref, "Campo obrigatório.");
        } else {
            return this.outSuccess(ref);
        }
    }

    email (ref) {
        const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const value  = this.st[ref];

        if (value.match(format)) {
            return this.outSuccess(ref);
        } else {
            return this.outError(ref, "Digite um e-mail válido");
        }
    }

    min (ref, type, min) {
        const value = this.st[ref];
        if (value.length >= min) {
            return this.outSuccess(ref);
        } else {
            return this.outError(ref, `Campo minímo de ${min} caracteres.`);
        }
    }

    /**
     * [ { name: "nome do campo", rules: [ function form helper ] } ]
     *
     * examplo
     *
     * [ { name: "age", rules: [ isEmpty ] } ]
     *
     * @param rulesDefinition
     * @returns {Promise<unknown>}
     */
    read = async (rulesDefinition: Array) => {

        this.resetErrors();

        return await Promise.all(rulesDefinition.map(async (item): Promise => {

            const { name, rules } = item;

            return await Promise.all(rules.map(async (rule) => {
                if (this.hasColon(rule)) {
                    const broke = this.explodeColon(rule);
                    this.handleColonFunction(name, broke[0], broke);
                } else {
                    this.handleNormalFunction(name, rule);
                }
            }));

        }));
    };

    handleNormalFunction = (name: string, rule: string) => {
        if (typeof this[rule] === "function") {

            const handle = this[rule](name);

            if (handle.status === false) {
                this.setError(handle);
            }
        }
    };

    handleColonFunction = (name: string, rule: string, args: Array) => {
        if (typeof this[rule] === "function") {
            args.unshift(name);

            const handle = this[rule].apply(this, args);

            if (handle.status === false) {
                this.setError(handle);
            }
        }
    };

    /**
     * Verifica se existe dois pontos e transforma após o primeiro em argumentos para a chamada da função de regra
     *
     * Exemplo:
     * { name: "column", rules: ['required', 'min:20'] }
     *
     * @param value
     * @returns {boolean}
     */
    hasColon (value: string) {
        return value.indexOf(':') > -1;
    }

    /**
     * Converete a regra em nome e argumentos
     *
     * input: "min:20"
     *
     * Task JS
     * -> hasColon?
     * -> Sim
     * --> explodeColon
     * ---> output = return { name: "min", value: "20" }
     *
     * @param value
     * @returns {{name: string, value: array}}
     */
    explodeColon (value: string) {
        const args = value.split(':');
        if (args.length > 0) {
            return args;
        } else {
            return [];
        }
    }

    /**
     * Busca o primeiro erro referente ao campo
     *
     * [
     *    [error 1],
     *    [error 2]
     * ]
     *
     * --> output = error 1
     *
     * @param ref
     * @returns {string}
     */
    showError = (ref: string) => {
        let $return = "";
        if (this.st.errors) {
            this.st.errors.map((error) => {
                if (error.name === ref && $return === "") {
                    $return = error.message;
                }
            });
        }
        return $return;
    };

    /**
     * true = tem erro
     * false = sem erro
     *
     * @returns {boolean}
     */
    hasError = () : boolean => {
        return this.st.errors.length > 0;
    };

    /**
     * Adiciona os erros no state para a atualização do DOM
     *
     * @param error
     */
    setError = (error) => {
        this.state.setState(prevState => (
            {
                errors: [...prevState.errors, error]
            }
        ));
    };

    /**
     * Reinicia os errors para não incrementar o existente
     */
    resetErrors = () => {
        this.state.setState({
            errors: []
        });
    };

    /**
     * Facilita a leitura do state da classe que está instanciado o FormHelper
     *
     * @returns {*}
     */
    get st () {
        return this.state.state;
    }
}

export default FormHelper;
