import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IntegrationReactSelect from 'components/Uspm/autoComplete/reactSelect';

export default class ComposeEmail extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button
          onClick={this.handleClickOpen}
          variant="raised"
          color="secondary"
          className="jr-btn jr-btn-label left float-right w-100"
        >
          <i className="zmdi zmdi-email zmdi-hc-fw"/>
          <span>Email</span>
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
        >
          <DialogTitle id="form-dialog-title">Send email</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Subject"
              type="email"
              fullWidth
            />
            <TextField
              margin="dense"
              id="content"
              label="Content"
              multiline
              rows={10}
              fullWidth
            />
            <IntegrationReactSelect style={{zIndex:'9999'}} />
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