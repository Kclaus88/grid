import React from 'react';
import './Grid.css'

function Grid(params) {
    return (
        <div>
            <div className="header">
                <h1>header</h1>
            </div>
            <div className="main">
                <div className='left'>
                    <div className="sidebar">
                        <h1>header</h1>
                    </div>
                </div>
                <div className="right">
                <div className="right-top">
                    <div className="content1">
                        <h1>content1</h1>
                    </div>
                </div>
                <div className="right-bottom">
                <div className="content2">
                    <h1>content2</h1>
                </div>
                <div className="content3">
                    <h1>content3</h1>
                </div>
                </div>
                </div>
            </div>
            <div className="footer">
                <h1>footer</h1>
            </div>
        </div>
    )
}

export default Grid;