import { useState } from 'react';

interface Rating {
    stars: number;
    comment: string;
    username: string;
    isAnonymous: boolean;
}

interface RatingResponse {
    success: boolean;
    message: string;
    rating?: Rating;
}

// URL condicional basada en el entorno
const API_URL = import.meta.env.PROD 
    ? 'https://gakodevlpr.onrender.com'  // URL de producción
    : 'http://localhost:3001';           // URL de desarrollo

const RatingSystem = () => {
    const [rating, setRating] = useState<number>(0);
    const [hover, setHover] = useState<number>(0);
    const [comment, setComment] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    const generateAnonymousUsername = () => {
        const randomString = Math.random().toString(36).substring(7);
        return `user${randomString}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        
        if (rating === 0) {
            setError('Por favor, selecciona una valoración antes de enviar');
            return;
        }

        setIsSubmitting(true);

        const ratingData: Rating = {
            stars: rating,
            comment,
            username: isAnonymous ? generateAnonymousUsername() : username,
            isAnonymous
        };

        console.log('Enviando valoración:', ratingData);
        console.log('URL:', `${API_URL}/ratings`);

        try {
            const response = await fetch(`${API_URL}/ratings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(ratingData)
            });

            console.log('Respuesta recibida:', response.status, response.statusText);

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error response:', errorText);
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result: RatingResponse = await response.json();
            console.log('Resultado:', result);

            if (result.success) {
                setSuccess(result.message);
                setRating(0);
                setComment('');
                setUsername('');
                setIsAnonymous(false);
            } else {
                setError(result.message);
            }
        } catch (error) {
            console.error('Error completo:', error);
            setError('Hubo un error al enviar tu valoración. Por favor, intenta de nuevo.');
        } finally {
            setIsSubmitting(false);
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
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50"
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

            <div className="flex flex-col gap-2 w-full md:w-auto">
                {error && (
                    <div className="text-red-500 text-sm">{error}</div>
                )}
                {success && (
                    <div className="text-green-500 text-sm">{success}</div>
                )}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors focus:ring-2 focus:ring-green-500 outline-none self-end disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar valoración'}
                </button>
            </div>
        </form>
    );
};

export default RatingSystem;