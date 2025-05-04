import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import RighAside from '../components/homelayout/RighAside';
import NewsDetailsCard from '../components/NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams()
    // console.log(id);
    const [news, setNews] = useState({})
    
    useEffect(()=>{

        const newsDetails = data.find(singleNews => singleNews.id == id)

        setNews(newsDetails)

    }, [data, id])

    // console.log(news)

    return (
        <div className='w-11/12 mx-auto my-12'>
            <header>
                <Header></Header>
            </header>
            <main className='mt-14 grid grid-cols-12 gap-5'>
                <div className="details col-span-9">
                    <h3 className='font-bold mb-5'>Dragon News</h3>
                    <NewsDetailsCard news={news}></NewsDetailsCard>

                </div>
                <aside className='col-span-3'>
                    <RighAside></RighAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;