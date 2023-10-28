'use client'

import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import CourseShow from '../components/courseShow/CourseShow';
import Data from '../fakeData/fakeData.json';


const coursePage = () => {

    const [courseData, setCourseData] = useState([]);

    useEffect (()=> {
        setCourseData(Data)
      },[])

    const searchCourse = (e) => {
        const searchKey = e.target.value;
            
            if (searchKey === '') {
                setCourseData(Data);
            } else {
                const filter_data = Data?.filter((course) =>
                course.course_name.toLowerCase().includes(searchKey.toLowerCase()));
                    setCourseData(filter_data);
            }
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className='w-[90vw] m-auto'>
                {/* search box */}
                <div className="form-control mr-5 py-5">
                    <input onChange={searchCourse} type="text" placeholder="Search" className="input input-bordered h-10 w-56 md:w-auto focus:outline-none focus:border-green-800 focus:shadow-blue-950 focus:shadow-md bg-slate-200" />
                </div>
                {/* course section */}
                <h1 className='text-center font-cursive font-bold text-2xl pb-6'>Find Your Desire Course</h1>

                <div className='flex flex-wrap gap-6 justify-center p-10'>
                    {courseData.map(cd => <CourseShow courseData={cd}></CourseShow>)}
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default coursePage;