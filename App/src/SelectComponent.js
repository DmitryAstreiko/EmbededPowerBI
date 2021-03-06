import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
    props.selectedCity(event.target.value);    
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          onChange={handleChange}
          //onChange={(event) => {setCity(event.target.value); props.selectedCity(event.target.value)}}
        >
          <MenuItem value={"Minsk"}>Minsk</MenuItem>
          <MenuItem value={"Vilnius"}>Vilnius</MenuItem>
          <MenuItem value={"Lviv"}>Lviv</MenuItem>
        </Select>
      </FormControl>
      </div>
  );
}