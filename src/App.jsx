

import React from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4">
          <AppRoutes />
        </main>
      </div>
    </div>
  );
}