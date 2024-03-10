import React from 'react';
import './Plantsec.css'
import img1 from '../../../Assets/Images/img1.jpg'
import img2 from '../../../Assets/Images/img2.jpg'
import img3 from '../../../Assets/Images/img3.jpg'
const PlantsSec = () => {
    return (
        <div className='mx-auto max-w-7xl mt-12 mb-8'>
            <div className='img md:grid grid-cols-3 justify-center items-center gap-16 img font-mono'>
                <div className=" mb-4">
                    <img src={img1} alt="" />
                    <p>New Arrial</p>
                </div>
                <div className=" mb-4">
                    <img src={img2} alt="" />
                    <p>Winter Deals</p>
                </div>
                <div className="mb-4">
                    <img src={img1} alt="" />
                    <p>Summer Edition</p>
                </div>
            </div>

        </div>

    );
};

export default PlantsSec;