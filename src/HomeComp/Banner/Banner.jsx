import img from '../../../Assets/Images/stephanie-harvey-T0inbt7nRME-unsplash-removebg-preview.png'

const Banner = () => {
    return (
        <div className='md:flex md:gap-20 md:justify-center md:items-center '>
            <div>
                <p className='text-6xl font-semibold font-mono text-green-800'>Uncomplicate Indoor <br /> Gardening</p>
                <p className='mt-4'>Discover the joy of bringing nature indoors with our curated selection of beautiful and vibrant indoor plants </p>
                <button className="btn btn-outline btn-success mt-8">Discover Us</button>
            </div>
            <div className="mb-20 " >
                <img src={img} alt="" />
            </div>

        </div>



    );
};

export default Banner;