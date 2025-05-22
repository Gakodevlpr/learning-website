import { useState } from 'react';

interface Rating {
    stars: number;
    comment: string;
    username: string;
    isAnonymous: boolean;
}

const RatingSystem = () => {
    const [rating, setRating] = useState<number>(0);
    const [hover, setHover] = useState<number>(0);
    const [comment, setComment] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [isAnonymous, setIsAnonymous] = useState<boolean>(false);

    const generateAnonymousUsername = () => {
        const randomString = Math.random().toString(36).substring(7);
        return `user${randomString}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (rating === 0) {
            alert('Por favor, selecciona una valoración antes de enviar');
            return;
        }

        const ratingData: Rating = {
            stars: rating,
            comment,
            username: isAnonymous ? generateAnonymousUsername() : username,
            isAnonymous
        };

        try {
            const response = await fetch('/api/ratings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ratingData)
            });

            if (response.ok) {
                alert('¡Gracias por tu valoración!');
                setRating(0);
                setComment('');
                setUsername('');
                setIsAnonymous(false);
            }
        } catch (error) {
            console.error('Error al enviar la valoración:', error);
            alert('Hubo un error al enviar tu valoración');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 max-w-6xl mx-auto border-2 rounded-3xl">
            <div className="flex flex-col items-center gap-2 min-w-[200px]">
                <h2 className="text-center font-bold text-2xl mb-2">Valora mi web</h2>
                <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <i
                            key={star}
                            className={`bx ${hover >= star || rating >= star ? 'bxs-star' : 'bx-star'} 
                                text-yellow-400 text-3xl hover:text-red-500 cursor-pointer`}
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-64">
                <label htmlFor="username" className="font-medium">
                    Nombre de usuario
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={isAnonymous}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Tu nombre de usuario"
                />
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="anonymous"
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                        className="rounded w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="anonymous">Mantener anónimo</label>
                </div>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-80">
                <label htmlFor="comment" className="font-medium">
                    Comentario
                </label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white h-24 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Escribe tu comentario aquí..."
                />
            </div>

            <button
                type="submit"
                className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors focus:ring-2 focus:ring-green-500 outline-none self-end"
            >
                Enviar valoración
            </button>
        </form>
    );
};

export default RatingSystem;