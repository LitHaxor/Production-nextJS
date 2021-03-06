import React from 'react'
import { Pane, majorScale, Text, Button } from 'evergreen-ui';
import Container from './Container';
import NextLink from 'next/link'
import Logo from './Logo';
const HomeNav = () => {
    return (
        <nav>
            <Pane width="100vw" paddingY={majorScale(1)} borderBottom height={majorScale(9)}>
                <Container height="100%">
                    <Pane display="flex" justifyContent="space-between" alignItems="center" height="100%">
                        <Logo/>
                        <Pane display="flex" justifyContent="space-around" alignItems="center">
                            <Pane paddingX={majorScale(3)}>
                                <NextLink href="/blog">
                                    <a>
                                        <Text fontSize="16px">Blog</Text>
                                    </a>
                                </NextLink>
                            </Pane>
                            <Pane paddingX={majorScale(3)}>
                                <NextLink href="/signin">
                                    <a>
                                        <Text fontSize="16px">Sign In</Text>
                                    </a>
                                </NextLink>
                            </Pane>
                        </Pane>
                    </Pane>
                </Container>
            </Pane>
        </nav>
    )
}

export default HomeNav
