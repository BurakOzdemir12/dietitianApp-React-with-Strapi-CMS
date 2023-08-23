import React from 'react'
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const Catlist = () => {
    const { data } = useFetch("http://localhost:1337/api/categories?populate=*");

    if (!data) {
        return <div>Loading...</div>; // Return a loading indicator if data is not available yet
    }

    // Now you can safely access data[0]?.attributes.title

    return (
        <div>
            {data?.map((item) => (
               <Link to={`/catitems/${item?.id}`} key={item.id}>
                   <div>{item?.attributes?.title}</div>
               </Link>
            ))}
        </div>
    )
}

export default Catlist;
