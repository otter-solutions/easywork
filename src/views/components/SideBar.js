import React from 'react';
import connect from "react-redux/es/connect/connect";

import View from "../View";

import ArrowIcon from "../../icons/ArrowIcon";

class SideBar extends View {

    render() {
        return (
            <aside className="dashboard-menu mini">
                <div className="togglr" id="togglr" target=".dashboard-menu">
                    <ArrowIcon />
                </div>
                <figure className="user" onClick={() => this.go('user/profile')}>
                    <img src="/images/user.jpg" alt="User" />
                </figure>
                <p className="user-name">Marcos Almeida</p>

                <ul>
                    <li>
                        <a href="" title="Explorar Pesquisas" onClick={() => this.go('user/surveys')}>
                            <img src="/images/file.png" alt="" />
                            <span>EXPLORAR PESQUISAS</span>
                        </a>
                    </li>
                    <li className="mt-40">
                        <a href="" title="Pesquisas Aprovadas">
                            <img src="/images/check.png" alt="" />
                            <span>PESQUISAS APROVADAS</span>
                        </a>
                    </li>
                    <li>
                        <a href="" title="Pesquisas Pendentes">
                            <img src="/images/pen.png" alt="" />
                            <span>PESQUISAS PENDENTES</span>
                        </a>
                    </li>
                    <li className="mt-40">
                        <a href="" title="Perfil" onClick={() => this.go('user/profile')}>
                            <img src="/images/user.png" alt="" />
                            <span>PERFIL</span>
                        </a>
                    </li>
                    <li>
                        <a href="" title="Informações Financeiras">
                            <img src="/images/coin.png" alt="" />
                            <span>INFORMAÇÕES FINANCEIRAS</span>
                        </a>
                    </li>
                </ul>
            </aside>
        )
    }
}

export default connect(state => state)(SideBar);
