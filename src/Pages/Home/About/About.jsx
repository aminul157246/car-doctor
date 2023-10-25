import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="my-12  ">
  <div className="hero-content flex-col lg:flex-row">
    <div className='relative'>
    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={parts} className="absolute top-1/2 right-5 border-8 border-white w-2/4 rounded-lg shadow-2xl" />
    </div>
    <div className='space-y-5 p-4'>
        <p className='text-[#FF3811] font-bold text-xl'>About Us</p>
      <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

      <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      <button className="px-4 py-2 rounded-lg bg-[#FF3811]">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;