import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockRatingData = [
  { contest: 'Round 1', rating: 1200, date: '2024-01' },
  { contest: 'Round 2', rating: 1285, date: '2024-02' },
  { contest: 'Round 3', rating: 1350, date: '2024-03' },
  { contest: 'Round 4', rating: 1420, date: '2024-04' },
  { contest: 'Round 5', rating: 1380, date: '2024-05' },
  { contest: 'Round 6', rating: 1465, date: '2024-06' },
  { contest: 'Round 7', rating: 1520, date: '2024-07' },
  { contest: 'Round 8', rating: 1485, date: '2024-08' },
];

const RatingChart = () => {
  return (
    <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">Rating Progress</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={mockRatingData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--silver-gray))" opacity={0.2} />
          <XAxis 
            dataKey="date" 
            stroke="hsl(var(--silver-gray))" 
            fontSize={12}
          />
          <YAxis 
            stroke="hsl(var(--silver-gray))" 
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--cloud-gray))',
              border: '1px solid hsl(var(--silver-gray) / 0.2)',
              borderRadius: '8px',
              color: 'white'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="rating" 
            stroke="hsl(var(--royal-purple))" 
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--royal-purple))', strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;