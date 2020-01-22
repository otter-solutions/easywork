import React from 'react';
import connect from "react-redux/es/connect/connect";

import View from "../View";

import ClientSideBar from "../components/client/ClientSideBar";

import ClockIcon from "../../icons/ClockIcon";
import DollarIcon from "../../icons/DollarIcon";
import PlayIcon from "../../icons/PlayIcon";
import WritingIcon from "../../icons/WritingIcon";

class CreateSurvey extends View {

    form = true;

    currency: 'pt-BR';

    state = {
        currentTab: "one",
        form: {
            title: "",
            name: "",
            link: "",
            instruction: "",
            reward: 0,
            quantity: 1
        }
    };

    hasTab (tabName) {
        return tabName === this.state.currentTab ? "active" : "";
    }

    changeTab = (tabName) => {
        this.setState({
            currentTab: tabName
        });
    };

    render() {

        const { title, name, link, instruction, formatted, time, reward, quantity } = this.state.form;

        const total = (reward * quantity).toLocaleString('pt-BR', {
            minimumFractionDigits: 2
        });

        return (
            <section view="research-create" className="page">

                <ClientSideBar />

                <main>
                    <div className="tabs">
                        <a href="javascript:void(0)"
                           className={this.hasTab("one")}
                           onClick={() => this.changeTab("one")}
                           data-target="one">
                            <WritingIcon />
                            Dados da Pesquisa
                        </a>
                        <a href="javascript:void(0)"
                           className={this.hasTab("two")}
                           onClick={() => this.changeTab("two")}
                           data-target="two">
                            <DollarIcon />
                            Dados Financeiros
                        </a>
                        <a href="javascript:void(0)"
                           className={this.hasTab("three")}
                           onClick={() => this.changeTab("three")}
                           data-target="three">
                            <PlayIcon />
                            Publicação
                        </a>
                    </div>
                    <form action="">
                        <div className="tabs-content">
                            <div id="one" className={`tab-inner ${this.hasTab('one')}`}>
                                <div className="group">
                                    <input type="text"
                                           name="title"
                                           id="title"
                                           onChange={this.handleInputChange}
                                           value={title}
                                           className="control"
                                           placeholder="Título da Pesquisa" />
                                </div>
                                <div className="group">
                                    <input type="text"
                                           name="name"
                                           id="name"
                                           onChange={this.handleInputChange}
                                           value={name}
                                           className="control"
                                           placeholder="Nome do Solicitante" />
                                </div>
                                <div className="group">
                                    <input type="text"
                                           name="link"
                                           id="link"
                                           onChange={this.handleInputChange}
                                           value={link}
                                           className="control"
                                           placeholder="Link da Pesquisa" />
                                </div>
                                <div className="group">
                                    <textarea name="instruction"
                                              id="instruction"
                                              onChange={this.handleTextArea}
                                              value={instruction}
                                              className="control"
                                              placeholder="Instruções" />
                                </div>

                                <div className="buttons">
                                    <a href="" className="link mr-auto">Cancelar</a>
                                    <a href="" className="link mr-10">Salvar</a>
                                    <a href="" className="button yellow">Dados Financeiros</a>
                                </div>
                            </div>

                            <div id="two" className={`tab-inner ${this.hasTab('two')}`}>
                                <div className="row">
                                    <p>Recompensa:</p>
                                    <div className="group">
                                        <input type="number"
                                               id="reward"
                                               name="reward"
                                               onChange={(event) => this.handleInputCoin(event, this.currency)}
                                               className="control" />
                                    </div>
                                </div>
                                <div className="row">
                                    <p>Respondentes:</p>
                                    <div className="group">
                                        <input type="number"
                                               id="quantity"
                                               name="quantity"
                                               onChange={this.handleInputChange}
                                               value={quantity}
                                               className="control" />
                                    </div>
                                </div>
                                <div className="row">
                                    <p>Tempo Estimado:</p>
                                    <div className="group">
                                        <input type="time"
                                               id="time"
                                               name="time"
                                               onChange={this.handleInputChange}
                                               value={time}
                                               className="control" />
                                    </div>
                                </div>

                                <div className="result">
                                    <p>Valor total estimado:</p>
                                    <div className="group">
                                        <input type="text" className="control" disabled value={total} />
                                    </div>
                                </div>

                                <div className="buttons mt-30">
                                    <a href="" className="link ml-auto mr-15">Salvar</a>
                                    <a href="" className="button yellow">REVISAR</a>
                                </div>
                            </div>

                            <div id="three" className={`tab-inner ${this.hasTab('three')}`}>
                                <div className="content">
                                    <div className="left">
                                        <h2 className="mb-25">{title}</h2>

                                        <h3 className="mb-10">Nome do solicitante</h3>
                                        <p className="mb-30">{name}</p>

                                        <h3 className="mb-10">Instruções</h3>
                                        <p className="mb-30" dangerouslySetInnerHTML={{__html: instruction}}>

                                        </p>
                                    </div>
                                    <div className="right">
                                        <div className="content">
                                            <div className="time">
                                                <p>Tempo estimado</p>
                                                <ClockIcon />
                                                <span>{time}</span>
                                            </div>
                                        </div>
                                        <div className="content grey mb-0">
                                            <div className="time">
                                                <p>Recompensa</p>
                                                <DollarIcon />
                                                <span>{total}</span>
                                            </div>
                                            <div className="aprove">
                                                <p>Nº de Respondentes</p>
                                                <span>{quantity}</span>
                                            </div>
                                        </div>
                                        <div className="content last grey">
                                            <div className="time">
                                                <p>Valor total estimado:</p>
                                            </div>
                                            <div className="aprove">
                                                <div>{total}</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className="buttons">
                                    <a href="" className="link mr-auto">Cancelar</a>
                                    <a href="" className="link mr-15">Salvar</a>
                                    <a href="" className="button yellow">PUBLICAR</a>
                                </div>

                            </div>

                        </div>
                    </form>
                </main>
            </section>
        )
    }
}

export default connect(state => state)(CreateSurvey);
