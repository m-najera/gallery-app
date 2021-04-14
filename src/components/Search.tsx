import { Button, TextField } from '@material-ui/core';
import { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { createApi } from 'unsplash-js';

interface SearchProps {
  onChangeResults: (results: any) => void
}

const Search: FC<SearchProps> = (props) => {

  const serverApi = createApi({ accessKey: process.env.REACT_APP_UNSPLASH_KEY || "fallback" });
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  const url: any = useParams();

  useEffect(() => {
    if (url && typeof url.search != "undefined" && url.search !== searchText) {
      setSearchText(url.search);
      onClickSearch(url.search);
    }
  }, [url]);

  const onClickSearch = (query: string) => {
    if (history.location.pathname !== `/search/${query}`) {
      history.push("/search/" + query);
    }

    if (!query) {
      props.onChangeResults([]);
      return;
    }

    serverApi.search.getPhotos({
      query: query,
      perPage: 1
    }).then((results) => {
      if (results.response) {
        const imageArray = results.response.results;
        props.onChangeResults(imageArray);
      }
    });
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
      <Button variant="contained" onClick={() => onClickSearch(searchText)}> Search </Button>
    </div>
  )
}

export default Search