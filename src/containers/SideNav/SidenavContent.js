import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

import CustomScrollbars from 'util/CustomScrollbars';


class SidenavContent extends Component {
    componentDidMount() {
        const {history} = this.props;
        const that = this;
        const pathname = `#${history.location.pathname}`;// get current path

        const subMenuLi = document.querySelectorAll('.sub-menu > li');
        for (let i = 0; i < subMenuLi.length; i++) {
            subMenuLi[i].onclick = function (event) {
                event.stopPropagation();
            }
        }

        const menuLi = document.getElementsByClassName('menu');
        for (let i = 0; i < menuLi.length; i++) {
            menuLi[i].onclick = function (event) {
                for (let j = 0; j < menuLi.length; j++) {
                    const parentLi = that.closest(this, 'li');
                    if (menuLi[j] !== this && (parentLi === null || !parentLi.classList.contains('open'))) {
                        menuLi[j].classList.remove('open')
                    }
                }
                this.classList.toggle('open');
                event.stopPropagation();
            }
        }

        const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
        try {
            const activeNav = this.closest(activeLi, 'ul'); // select closest ul
            if (activeNav.classList.contains('sub-menu')) {
                this.closest(activeNav, 'li').classList.add('open');
            } else {
                this.closest(activeLi, 'li').classList.add('open');
            }
        } catch (error) {

        }
    }

    closest(el, selector) {
        try {
            let matchesFn;
            // find vendor prefix
            ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
                if (typeof document.body[fn] == 'function') {
                    matchesFn = fn;
                    return true;
                }
                return false;
            });

            let parent;

            // traverse parents
            while (el) {
                parent = el.parentElement;
                if (parent && parent[matchesFn](selector)) {
                    return parent;
                }
                el = parent;
            }
        } catch (error) {

        }

        return null;
    }

    render() {
        return (
            <CustomScrollbars className="scrollbar">
                <ul className="nav-menu">
                    <li className="menu no-arrow">
                        <NavLink to="/app/feeds">
                            <i className="zmdi zmdi-notifications-none zmdi-hc-fw"/>
                            <span className="nav-text">Feeds</span>
                        </NavLink>
                    </li>
                    <li className="menu no-arrow">
                        <NavLink to="/app/profile">
                            <i className="zmdi zmdi-account zmdi-hc-fw"/>
                            <span className="nav-text">Profile</span>
                        </NavLink>
                    </li>
                    <li className="menu no-arrow">
                        <NavLink to="/app/results">
                            <i className="zmdi zmdi-search zmdi-hc-fw"/>
                            <span className="nav-text">Search Results</span>
                        </NavLink>
                    </li>
                    <li className="menu no-arrow">
                        <NavLink to="/app/faq">
                            <i className="zmdi zmdi-help zmdi-hc-fw"/>
                            <span className="nav-text">FAQ</span>
                        </NavLink>
                    </li>
                    <li className="menu no-arrow">
                        <NavLink to="/signin">
                            <i className="zmdi zmdi-sign-in zmdi-hc-fw"/>
                            <span className="nav-text">Signin</span>
                        </NavLink>
                    </li>
                    <li className="menu no-arrow">
                        <NavLink to="/app/test">
                            <i className="zmdi zmdi-developer-board zmdi-hc-fw"/>
                            <span className="nav-text">Test</span>
                        </NavLink>
                    </li>
                </ul>
            </CustomScrollbars>
        );
    }
}

export default withRouter(SidenavContent);
