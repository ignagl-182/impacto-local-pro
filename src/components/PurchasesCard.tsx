import { ShoppingBag, Calendar, TrendingUp, TrendingDown } from 'lucide-react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import { MetricCard } from './MetricCard';

export const PurchasesCard = () => {
  const weeklyPurchases = [
    { day: 'L', purchases: 8 },
    { day: 'M', purchases: 12 },
    { day: 'X', purchases: 15 },
    { day: 'J', purchases: 11 },
    { day: 'V', purchases: 18 },
    { day: 'S', purchases: 25 },
    { day: 'D', purchases: 20 },
  ];

  const comparisons = [
    { period: 'vs Mes anterior', value: -3, isPositive: false },
    { period: 'vs Año anterior', value: 15, isPositive: true },
  ];

  return (
    <MetricCard
      title="Te compran"
      subtitle="Compras estimadas"
      icon={<ShoppingBag className="w-5 h-5" />}
      iconColor="text-impact-header"
    >
      <div className="space-y-6">
        {/* Main KPI */}
        <div className="text-center">
          <div className="text-3xl font-bold text-impact-highlight">109</div>
          <div className="text-impact-secondary text-sm">Compras estimadas</div>
        </div>

        {/* Comparisons */}
        <div className="grid grid-cols-2 gap-3">
          {comparisons.map((comparison, index) => (
            <div key={index} className="bg-impact-border/10 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                {comparison.isPositive ? (
                  <TrendingUp className="w-3 h-3 text-impact-highlight" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-destructive" />
                )}
                <span className={`text-sm font-medium ${comparison.isPositive ? 'text-impact-highlight' : 'text-destructive'}`}>
                  {comparison.isPositive ? '+' : ''}{comparison.value}%
                </span>
              </div>
              <p className="text-xs text-impact-secondary">{comparison.period}</p>
            </div>
          ))}
        </div>

        {/* Daily Purchases */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-4 h-4 text-impact-header" />
            <h4 className="text-sm font-medium text-impact-text">Compras por día de semana</h4>
          </div>
          <div className="h-28">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyPurchases}>
                <XAxis 
                  dataKey="day" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--impact-secondary-text))', fontSize: 12 }}
                />
                <Bar 
                  dataKey="purchases" 
                  fill="hsl(var(--impact-header))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Conversion Rate Note */}
        <div className="bg-impact-border/20 rounded-lg p-3">
          <p className="text-xs text-impact-secondary">
            💡 Basado en una tasa de conversión promedio del 8.7% de la red nacional.
          </p>
        </div>
      </div>
    </MetricCard>
  );
};