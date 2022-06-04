import React from "react";
import Square from './Square';

export default function Field({title, size, canSelect}) {
    const renderLine = () => {
        const all = [];
        for (let i=0; i<size; i++)
            all.push(<Square canSelect={canSelect} />);
        return all;
    }

    const renderSquares = () => {
        const all = [];
        for (let i=0; i<size; i++)
            all.push(<div style={{display: 'flex', flex:1, flexDirection: 'row'}}>{renderLine()}</div>);
        return all;
    }

    return (
        <div style={{
            border: '1px solid #000',
            borderRadius: 10,
            padding: 10,
            margin: 10, 
            backgroundColor: 'rgba(0,0,0,0.1)',
            flex:1,
            display: 'flex',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            { title }
            {renderSquares()}
        </div>
    );
}