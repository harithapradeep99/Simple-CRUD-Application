import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const PostDetails = () => {

    const [post, setPost] = useState([]);

    const params = useParams();
    // console.log(params);

    useEffect(() => {
        axios.get(`/posts/${params.id}`)
            .then(res => {
                console.log(res.data.post)
                setPost(res.data.post)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    // const tpp = post.title


    return (
        <div className='container' style={{ marginTop: '20px' }}>

            <h4>
                {post.title}
            </h4>

            <hr />

            <dl className='row'>
                <dt className='col-sm-3'>Description</dt>
                <dd className='col-sm-9'>{post.description}</dd>

                <dt className='col-sm-3'>Post Category</dt>
                <dd className='col-sm-9'>{post.postCategory}</dd>
            </dl>


            {/* <h3>{tpp}</h3> */}

            {/* <h1>
                {JSON.stringify(params)}
            </h1> */}

        </div>
    )
}

export default PostDetails