import React from 'react'

const Cards = () => {
  return (
    <div className="flex space-x-10 justify-center p-10">
  {/* Card 1 */}
  <div className="bg-white border-4 border-green-400 rounded-lg p-6 w-64">
    <div className="bg-pink-100 h-16 w-16 rounded-md mb-4"></div>
    <h3 className="text-lg font-semibold">Training Courses</h3>
    <div className="h-1 w-10 bg-red-400 my-2"></div>
    <p className="text-gray-600">
      The gradual accumulation of information about atomic and small-scale behaviour...
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white border-4 border-pink-400 rounded-lg p-6 w-64">
    <div className="bg-green-100 h-16 w-16 rounded-md mb-4"></div>
    <h3 className="text-lg font-semibold">2,769 online courses</h3>
    <div className="h-1 w-10 bg-red-400 my-2"></div>
    <p className="text-gray-600">
      The gradual accumulation of information about atomic and small-scale behaviour...
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-blue-500 border-4 border-blue-500 rounded-lg p-6 w-64">
    <div className="bg-white h-16 w-16 rounded-md mb-4"></div>
    <h3 className="text-lg font-semibold text-white">Training Courses</h3>
    <div className="h-1 w-10 bg-blue-200 my-2"></div>
    <p className="text-white">
      The gradual accumulation of information about atomic and small-scale behaviour...
    </p>
  </div>
</div>

  )
}

export default Cards