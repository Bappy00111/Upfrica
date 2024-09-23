import React from 'react';
import User from './User';
import { Outlet } from 'react-router-dom';
import UserContent from './UserContent';
import UserEdit from './UserEdit';

const UserOutLate = () => {
    return (
        <div className='container md:grid md:grid-cols-12  gap-4 p-4'>
            <div className='md:col-span-2'>
                <User/>
            </div>
            <div className='md:col-span-9'>
                <Outlet/>
                {/* <h1>hellow</h1> */}
            </div>
        </div>
    );
};

export default UserOutLate;