import React from 'react';
import connect from "react-redux/es/connect/connect";
import SideBar from "../components/SideBar";
import PencilIcon from "../../icons/PencilIcon";

class ProfileView extends React.Component {
    render() {
        return (
            <section view="user" className="page">

                <SideBar />

                <main>
                    <div className="tabs">
                        <a href="javascript:void(0)" className="active" data-target="one">
                            DADOS PESSOAIS
                        </a>
                        <a href="javascript:void(0)" data-target="two">
                            DADOS ADICIONAIS
                        </a>
                        <a href="javascript:void(0)" data-target="three">
                            DADOS BANCÁRIOS
                        </a>
                    </div>

                    <div className="tabs-content">
                        <div id="one" className="tab-inner active">
                            <div className="left">
                                <div className="group">
                                    <label htmlFor="">Nome:</label>
                                    <input type="text" className="control" value="Andrew Brunoro Rodrigues" disabled />
                                </div>
                                <div className="group">
                                    <label htmlFor="">E-mail:</label>
                                    <input type="email" className="control" value="andrew@email.com" disabled />
                                </div>
                                <div className="group">
                                    <label htmlFor="">Telefone:</label>
                                    <input type="text" className="control" value="(51) 99999 9999" disabled />
                                </div>
                                <div className="group">
                                    <label htmlFor="">Endereço:</label>
                                    <input type="text" className="control"
                                           value="Rua Juruá, 251 / ap 09 - Navegantes, Porto Alegre/RS" disabled />
                                </div>

                                <div className="edit">
                                    <PencilIcon />
                                    Editar
                                </div>

                                <div className="buttons mt-30">
                                    <button type="submit" className="button yellow ml-auto">ATUALIZAR</button>
                                </div>
                            </div>
                            <div className="right">
                                <figure className="thumbs">
                                    <img src="/images/user.jpg" alt="" />
                                </figure>
                                <label htmlFor="user-image" className="custom-upload mt-10">
                                    <input type="file" id="user-image" />
                                    <div className="edit">
                                        Trocar foto
                                        <PencilIcon />
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div id="two" className="tab-inner">
                            <div>
                                <div className="collapse mt-20">
                                    <div className="collapse-header">
                                        ADICIONE SUA CARTEIRA DE MOTORISTA
                                        <div className="edit ml-auto" />
                                        <div className="checked ml-20" />
                                    </div>
                                    <div className="collapse-body">
                                        <div>
                                            <div className="group">
                                                <label htmlFor="">Número da CNH:</label>
                                                <input type="text" className="control mw-none"
                                                       placeholder="XXXXXXXXXXXXXX" />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="">Órgão de expedição:</label>
                                                <input type="text" className="control mw-none"
                                                       placeholder="DETRAN - RS" />
                                            </div>
                                            <div className="row">
                                                <div className="group pr-15">
                                                    <label htmlFor="">Data de expedição:</label>
                                                    <input type="text" className="control" placeholder="14/02/2017" />
                                                </div>
                                                <div className="group pl-15">
                                                    <label htmlFor="">Data de expedição:</label>
                                                    <input type="text" className="control" placeholder="14/02/2021" />
                                                </div>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="">UF da expedição</label>
                                                <select className="control mw-none">
                                                    <option value="RS">RS</option>
                                                    <option value="SC">SC</option>
                                                    <option value="PR">PR</option>
                                                </select>
                                            </div>
                                            <div className="buttons">
                                                <a href="" className="button yellow ml-auto">SALVAR</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse mt-20 active">
                                    <div className="collapse-header">
                                        ADICIONE SEU TÍTULO DE ELEITOR
                                        <div className="icon ml-auto"></div>
                                    </div>
                                    <div className="collapse-body">
                                        <div>
                                            <div className="group">
                                                <label htmlFor="">Número do título de eleitor:</label>
                                                <input type="text" className="control mw-none"
                                                       placeholder="DETRAN - RS" />
                                            </div>
                                            <div className="row">
                                                <div className="group pr-15">
                                                    <label htmlFor="">Sessão:</label>
                                                    <input type="text" className="control mw-none"
                                                           placeholder="xxxxxxxx" />
                                                </div>
                                                <div className="group pl-15">
                                                    <label htmlFor="">Zona:</label>
                                                    <input type="text" className="control mw-none"
                                                           placeholder="xxxxxxxx" />
                                                </div>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="">Data da expedição:</label>
                                                <input type="text" className="control mw-none" placeholder="14/02/2017" />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="">UF da expedição:</label>
                                                <select className="control mw-none">
                                                    <option value="RS">RS</option>
                                                    <option value="SC">SC</option>
                                                    <option value="PR">PR</option>
                                                </select>
                                            </div>
                                            <div className="buttons">
                                                <a href="" className="button yellow ml-auto">SALVAR</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="three" className="tab-inner">
                            <div>
                                <div className="group">
                                    <label htmlFor="">Banco:</label>
                                    <input type="text" className="control mw-none" placeholder="XXXXXXXXXXXXXX" />
                                </div>
                                <div className="row">
                                    <div className="group pr-15">
                                        <label htmlFor="">Agência:</label>
                                        <input type="text" className="control" placeholder="14/02/2017" />
                                    </div>
                                    <div className="group">
                                        <label htmlFor="">Número da conta:</label>
                                        <input type="text" className="control mw-none" placeholder="DETRAN - RS" />
                                    </div>
                                </div>
                                <div className="buttons">
                                    <a href="" className="button yellow ml-auto">SALVAR</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        )
    }
}

export default connect(state => state)(ProfileView);
