import { FC } from 'react';
import { Grid } from '@material-ui/core';
import Search from '../components/Search';
import ImageCard from '../components/ImageCard';
import data from '../data.json';

const Home: FC = () => {
    const images = data.results;
    return (
        <div>
            <Search />
            <div style={{ padding: "1rem 2rem" }}>
                <Grid container spacing={2}>
                    {images.map((image) => {
                        return <ImageCard urls={image.urls} id={image.id} />
                    })}
                </Grid>
            </div>
        </div>
    )
}

export default Home;