import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from 'components/Header/index';
import Sidebar from 'containers/SideNav/index';
import Footer from 'components/Footer';
//import Tour from '../components/Tour/index';
import {
    ABOVE_THE_HEADER,
    BELOW_THE_HEADER,
    COLLAPSED_DRAWER,
    FIXED_DRAWER,
    HORIZONTAL_NAVIGATION,
} from 'constants/ActionTypes';
import {isIOS, isMobile} from 'react-device-detect';
import asyncComponent from '../util/asyncComponent';
import TopNav from 'components/TopNav';

class App extends React.Component {

    render() {
        const {match, drawerType, navigationStyle, horizontalNavPosition} = this.props;
        const drawerStyle = 'mini-drawer';

        //set default height and overflow for iOS mobile Safari 10+ support.
        if (isIOS && isMobile) {
            document.body.classList.add('ios-mobile-view-height')
        }
        else if (document.body.classList.contains('ios-mobile-view-height')) {
            document.body.classList.remove('ios-mobile-view-height')
        }

        console.log(navigationStyle, horizontalNavPosition);
        return (
            <div className={`app-container ${drawerStyle}`}>
                {/*<Tour/>*/}

                <Sidebar/>
                <div className="app-main-container">
                    <div
                        className='app-header-horizontal'>
                        {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === ABOVE_THE_HEADER) &&
                        <TopNav styleName="app-top-header"/>}
                        <Header/>
                        {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === BELOW_THE_HEADER) &&
                        <TopNav/>}
                    </div>

                    <main className="app-main-content-wrapper">
                        <div className="app-main-content">
                            <Switch>
                                <Route path={`${match.url}/profile`} component={asyncComponent(() => import('./routes/Profile'))}/>
                                <Route path={`${match.url}/feeds`} component={asyncComponent(() => import('./routes/Feeds'))}/>
                                <Route path={`${match.url}/results`} component={asyncComponent(() => import('./routes/SearchResults'))}/>
                                <Route path={`${match.url}/faq`} component={asyncComponent(() => import('./routes/Faq'))}/>
                                <Route path={`${match.url}/test`} component={asyncComponent(() => import('./routes/Test'))}/>
                                <Route path={`${match.url}/signin`} component={asyncComponent(() => import('containers/SignIn'))}/>
                                <Route path={`${match.url}/signup`} component={asyncComponent(() => import('containers/SignUp'))}/>
                                <Route component={asyncComponent(() => import('components/Error404'))}/>
                            </Switch>
                        </div>
                        <Footer/>
                    </main>
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({settings}) => {
    const {drawerType, navigationStyle, horizontalNavPosition} = settings;
    return {drawerType, navigationStyle, horizontalNavPosition}
};
export default withRouter(connect(mapStateToProps)(App));