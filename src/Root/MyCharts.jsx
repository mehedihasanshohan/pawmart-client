import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';

const MyCharts = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  useEffect(() => {
    if (user?.email) {
      fetch(`https://pawmart-api-server-kappa.vercel.app/myorders?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setOrders(data || []);
          setLoading(false);
        });
    }
  }, [user?.email]);

  if (loading) return <p className="text-center mt-10">Loading Charts...</p>;

  return (
    <div className="min-h-screen p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Purchase Analytics</h2>

      {orders.length > 0 ? (
        <div className="bg-base-100 p-8 rounded-3xl shadow-2xl border border-base-200">
          <div className="h-[450px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={orders} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="productName"
                  interval={0}
                  angle={-30}
                  textAnchor="end"
                  tick={{ fontSize: 12 }}
                />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" />
                <Bar dataKey="price" name="Price ($)" radius={[8, 8, 0, 0]}>
                  {orders.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-10 text-center text-gray-500 italic">
            This chart shows the price comparison of your ordered products.
          </p>
        </div>
      ) : (
        <div className="text-center py-20 bg-base-200 rounded-2xl">
          <p className="text-xl font-semibold">No data found for chart analysis!</p>
        </div>
      )}
    </div>
  );
};

export default MyCharts;