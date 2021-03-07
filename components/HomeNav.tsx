import React, {FC} from 'react'
import { Pane, majorScale, Text, Button } from 'evergreen-ui';
import Container from './Container';
import NextLink from 'next/link'
import Logo from './Logo';
import {Auth} from '../Interfaces';

const HomeNav:FC<Auth> = ({links, authButton}) => {
    return (
        <nav>
            <Pane width="100vw" paddingY={majorScale(1)} borderBottom height={majorScale(9)}>
                <Container height="100%">
                    <Pane display="flex" justifyContent="space-between" alignItems="center" height="100%">
                        <Logo/>
                        <Pane display="flex" justifyContent="space-around" alignItems="center">
                            {
                                links && links.length >0 ?
                                    links.map((e)=>(
                                        <Pane paddingX={majorScale(3)}>
                                            <NextLink href="/blog">
                                                <a>
                                                    <Text fontSize="16px">Blog</Text>
                                                </a>
                                            </NextLink>
                                        </Pane>
                                    )): null 
                            }
                            {
                                authButton ? (
                                    <Pane paddingX={majorScale(3)}>
                                        <NextLink href="/signin">
                                            <a>
                                                <Text fontSize="16px">Sign In</Text>
                                            </a>
                                        </NextLink>
                                </Pane>
                                ) : null
                            }
                        </Pane>
                    </Pane>
                </Container>
            </Pane>
        </nav>
    )
}

HomeNav.defaultProps = {
    authButton: true,
    links: [{ name: 'Blog', link: '/blog' }],
}

export default HomeNav
