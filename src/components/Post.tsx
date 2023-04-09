import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { getDateRelativeToNow, getLongFormatDate } from "../utils/dateFormater";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { PostProps } from "../interfaces/PostProps";
import { CommentBuild } from "../interfaces/CommentBuild";
import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState<CommentBuild[]>([]);
  const [textComment, setTextComment] = useState("");

  const publishedDateFormatted = getLongFormatDate(publishedAt);
  const publishedDateRelativeToNow = getDateRelativeToNow(publishedAt);
  const isTextCommentEmpty = !textComment;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newComment: CommentBuild = {
      id: Math.floor(Math.random() * 100),
      author: {
        name: "Aron Adams",
        avatar: "https://avatars.githubusercontent.com/u/41453845?v=4",
      },
      content: textComment,
      commentedAt: new Date(Date.now())
    };

    setComments([...comments, newComment]);
    setTextComment("");
  }

  const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setTextComment(target.value);
    target.setCustomValidity('');
  }

  const handleInvalidField = ({ target }: InvalidEvent<HTMLTextAreaElement>) => {
    target.setCustomValidity('Este Campo é obrigatório');
  }

  const deleteComment = (commentId: number) => {
    const filteredComments = comments.filter(({id}) => id !== commentId);

    setComments(filteredComments);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar} alt="Post user avatar" />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {
          content.map(({type, text}, index) => {
            if (type === 'paragraph') return <p key={text}>{text}</p>
            if (type === 'link') return <p key={text}><a href="#">{text}</a></p>
            if (type === 'hashtag') return <p key={index}>{
              text.map((hashtag: string) => <a key={hashtag} href="#">{`${hashtag} `}</a>)
            }</p>
          })
        }
      </div>

      <form onSubmit={ handleSubmit } className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onChange={ handleChange }
          value={ textComment }
          placeholder="Deixe seu comentário"
          onInvalid={handleInvalidField}
          required
        />

        <footer>
          <button disabled={isTextCommentEmpty} type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map(({ author, content, commentedAt, id }) => (
            <Comment 
              key={id}
              author={author}
              content={content}
              commentedAt={commentedAt}
              id={id}
              onDeleteComment={deleteComment}
            />
          ))
        }
      </div>
    </article>
  );
}
