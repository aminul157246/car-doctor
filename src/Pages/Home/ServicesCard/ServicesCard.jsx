import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const ServicesCard = ({service}) => {
    const {img, title, price} = service;
    return (
        <div>
            <div className="card  p-6 bg-base-100 border">
                <figure><img className="w-[330px] h-[200px] rounded-lg" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className='text-[#FF3811]'>Price : ${price}</p>
                    <div className="card-actions justify-end">
                        <Link><AiOutlineArrowRight></AiOutlineArrowRight></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


ServicesCard.propTypes = {
    service : PropTypes.object,
}


export default ServicesCard;