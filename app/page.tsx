import AllBlogs from "@/components/AllBlogs";
import Image from "next/image";
import Link from "next/link";

const fetchBlogs = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    method: "GET",
    next: { revalidate: 10 },
  });

  const data = await res.json()
  return data.posts
};

 export type BlogPost = {
  id: string,
  title: string,
  desc: string,
  date: Date
}

export default async function Home() {
  const posts: BlogPost[] = await fetchBlogs()
  
  return <main className="w-full h-full">
    <div className="md:w-2/4 sm:w-3/4 mx-auto p-4 my-5 rounded-lg
    bg-slate-800 drop-shadow-xl">
      <h1 className=" text-slate-200 text-center text-2xl font-extrabold font-[verdana]">
        Blogs App
      </h1>
      </div>
      {/* LINK */}
      <div className="flex my-5">
        <Link href={"/blog/add"} className="md:w-1/6 text-center sm:w-2/4 rounded-md p-2 m-auto bg-slate-200">
          Add New Blog
        </Link>
    </div>
    {/* BLOGS */}
    <div className="w-full flex flex-col justify-center items-center">
      {
        posts?.map((post: BlogPost) => (
         <AllBlogs post={post} key={post.id}/>
        ))
      }
    </div>
  </main>;
}
