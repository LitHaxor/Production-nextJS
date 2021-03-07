import React from 'react'
import {Pane, majorScale} from 'evergreen-ui';
import HomeNav from '../../components/HomeNav';
import Container from '../../components/Container';
import PostPreview from '../../components/PostPreview';
import path from 'path';
import fs from 'fs';
import orderBy from 'lodash.orderby';
import matter from 'gray-matter';
const Blog = ({posts}) => {
    return (
       <Pane>
           <header>
               <HomeNav/>
           </header>
           <main>
               <Container>
                   {
                       posts.map((post)=>(
                           <Pane key={post.title} marginY={majorScale(5)}>
                               <PostPreview post={post}/>
                           </Pane>
                       ))
                   }
               </Container>
           </main>
       </Pane>
    )
}

export default Blog


export const getStaticProps = async() =>{
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory);

    const posts= orderBy(
        filenames.map((filename) =>{
            const filePath = path.join(postsDirectory, filename);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const {data} = matter(fileContents);
            return {...data, slug: filename.replace('.mdx', '')}
        }
    ),
    ['publishedOn'],
    ['desc'],
    )
    return {props: {posts}}
}