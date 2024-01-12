import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router'

const slug = () => {

    const [blog, setBlog] = useState()
    const router = useRouter();
    useEffect(()=>{

        if(!router.isReady) return;

        const {slug} = router.query;
        fetch( `http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
            return a.json();
        })
        .then((parsed)=>{
            setBlog(parsed)
        })
    },[router.isReady])
    
    return (
        <div className='flex flex-col justify-center items-center px-52'>
            <h3 className='block text-2xl mt-10'>{blog && blog.title}</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    );
};

export default slug;