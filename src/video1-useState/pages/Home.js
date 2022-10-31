import React, { Component } from 'react'
import Tambah from '../component/Tambah'

export default class Home extends Component {
    render() {
        return (
            <div style={{ padding: "30px" }}>
                <header>
                    <h2>Ini contoh State & Hooks</h2>
                </header>
                <hr/>

                <Tambah />
            </div>
        )
    }
}
