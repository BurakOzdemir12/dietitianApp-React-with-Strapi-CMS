import React from 'react';
import useFetch from './hooks/useFetch';

const Lists = ({ catId }) => {
    const { data } = useFetch(
        `http://localhost:1337/api/categories?populate=*&filters[id][$eq]=${catId}`
    );

    console.log(data); // Log the entire data object

    return (
        <div>
            {/* Rest of your component's content */}
        </div>
    );
};

export default Lists;
