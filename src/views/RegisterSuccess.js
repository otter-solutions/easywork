import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";

class RegisterSuccess extends Component {

    render() {
        return (
            <section view="signup-complete">
                <figure>
                    <img src="/images/icon_7_.png" alt="" />
                </figure>
                <p>
                    Agora sim, seu cadastro está completo.
                    Comece a explorar as pesquisas.
                </p>
            </section>
        )
    }

}

export default connect(state => state)(RegisterSuccess);
