"use client"
import { deleteBlog, getBlogById, updateBlog } from '@/lib/actions'
import { useRouter } from 'next/navigation'
import React, { FormEvent, Fragment, useEffect, useRef } from 'react'
import { Toaster, toast } from 'react-hot-toast'



const EditBlog = ({params}: {params: {id: string}}) => {
    const router = useRouter()
    const titleRef = useRef<HTMLInputElement | null>(null)
    const descRef = useRef<HTMLTextAreaElement | null>(null)
    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        if(titleRef.current && descRef.current){
            toast.loading("Updating...", {id: "1"})
            updateBlog({title:titleRef.current?.value, desc:descRef.current?.value,
            id: params.id})
            toast.success("Blog updated successfully", {id: "1"})
            router.push("/")
        }
    }
    const handleDelete = async () => {
            toast.loading("Deleting...", {id: "1"})
            deleteBlog(params.id)
            toast.success("Blog deleted successfully", {id: "1"})
            router.push("/")
    }
    useEffect(() => {
        toast.loading("Fetching...", {id: "1"})
            getBlogById(params.id).then((data) => {
                const post = data.post
                if(titleRef.current && descRef.current){
                    titleRef.current.value = post.title
                    descRef.current.value = post.desc
                }
                toast.success("Fetching completed", {id: "1"})

            }).catch(err => {console.log(err)
                toast.error("Fetching blog failed",{id: "1"})
            })
    },[params.id])
  return (
    <Fragment>
    <Toaster/>
    <div className="w-full m-auto my-4 flex">
        <div className="flex flex-col justify-center items-center
        m-auto ">
            <p className=' text-2xl text-slate-200 font-bold p-3'>Edit Blog</p>
            <form onSubmit={handleSubmit}>
                <input ref={titleRef} placeholder='Enter Title' type="text " className='rounded-md px-4 py-2
                my-2 w-full' />
                <textarea ref={descRef} className='rounded-md pt-2 px-4 w-full my-2'
                placeholder='Enter Description'></textarea>
                <div className='flex justify-between'>
                <button className="font-semibold px-4 py-1 shadow-xl 
                bg-slate-200 rounded-lg m-auto hover:bg-slate-100
                ">Update</button>
                </div>
            </form>
                <button onClick={handleDelete} className="font-semibold px-4 py-1 shadow-xl 
                bg-red-400 rounded-lg mt-3 m-auto hover:bg-red-100
                ">Delete</button>
        </div>
    </div>
</Fragment>
  )
}

export default EditBlog