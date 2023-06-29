import { BlogPost } from "@/app/page"
import Link from "next/link"


type Props = {
    post: BlogPost
}
const AllBlogs = ({post}: Props) => {
  return (
    <div key={post.id} className="w-3/4 p-4 rounded-md mx-3 my-2 bg-slate-200 flex flex-col justify-center">
    {/* TITLE AND ACTIONS */}
    <div className="flex justify-between items-center my-2">
      <div className="mr-auto">
        <h2 className="mr-auto text-2xl font-semibold">{post.title}</h2>
      </div>
      <Link href={`/blog/edit/${post.id}`} className="px-4 text-center text-md py-1 bg-slate-900 rounded-md font-semibold text-slate-200">
        Edit
      </Link>
    </div>
    {/* DATE AND DESC */}
    <div className="mr-auto">
      <blockquote className="font-bold text-sm text-slate-700 ">
        { new Date(post.date).toDateString()}
      </blockquote>
    </div>
    <div className="mr-auto my-4">
      <p className="font-bold text-md text-slate-700 ">
        { post.desc}
      </p>
    </div>
  </div>
  )
}

export default AllBlogs