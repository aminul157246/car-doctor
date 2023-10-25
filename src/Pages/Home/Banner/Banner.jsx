import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
// import img5 from '../../../assets/images/banner/5.jpg'
// import img6 from '../../../assets/images/banner/6.jpg'


const Banner = () => {
    return (
        <div >
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img  src={img1} className="w-full rounded-xl" />
                    <div className="absolute flex  gap-5 top-0   bottom-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='space-y-7 text-white w-1/3  pl-12 pt-24'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variation of passages of available, but the majority have suffered alternative in some form</p>
                            <div className="flex gap-4">
                            <button className="btn btn-outline btn-warning">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="absolute flex  top-0  rounded-xl  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='space-y-7 text-white w-1/3  pl-12 pt-24'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variation of passages of available, but the majority have suffered alternative in some form</p>
                            <div className="flex gap-4">
                            <button className="btn btn-outline btn-warning">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <img  src={img2} className="w-full rounded-xl" />
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="absolute flex   top-0   bottom-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='space-y-7 text-white w-1/3  pl-12 pt-24'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variation of passages of available, but the majority have suffered alternative in some form</p>
                            <div className="flex gap-4">
                            <button className="btn btn-outline btn-warning">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <img  src={img3} className="w-full rounded-xl" />
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="absolute flex  gap-5 top-0   bottom-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='space-y-7 text-white w-1/3  pl-12 pt-24'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variation of passages of available, but the majority have suffered alternative in some form</p>
                            <div className="flex gap-4">
                            <button className="btn btn-outline btn-warning">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <img  src={img4} className="w-full rounded-xl" />
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;