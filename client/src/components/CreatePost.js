import React, { useState } from 'react'
import axios from 'axios'


function CreatePost() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [postCategory, setPostCategory] = useState("");


    function onChangeTitle(e) {
        setTitle(e.target.value);
    }
    function onChangeDescription(e) {
        setDescription(e.target.value);
    }
    function onChangePostCategory(e) {
        setPostCategory(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();

        const newPost = {
            title,
            description,
            postCategory
        }

        console.log(newPost);

        axios.post("/posts/save", newPost)
            .then(() => {
                alert("Post Added")
                setTitle("")
                setDescription("")
                setPostCategory("")
            })
            .catch((err) => {
                alert(err)
            })
    }

    return (
        <div className='col-md-8 mt-4 mx-auto
        '>
            <h1 className='h3 mb-3 font-weight-normal
            '>
                Create Post
            </h1>
            <form className='needs-validation' noValidate>
                <div className='form-group' style={{
                    marginBottom: '15px'
                }}>
                    <label style={
                        { marginBottom: '5px' }
                    }>Title</label>
                    <input type='text' className='form-control' name='title' placeholder='Enter Title'
                        value={title}
                        onChange={onChangeTitle}
                    />
                </div>
                <div className='form-group' style={{
                    marginBottom: '15px'
                }}>
                    <label style={
                        { marginBottom: '5px' }
                    }>Description</label>
                    <input type='text' className='form-control' name='description' placeholder='Enter Description'
                        value={description}
                        onChange={onChangeDescription}
                    />
                </div>
                <div className='form-group' style={{
                    marginBottom: '15px'
                }}>
                    <label style={
                        { marginBottom: '5px' }
                    }>Post Category</label>
                    <input type='text' className='form-control' name='postCategory' placeholder='Enter Post Category'
                        value={postCategory}
                        onChange={onChangePostCategory}
                    />
                </div>

                <button className='btn btn-success' type='submit' style={{
                    marginTop: '15px'
                }} onClick={onSubmit}>
                    <i className='far fa-check-square'></i>
                    &nbsp; Save
                </button>
            </form>
        </div>

    )
}

export default CreatePost