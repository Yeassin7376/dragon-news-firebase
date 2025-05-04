import React from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    const {title, details, image_url, category_id} = news;
    return (
        <div className='p-6 border border-base-200 rounded-md space-y-5'>
            <img className='w-full rounded-md h-auto object-cover' src={image_url} alt="" />
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p className='text-accent'>{details}</p>
            <Link to={`/category/${category_id}`} className='btn btn-secondary font-medium my-2.5'><FaLongArrowAltLeft size={20}></FaLongArrowAltLeft> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;