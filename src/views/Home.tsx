import { FC, useState } from 'react';
import { Grid, Modal } from '@material-ui/core';
import Search from '../components/Search';
import ImageCard from '../components/ImageCard';
import data from '../data.json';

const Home: FC = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const images = data.results;
    const [results, setResults] = useState([]) as any[];

    const handleChangeResults = (resultsArray: any[]) => {
        setResults(resultsArray);
    }

    return (
        <div>
            <Search onChangeResults={handleChangeResults} />
            <div style={{ padding: "1rem 2rem" }}>
                <Grid container spacing={2}>
                    {results.map((image: any, index: number) => {
                        return <ImageCard key={index}
                            image={image}
                            onClick={() => {
                                setModalOpen(true);
                                setSelectedImage(image.urls.regular);
                            }}
                        />
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
                    <img alt="modal content" src={selectedImage} className={"modal-image"} />
                </div>
            </Modal>
        </div>
    )
}

export default Home;