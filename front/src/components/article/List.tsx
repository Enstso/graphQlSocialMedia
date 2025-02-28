export default function ListArticles({ articles }:any) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Articles</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article:any) => (
            <div key={article.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-700 mt-2">{article.content.substring(0, 100)}...</p>
              <p className="text-sm text-gray-500 mt-2">By {article.author.name}</p>
              <div className="mt-4 flex justify-between text-sm text-gray-600">
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  