import React, { Component } from 'react';
import axios from 'axios';


export default class Blog extends Component {

    state = {
        posts: [],
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                this.setState({ posts: response.data });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    render() {
        const posts = this.state.posts;
        const allpost = posts.map((post, idx) => {

            return (
                <div>
                    <a href="" key={idx}>{post.title}</a><br /><br />
                    <p>{post.body}</p>
                </div>
            )

        });
        return (
            <div>
                <h1 class="text-center">This is Blog Component</h1>
                <div class="d-flex">
                    <div class="flex-grow-1 ms-3 text-center">
                        {allpost}
                    </div>
                </div>
            </div>
        );
    }
}

