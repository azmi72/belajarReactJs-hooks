// HOOKS DI FUNCTIONAL COMPONENT
import React, {useState} from 'react'

function Tambah() {
    const [jumlah, setJumlah] = useState(0);

    return (
        <div>
            <p>Angka: {jumlah}</p>
            <button onClick={() => setJumlah(jumlah + 1)}>Tambah</button>
        </div>
    )
}

export default Tambah


// STATE DI CLASS COMPONENT
// import React, { Component } from 'react'

// export default class Tambah extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             jumlah: 0,
//         }
//     }

//     render() {
//         const { jumlah } = this.state;

//         return (
//             <div>
//                 <p>Angka: {jumlah}</p>
//                 <button onClick={() => this.setState({jumlah: jumlah + 1})}>Tambah</button>
//             </div>
//         )
//     }
// }
