export interface Author {
  name: string,
  role: string,
  avatar: string,
}

export interface PostProps {
  id?: number,
  author: Author,
  content: ({
      type: 'paragraph' | 'link',
      text: string,
  } | {
      type: 'hashtag',
      text: string[],
  })[],
  publishedAt: Date
}
