import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [name, setName] = useState("")
    const [isUpdate, setIsUpdate] = useState(false)

    // componentDidMount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => response.json())
            .then((json) => {
                setName(json.name)
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/users/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                name: name,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setIsUpdate(true)
            });
    }

    // componentWillUpdate
    useEffect(() => {
        if(isUpdate) {
            alert("Nama berhasil diupdate")
            setIsUpdate(false)
        }
    }, [isUpdate])

    // componentWillUnmount
    useEffect(() => {
        return () => {
            console.log("Berhasil dicopot");
        }
    }, [])

    return (
        <div>
            <h4>
                Nama: {name}
            </h4>
            <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        placeholder="Ubah Nama"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
        </div>
    )
}

export default UseEffect