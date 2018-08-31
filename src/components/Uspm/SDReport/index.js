import React from 'react';
import IntegrationReactSelect from 'components/Uspm/autoComplete/reactSelect';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class SDReport extends React.Component {

    render() {
        return (
          <div>
          <form>
            <div style={{ paddingBottom:'30px' }}>
            <FormControlLabel
              control={
                <Radio
                  value="a"
                  name="radio-button-demo"
                  aria-label="A"
                />
              }
              label="Female"
              labelPlacement="start"
            />
            <FormControlLabel
              control={
                <Radio
                  value="b"
                  name="radio-button-demo"
                  aria-label="B"
                />
              }
              label="Male"
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
          </div>
        );
    }
}

export default SDReport;