import React from 'react';
import connect from "react-redux/es/connect/connect";
import axios from "axios";

import View from "../View";

class UserRegisterView extends View {

    state = {
        name: "",
        email: "",
        password: "",
        username: ""
    };

    validate = async (event) => {
        event.preventDefault();

        const { name, email, password } = this.state;

        const read = this.formHelper.read([
            { name: "name", rules: ['required'] },
            { name: "email", rules: ['required', 'email'] },
            { name: "password", rules: ['required', 'min:6'] },
        ]);

        read.finally(res => {
            if (!this.formHelper.hasError()) {
                this.signup()
                    .then(res => {
                        this.go('/user/profile');
                    })
            }
        });
    };

    signup = () => {
        return new Promise((resolve, reject) => {

            axios.post('http://localhost:8001/api/auth/signup', {
                "name": this.state.name,
                "username": "resp",
                "email": this.state.email,
                "password": this.state.password,
                "role":"ROLE_RESPONDENT"
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });

        });
    };

    render() {
        return (
            <section view="login">
                <form action="" method="post" onSubmit={this.validate}>

                    <div className="group-login">
                        <input type="text"
                               id="name"
                               name="name"
                               className="control"
                               value={this.state.name}
                               onChange={this.handleInputChange} />
                        <label htmlFor="name" className="placeholder">Nome</label>
                    </div>

                    {this.formHelper.showError('name')}

                    <div className="group-login">
                        <input type="text"
                               id="username"
                               name="username"
                               className="control"
                               value={this.state.username}
                               onChange={this.handleInputChange} />
                        <label htmlFor="username" className="placeholder">Nome de usuário</label>
                    </div>

                    {this.formHelper.showError('username')}

                    <div className="group-login">
                        <input type="email"
                               id="email"
                               name="email"
                               className="control"
                               value={this.state.email}
                               onChange={this.handleInputChange} />
                        <label htmlFor="name" className="placeholder">Email</label>
                    </div>

                    {this.formHelper.showError('email')}

                    <div className="group-login">
                        <input type="password"
                               id="password"
                               name="password"
                               className="control"
                               onChange={this.handleInputChange} />
                        <label htmlFor="password" className="placeholder">Senha</label>
                    </div>

                    {this.formHelper.showError('password')}

                    <button type="submit" className="button yellow">ENTRAR</button>

                    <p>Não possui cadastro? <a href="#">Criar conta</a></p>

                    <hr/>

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
        )
    }

}

export default connect(state => state)(UserRegisterView);
