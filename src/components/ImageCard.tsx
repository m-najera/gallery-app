import { Grid } from '@material-ui/core'
import React, { FC } from 'react'
import { ImageType } from '../views/Home'

interface Props {
    image: ImageType
    onClick?: () => void
}

const ImageCard: FC<Props> = (props) => {
    return (
        <Grid item xs={4} onClick={props.onClick}>
            <div className="card">
                <img alt="the-img-id" src={props.image.urls.small} />
                <div className="image-description">
                    <span className="title">by @{props.image.user.username}</span><br />
                    <span className="description">{props.image.width} x {props.image.height}</span>
                </div>
            </div>
        </Grid >
    )
}

export default ImageCard