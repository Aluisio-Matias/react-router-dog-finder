import React from 'react';
import { Image } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const DogList = ({ dogs }) => {

    return (

        <Container>
            <h1 className='display-1 text-center'>Dog Finder Homepage</h1>
            <h5 className='display-5 text-center my-5'>Here's a list of all dogs!</h5>
            <div className='container text-center'>
                <div className="row">
                    {dogs.map(dog => (
                        <div class="col" key={dog.name}>
                            <Image src={dog.src} alt={dog.name} className="img-thumbnail mx-2" width={300} />
                            <Link to={`/dogs/${dog.name.toLowerCase()}`} className="btn btn-outline-info my-1">{dog.name}</Link>
                        </div>
                    ))};
                </div>
            </div>
        </Container >

    )

}

export default DogList;