"use client"
import { addBlog } from '@/lib/actions'
import { useRouter } from 'next/navigation'
import React, { FormEvent, Fragment, useRef } from 'react'
import { Toaster, toast } from 'react-hot-toast'



const CreateBlog = () => {
    const router = useRouter()
    const titleRef = useRef<HTMLInputElement | null>(null)
    const descRef = useRef<HTMLTextAreaElement | null>(null)
    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        console.log(titleRef.current?.value, descRef.current?.value);
        if(titleRef.current && descRef.current){
            toast.loading("Creating...", {id: "1"})
            addBlog({title:titleRef.current?.value, desc:descRef.current?.value})
            toast.success("Blog created successfully", {id: "1"})
            router.push("/")
        }
    }
  return (
    <Fragment>
        <Toaster/>
        <div className="w-full m-auto my-4 flex">
            <div className="flex flex-col justify-center items-center
            m-auto ">
                <p className=' text-2xl text-slate-200 font-bold p-3'>Add New Blog</p>
                <form onSubmit={handleSubmit}>
                    <input ref={titleRef} placeholder='Enter Title' type="text " className='rounded-md px-4 py-2
                    my-2 w-full' />
                    <textarea ref={descRef} className='rounded-md pt-2 px-4 w-full my-2'
                    placeholder='Enter Description'></textarea>
                    <button className="font-semibold px-4 py-1 shadow-xl 
                    bg-slate-200 rounded-lg m-auto hover:bg-slate-100
                    ">Create</button>
                </form>
            </div>
        </div>
    </Fragment>
  )
}

export default CreateBlog