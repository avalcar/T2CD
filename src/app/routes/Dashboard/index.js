import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';

class Dashboard extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title="Dashboard Page"/>
            </div>
        );
    }
}

export default Dashboard;