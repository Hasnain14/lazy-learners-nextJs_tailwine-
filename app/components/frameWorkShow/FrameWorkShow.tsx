import React from 'react';
import {FrameworkProps} from './types'

const FrameWorkShow = (props:FrameworkProps) => {
    return (
        <div className='w-fit text-center'>
            <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src= {props.frameWork.image} />
                </div>
            </div>
                <h1 className='font-bold font-cursive text-xl'>{props.frameWork.name} </h1>
        </div>
    );
};

export default FrameWorkShow;