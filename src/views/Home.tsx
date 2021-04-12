import { FC } from 'react';
import { Grid } from '@material-ui/core';
import Search from '../components/Search';

const Home: FC = () => {
    return (
        <div>
            <Search />
            <div style={{ padding: "1rem 2rem" }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <div className="card">
                            <img alt="the-img-id" src="https://images.unsplash.com/photo-1615799564768-f1f508bec596?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfGhtZW52UWhVbXhNfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
                            <div className="image-description">
                                <span className="title">by @author</span><br />
                                <span className="description">400 x 400</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="card"></div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="card"></div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="card"></div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="card"></div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="card"></div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="card"></div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="card"></div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="card"></div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="card"></div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="card"></div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="card"></div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="card"></div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="card"></div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="card"></div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Home;