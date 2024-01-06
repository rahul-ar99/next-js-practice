import React from 'react';
import Link from 'next/link';

const blog = () => {
    return (
        <div>
            <p>this is blog page</p>
            <div>
                <ul>
                    <Link href={'/blogpost/learning-javascript'}><li>asjdfkjl laush fkds</li></Link>
                    <Link href= {'/blogpost/something fishy'} ><li>klash dfiue kajs flkajshdf lsdf jhkdsf</li></Link>
                    <Link href= {'/blogpost/we"re on break'} ><li>asdfs dfakshfpoiwelklkas fsd</li></Link>
                    <Link href= {'/blogpost/i"m fine'} ><li>contas fkj kajh sdfkjh po  hjkljhasdf nvact</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default blog;