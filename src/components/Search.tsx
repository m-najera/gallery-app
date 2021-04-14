import { Button, TextField } from '@material-ui/core';
import { FC, useState } from 'react';
import { createApi } from 'unsplash-js';

interface SearchProps {
  onChangeResults: (results: any[]) => void
}

const Search: FC<SearchProps> = (props) => {

  const serverApi = createApi({ accessKey: process.env.REACT_APP_UNSPLASH_KEY || "fallback" });
  const [searchText, setSearchText] = useState("");

  const getImages = () => {
    serverApi.search.getPhotos({
      query: searchText,
      perPage: 20
    }).then((results) => {
      if (results.response) {
        const imageArray = results.response.results;
        props.onChangeResults(imageArray);
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
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            getImages();
          }
        }}
      />
      <Button variant="contained" onClick={getImages}> Search </Button>
    </div>
  )
}

export default Search