/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {

    const [query, setQuery] = useState("")
    const [msg, setMsg] = useState("")

    const callApi = async () => {
        const uid = Date.now().toString();
        var data = new FormData();
        data.append('query', query);
        data.append('uid', uid);
        const res = await axios.post("http://localhost:8000/api/apitest", data);
        setMsg(res.data)
    }

    return (
        <div className='flex h-screen flex-col justify-center items-center'>
            <div className='w-4/5'>
                <p className='text-lg text-rose-600 font-bold mb-2'>Query:</p>
                <input className='border-2 border-rose-600 rounded w-full h-10 mb-2' value={query} onChange={(e) => setQuery(e.target.value)} />
                <div className='flex justify-end mb-2'>
                    <button className='border-rose-600 bg-rose-600 text-white p-2 border-solid rounded' onClick={() => callApi()}>Call API</button>
                </div>
                <p className='text-lg text-rose-600 font-bold mb-2'>Result:</p>
                <p>{msg}</p>
            </div>
        </div>
    )
}



