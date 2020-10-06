import React, { Component } from 'react';

export default class VisibilityFilters extends Component {
    render() {
        return (
            <>
            FILTER TUGAS
            <div className="container">
                <input type="radio" value="all" name="filter" /> Semua
                <input type="radio" value="complete" name="filter" /> Sudah Selesai
                <input type="radio" value="incomplete" name="filter" /> Belum Selesai
            </div>
            </>
        )
    }
}
