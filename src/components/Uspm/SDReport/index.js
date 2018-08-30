import React from 'react';
import IntegrationReactSelect from 'components/Uspm/autoComplete/reactSelect';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';






class SDReport extends React.Component {

    render() {
        return (
          <div>
          <form>
            <div style={{ paddingBottom:'30px' }}>
            <FormControl className="col-md-6">
              <Select
                value=""
                name="age"
                displayEmpty
              >
                <MenuItem value={10}>Sent</MenuItem>
                <MenuItem value={20}>Received</MenuItem>
              </Select>
              <FormHelperText>Contact Sent / Received</FormHelperText>
            </FormControl>
            <FormControl className="col-md-6">
            <FormControlLabel
              control={
                <Checkbox
                  value="checkedA"
                />
              }
              label="Contact successful"
            />
            </FormControl>

            </div>
            <div>
              <IntegrationReactSelect />
            </div>
            </form>
          </div>
        );
    }
}

export default SDReport;