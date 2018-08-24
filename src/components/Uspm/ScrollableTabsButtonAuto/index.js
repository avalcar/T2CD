import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';import Tab from '@material-ui/core/Tab';
import DataTable from 'components/Uspm/DataTable';
import Badge from '@material-ui/core/Badge';

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

class ScrollableTabsButtonAuto extends Component {
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
                        <Tab
                            label={
                            <Badge style={{ padding:'0 22px' }} color="secondary" badgeContent={1}>
                                At Risk
                            </Badge>
                            }
                        />
                        <Tab
                            label={
                            <Badge style={{ padding:'0 22px' }} color="primary" badgeContent={7}>
                                Congrats
                            </Badge>
                            }
                        />
                        <Tab label="Welcome" />
                        <Tab label="Hit Goal" />
                        <Tab label="In Trouble" />
                    </Tabs>
                </AppBar>
                {value === 0 &&
                <TabContainer>
                        <DataTable />
                </TabContainer>}
                {value === 1 &&
                <TabContainer>
                    <DataTable />
                </TabContainer>}
                {value === 2 &&
                <TabContainer>
                    <DataTable />
                </TabContainer>}
                {value === 3 &&
                <TabContainer>
                    <DataTable />
                </TabContainer>}
                {value === 4 &&
                <TabContainer>
                    <DataTable />
                </TabContainer>}
                {value === 5 &&
                <TabContainer>
                    <DataTable />
                </TabContainer>}
                {value === 6 &&
                <TabContainer>
                    <DataTable />
                </TabContainer>}
            </div>
        );
    }
}

export default ScrollableTabsButtonAuto;