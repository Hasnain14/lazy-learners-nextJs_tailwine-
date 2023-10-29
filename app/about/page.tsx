
"use client"
import React, { useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Card from '../components/card/Card';
import Footer from '../components/footer/Footer';
import FrameWorkShow from '../components/frameWorkShow/FrameWorkShow';
import { frameWork, services } from './constants';
import { getUsers, getUsersWithDelay } from '../api';

const About = () => {

    // Approach one
    useEffect(()=>{
        getUsers().then(res=>{
            console.log({res})
        })
    })

    // approach two
    useEffect(()=>{
        (async()=>{
            const result = await getUsersWithDelay();
            console.log({result})
        })()
    })

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-3/4 m-auto'>
                {/* first part */}
                <div className='flex justify-evenly gap-6 mt-10 px-5'>
                    <div className='w-1/2'>
                        <h1 className='text-center font-Audiowide font-extrabold text-2xl'>Our Mission</h1>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugiat cumque quo consequuntur nam saepe officiis perferendis nostrum? Nam illum facere recusandae eaque explicabo officiis temporibus minima? Illum, esse perspiciatis.nam saepe officiis perferendis nostrum? Nam illum facere recusandae eaque explicabo officiis temporibus minima? Illum, esse perspiciatis</p>
                    </div>

                    <div className='w-1/2 flex justify-center items-center'>
                        <img className='h-56' src="about-mission.png" alt="" />
                    </div>
                </div>
                {/* second part */}
                <div className='flex justify-evenly items-center gap-6 mt-10 px-5'>
                    <div className='w-1/2 flex justify-center items-center'>
                        <img className='rounded-2xl h-32' src="https://t4.ftcdn.net/jpg/04/03/27/39/360_F_403273952_rzAfeNqfa7jFZCmDoeB2qLKtJYAx23dj.jpg" alt="" />
                    </div>

                    <div className='w-1/2'>
                        <h1 className='text-center font-Audiowide font-extrabold text-2xl'>Our Story</h1>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugiat cumque quo consequuntur nam saepe officiis perferendis nostrum? Nam illum facere recusandae eaque explicabo officiis temporibus minima? Illum, esse perspiciatis.nam saepe officiis perferendis nostrum? Nam illum facere recusandae eaque explicabo officiis </p>
                    </div>
                </div>
                {/* third part */}
                <div className='flex flex-col items-center mt-10 px-5'>

                    <h1 className='font-Audiowide font-extrabold text-2xl'>Our Services</h1>

                    <div className='flex flex-wrap justify-center gap-3 mt-4 mb-10'>
                        {services.map(ser => <Card service={ser} key = {ser.key}></Card>)}
                    </div>

                </div>
            </div>
            {/* use framework */}
            <div className=" p-10 bg-base-200 text-base-content rounded mb-10">
                <h1 className='text-center font-cursive font-bold text-2xl pb-6'>This Website is Built With....</h1>
                <div className='flex justify-center items-center gap-10'>
                    {frameWork.map(fw => <FrameWorkShow frameWork = {fw} key = {fw.key}></FrameWorkShow>)}
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default About;