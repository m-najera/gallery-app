import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import { createApi } from 'unsplash-js';

const Search = () => {

  const serverApi = createApi({ accessKey: process.env.REACT_APP_UNSPLASH_KEY || "fallback" });
  const [searchText, setSearchText] = useState("");

  const onClickSearch = () => {
    serverApi.search.getPhotos({
      query: searchText,
      perPage: 20
    }).then((results) => {
      if (results.response) {
        const imageArray = results.response.results;
        console.log(imageArray);
      }
    })
  }

  return (
    <div className="header">
      <h2 className="title">📷 App</h2>
      <TextField
        fullWidth label="search images"
        variant="outlined"
        margin="dense"
        style={{ marginRight: 4 }}
        value={searchText}
        onChange={(event) => { setSearchText(event.target.value) }}
      />
      <Button variant="contained" onClick={onClickSearch}> Search </Button>
    </div>
  )
}

export default Search