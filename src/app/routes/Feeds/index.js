import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import CardBox from 'components/CardBox';
import ScrollableTabsButtonAuto from 'components/Uspm/ScrollableTabsButtonAuto';
import SampleTable from "components/Uspm/ReactTable";


class ProfilePage extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title="Feeds"/>
                <div className="row">
                <CardBox styleName="col-lg-12">
                    <SampleTable />
                </CardBox>
            </div>
            </div>
        );
    }
}

export default ProfilePage;