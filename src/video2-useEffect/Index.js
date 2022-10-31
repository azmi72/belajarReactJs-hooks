import React, { Component } from 'react'
import UseEffect from './UseEffect'
// import LifeCycleClass from './LifeCycleClass'

export default class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isHide: false,
        }
    }

    render() {
        const { isHide } = this.state

        return (
            <div style={{ padding: "30px" }}>
                <h2>Contoh Perbedaan Life Cycle dengan useEffect</h2>
                <hr />
                <button onClick={() => this.setState({ isHide: !isHide })}>
                    { isHide ? "Tampilkan" : "Sembunyikan" }
                </button>

                {/* { !isHide && <LifeCycleClass /> } */}
                { !isHide && <UseEffect /> }
            </div>
        )
    }
}
