type UpdateBlog = {
    title: string,
    desc: string,
    id: string
}
export const getBlogById = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/blog/${id}`)
    const data = res.json()

    return data
}


export const updateBlog = async (data: UpdateBlog) => {
    const res = await fetch(`http://localhost:3000/api/blog/${data.id}`,{
        method: "PUT",
        body: JSON.stringify({title: data.title, desc: data.desc}),
        //@ts-ignore
        "Content-Type": "application/json"
    })

    return res.json()
}
export const deleteBlog = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/blog/${id}`,{
        method: "DELETE",
    })
    return res.json()
}

 type Blog = {
    title: string,
    desc: string
}

export const addBlog = async ({title, desc}: Blog) => {

    const res = await fetch("http://localhost:3000/api/blog",{
        method: 'POST',
        body: JSON.stringify({title, desc}),
        // @ts-ignore
        "Content-Type": "application/json"
    })

    return res.json()
}