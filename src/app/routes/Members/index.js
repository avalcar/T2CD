import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';

class Members extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title="Members Section"/>
            </div>
        );
    }
}

export default Members;