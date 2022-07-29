import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { Image } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const DogDetails = ({ dog }) => {
    //if dog param is not found redirect to homepage /dogs
    if (!dog)
        return <Redirect to='/dogs' />;

    return (
        <Container>
            <div className="row">
                <div className='col d-flex flex-column align-items-center'>
                    <Image className="img-fluid rounded my-2" src={dog.src} alt={dog.name} />
                    <h3 className='display-2'>{dog.name}</h3>
                    <h3 className='display-4'>{dog.age} years old</h3>
                    <ul className="list-group list-group-flush my-2">
                        {dog.facts.map((fact, i) => (
                            <li className="list-group-item" key={i}>{fact}</li>
                        ))}
                    </ul>
                    <Link className="btn btn-primary stretched-link my-3" to='/dogs'>Back to home</Link>
                </div>
            </div>
        </Container>
    );
}

export default DogDetails;