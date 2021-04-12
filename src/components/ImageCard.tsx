import { Grid } from '@material-ui/core'
import React, { FC } from 'react'

interface Props {
    id: string
    urls: {
        small: string
    }
}

const ImageCard: FC<Props> = (props) => {
    return (
        <Grid item xs={4}>
            <div className="card">
                <img alt="the-img-id" src={props.urls.small} />
                <div className="image-description">
                    <span className="title">by @author</span><br />
                    <span className="description">400 x 400</span>
                </div>
            </div>
        </Grid>
    )
}

export default ImageCard