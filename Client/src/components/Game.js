import React from "react";

// Components
import Field from "./Field";

export default function Game({ code }) {
    const size = 10;

    return (
        <div>
            <h1> Welcome to the game: {code} </h1>
            <div style={{
                display: 'flex',
                height: '100%',
                flexDirection: 'column',
                borderWidth:5
            }}>
                <Field title="Us" size={size} />
                <Field title="Then" size={size} canSelect />
            </div>
        </div>
    );
}