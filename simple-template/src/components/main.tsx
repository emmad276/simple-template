import React from 'react'

const Main = () => {
  return (
    <div className="flex items-center justify-center  ">
    <div className=" p-20 text-center rounded-lg">
      <h5 className="text-blue-400">Welcome</h5>
      <h1 className="text-4xl font-bold text-white mt-6">Selling on the Internet like a pro</h1>
      <p className="mt-6 text-gray-300 ">
        We know how large objects will act, but things on a small scale just do not act that way.
      </p>
      <div className="mt-8 space-x-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md">Get Quote Now</button>
        <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-md">Learn More...</button>
      </div>
    </div>
  </div>
  
  )
}

export default Main