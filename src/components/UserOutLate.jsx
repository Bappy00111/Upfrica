import React from 'react';
import User from './User';
import { Outlet } from 'react-router-dom';
import UserContent from './UserContent';
import UserEdit from './UserEdit';

const UserOutLate = () => {
    return (
        <div className='container grid grid-cols-6 mt-10'>
            <div className='col-span-1'>
                <User/>
            </div>
            <div className='col-span-5'>
                <Outlet/>
                
            </div>
        </div>
    );
};

export default UserOutLate;