import { FC, useState } from 'react';
import { Grid, Modal } from '@material-ui/core';
import Search from '../components/Search';
import ImageCard from '../components/ImageCard';
import data from '../data.json';

const Home: FC = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const images = data.results;
    return (
        <div>
            <Search />
            <div style={{ padding: "1rem 2rem" }}>
                <Grid container spacing={2}>
                    {images.map((image, index) => {
                        return <ImageCard key={index}
                            image={image}
                            onClick={() => {
                                setModalOpen(true);
                                setSelectedImage(image.urls.regular);
                            }} />
                    })}
                </Grid>
            </div>
            <Modal open={modalOpen}
                onClose={() => { setModalOpen(false) }}
                style={
                    {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }} >
                <div className="container-modal">
                    <img src={selectedImage} className={"modal-image"} />
                </div>
            </Modal>
        </div>
    )
}

export default Home;