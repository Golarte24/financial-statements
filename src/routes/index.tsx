import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })
function Home() {
  return (
    <div className="min-h-screen bg-blue-50 p-10">
      <div className="max-w-3xl mx-auto mt-10 p-8 bg-white border-2 border-blue-900 rounded-2xl shadow-xl">

        <h1 className="text-4xl font-bold text-blue-950 mb-3">
          Welcome to Kissena Baked Goods
        </h1>

        <h2 className="text-2xl font-semibold text-blue-700 mb-5">
          Financial Statements
        </h2>

        <p className="text-lg text-slate-700 leading-relaxed bg-blue-100 p-5 rounded-xl">
          We are a new company. Year 2026 is our first year of operations.
          On this site, we will disclose the financial statements for our investors.
        </p>

      </div>
    </div>
  )
}
