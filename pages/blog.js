import React, { useEffect, useState } from 'react';
import Work from '../components/Work';
import Layout from '../components/Layout';
import * as contentful from 'contentful';
import Button from '@material-ui/core/Button';

const Blog = () => {
  const client = contentful.createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  });

  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(async() => {
    const response = await client.getEntries({
      content_type: "blogPost",
      order: "-sys.createdAt",
      limit: 6
    })
    setBlogs(response.items);
    setIsLoading(false);
  },[isLoading])

  return (
    <Layout title='Blog' description='これまでに身に付けた知識や問題の解決方法を紹介した記事へのリンクです。'>
        <div className='contents'>
            <h2>Blog</h2>
            <div className='wrapper'>
                {isLoading ? (
                <p>Now Loading...</p>
                ) : (
                <div>
                    <div className='work-back'>
                    {blogs.map(blog => {
                        return(
                        <a href={'https://www.ryoblg.com/blog/post/'+blog.fields.slug}>
                            <Work 
                                name={blog.fields.title}
                                description=''
                                image={'https:'+blog.fields.eyecatch.fields.file.url}
                                isPortfolio={false}                        
                                experience=''                   
                            />
                        </a>
                        )
                    })}
                    </div>
                    <Button variant='outlined' className='moreButton' href='https://ryoblg.com/blog/'>
                    More
                    </Button>
                </div>
                )}
            </div>
        </div>
    </Layout>
  );
}

export default Blog;
