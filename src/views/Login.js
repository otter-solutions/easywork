import React from 'react';
import connect from "react-redux/es/connect/connect";

class Login extends React.Component {

    async requestLogin () {

    }

    render() {
        return (
            <section view="login">
                <form action="">
                    <div className="group-login">
                        <input type="text" id="name" className="control" />
                        <label htmlFor="name" className="placeholder">Nome de usuário</label>
                    </div>

                    <div className="group-login">
                        <input type="password" id="password" className="control" />
                        <label htmlFor="password" className="placeholder">Senha</label>
                    </div>

                    <button type="submit" className="button yellow">ENTRAR</button>

                    <p>Não possui cadastro? <a href="#">Criar conta</a></p>

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

export default connect(state => state)(Login);
