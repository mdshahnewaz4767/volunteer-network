import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'f70291d5afd95c766cdd475b695d69c5')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="container mt-5">
            <h1>Add your awesome event here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-2" name="example" defaultValue="test" ref={register} />
                <br/>
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br/>
                <input className="mt-4" type="submit" />
            </form> 
        </div>
    );
};

export default AddEvents;