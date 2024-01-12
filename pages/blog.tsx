import React, {useEffect, useState} from 'react';
import Link from 'next/link';

const blog = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        console.log("useEffect is running");
        fetch('http://localhost:3000/api/blogs').then((a)=>{
            return a.json();})
            .then((parsed)=>{
                console.log(parsed)
                setBlogs(parsed)
            })
    },[])

    return (
        <div>
            <p className='text-3xl'>this is blog page</p>
            <div className='m-5'>
                <ul className='flex flex-col gap-5'>
                {blogs.map((blogitem)=>{

                    return <>
                        <Link key={blogitem.title} href={`blogpost/${blogitem.slug}`}>
                            <li>{blogitem.title}
                                <p>{blogitem.content.substr(0,100)}...</p>
                            </li>
                            </Link>
                    </>
                    
                })}
                </ul>
            </div>
        </div>
    );
};

export default blog;