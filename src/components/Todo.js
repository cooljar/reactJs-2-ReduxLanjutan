import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div style={styles.container}>
            TABEL DAFTAR TUGAS
            <table>
                <thead>
                    <tr>
                        <th style={styles.colHt}>#</th>
                        <th>DESKRIPSI TUGAS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={styles.colHt}><input type="checkbox"/></td>
                        <td>Menyapu Halaman</td>
                    </tr>
                    <tr>
                        <td style={styles.colHt}><input type="checkbox"/></td>
                        <td>Membuang Sampah</td>
                    </tr>
                    <tr>
                        <td style={styles.colHt}><input type="checkbox"/></td>
                        <td>Membersihkan Kamar Mandi</td>
                    </tr>
                    <tr>
                        <td style={styles.colHt}><input type="checkbox"/></td>
                        <td>Mencuci Mobil</td>
                    </tr>
                </tbody>
            </table>
            *) centang untuk menandakan bahwa tugas sudah selesai.
            </div>
        )
    }
}

const styles = {
    container: {
        marginBottom: '30px'
    },
    colHt: {
        width: '5%',
        textAlign: 'center'
    }
};
