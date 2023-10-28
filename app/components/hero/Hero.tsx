import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <div className="hero min-h-fit">
                <div className="hero-content flex-col lg:flex-row-reverse ml-10">
                    <img src="heroImage.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-1/2 mr-10'>
                        <h1 className="text-5xl font-bold">Learn without limits</h1>
                        <p className="py-6">Start, switch, or advance your career with more than 5,800 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;