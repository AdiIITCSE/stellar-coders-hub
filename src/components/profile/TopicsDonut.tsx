import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const mockTopicsData = [
  { name: 'Dynamic Programming', value: 45, color: 'hsl(var(--royal-purple))' },
  { name: 'Graphs', value: 35, color: 'hsl(251 86% 70%)' },
  { name: 'Arrays & Strings', value: 30, color: 'hsl(251 86% 80%)' },
  { name: 'Trees', value: 25, color: 'hsl(var(--silver-gray))' },
  { name: 'Math', value: 20, color: 'hsl(220 14% 70%)' },
  { name: 'Greedy', value: 15, color: 'hsl(220 14% 60%)' },
];

const TopicsDonut = () => {
  return (
    <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">Topics Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={mockTopicsData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {mockTopicsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--cloud-gray))',
              border: '1px solid hsl(var(--silver-gray) / 0.2)',
              borderRadius: '8px',
              color: 'white'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {mockTopicsData.map((topic, index) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: topic.color }}
            />
            <span className="text-silver-gray text-sm">{topic.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicsDonut;