import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import BellIcon from "../../icons/BellIcon";
import SearchIcon from "../../icons/SearchIcon";

class Menu extends Component {

    _loadEffects () : void {
        const form = document.getElementById('menu-form');
        const button = document.querySelector('.navbar-form > a');
        const link = document.querySelector('.navbar .right > a');

        button.addEventListener('click', e => {
            e.preventDefault();
            form.classList.toggle('active');
        })
    }

    componentDidMount(): void {
        this._loadEffects();
    }

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
                                    <SearchIcon />
                                </button>
                            </form>
                            <a href="#">
                                <SearchIcon />
                            </a>
                        </div>
                        <a href="">
                            <BellIcon />
                        </a>
                    </div>
                </div>
            </nav>
        )
    }

}

export default connect(state => state)(Menu);
