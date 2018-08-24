import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Alerts from 'components/Uspm/Alert';
import Badge from '@material-ui/core/Badge';
import Timeline from 'components/Uspm/timeLine/routes/defaultWithIcon';
import StackedAreaChart from 'components/Uspm/charts/area/Components/StackedAreaChart';
import RecentActivities from 'components/dashboard/Common/RecentActivities/index';
import {recentList} from 'components/dashboard/Common/RecentActivities/data';

function TabContainer(props) {
    return (
        <div style={{padding: 20}}>
            {props.children}
        </div>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class Tabber extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {value} = this.state;

        return (
            <div className="w-100">
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollable
                        scrollButtons="auto"
                    >
                         <Tab
                            label={
                            <Badge style={{ padding:'0 22px' }} color="primary" badgeContent={4}>
                                Alerts
                            </Badge>
                            }
                        />
                        <Tab label="Profile" />
                        <Tab label="Timeline" />
                        <Tab label="Weight" />
                        <Tab label="Activity" />
                        <Tab label="Service Deliveries" />
                    </Tabs>
                </AppBar>
                {value === 0 &&
                <TabContainer>
                        <Alerts />
                </TabContainer>}
                {value === 1 &&
                <TabContainer>
                    Profile Form
                </TabContainer>}
                {value === 2 &&
                <TabContainer>
                    <Timeline />
                </TabContainer>}
                {value === 3 &&
                <TabContainer>
                    <StackedAreaChart />
                </TabContainer>}
                {value === 4 &&
                <TabContainer>
                    <StackedAreaChart />
                </TabContainer>}
                {value === 5 &&
                <TabContainer>
                    {recentList.map((recentList, index) => <RecentActivities key={index} recentData={recentList}/>)}
                </TabContainer>}
            </div>
        );
    }
}

export default Tabber;