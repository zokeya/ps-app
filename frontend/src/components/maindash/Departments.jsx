import React from 'react'
import { TbHierarchy2,TbUsers } from "react-icons/tb";

function Departments() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
          <h4 className="font-semibold text-gray-800">Departments</h4>
      </header>
      <div className="p-3">
          <div className="overflow-x-auto">
              <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                          <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left"><TbHierarchy2 className=' w-4 h-4'/></div>
                          </th>
                          <th className="p-2 whitespace-nowrap text-right">
                              <div className="font-semibold "><TbUsers className='float-right w-4 h-4'/></div>
                          </th>
                      </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                      <tr>
                          <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                  <div className="font-medium text-gray-800">Administration</div>
                              </div>
                          </td>
                          <td className="p-2 whitespace-nowrap text-right">
                            <p className="dark:text-gray-400">3</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="font-medium text-gray-800">Finance</div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap text-right">
                            <p className="dark:text-gray-400">5</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="font-medium text-gray-800">Operations</div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap text-right">
                            <p className="dark:text-gray-400">38</p>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
    </div>
  )
}

export default Departments