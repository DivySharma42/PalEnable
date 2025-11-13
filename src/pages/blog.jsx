import React from 'react'
import PageHeader from '@/components/sections/pageHeader'
import { blogData } from '@/db/blogData'
import BlogCard from '@/components/sections/blogs/blogCard'

const Blog = () => {
    return (
        <>
            <PageHeader
                className={"sbg-6"}
                currentPage={"Blog Grid"}
                title={"Blog Grid"}
            />
            <div className="blog-section-2 ptb-100">
                <div className="container">
                    <div className="row">
                        {
                            blogData.map((blog) => (
                                <div key={blog.id} className="col-xl-4 col-sm-6">
                                    <BlogCard blog={blog} cardClass="grid" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* <InstagramGallery /> */}
        </>
    )
}

export default Blog