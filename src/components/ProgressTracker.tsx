import { useState, useEffect } from 'react';

interface ProgressProps {
  courseId: string;
  totalLessons: number;
}

const ProgressTracker = ({ courseId, totalLessons }: ProgressProps) => {
  const [completedLessons, setCompletedLessons] = useState<number>(0);
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);
  
  useEffect(() => {
    // Cargar progreso desde localStorage
    const savedProgress = localStorage.getItem(`progress_${courseId}`);
    if (savedProgress) {
      setCompletedLessons(JSON.parse(savedProgress).completed);
    }
    
    // Verificar insignias
    checkBadges();
  }, [courseId]);
  
  const checkBadges = () => {
    // Lógica para otorgar insignias basadas en el progreso
    const badges = [];
    const progress = (completedLessons / totalLessons) * 100;
    
    if (progress >= 25) badges.push("principiante");
    if (progress >= 50) badges.push("intermedio");
    if (progress >= 75) badges.push("avanzado");
    if (progress === 100) badges.push("experto");
    
    setEarnedBadges(badges);
  };
  
  const markAsCompleted = (lessonId: number) => {
    const newCompleted = completedLessons + 1;
    setCompletedLessons(newCompleted);
    
    // Guardar en localStorage
    localStorage.setItem(`progress_${courseId}`, JSON.stringify({
      completed: newCompleted,
      lastActivity: new Date().toISOString()
    }));
    
    checkBadges();
  };
  
  return (
    <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-700">
      <h3 className="text-xl font-bold mb-2">Tu progreso</h3>
      <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
        <div 
          className="bg-green-600 h-4 rounded-full transition-all duration-500" 
          style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
        ></div>
      </div>
      <p className="text-white">{completedLessons} de {totalLessons} lecciones completadas</p>
      
      {earnedBadges.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-2">Insignias obtenidas:</h4>
          <div className="flex gap-2">
            {earnedBadges.map(badge => (
              <div key={badge} className="bg-yellow-600 text-black px-3 py-1 rounded-full text-sm font-bold">
                {badge}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressTracker;