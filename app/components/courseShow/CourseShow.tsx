import React from 'react';
import Image from 'next/image';
import courseType from '../api/index'

const CourseShow = (props:courseType) => {
    const courseData = props.courseData;
    return (
        <div>
            <div className="card card-compact w-56 h-96 bg-base-100 shadow-xl">
                <figure><Image width={224} height={112} className='w-56 h-28 m-auto' src={courseData.images} alt="image" /></figure>
                <div className="card-body">
                    <p className='text-center'>Author: <span className='text-red-600'>{courseData.name}</span></p>
                    <h2 className="card-title justify-center font-Poppins text-center">{courseData.course_name} </h2>
                    <p className='text-center'>{courseData.description} </p>
                    <p className='text-center text-red-500 font-semibold'>$ {courseData.price} </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-[100%] h-[1rem]">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseShow;