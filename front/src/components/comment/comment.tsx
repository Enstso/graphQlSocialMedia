import React from 'react';

interface CommentProps {
  content: string;
}

const Comment: React.FC<CommentProps> = ({ content }) => {
  return (
    <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Comment;
