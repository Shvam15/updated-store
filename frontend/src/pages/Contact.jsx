import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 border-t'>
                <Title text1={'CONTACT'} text2={' US'} />
            </div>
            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
                <img src={assets.contact_img} className='w-full md:max-w-[480px]' />
                <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='font-semibold text-xl text-gray-600'>OUR STORE</p>
                    <p className='text-gray-500'>G.No-8 near Police Station<br />LAJPAT NAGAR</p>
                    <p className='text-gray-500'>Tel: 9999999999 <br />Email: shipshopstoremails@gmail.com</p>
                    <p className='font-semibold text-xl text-gray-600'>Careers at Ship Shop Store</p>
                    <p className='text-gray-500'>Learn More about team</p>
                    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
                </div>
            </div>
            <NewsletterBox />
        </div>
    )
}

export default Contact