import { MapPin, Calendar, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import { MetricCard } from './MetricCard';

export const VisitsCard = () => {
  const dailyVisits = [
    { day: 'L', visits: 28 },
    { day: 'M', visits: 32 },
    { day: 'X', visits: 35 },
    { day: 'J', visits: 30 },
    { day: 'V', visits: 45 },
    { day: 'S', visits: 62 },
    { day: 'D', visits: 48 },
  ];

  return (
    <MetricCard
      title="Te visitan"
      subtitle="Visitas estimadas"
      icon={<MapPin className="w-5 h-5" />}
      iconColor="text-impact-highlight"
    >
      <div className="space-y-6">
        {/* Main KPI */}
        <div className="text-center">
          <div className="text-3xl font-bold text-impact-highlight">1,247</div>
          <div className="text-impact-secondary text-sm">Visitas estimadas totales</div>
          <div className="flex items-center justify-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-impact-highlight" />
            <span className="text-xs text-impact-highlight">+8% vs mes anterior</span>
          </div>
        </div>

        {/* Daily Visits */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-4 h-4 text-impact-header" />
            <h4 className="text-sm font-medium text-impact-text">Visitas por día de semana</h4>
          </div>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyVisits}>
                <XAxis 
                  dataKey="day" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--impact-secondary-text))', fontSize: 12 }}
                />
                <Bar 
                  dataKey="visits" 
                  fill="hsl(var(--impact-highlight))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-impact-border/20 rounded-lg p-3">
          <p className="text-xs text-impact-secondary">
            📍 Visitas estimadas según comportamiento de usuario y patrones históricos de Google Maps.
          </p>
        </div>
      </div>
    </MetricCard>
  );
};