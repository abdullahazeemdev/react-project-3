import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React State",
      category: "React Learning",
      completed: false,
    },
    {
      id: 2,
      title: "Understand State Management",
      category: "React Learning",
      completed: false,
    },
    {
      id: 3,
      title: "Practice Event Handling",
      category: "React Learning",
      completed: false,
    }
  ]);

  const [taskInput, setTaskInput] = useState("");
  const addTask = () => {
    if (taskInput.trim() === "") return;

    const newTask = {
      id: Date.now,
      title: taskInput,
      category: "React Learning",
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  }

  const completeTask= (id) =>{
    setTasks(
      tasks.map((task) =>(
        task.id === id 
        ? {...task,  completed : true , category : "completed" }
        : task
      ))
    )

  }

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-5">

      <div className="w-full max-w-2xl">

        {/* Header */}
        <div className="mb-8">
          <p className="text-blue-500 font-medium mb-2">
            React Project
          </p>

          <h1 className="text-4xl font-bold">
            TaskFlow
          </h1>

          <p className="text-slate-400 mt-2">
            Manage your daily tasks easily.
          </p>
        </div>

        {/* Add Task Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 mb-5 hover:scale-105 transition hover:border-blue-500">

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="What do you need to do?"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 placeholder:text-slate-500 "
            />

            <button
              onClick={addTask}
              className="bg-blue-600 hover:bg-blue-700 px-6 rounded-xl font-medium transition cursor-pointer">
              Add Task
            </button>
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-5">

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:scale-105 transition hover:border-blue-500">
            <p className="text-slate-400 text-sm">
              Total
            </p>
            <h2 className="text-2xl font-bold mt-1">
              {tasks.length}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:scale-105 transition hover:border-blue-500">
            <p className="text-slate-400 text-sm">
              Completed
            </p>
            <h2 className="text-2xl font-bold text-green-400 mt-1">
              {tasks.filter((task) => task.completed).length}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:scale-105 transition hover:border-blue-500">
            <p className="text-slate-400 text-sm">
              Remaining
            </p>
            <h2 className="text-2xl font-bold text-yellow-400 mt-1">
              {tasks.filter((task) => !task.completed).length}
            </h2>
          </div>

        </div>

        {/* Tasks */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:scale-105 transition hover:border-blue-500">

          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold">
              My Tasks
            </h2>

            <span className="text-sm text-slate-500">
              Today
            </span>
          </div>

          <div className="space-y-3">
            {tasks.map((task) => (
              <div
              key={task.id}
               className="flex items-center justify-between gap-4 bg-slate-800 border border-slate-700 rounded-xl p-4 hover:scale-101 transition hover:border-blue-500">

                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 border-slate-600 ${
                    task.completed ? "bg-green-500 text-white" : "border-2 border-slate-600"
                  }`}>
                  </div>

                  <div>
                    <h3 className="font-medium">
                      {task.title}
                    </h3>

                    <p className="text-xs text-slate-500 mt-1">
                      {task.category}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                  onClick={() => completeTask(task.id)}                  
                  className="text-green-400 hover:bg-green-400/10 px-3 py-2 rounded-lg cursor-pointer">
                    Done
                  </button>

                  <button
                  onClick={() => deleteTask(task.id)}                  
                  className="text-red-400 hover:bg-red-400/10 px-3 py-2 rounded-lg cursor-pointer">
                    Delete
                  </button>
                </div>

              </div>

            ))}


          </div>

        </div>

        {/* footer */}

        <p className="text-center text-slate-600 text-sm mt-6">
          Built with React + Tailwind CSS
        </p>

      </div>

    </div>
  )
};

export default App;