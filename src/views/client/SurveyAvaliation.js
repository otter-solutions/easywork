import React  from 'react';
import connect from "react-redux/es/connect/connect";

import View from "../View";

import ClientSideBar from "../components/client/ClientSideBar";

class SurveyAvaliation extends View {

    render() {
        return (
            <section view="research-list" className="page">

                <ClientSideBar />

                <main>
                    <div className="container">
                        <h3>Avaliar Respostas</h3>
                        <table className="table table-striped green mt-20">
                            <thead>
                            <tr>
                                <th>ID Respondente</th>
                                <th>Código</th>
                                <th>Liberar Pagamento</th>
                                <th>Bloquear Respondente</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="togglModal">qiade125423poy</td>
                                <td>254254xx</td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" id="checkbox-1"/>
                                        <label htmlFor="checkbox-1"></label>
                                    </div>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" id="checkbox-2"/>
                                        <label htmlFor="checkbox-2"></label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="togglModal">qiade125423poy</td>
                                <td>254254xx</td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" id="checkbox-3"/>
                                        <label htmlFor="checkbox-3"></label>
                                    </div>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" id="checkbox-4"/>
                                        <label htmlFor="checkbox-4"></label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="togglModal">qiade125423poy</td>
                                <td>254254xx</td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" id="checkbox-5"/>
                                        <label htmlFor="checkbox-5"></label>
                                    </div>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" id="checkbox-6"/>
                                        <label htmlFor="checkbox-6"></label>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <div className="buttons mt-25">
                            <a href="" className="button yellow">VOLTAR</a>
                        </div>
                    </div>
                </main>

                <div className="modal" id="modal">
                    <div className="backdrop"></div>
                    <div className="modal-content">
                        <div className="modal-header">
                            Justifique para o respondente por que ele está sendo bloqueado na pesquisa:
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <div className="group">
                                    <textarea name="" className="control" placeholder="Instruções"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer buttons">
                            <div className="link ml-auto togglModal">Cancelar</div>
                            <a href="" className="button yellow ml-15">ENVIAR</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default connect(state => state)(SurveyAvaliation);
