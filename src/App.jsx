import React, { useDeferredValue } from "react";

function App() {

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-5">

      <div className="w-full max-w-2xl">

        {/* header */}
        <div className="mb-8">

          <p className="text-blue-500 font-medium mb-2">React Project</p>

          <h1 className="text-4xl font-bold">Taskflow</h1>

          <p className="text-slate-400 mt-2">Manage your daily tasks easily.</p>

        </div>

        {/* add task card */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 mb-5">

          <div className="flex gap-3">
            <input type="text" placeholder="What do you need to do?"
              className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 placeholder:text-slate-500 transition"
            />

            <button className="bg-blue-600 px-6 rounded-xl font-medium transition hover:bg-blue-800 cursor-pointer">Add task</button>
          </div>

        </div>

        {/* state */}

         <div className="grid grid-cols-3 gap-4 mb-5">

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-slate-400 text-sm">
              Total
            </p>
            <h2 className="text-2xl font-bold mt-1">
              3
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-slate-400 text-sm">
              Completed
            </p>
            <h2 className="text-2xl font-bold text-green-400 mt-1">
              1
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-slate-400 text-sm">
              Remaining
            </p>
            <h2 className="text-2xl font-bold text-yellow-400 mt-1">
              2
            </h2>
          </div>

        </div>



      </div>

    </div>
    
  );


};

export default App