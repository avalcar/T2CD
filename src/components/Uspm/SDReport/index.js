import React, { Component } from 'react';
import IntegrationReactSelect from 'components/Uspm/autoComplete/reactSelect';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class SDReport extends Component {
  state = {
    open: false,
    selectedValue: 'a',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    return (
      <div>
        <Button
          variant="raised"
          onClick={this.handleClickOpen}
          color="primary"
          className="jr-btn jr-btn-label left mb-4"
          fullWidth
        >
            <i className="zmdi zmdi-phone zmdi-hc-fw "/>
            <span>Call</span>
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullScreen
          style={{ overflowY: 'visible' }}
        >
          <DialogTitle id="form-dialog-title">Report a Phone Call</DialogTitle>
          <DialogContent
            style={{ overflowY: 'visible' }}
          >
          <form>
            <div style={{ paddingBottom:'30px' }}>
              <FormControlLabel
                control={
                  <Radio
                    checked={this.state.selectedValue === 'a'}
                    onChange={this.handleChange}
                    value="a"
                    name="incoming"
                    aria-label="Incoming"
                  />
                }
                label="Incoming"
              />
              <FormControlLabel
                control={
                  <Radio
                    checked={this.state.selectedValue === 'b'}
                    onChange={this.handleChange}
                    value="b"
                    name="outgoing"
                    aria-label="Outgoing"
                  />
                }
                label="Outgoing"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="checkedA"
                  />
                }
                label="Contact successful"
              />
            </div>
            <div>
              <IntegrationReactSelect />
            </div>
            </form>
          </DialogContent>
          <DialogActions>
            <Button variant="raised" color="primary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="raised" onClick={this.handleClose} color="secondary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}