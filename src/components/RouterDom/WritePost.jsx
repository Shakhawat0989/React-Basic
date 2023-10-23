import React, { Component } from 'react';

export default class WritePost extends Component {

    state = {
        title: '',
        body: ''
    }
    formSubmit = (e) => {
        e.preventDefault();
        // axios.post('/aikhane api url use korte hbe', {
        //     title: this.state.title,
        //     body: this.state.body
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        alert('Form Summit')
    }

    render() {
        return (
            <div>
                <div class="jumbotron col-lg-4">
                    <form onSubmit={this.formSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Title{this.state.title}</label>
                            <input type="text" class="form-control" id="title" name="title" required onChange={(event) => { this.setState({ title: event.target.value }) }} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Details {this.state.body}</label>
                            <textarea name="body" id="body" class="form-control" onChange={(event) => { this.setState({ body: event.target.value }) }}>Write Here</textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">Publish</button>
                    </form>
                </div>
            </div>
        );
    }
}

