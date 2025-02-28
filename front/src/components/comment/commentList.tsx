import React from 'react';
import Comment from './comment';

interface ListCommentProps {
  comments: { id: string; content: string; author: { username: string } }[] | null[]; // Allow for null values in the array
}

const ListComment: React.FC<ListCommentProps> = ({ comments }) => {
  console.log("Comments:", comments); // Optional for debugging

  // Filter out null values from the comments array
  const validComments = comments.filter((comment): comment is { id: string; content: string; author: { username: string } } => comment !== null);

  return (
    <div className="space-y-4">
      {validComments.map((comment) => (
        <Comment
          key={comment.id} // Use unique id for key instead of index
          content={comment.content}
        />
      ))}
    </div>
  );
};

export default ListComment;
