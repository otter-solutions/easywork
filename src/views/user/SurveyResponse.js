import React from 'react';
import connect from "react-redux/es/connect/connect";

import View from "../View";
import UserSideBar from "../components/user/UserSideBar";

class SurveyResponse extends View {

    render() {
        return (
            <section view="research" className="page">

                <UserSideBar />

                <main>
                    <h1>TÍTULO PESQUISA BASTANTE LONGO MESMO</h1>

                    <div className="container">
                        <div className="left">
                            <h3>INSTRUÇÕES</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis imperdiet neque
                                elementum commodo. Sed aliquam condimentum consequat. Donec facilisis dui eget dignissim
                                placerat. Sed euismod finibus turpis posuere volutpat. Donec mi ipsum, fringilla at
                                tincidunt eget, pretium at leo.
                            </p>
                        </div>
                        <div className="right">
                            <a href="" className="exit-link">
                                <img src="/images/voltar.svg" alt="" />
                                    Sair
                            </a>

                            <p>
                                Total de respondentes:<br/>
                                50 de 100
                            </p>

                            <div className="circle chart">
                                <svg className="zero" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                    <circle className="circle-chart-svg"
                                            stroke="#EEE"
                                            strokeWidth="3"
                                            strokeLinecap="square"
                                            fill="none"
                                            cx="20"
                                            cy="20"
                                            r="15" />
                                </svg>
                                <svg className="one" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" id="linecap"
                                     style={{transform: "rotate(90deg)"}}>
                                    <circle className="circle-chart-svg" stroke="#f06c00" strokeWidth="3"
                                            strokeLinecap="square" strokeDasharray="50.9,999" fill="none" cx="20"
                                            cy="20" r="15" />
                                </svg>
                                <div className="circle-percent">50%</div>
                            </div>

                            <ul className="info">
                                <li className="text-desaturated-blue">
                                    <img src="/images/cifrao.svg" alt="" />
                                        R$ 0,00
                                </li>
                                <li className="text-orange">
                                    <img src="/images/relogio_red.svg" alt="" />
                                        05:00
                                </li>
                            </ul>
                            <a href="" className="button yellow">ACESSAR PESQUISA</a>
                        </div>


                        <div className="bottom" id="before-send" style={{display: "flex"}}>
                            <div className="left">
                                <div className="group">
                                    <input type="text" className="control" placeholder="ID: 0011223344" />
                                </div>
                            </div>
                            <div className="right">
                                <a href="#" className="button" disabled="disabled">SUBMETER</a>
                            </div>
                        </div>

                        <div className="bottom" id="after-send" style={{display: "none"}}>
                            <div className="left">
                                <p>
                                    Sua resposta foi enviada<br/>
                                    para avaliação do pesquisador.
                                </p>
                            </div>
                            <div className="right">
                                <a href="#" className="button green has-icon">
                                    ENVIADO
                                    <img src="/images/icon_7_.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        )
    }

}

export default connect(state => state)(SurveyResponse);
