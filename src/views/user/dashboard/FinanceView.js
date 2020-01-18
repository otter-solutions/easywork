import React from 'react';
import connect from "react-redux/es/connect/connect";

import View from "../../View";

import UserSideBar from "../../components/user/UserSideBar";

class FinanceView extends View {
    render() {
        return (
            <section view="finance" className="page">

                <UserSideBar />

                <main>
                    <div className="table">
                        <div className="row header">
                            <p>Total Recebido</p>
                            <p> R$ 54,00</p>
                        </div>
                        <div className="row">
                            <p>Pendente</p>
                            <p>R$ 11,00</p>
                        </div>
                        <div className="row">
                            <p>Creditado</p>
                            <p>R$ 43,00</p>
                        </div>
                    </div>

                    <div className="cols">
                        <div className="col">
                            <h4>TOTAL POR PROJETO</h4>
                            <div className="table">
                                <div className="row">
                                    <p>PESQUISA1</p>
                                    <p>R$ 11,00</p>
                                </div>
                                <div className="row">
                                    <p>PESQUISA 2</p>
                                    <p>R$ 10,00</p>
                                </div>
                                <div className="row">
                                    <p>PESQUISA 3</p>
                                    <p>R$ 14,00</p>
                                </div>
                                <div className="row">
                                    <p>PESQUISA 4</p>
                                    <p>R$ 19,00</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h4>HISTÓRICO</h4>
                            <div className="table">
                                <div className="row">
                                    <p>DEZEMBRO</p>
                                    <p>R$ 11,00</p>
                                </div>
                                <div className="row">
                                    <p>NOVEMBRO</p>
                                    <p>R$ 10,00</p>
                                </div>
                                <div className="row">
                                    <p>OUTUBRO</p>
                                    <p>R$ 14,00</p>
                                </div>
                                <div className="row">
                                    <p>SETEMBRO</p>
                                    <p>R$ 19,00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        )
    }
}

export default connect(state => state)(FinanceView);
