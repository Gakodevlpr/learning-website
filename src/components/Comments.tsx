import { useState } from 'react';

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  likes: number;
}

interface CommentsProps {
  pageId: string;
}

const Comments = ({ pageId }: CommentsProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  
  const addComment = () => {
    if (!newComment.trim() || !username.trim()) return;
    
    const comment: Comment = {
      id: Date.now().toString(),
      author: username,
      content: newComment,
      date: new Date().toLocaleDateString(),
      likes: 0
    };
    
    setComments([comment, ...comments]);
    setNewComment('');
    
    // En una implementación real, guardarías esto en una base de datos
    localStorage.setItem(`comments_${pageId}`, JSON.stringify([comment, ...comments]));
  };
  
  const likeComment = (id: string) => {
    const updatedComments = comments.map(comment => 
      comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
    );
    setComments(updatedComments);
    localStorage.setItem(`comments_${pageId}`, JSON.stringify(updatedComments));
  };
  
  return (
    <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700 mt-8">
      <h3 className="text-2xl font-bold mb-4">Comentarios</h3>
      
      <div className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Tu nombre"
          className="w-full bg-gray-700 text-white p-2 rounded-md mb-2"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escribe un comentario..."
          className="w-full bg-gray-700 text-white p-2 rounded-md h-24"
        />
        <button 
          onClick={addComment}
          disabled={!newComment.trim() || !username.trim()}
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Publicar comentario
        </button>
      </div>
      
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-gray-400">Sé el primero en comentar</p>
        ) : (
          comments.map(comment => (
            <div key={comment.id} className="bg-gray-700/50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">{comment.author}</h4>
                  <p className="text-sm text-gray-400">{comment.date}</p>
                </div>
                <button 
                  onClick={() => likeComment(comment.id)}
                  className="flex items-center gap-1 text-gray-400 hover:text-blue-400"
                >
                  <i className='bx bx-like'></i>
                  <span>{comment.likes}</span>
                </button>
              </div>
              <p className="mt-2">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;