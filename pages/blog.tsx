import React from 'react';
import Link from 'next/link';

const blog = () => {
    return (
        <div>
            <p className='text-3xl'>this is blog page</p>
            <div className='m-5'>
                <ul className='flex flex-col gap-5'>
                    <Link href={'api/getblog?slug=how-to-learn-flask'}><li>leaning javascript</li></Link>
                    <Link href= {'/blogpost/flask'} ><li>learning flask</li></Link>
                    <Link href= {'/blogpost/next js'} ><li>leaning next js</li></Link>
                    <Link href= {'/blogpost/something'} ><li>leaning something</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default blog;