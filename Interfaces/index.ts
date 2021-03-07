
export interface PostFrontMatter {
  title: string
  summary: string
  publishedOn: string
}

export interface Post {
  source: string
  frontMatter: PostFrontMatter
}

export interface Auth {
  links ? : {
    name: string,
    link: string
  } [];
  authButton ? : boolean
}


