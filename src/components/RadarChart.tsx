import { Radar, RadarChart as RechartsRadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Legend } from 'recharts';

interface RadarChartProps {
  data: {
    store: number[];
    network: number[];
  };
}

export const RadarChart = ({ data }: RadarChartProps) => {
  const chartData = [
    {
      subject: 'Te encuentran',
      store: data.store[0],
      network: data.network[0],
    },
    {
      subject: 'Te eligen',
      store: data.store[1],
      network: data.network[1],
    },
    {
      subject: 'Te visitan',
      store: data.store[2],
      network: data.network[2],
    },
    {
      subject: 'Te compran',
      store: data.store[3],
      network: data.network[3],
    },
    {
      subject: 'Te valoran',
      store: data.store[4],
      network: data.network[4],
    },
  ];

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart data={chartData}>
          <PolarGrid className="opacity-30" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: 'hsl(var(--impact-text-primary))', fontSize: 12 }}
            className="text-xs"
          />
          <Radar
            name="Tu Sucursal"
            dataKey="store"
            stroke="hsl(var(--impact-highlight))"
            fill="hsl(var(--impact-highlight))"
            fillOpacity={0.2}
            strokeWidth={2}
          />
          <Radar
            name="Promedio Red"
            dataKey="network"
            stroke="hsl(var(--impact-section-header))"
            fill="hsl(var(--impact-section-header))"
            fillOpacity={0.1}
            strokeWidth={2}
            strokeDasharray="5 5"
          />
          <Legend 
            wrapperStyle={{ color: 'hsl(var(--impact-text-primary))' }}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
};