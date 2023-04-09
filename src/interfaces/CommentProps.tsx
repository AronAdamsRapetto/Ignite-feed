import { CommentBuild } from "./CommentBuild"

export interface CommentProps extends CommentBuild {
  onDeleteComment: (commentId: number) => void
}