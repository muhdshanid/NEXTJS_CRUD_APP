import EditBlog from '@/components/EditBlog'
import React from 'react'

const page = ({params}: {params: {id: string}}) => {
  return (
  <EditBlog params={params}/>
  )
}

export default page