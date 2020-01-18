import React from 'react';
import connect from "react-redux/es/connect/connect";

import View from "../View";

import CoinIcon from "../../icons/CoinIcon";
import ClockIcon from "../../icons/ClockIcon";

import UserSideBar from "../components/user/UserSideBar";

class SurveysView extends View {
    render() {
        return (
            <section view="dashboard" className="page">
                <UserSideBar />
                <main>
                    <header>
                        <h2 className="title">SURVEYS</h2>

                        <div className="option">Lista</div>
                        <div className="option">Grid</div>
                    </header>

                    <div className="cards" type="grid">

                        <div className="card">
                            <div className="card-header">
                                <div className="toggl" />
                                <div className="title">Título da Pesquisa Bastante Longo</div>

                                <div className="card-header-info">
                                    <p>
                                        <ClockIcon /> 05:00
                                    </p>
                                    <p>
                                        <CoinIcon /> R$0,00
                                    </p>
                                </div>
                            </div>
                            <div className="card-body">
                                <p>Solicitante:<br/>Maria dos Santos</p>

                                <div className="inner-content">
                                    <h3>INSTRUÇÕES</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis imperdiet
                                        neque elementum commodo. Sed aliquam condimentum consequat. Donec facilisis dui
                                        eget dignissim…
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
                <aside className="dashboard-graphics">
                    <header>
                        <h2 className="title">Respondidas</h2>
                    </header>

                    <div className="list">
                        <div className="list-item">
                            <p>Título da Pesquisa
                                <span>PENDENTE</span>
                            </p>
                        </div>
                        <div className="list-item">
                            <p>Título da Pesquisa
                                <span>PENDENTE</span>
                            </p>
                        </div>
                        <div className="list-item">
                            <p>Título da Pesquisa
                                <span>PENDENTE</span>
                            </p>
                        </div>
                        <div className="list-item">
                            <p>Título da Pesquisa
                                <span>PENDENTE</span>
                            </p>
                        </div>
                    </div>

                    <header>
                        <h2 className="title">Finanças</h2>
                    </header>

                </aside>
            </section>
        )
    }
}

export default connect(state => state)(SurveysView);
