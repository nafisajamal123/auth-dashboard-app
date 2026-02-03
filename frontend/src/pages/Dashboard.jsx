import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profile = await api.get("/me");
        const tasksRes = await api.get("/tasks");
        setUser(profile.data);
        setTasks(tasksRes.data);
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addTask = async () => {
    if (!title) return;

    const res = await api.post("/tasks", { title });
    setTasks([...tasks, res.data]);
    setTitle("");
  };

  const toggleTask = async (id, completed) => {
    const res = await api.put(`/tasks/${id}`, {
      completed: !completed,
    });

    setTasks(tasks.map(t => t._id === id ? res.data : t));
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  const filteredTasks = tasks.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">
          Welcome, {user.name}
        </h1>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>

      <input
        placeholder="Search tasks..."
        className="w-full border p-2 mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex gap-2 mb-4">
        <input
          placeholder="New task"
          className="flex-1 border p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-3 rounded"
        >
          Add
        </button>
      </div>

      <ul>
        {filteredTasks.map(task => (
          <li
            key={task._id}
            className="flex justify-between items-center border p-2 mb-2"
          >
            <span
              onClick={() => toggleTask(task._id, task.completed)}
              className={`cursor-pointer ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.title}
            </span>

            <button
              onClick={() => deleteTask(task._id)}
              className="text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
