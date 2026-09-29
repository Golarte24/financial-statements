import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
  <div className="max-w-3xl mx-auto mt-10 p-8 bg-white border border-gray-200 rounded-xl shadow-md">
  <h1 className="text-4xl font-bold text-slate-900 mb-2">
    Welcome to QC Baked Goods
  </h1>
  <h2 className="text-2xl font-medium text-slate-600">
    Financial Statements
  </h2>
</div>)
}
