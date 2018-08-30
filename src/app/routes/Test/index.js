import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import CardBox from 'components/CardBox';
import SDReport from 'components/Uspm/SDReport'

class ProfilePage extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title="Test Container"/>
                <div className="row">
                    <CardBox heading='SD Report Form' styleName="col-lg-12">
                        <div className="row">
                            <div className="col-lg-12">
                                <SDReport />
                            </div>
                        </div>
                    </CardBox>
                </div>
            </div>
        );
    }
}

export default ProfilePage;