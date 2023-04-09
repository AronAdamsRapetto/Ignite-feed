import { useState } from 'react';
import { getDateRelativeToNow, getLongFormatDate } from '../utils/dateFormater';
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { CommentProps } from '../interfaces/CommentProps';

export function Comment({author, content, commentedAt, id, onDeleteComment}: CommentProps) {
  const [likeCounter, setLikeCounter] = useState(0);

  const longDateformat = getLongFormatDate(commentedAt);
  const relativeDate = getDateRelativeToNow(commentedAt);

  const handleDelete = (commentId: number) => {
    onDeleteComment(commentId)
  }

  const handleClick = () => {
    setLikeCounter((counterState) => counterState + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        src={author.avatar}
        alt="Comment user avatar"
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time
                title={longDateformat}
                dateTime={commentedAt.toISOString()}
              >
                {relativeDate}
              </time>
            </div>
            <button onClick={() => handleDelete(id)} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleClick}>
            <ThumbsUp />
            Aplaudir <span>{likeCounter}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
