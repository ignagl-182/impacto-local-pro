import { MousePointer, Navigation, Phone, Globe, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { MetricCard } from './MetricCard';

export const InteractionsCard = () => {
  const weeklyTrend = [
    { week: 'S1', interactions: 45 },
    { week: 'S2', interactions: 52 },
    { week: 'S3', interactions: 48 },
    { week: 'S4', interactions: 63 },
  ];

  const interactions = [
    { type: 'Cómo llegar', count: 89, icon: <Navigation className="w-4 h-4" />, color: 'text-impact-highlight' },
    { type: 'Sitio web', count: 34, icon: <Globe className="w-4 h-4" />, color: 'text-impact-header' },
    { type: 'Llamar', count: 21, icon: <Phone className="w-4 h-4" />, color: 'text-impact-secondary' },
  ];

  return (
    <MetricCard
      title="Te eligen"
      subtitle="Interacciones"
      icon={<MousePointer className="w-5 h-5" />}
      iconColor="text-impact-header"
    >
      <div className="space-y-6">
        {/* Main KPI */}
        <div className="text-center">
          <div className="text-3xl font-bold text-impact-highlight">144</div>
          <div className="text-impact-secondary text-sm">Total de interacciones</div>
          <div className="flex items-center justify-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-impact-highlight" />
            <span className="text-xs text-impact-highlight">+18% vs mes anterior</span>
          </div>
        </div>

        {/* Interaction Types */}
        <div>
          <h4 className="text-sm font-medium text-impact-text mb-3">Clics por tipo</h4>
          <div className="space-y-3">
            {interactions.map((interaction, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`${interaction.color}`}>
                    {interaction.icon}
                  </div>
                  <span className="text-sm text-impact-text">{interaction.type}</span>
                </div>
                <span className="font-semibold text-impact-text">{interaction.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Trend */}
        <div>
          <h4 className="text-sm font-medium text-impact-text mb-3">Tendencia semanal</h4>
          <div className="h-24">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyTrend}>
                <XAxis 
                  dataKey="week" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--impact-secondary-text))', fontSize: 12 }}
                />
                <YAxis hide />
                <Line 
                  type="monotone" 
                  dataKey="interactions" 
                  stroke="hsl(var(--impact-header))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--impact-header))', strokeWidth: 2, r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </MetricCard>
  );
};