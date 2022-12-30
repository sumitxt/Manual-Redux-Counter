import React from 'react';

const Counter = () => {
    return (
        <div className="card">
            <div className="card-header bg-secondary">
                <h4>My counter Page</h4>
            </div>
            <div className="card-body"></div>
            <h1>00</h1>
            <div className="my-4">
                <button className="btn btn-success">Increase</button>
                <button className="btn mx-2 btn-danger">Decrease</button>
            </div>
        </div>
    );
};

export default Counter;