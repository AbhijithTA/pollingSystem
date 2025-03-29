import { useEffect, useState } from "react";
import { getPolls } from "../api/poll";

const Dashboard = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    async function fetchPolls() {
      const data = await getPolls();
      setPolls(data);
    }
    fetchPolls();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">Active Polls</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {polls.map((poll) => (
          <div key={poll.id} className="p-4 border rounded bg-white">
            <h3 className="text-xl font-bold">{poll.title}</h3>
            <p>Expires at: {new Date(poll.expiresAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
