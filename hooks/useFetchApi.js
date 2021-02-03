import React from 'react';

const getServerSideProps = async () => {
    const { API_URL } = process.env;

    const res = await fetch(`${API_URL}/`)
    const data = await res.json()

    return {
      props: {
        Blogs: data,
        Categories: data
      },
    }
  }
  
  export default getServerSideProps;