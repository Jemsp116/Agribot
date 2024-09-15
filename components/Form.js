"use client";
import { Button } from '@nextui-org/react'
import axios from 'axios';
import React, { useState } from 'react'

const Form = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(form);
        await axios.post(`/api/message`, form);
        setForm({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        });

        setLoading(false);
    }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <div className='flex flex-col md:flex-row gap-3'>
            <div className='flex flex-col'>
                <label htmlFor="name">First Name</label>
                <input type="text" value={form.firstName} onChange={(e) => setForm({...form, firstName: e.target.value})} id='name' name='name' className='md:w-[194px]' />
            </div>
            <div className='flex flex-col gap'>
                <label htmlFor="name">Last Name</label>
                <input type="text" value={form.lastName} onChange={(e) => setForm({...form, lastName: e.target.value})} id='name' name='name' className='md:w-[194px]' />
            </div>
        </div>
        <div className='flex flex-col'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} name='email' className='md:w-[400px]' />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="message">Wtire to Us</label>
            <textarea id='message' value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} name='message' className='md:w-[400px] h-[125px]' />
        </div>
        <Button variant='solid' isLoading={loading} color='primary' type='submit' className='font-semibold w-32 mx-auto'>Submit</Button>
    </form>
  )
}

export default Form