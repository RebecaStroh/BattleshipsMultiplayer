import React from "react";
import {useState} from "react";

export default function Square({canSelect}) {
    const [selected, setSelected] = useState(false);
    const [color, setColor] = useState(undefined);

    return (
        <div style={{
            width: 50,
            height: 50,
            border: '1px solid #000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: color,
        }}
        onClick={() => canSelect &&  setSelected(true)}
        onMouseEnter={() => canSelect && setColor("rgba(0,0,0,0.2)")}
        onMouseLeave={() => canSelect &&  setColor(undefined)}
        >
            {selected && "X"}
        </div>
    );
}