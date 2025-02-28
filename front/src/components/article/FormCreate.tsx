import React, { useState } from 'react';

// Define the type for the handleSubmit prop
interface CreateArticleProps {
  handleSubmit: (formData: { title: string; content: string }) => void;
}

const FormCreateArticle: React.FC<CreateArticleProps> = ({ handleSubmit }) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  // Handling form submit by calling the passed handleSubmit method
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Call the handleSubmit function passed via props
    handleSubmit({ title, content });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Create a New Item</h2>

        {/* Title field */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Content field */}
        <div className="mb-6">
          <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter the content"
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormCreateArticle;
