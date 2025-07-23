import { Eye, TrendingUp, Info } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { MetricCard } from './MetricCard';

export const VisibilityCard = () => {
  const dailyViews = [
    { day: 'Lun', views: 120 },
    { day: 'Mar', views: 135 },
    { day: 'Mié', views: 145 },
    { day: 'Jue', views: 130 },
    { day: 'Vie', views: 180 },
    { day: 'Sáb', views: 210 },
    { day: 'Dom', views: 190 },
  ];

  const searchData = [
    { name: 'Búsquedas de marca', value: 65, color: 'hsl(var(--impact-highlight))' },
    { name: 'Búsquedas genéricas', value: 35, color: 'hsl(var(--impact-header))' },
  ];

  return (
    <MetricCard
      title="Te encuentran"
      subtitle="Visibilidad"
      icon={<Eye className="w-5 h-5" />}
      iconColor="text-impact-highlight"
    >
      <div className="space-y-6">
        {/* Main KPI */}
        <div className="text-center">
          <div className="text-3xl font-bold text-impact-highlight">8,247</div>
          <div className="text-impact-secondary text-sm">Impresiones totales</div>
          <div className="flex items-center justify-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-impact-highlight" />
            <span className="text-xs text-impact-highlight">+12% vs mes anterior</span>
          </div>
        </div>

        {/* Daily Views Chart */}
        <div>
          <h4 className="text-sm font-medium text-impact-text mb-3">Visualizaciones por día</h4>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyViews}>
                <XAxis 
                  dataKey="day" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--impact-secondary-text))', fontSize: 12 }}
                />
                <YAxis hide />
                <Line 
                  type="monotone" 
                  dataKey="views" 
                  stroke="hsl(var(--impact-highlight))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--impact-highlight))', strokeWidth: 2, r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Search Comparison */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h4 className="text-sm font-medium text-impact-text">Tipo de búsquedas</h4>
            <div className="group relative">
              <Info className="w-3 h-3 text-impact-secondary cursor-help" />
              <div className="invisible group-hover:visible absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-impact-card border border-impact-border rounded text-xs text-impact-text whitespace-nowrap z-10">
                Esto muestra cuántas veces tu negocio apareció en búsquedas cercanas o por nombre.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-24 w-24">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={searchData}
                    cx="50%"
                    cy="50%"
                    innerRadius={25}
                    outerRadius={40}
                    dataKey="value"
                  >
                    {searchData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-2">
              {searchData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-xs text-impact-text">{item.name}</span>
                  </div>
                  <span className="text-xs font-medium text-impact-text">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MetricCard>
  );
};