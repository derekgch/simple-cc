import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});



class OutlinedInputAdornments extends React.Component {
  state = {
    value: '',
    expiration:'2020-01-01',
    select: 'card',

  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  componentWillUnmount(){
      this.setState({value:"", expiration:'2020-01-01'})
  }


  render() {
    const { classes } = this.props;
    const labelValue = this.state.select === 'card'? "Credit Card" : "Token Value";
    console.log(this.state)


    return (
      <div className={classes.root}>

        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Credit Card or Token"
          value={this.state.select}
          onChange={this.handleChange('select')}
        >
          
            <MenuItem value='card'>
              {"Credit Card"}
            </MenuItem>
            <MenuItem value='token'>
              {"Token"}
            </MenuItem>
          
        </TextField>

        <TextField
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            label={labelValue}
            value={this.state.value}
            onChange={this.handleChange('value')}
         />


        <TextField
          id="outlined-adornment-date"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          type="date"
          label="Expieration Date"
          placeholder=""
          value={this.state.expiration}
          onChange={this.handleChange('expiration')}

        />

        <Button variant="contained" size="large" color="primary" onClick={null}>
            Sumbit
        </Button>

      </div>
    );
  }
}

OutlinedInputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedInputAdornments);