import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/ContextProvider';
import {IoMdOptions, IoMdEye} from 'react-icons/io';
import OvertimeApproval from './OvertimeApproval';

export default function overtimes() {
  const [overtimes, setOvertimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const {setTitle} = useStateContext();

  useEffect(() => {
    setTitle("Overtimes");
    getOvertimes()
  }, []);

  const getOvertimes = () => {
    setLoading(true);
    axiosClient.get(`/overtimes`)
    .then(({data}) => {
      setLoading(false);
      setOvertimes(data.data)
    })
    .catch(()=>{
      setLoading(false);
    })
  }

  return (
    <div>
      <div className="relative overflow-x-auto">
        <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-900">
          <div>
            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span className="sr-only">Action button</span>
                Action
                <svg className="w-3 h-3 ml-2" aria-hidden="true" fillRule="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {/* Dropdown menu */}
            <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                    </li>
                </ul>
                <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                </div>
            </div>
        </div>
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pb-3 pointer-events-none">
                <svg className="w-5 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search-overtime" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for overtimes" />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className=" px-4 py-3">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-4 py-3">
                    Name
                </th>
                <th scope="col" className="px-4 py-3">
                    Position
                </th>
                <th scope="col" className="px-4 py-3">
                    Date
                </th>
                <th scope="col" className="px-3 py-3">
                    Day Type
                </th>
                <th scope="col" className="px-3 py-3">
                    Shift
                </th>
                <th scope="col" className="px-4 py-3">
                    Clockings
                </th>
                <th scope="col" className="px-3 py-3">
                    Overtime Hrs
                </th>
                <th scope="col" className="px-3 py-3">
                  <IoMdOptions />
                </th>
            </tr>
        </thead>
        {loading && <tbody>
          <tr>
            <td colSpan={9} className='text-center text-green-600 text-xl' >Loading...</td>
          </tr>
        </tbody>}
        {!loading && <tbody>
          {
            overtimes.map(ot => (
              <tr key={ot.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-4 py-3">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <td scope="row" className="flex items-center px-4 py-3 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                    <div className="pl-3">
                        <div className="text-base font-semibold">{ot.emp_code}</div>
                        <div className="font-normal text-gray-500">{ot.emp_names}</div>
                    </div>
                </td>
                <td className="px-4 py-3">
                  <div>
                    <small className="text-gray-700 dark:text-gray-200 flex justify-between">{ot.emp_designation}</small>
                    <p className="text-gray-500 dark:text-gray-400 flex justify-between">{ot.emp_department}</p>
                  </div>
                </td>
                <td className="px-4 py-3">
                    {ot.att_date}
                </td>
                <td className="px-3 py-3">
                    {ot.att_holiday && <small>{ot.att_holiday}</small>}
                    {!ot.att_holiday && <small>Weekday</small>}
                </td>
                <td className="px-3 py-3">
                  {ot.att_actualshift}
                </td>
                <td className="px-4 py-3">
                  <div>
                    <small className="text-gray-700 dark:text-gray-200 flex justify-between">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg> : <span>{ot.att_timein}</span>
                    </small>
                    <p className="text-gray-500 dark:text-gray-400 flex justify-between">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg> : <span>{ot.att_timeout}</span>
                    </p>
                  </div>
                </td>
                <td className="px-3 py-3 text-center">
                  {ot.att_ot1hrs > 1 && <small className='font-semibold'>{ot.att_ot1hrs}</small>}
                  {ot.att_ot2hrs > 1 && <small className='font-semibold'>{ot.att_ot2hrs}</small>}
                </td>
                <td className="px-3 py-3">
                <OvertimeApproval overtime={ot} />
                </td>
            </tr>
            ))
          }

          </tbody>}
        </table>
      </div>
    </div>

  )
}
