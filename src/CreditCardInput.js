import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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
    card: '',
    expiration:'',
    token:'',
    select: 'card',

  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };


  render() {
    const { classes } = this.props;
    const labelValue = this.state.select === 'card'? "Credit Card" : "Token Value";



    return (
      <div className={classes.root}>

        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Credit Card or Token"
          value={this.state.select}
          onChange={this.handleChange('select')}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        >
          
            <MenuItem value='card'>
              {"Credit Card"}
            </MenuItem>
            <MenuItem value='token'>
              {"Token"}
            </MenuItem>
          
        </TextField>

        <TextField
                        id="outlined-simple-start-adornment"
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        label={labelValue}
                        value={this.state.token}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">#</InputAdornment>,
                        }}
                      />


        <TextField
          id="outlined-adornment-amount"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          type="date"
          label="Expieration Date"
          value={this.state.amount}
          onChange={this.handleChange('amount')}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />


      </div>
    );
  }
}

OutlinedInputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedInputAdornments);