import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imgURL: imageURL
        };
        console.log(eventData);
        
        fetch("https://gentle-hamlet-18819.herokuapp.com/addEvent", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response', res))
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'f70291d5afd95c766cdd475b695d69c5')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
            console.log(response.data.data.display_url);
            setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="container mt-5">
            <h1>Add your awesome event here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-2" name="name" defaultValue="new exciting Event" ref={register} />
                <br/>
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br/>
                <input className="mt-4" type="submit" />
            </form> 
        </div>
    );
};

export default AddEvents;