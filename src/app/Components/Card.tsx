import React, { ReactNode, useEffect, useState } from 'react';
import axios from 'axios';

type User = {
   id: number,
   firstname : string,
   lastname : string,
   std : string,
   gender : string,
   img_url : string,
};

export default function Card() {
    const [data, setData] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/user');
                setData(response.data);
                setIsLoading(false);
                console.log(response.data);
                
            } catch (error) {
                console.log(`Error fetching data: ${error}`);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
           {data ? (
            <div>
                <p>ID : {data.id}</p>
                <p>ID : {data.firstname}</p>
                <p>ID : {data.lastname}</p>
                <p>ID : {data.std}</p>
                <p>ID : {data.gender}</p>
                <p>Profil : <img src={data.img_url} alt="no image found" /></p>  
            </div>
           ) : (
            <p>loading...</p>
           )}
        </>
    );
}
