import { FC, useState } from 'react';
import { Grid, Modal } from '@material-ui/core';
import Search from '../components/Search';
import ImageCard from '../components/ImageCard';
import data from '../data.json';

export type ImageType = typeof data.results[0];

const Home: FC = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [results, setResults] = useState([] as ImageType[]);

    return (
        <div>
            <Search onChangeResults={(results) => setResults(results)}/>
            <div style={{ padding: "1rem 2rem" }}>
                <Grid container spacing={2}>
                    {results.map((image, index) => {
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
                    <img alt="modal" src={selectedImage} className={"modal-image"} />
                </div>
            </Modal>
        </div>
    )
}

export default Home;