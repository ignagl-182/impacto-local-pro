import { Star, MessageCircle, Clock, ThumbsUp } from 'lucide-react';
import { MetricCard } from './MetricCard';

export const ReviewsCard = () => {
  const recentReviews = [
    {
      rating: 5,
      comment: "Excelente atención y helados deliciosos. El lugar está muy limpio.",
      author: "María G.",
      date: "Hace 2 días"
    },
    {
      rating: 4,
      comment: "Buenos helados, aunque el tiempo de espera fue un poco largo.",
      author: "Carlos R.",
      date: "Hace 5 días"
    },
    {
      rating: 5,
      comment: "Mis hijos adoraron los sabores. Volveremos pronto!",
      author: "Ana M.",
      date: "Hace 1 semana"
    }
  ];

  const topics = [
    { name: 'Atención', sentiment: 'positive', count: 12 },
    { name: 'Tiempo de espera', sentiment: 'neutral', count: 8 },
    { name: 'Limpieza', sentiment: 'positive', count: 15 },
    { name: 'Sabores', sentiment: 'positive', count: 18 },
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-impact-highlight';
      case 'neutral': return 'text-impact-secondary';
      case 'negative': return 'text-destructive';
      default: return 'text-impact-secondary';
    }
  };

  return (
    <MetricCard
      title="Te valoran"
      subtitle="Reseñas y sentimiento"
      icon={<Star className="w-5 h-5" />}
      iconColor="text-impact-highlight"
    >
      <div className="space-y-6">
        {/* KPIs Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-impact-highlight">4.6</div>
            <div className="text-impact-secondary text-xs">NPS</div>
            <div className="flex justify-center mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className={`w-3 h-3 ${star <= 5 ? 'text-impact-highlight fill-current' : 'text-impact-secondary'}`} 
                />
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-impact-highlight">87%</div>
            <div className="text-impact-secondary text-xs">Reseñas positivas</div>
            <div className="flex items-center justify-center gap-1 mt-1">
              <ThumbsUp className="w-3 h-3 text-impact-highlight" />
              <span className="text-xs text-impact-highlight">23 de 25</span>
            </div>
          </div>
        </div>

        {/* Response Stats */}
        <div className="bg-impact-border/10 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-impact-header" />
              <span className="text-sm text-impact-text">Tasa de respuesta</span>
            </div>
            <span className="font-semibold text-impact-highlight">95%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-impact-header" />
              <span className="text-sm text-impact-text">Tiempo promedio</span>
            </div>
            <span className="font-semibold text-impact-text">2.3 horas</span>
          </div>
        </div>

        {/* Topic Analysis */}
        <div>
          <h4 className="text-sm font-medium text-impact-text mb-3">Análisis temático</h4>
          <div className="space-y-2">
            {topics.map((topic, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-impact-text">{topic.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-impact-secondary">{topic.count}</span>
                  <div className={`w-2 h-2 rounded-full ${getSentimentColor(topic.sentiment).replace('text-', 'bg-')}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        <div>
          <h4 className="text-sm font-medium text-impact-text mb-3">Comentarios recientes</h4>
          <div className="space-y-3 max-h-48 overflow-y-auto">
            {recentReviews.map((review, index) => (
              <div key={index} className="bg-impact-border/10 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-3 h-3 ${star <= review.rating ? 'text-impact-highlight fill-current' : 'text-impact-secondary'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-impact-secondary">{review.date}</span>
                </div>
                <p className="text-xs text-impact-text mb-1">"{review.comment}"</p>
                <p className="text-xs text-impact-secondary">- {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MetricCard>
  );
};