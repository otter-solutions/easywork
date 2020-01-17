import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";

class Menu extends Component {

    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <div className="brand">
                        <img src="/images/brand.png" alt="" />
                    </div>

                    <div className="ml-auto right">
                        <div className="navbar-form">
                            <form action="" id="menu-form">
                                <input type="text" />
                                <button type="submit">
                                    PRocura
                                </button>
                            </form>
                            <a href="#">
                                Procura
                            </a>
                        </div>
                        <a href="">
                            Teste
                        </a>
                    </div>
                </div>
            </nav>
        )
    }

}

export default connect(state => state)(Menu);
