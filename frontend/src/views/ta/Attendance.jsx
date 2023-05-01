import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';
import {useStateContext} from '../../contexts/ContextProvider';

export default function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(false);
  const {setNotification} = useStateContext();
  const {setTitle} = useStateContext();

  useEffect(() => {
    setTitle("Attendance");
  }, []);

  useEffect(() => {
    getAttendance();
  }, []);

  const getAttendance = () => {
    setLoading(true);
    axiosClient.get('/attendance')
    .then(({data}) => {
      setLoading(false);
      setAttendance(data.data)
    })
    .catch(()=>{
      setLoading(false);
    })
  }

  return (
    <>
      <div className="container mx-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
              <div>
                  <div className="flex items-center gap-x-3">
                      <h2 className="text-lg font-medium text-gray-800 dark:text-white">Attendance</h2>

                      <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">240 records</span>
                  </div>

                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">Employees attendance in this month.</p>
              </div>

              <div className="flex items-center mt-4 gap-x-3">
                  <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_3098_154395)">
                          <path d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_3098_154395">
                          <rect width="20" height="20" fill="white"/>
                          </clipPath>
                          </defs>
                      </svg>

                      <span>Import</span>
                  </button>

                  <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>

                      <span>Add attendance</span>
                  </button>
              </div>
          </div>

          <div className="mt-6 md:flex md:items-center md:justify-between">
              <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                  <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                      View all
                  </button>

                  <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                      Present
                  </button>

                  <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                      Absent
                  </button>
                  <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                      On Leave
                  </button>
              </div>

              <div className="relative flex items-center mt-4 md:mt-0">
                  <span className="absolute">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                  </span>

                  <input type="text" placeholder="Search" className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>
          </div>

          <div className="flex flex-col mt-6">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                      <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                              <thead className="bg-gray-50 dark:bg-gray-800">
                                  <tr>
                                      <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                          <button className="flex items-center gap-x-3 focus:outline-none">
                                              <span>Employee</span>

                                              <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
                                                  <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
                                                  <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" strokeWidth="0.3" />
                                              </svg>
                                          </button>
                                      </th>

                                      <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                          Position
                                      </th>

                                      <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                          Date
                                      </th>

                                      <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                          Status
                                      </th>

                                      <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                          Clocking
                                      </th>

                                      <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Work Hours</th>

                                      <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Day</th>

                                      <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Status notes</th>

                                      <th scope="col" className="relative py-3.5 px-4">
                                          <span className="sr-only">Edit</span>
                                      </th>
                                  </tr>
                              </thead>
                              {loading && <tbody>
                                <tr>
                                  <td colSpan={5} className='text-center text-xl' >Loading...</td>
                                </tr>
                              </tbody>}
                              {!loading &&
                              <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                {/* <tr>
                                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                        <div>
                                            <h2 className="font-medium text-gray-800 dark:text-white ">Catalog</h2>
                                            <p className="text-sm font-normal text-gray-600 dark:text-gray-400">catalogapp.io</p>
                                        </div>
                                    </td>
                                    <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                        <div className="inline px-3 py-1 text-sm font-normal ">
                                            Finance
                                        </div>
                                    </td>
                                    <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                            Customer
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <div>
                                            <h4 className="text-gray-700 dark:text-gray-200">Content curating app</h4>
                                            <p className="text-gray-500 dark:text-gray-400">Brings all your news into one place</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div>
                                            <h2 className="font-medium text-gray-800 dark:text-white ">Catalog</h2>
                                            <p className="text-sm font-normal text-gray-600 dark:text-gray-400">catalogapp.io</p>
                                        </div>
                                    </td>

                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <div className="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                            <div className="bg-blue-500 w-2/3 h-1.5"></div>
                                        </div>
                                    </td>

                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr> */}
                                {
                                   attendance.map(a => (
                                    <tr key={a.id}>
                                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                          <div>
                                              <h2 className="font-medium text-gray-800 dark:text-white ">{a.emp_code}</h2>
                                              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">{a.emp_names}</p>
                                          </div>
                                      </td>
                                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                        <div>
                                          <h2 className="font-medium text-gray-800 dark:text-white ">{a.emp_designation}</h2>
                                          <p className="text-sm font-normal text-gray-600 dark:text-gray-400">{a.emp_department}</p>
                                        </div>
                                      </td>
                                      <td className="px-4 py-3.5 text-sm font-medium whitespace-nowrap">
                                          <div className="inline text-sm font-normal ">
                                          {a.att_date}
                                          </div>
                                      </td>
                                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                          {a.att_hours > 0 &&
                                          <div className="inline px-4 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">P</div>
                                          }
                                          {a.att_hours == 0 &&
                                          <div className="inline px-4 py-1 text-sm font-normal rounded-full text-red-500 gap-x-2 bg-red-100/60 dark:bg-gray-800">A</div>
                                          }
                                      </td>
                                      <td className="px-12 py-4 text-sm">
                                          <div>
                                            <h4 className="text-gray-700 dark:text-gray-200 flex justify-between">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                                </svg> : <span>{a.att_timein}</span>
                                            </h4>
                                            <p className="text-gray-500 dark:text-gray-400 flex justify-between">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg> : <span>{a.att_timeout}</span>
                                            </p>
                                          </div>
                                      </td>
                                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                                          <div>
                                              <h4 className="text-gray-700 dark:text-gray-200">Clocking hrs: {a.att_hours}</h4>
                                              <p className="text-gray-500 dark:text-gray-400">Production hrs: {a.att_productionhrs}</p>
                                          </div>
                                      </td>
                                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                                      <div>
                                              {a.att_holiday && <><h2 className="font-medium text-gray-800 dark:text-white ">Holiday</h2><p className="text-sm font-normal text-gray-600 dark:text-gray-400">{a.att_approvedot2hrs}</p></>}
                                              {!a.att_holiday && <><h2 className="font-medium text-gray-800 dark:text-white ">Workday</h2><p className="text-sm font-normal text-gray-600 dark:text-gray-400">{a.att_approvedot1hrs}</p></>}

                                          </div>
                                      </td>

                                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                        <div className="inline px-3 py-1 text-sm font-normal ">
                                            {a.att_statusnotes}
                                        </div>
                                      </td>

                                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                                          <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                              </svg>
                                          </button>
                                      </td>
                                    </tr>
                                   ))
                                }
                            </tbody>
                            }

                          </table>
                      </div>
                  </div>
              </div>
          </div>

          <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                  Page <span className="font-medium text-gray-700 dark:text-gray-100">1 of 10</span>
              </div>

              <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
                  <a href="#" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                      </svg>

                      <span>
                          previous
                      </span>
                  </a>

                  <a href="#" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                      <span>
                          Next
                      </span>

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                  </a>
              </div>
          </div>
      </div>
    </>
  )
}
