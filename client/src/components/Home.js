import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './styles.css'


function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("/posts")
            .then(res => {
                console.log(res.data.existingPosts)
                setPosts(res.data.existingPosts)
            })
            .catch(err => console.log(err))


        // axios.get("http://localhost:8000/posts").then(res => {
        //     if (res.data.success) {
        //         setPosts(res.data.existingPosts);
        //         console.log(posts)
        //     }
        // });

    }, [])

    // const arr = posts.map((posts) => (
    //     <div>
    //         <p>{posts.title}</p>
    //         <p>{posts.description}</p>
    //         <p>{posts.postCategory}</p>
    //     </div>
    // )
    // )


    // to delete a post ----->>>>
    const onDelete = (id) => {
        axios.delete(`/posts/delete/${id}`)
            .then((res) => {
                alert("Post Deleted Successfully");

                window.location.reload(true); // reload the window
            });
    }
    //----->>>>


    // to search a post ----->>>>
    const filterData = (posts, searchKey) => {
        const result = posts.filter((post) =>
            post.title.includes(searchKey) ||
            post.description.includes(searchKey) ||
            post.postCategory.includes(searchKey) ||

            post.title.toLowerCase().includes(searchKey) ||
            post.description.toLowerCase().includes(searchKey) ||
            post.postCategory.toLowerCase().includes(searchKey)
        );
        setPosts(result);
    }

    const handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;
        axios.get("/posts").then((res) => {
            if (res.data.success) {
                filterData(res.data.existingPosts, searchKey);
            }
        });
    }
    //----->>>>


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-9 mt-2 mb-2'>
                    <h4>All Posts</h4>
                </div>
                <div className='col-lg-3 mt-2 mb-2'>
                    <input
                        className='form-control'
                        type='search'
                        placeholder='Search'
                        name='searchQuery'
                        onChange={handleSearchArea}
                    />
                </div>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Topic</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Post Category</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((posts, index) => (
                        <tr key={index}>
                            <th scope='row'>{index + 1}</th>
                            <td>
                                <a href={`/posts/${posts._id}`} style={{ textDecoration: 'none' }}>

                                    {posts.title}
                                </a>
                            </td>

                            <td>{posts.description}</td>
                            <td>{posts.postCategory}</td>
                            <td>
                                <a className='btn btn-warning' href={`/edit/${posts._id}`}>
                                    <i className='fas fa-edit'></i>&nbsp;Edit
                                </a>
                                &nbsp;
                                <a className='btn btn-danger'
                                    onClick={() => {
                                        onDelete(posts._id)
                                    }}
                                >
                                    <i className='fas fa-trash-alt'></i>&nbsp;Delete
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='btn btn-success'><a href='/add' style={{ textDecoration: 'none', color: 'white' }}>Create a Post</a></button>

            {/* {arr} */}

        </div>
    )
}

export default Home