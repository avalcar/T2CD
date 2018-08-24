import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';

class ProfilePage extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title="Dashboard Page"/>
            </div>
        );
    }
}

export default ProfilePage;