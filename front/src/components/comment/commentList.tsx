import React from 'react';
import Comment from './comment';

interface ListCommentProps {
  comments: { content: string }[];
}

const ListComment: React.FC<ListCommentProps> = ({ comments }) => {
  return (
    <div className="space-y-4">
      {comments.map((comment, index) => (
        <Comment key={index} content={comment.content} />
      ))}
    </div>
  );
};

export default ListComment;
