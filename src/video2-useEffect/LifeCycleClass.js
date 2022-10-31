import React, { Component } from 'react'

export default class LifeCycleClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    name: json.name,
                    isUpdate: false,
                })
            });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/users/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                name: this.state.name,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    isUpdate: true,
                })
            });
    }

    componentDidUpdate() {
        const { isUpdate } = this.state;
        if (isUpdate) {
            alert("Berhasil");
            this.setState({
                isUpdate: false,
            })
        }
    }

    componentWillUnmount() {
        console.log("Component di copot!");
    }

    render() {
        return (
            <div>
                <h4>Nama: {this.state.name}</h4>
                <form onSubmit={(event) => (this.handleSubmit(event))}>
                    <input
                        type="text"
                        placeholder="Ubah Nama"
                        name="name"
                        onChange={(event) => this.setState({ name: event.target.value })}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
