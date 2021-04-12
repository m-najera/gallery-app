import { Button, TextField } from '@material-ui/core';

const Search = () => {
  return (
    <div className="header">
      <h2 className="title">📷 App</h2>
      <TextField fullWidth label="search images" variant="outlined" margin="dense" style={{marginRight: 4}} />
      <Button variant="contained"> Search </Button>
    </div>
  )
}

export default Search