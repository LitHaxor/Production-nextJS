import { Button, Heading, Link, majorScale, Pane, Paragraph } from 'evergreen-ui'
import React, {FC} from 'react'

interface Preview{
    post:{
        title: string,
        summary: string,
        slug: string
    }
}


const PostPreview:FC<Preview> = ({post}) => {
    return (
        <Pane padding={majorScale(2)} border borderRadius={4}>
            <Heading size={700} marginBottom={majorScale(2)}>
                {post.title}
            </Heading>
            <Paragraph marginBottom={majorScale(2)}>{post.summary}</Paragraph>
            <Pane textAlign="right">
                <Link href={`/blog/${post.slug}`}>
                    <a>
                        <Button appearance="minimal" intent="success" height={48}>
                            Read
                        </Button>
                    </a>
                </Link>
            </Pane>
        </Pane>
    )
}

export default PostPreview
