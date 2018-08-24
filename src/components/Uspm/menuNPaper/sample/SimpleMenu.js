import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';import MenuItem from '@material-ui/core/MenuItem';

class SimpleMenu extends Component {
    state = {
        anchorEl: undefined,
        open: false,
    };

    handleClick = event => {
        this.setState({open: true, anchorEl: event.currentTarget});
    };

    handleRequestClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <Button
                    variant="raised"
                    color="primary"
                    aria-owns={this.state.open ? 'simple-SidenavContent.js' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    className="jr-btn text-white"
                >
                    Action
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onClose={this.handleRequestClose}
                >
                    <MenuItem onClick={this.handleRequestClose}>Chat</MenuItem>
                    <MenuItem onClick={this.handleRequestClose}>Email</MenuItem>
                    <MenuItem onClick={this.handleRequestClose}>Dismiss</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default SimpleMenu;