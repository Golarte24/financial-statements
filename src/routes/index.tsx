import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
  <div className="max-w-3xl mx-auto mt-10 p-8 bg-white border border-blue-600 rounded-xl shadow-md">
  <h1 className="text-4xl font-bold text-slate-900 mb-2">
    Welcome to Kissena Baked Goods
  </h1>
  <h2 className="text-2xl font-medium text-slate-600"> Financial Statements</h2>
  <p className='mx-20 text-lg text-green-200'>We are a new company. Year 2026 is our first year of operations. On this site, we will disclose thevfinancial statements for our investors.</p>
  <div className='bg-yellow-900' m-10></div>
</div>) 
}
