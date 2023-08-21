import React from 'react';
import useFetch from '../Components/hooks/useFetch';

const Test = () => {
  const { data } = useFetch("http://localhost:1337/api/foods?populate=*");
  console.log(data);
  
  return (
    <>
      {data?.map((item) => (
       
        <img
          key={item.id}
          src={`http://localhost:1337${item.attributes?.img?.data?.attributes?.url}`}
          alt=""
        />
      ))}
    </>
  );
};

export default Test;
