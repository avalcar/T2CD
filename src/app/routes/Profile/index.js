import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import CardBox from 'components/CardBox';
import Tabber from 'components/Uspm/Tabs/member/single/';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

class ProfilePage extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title="Member Profile Section"/>
                <div className="row">
                    <CardBox styleName="col-lg-12">
                        <div className="row">
                            <div className="col-lg-7">
                                <li className="media media-list post-list">
                                    <div className="size-100 post-image mr-3">
                                        <div className="grid-thumb-equal rounded">
                                            <div className="grid-thumb-cover">
                                            <Avatar className="size-100" alt="Remy Sharp"
        src="https://www.melbourneresumes.com.au/wp-content/uploads/best-linkedin-profile-examples-300x200.jpg"/>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-body mb-3">
                                        <h1 className="mt-3 mb-0">Gerrit Van Der Wende</h1>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <p className="meta-date mb-1">Enroled on 07-15-2018</p>
                                            </div>
                                            <div className="col-md-10">
                                                <p className="meta-date mb-1">Last login: <b>07-17-2018</b></p>
                                            </div>
                                            <div className="col-md-12">
                                                <p className="text-muted">Active Session: <b>2 - Track your Food</b></p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <div className="col-lg-5"><div className="row">
                                <div className="col-lg-4 mt-3">
                                    <Button variant="raised" color="default" className="jr-btn jr-btn-label left float-right w-100">
                                        <i className="zmdi zmdi-phone-in-talk zmdi-hc-fw "/>
                                        <span>Phone Call</span>
                                    </Button>
                                </div>    
                                <div className="col-lg-4 mt-3">
                                    <Button variant="raised" color="secondary" className="jr-btn jr-btn-label left float-right w-100">
                                        <i className="zmdi zmdi-email zmdi-hc-fw "/>
                                        <span>Send Email</span>
                                    </Button>
                                </div>
                                <div className="col-lg-4 mt-3">
                                    <Button variant="raised" color="primary" className="jr-btn jr-btn-label left float-right w-100">
                                    <i className="zmdi zmdi-open-in-browser zmdi-hc-fw "/>
                                    <span>T2 Member Portal</span>
                                    </Button>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-12">
                                <Tabber />
                            </div>
                        </div>
                    </CardBox>
                </div>
            </div>
        );
    }
}

export default ProfilePage;