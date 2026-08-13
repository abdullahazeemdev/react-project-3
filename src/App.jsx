import React from "react";
import { useState } from "react";

function taskCard({task,onComplete,onDelete}){
  return (
    <div>
      
    </div>
    );

}

function App() {
  return(
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
              className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 placeholder:text-slate-500 "
            />

            <button className="bg-blue-600 hover:bg-blue-700 px-6 rounded-xl font-medium transition cursor-pointer">
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
              3
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:scale-105 transition hover:border-blue-500">
            <p className="text-slate-400 text-sm">
              Completed
            </p>
            <h2 className="text-2xl font-bold text-green-400 mt-1">
              1
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:scale-105 transition hover:border-blue-500">
            <p className="text-slate-400 text-sm">
              Remaining
            </p>
            <h2 className="text-2xl font-bold text-yellow-400 mt-1">
              2
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

            {/* Task 1 */}
            <div className="flex items-center justify-between gap-4 bg-slate-800 border border-slate-700 rounded-xl p-4 hover:scale-101 transition hover:border-blue-500">

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-slate-600"></div>

                <div>
                  <h3 className="font-medium">
                    Learn React State
                  </h3>

                  <p className="text-xs text-slate-500 mt-1">
                    React Learning
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="text-green-400 hover:bg-green-400/10 px-3 py-2 rounded-lg cursor-pointer">
                  Done
                </button>

                <button className="text-red-400 hover:bg-red-400/10 px-3 py-2 rounded-lg cursor-pointer">
                  Delete
                </button>
              </div>

            </div>

            {/* Task 2 */}
            <div className="flex items-center justify-between gap-4 bg-slate-800 border border-slate-700 rounded-xl p-4 hover:scale-101 transition hover:border-blue-500">

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-slate-600"></div>

                <div>
                  <h3 className="font-medium">
                    Understand State Management
                  </h3>

                  <p className="text-xs text-slate-500 mt-1">
                    React Learning
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="text-green-400 hover:bg-green-400/10 px-3 py-2 rounded-lg cursor-pointer">
                  Done
                </button>

                <button className="text-red-400 hover:bg-red-400/10 px-3 py-2 rounded-lg cursor-pointer">
                  Delete
                </button>
              </div>

            </div>

            {/* Completed Task */}
            <div className="flex items-center justify-between gap-4 bg-slate-800/60 border border-slate-700 rounded-xl p-4 hover:scale-102 transition hover:border-blue-500">

              <div className="flex items-center gap-3">

                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-xs">
                  ✓
                </div>

                <div>
                  <h3 className="font-medium line-through text-slate-500">
                    Practice Event Handling
                  </h3>

                  <p className="text-xs text-slate-600 mt-1">
                    Completed
                  </p>
                </div>

              </div>

              <button className="text-red-400 hover:bg-red-400/10 px-3 py-2 rounded-lg cursor-pointer">
                Delete
              </button>

            </div>

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