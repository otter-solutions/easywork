import React from 'react';
import connect from "react-redux/es/connect/connect";
import View from "../View";
import {
    Link
} from 'react-router-dom';

class UserLoginView extends View {

    state = {
        username: "",
        password: "",
        error: ""
    };

    _loadEffects () : void {
        const inputs = document.querySelectorAll('[view="login"] .control');
        inputs.forEach((elem) => {
            elem.addEventListener('focusout', () => {
                if ( !!elem.value ) {
                    elem.classList.add('used')
                } else {
                    elem.classList.remove('used');
                }
            });
        });


        const buttons = document.querySelectorAll('[view="login"] a.button');
        buttons.forEach((elem) => {
            elem.addEventListener('click', () => {
                let text = elem.innerText;
                alert(text)
            })
        })
    }

    submit = (event) => {

        event.preventDefault();

        const { username, password } = this.state;

        if (username === "user") {
            this.go('user/finance');
        } else if (username === "client") {
            this.go('client/surveys');
        } else {
            this.setState({error: "Verifique se todos os dados foram preenchidos corretamente."});
        }
    };

    componentDidMount(): void {
        this._loadEffects();
    }

    render() {
        return (
            <section view="login">

                {this.state.error}

                <form action="" onSubmit={this.submit}>
                    <div className="group-login">

                        <input type="text"
                               id="username"
                               name="username"
                               className="control"
                               required
                               onChange={this.handleInputChange}
                               value={this.state.username} />

                        <label htmlFor="name" className="placeholder">Nome de usuário</label>
                    </div>

                    <div className="group-login">

                        <input type="password"
                               id="password"
                               name="password"
                               className="control"
                               required
                               onChange={this.handleInputChange}
                               value={this.state.password}
                               autoComplete="off" />

                        <label htmlFor="password" className="placeholder">Senha</label>
                    </div>

                    <button type="submit" className="button yellow">ENTRAR</button>

                    <p>Não possui cadastro? <Link to={`${process.env.PUBLIC_URL}/user/register`}>Criar Conta</Link></p>

                    <hr />

                    <a href="#" className="button facebook">
                        <div className="image" />

                        ENTRAR COM FACEBOOK
                    </a>
                    <a href="#" className="button google">
                        ENTRAR COM GOOGLE
                    </a>
                </form>

                <div className="footer">
                    <a href="#">Política de privacidade</a>
                    <a href="#">Termos de serviço</a>
                </div>
            </section>
        );
    }
}

export default connect(state => state)(UserLoginView);
