export interface CommentBuild {
  id: number,
  author: {
    name: string,
    avatar: string,
  },
  content: string,
  commentedAt: Date
};