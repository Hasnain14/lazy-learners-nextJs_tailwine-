import React from 'react';
import Image from 'next/image';

const Card = (props) => {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img  className='w-20 h-full' src={props.service.image} alt="Movie" /></figure>
                    {/* width={0} height={0} sizes='100vw' */}
                <div className="card-body">
                    <h2 className="card-title">{props.service.name}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Explore Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;