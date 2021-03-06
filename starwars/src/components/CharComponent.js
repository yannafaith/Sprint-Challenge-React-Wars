import React from 'react';



function CharComponent(props) {
    console.log(props.data);
    return (
        props.data.map(char => {
            return (
                <div className='char' id={char.name} >
                    <h3>Name: {char.name}</h3>
                    <p>Height: {char.height}</p>
                    <p>Mass: {char.mass}</p>
                    <p>Hair Color: {char.hair_color}</p>

                    <p>Skin Color: {char.skin_color}</p>
                    <p>Birth year: {char.birth_year}</p>

                    <p>Eye Color: {char.eye_color}</p>
                    <p>Films: {char.films.map(film => {return (
                        <li>{film}</li>
                    )})}
                    </p>
                    <p>Gender: {char.gender}</p>
                    <p>Homeworld: {char.homeworld}</p>

                    <p>Species: {char.species}</p>
                    <p>Starships: {char.starships.map(ship => {return (
                        <li>{ship}</li>
                    )})}</p>
                    <p>Vehicles: {char.vehicles.map(v => {return (
                        <li>{v}</li>
                    )})}</p>
                </div>
            );
        }))
        
};



export default CharComponent;