import React, { Component } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default class PostDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        }
    }
    

    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`/posts/${id}`)
            .then((res) => {
                this.setState({
                    post: res.data.post
                })

                console.log(this.state.post)
            });

    }



    render() {
        return (
            <div>PostDetails</div>
        )
    }
}
