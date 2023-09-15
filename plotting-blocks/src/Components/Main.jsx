import React from 'react';
import SubContents from './SubContents';
import Advertisement from './Advertisement';

const Main = (props) =>{
    return (
        <>
        <div style={{ 
            height: '900px',
            width: '920px',
            border: '3px solid black',
            backgroundColor: '#e06666',
            display: 'inline-block',
            margin: '10px'
        }}>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />

        </div>
        </>
    );

}

export default Main;