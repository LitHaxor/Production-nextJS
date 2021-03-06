import React, {FC} from 'react'
import {Heading, Pane, Paragraph, Image, majorScale} from 'evergreen-ui';
import Container from './Container';
interface future{
    invert?: boolean,
    title: string,
    body: string,
    image: string
}


const FeatureSection:FC<future> = ({
    title,
    body,
    image,
    invert
}) => {
    const Left = () =>(
        <Pane>
            <Heading size={900}>{title}</Heading>
            <Paragraph size={500}>{body}</Paragraph>
        </Pane>
    )
    const Right = () => (
        <Pane textAlign={invert ? 'left': 'right'}>
            <Image src={image}/>
        </Pane>
    )
    const children = invert ? [Right , Left] : [Left, Right]
    return (
       <Pane 
        minHeight= "70vh"
        background = {invert ? 'tint1':'white'}
        paddingY={majorScale(8)}
        borderTop
        display= "flex"
        alignItems= "center"
       >
           <Container height="100%">
                <Pane display= "flex" alignItems = "flex-start">
                    {
                        children.map((Child, i)=>(
                            <Pane key={i} width="50%">
                                <Child/>
                            </Pane>
                        ))
                    }
                </Pane>
           </Container>
       </Pane>
    )
}

export default FeatureSection
