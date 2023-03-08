import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function EditPost() {

  //------------Show details----------------//

  const params = useParams();
  // console.log(params);

  useEffect(() => {
    axios.get(`/posts/${params.id}`)
      .then(res => {
        // console.log(res.data.post)
        setTitle(res.data.post.title)
        setDescription(res.data.post.description)
        setPostCategory(res.data.post.postCategory)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  //------------Update details----------------//

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

    axios.put(`/posts/update/${params.id}`, newPost)
      .then(() => {
        alert("Post Updated Successfully")
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
        Edit Post
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
          &nbsp; Update
        </button>
      </form>
    </div>

  )
}

export default EditPost