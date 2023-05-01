import React, { useEffect } from 'react'
import { useStateContext } from '../../contexts/ContextProvider';
import { useState } from 'react';
import axiosClient from '../../axios-client';
import { useParams } from 'react-router-dom';
import {BiCalendar, BiCheckCircle} from 'react-icons/bi';
import {AiOutlineSchedule} from 'react-icons/ai';
import {TbClockOff, TbClockPlay} from 'react-icons/tb'
import { motion, LayoutGroup } from "framer-motion";

const OvertimeApproval = ()=> {
  const {id} = useParams();
  const {setTitle} = useStateContext();
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const [attendance, setAttendance] = useState({
    id: null,
    emp_code: '',
    emp_names: '',
    att_date: '',
    att_ot1hrs: '',
    att_ot2hrs: '',
    att_ot2hrs: '',
    remarks: ''
  });

  return (
    <LayoutGroup>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </LayoutGroup>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  // const Icon = param.icon;
  return (
    <motion.div
      className="CompactCard"
      // style={{
      //   background: param.color.backGround,
      //   boxShadow: param.color.boxShadow,
      // }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <tr key={param.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-4 py-3">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <td scope="row" className="flex items-center px-4 py-3 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                    <div className="pl-3">
                        <div className="text-base font-semibold">{param.emp_code}</div>
                        <div className="font-normal text-gray-500">{param.emp_names}</div>
                    </div>
                </td>
                <td className="px-4 py-3">
                  <div className="">
                    <div className="text-base font-semibold">{param.emp_designation}</div>
                    <div className="font-normal text-gray-500">{param.emp_department}</div>
                  </div>
                </td>
                <td className="px-4 py-3">
                    {param.att_date}
                </td>
                <td className="px-3 py-3">
                    {param.att_holiday && <h3>{param.att_holiday}</h3>}
                    {!param.att_holiday && <h3>Weekday</h3>}
                </td>
                <td className="px-3 py-3">
                  {param.att_actualshift}
                </td>
                <td className="px-4 py-3">
                  <div>
                    <h4 className="text-gray-700 dark:text-gray-200 flex justify-between">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg> : <span>{param.att_timein}</span>
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 flex justify-between">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg> : <span>{param.att_timeout}</span>
                    </p>
                  </div>
                </td>
                <td className="px-3 py-3 text-center">
                  {param.att_ot1hrs > 1 && <h3 className='font-semibold'>{param.att_ot1hrs}</h3>}
                  {param.att_ot2hrs > 1 && <h3 className='font-semibold'>{param.att_ot2hrs}</h3>}
                </td>
                <td className="px-3 py-3">
                  <Link to={'/overtimes/'+param.id}>
                    <IoMdEye className='h-4 w-6' />
                  </Link>
                </td>
            </tr>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };
  return (
    <>
    <motion.div
      className="ExpandedCard"
      // style={{
      //   background: param.color.backGround,
      //   boxShadow: param.color.boxShadow,
      // }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <FaTimes onClick={setExpanded} />
      </div>
        <span>{param.emp_names}</span>
      <div className="chartContainer">
      <div className="max-w-screen-md md:w-3/4 mx-auto">
          <div className="flex flex-col ">
            <div className="bg-white shadow-md  rounded-3xl p-4">
              <form >
              <div className="flex-none lg:flex">
                    <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                        <img src="https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"
                            alt="Just a flower" className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
                    </div>
                    <div className="ml-3 py-2">
                      <div className="flex justify-between">
                        <div className="w-3/4">
                          <div className="flex flex-wrap ">
                              <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                                  Approve Overtime
                              </div>
                              <h2 className="flex-auto text-lg font-medium">{attendance.emp_names}</h2>
                          </div>
                          <div className="flex py-4  text-sm text-gray-500">
                              <div className="flex-1 inline-flex items-center">
                                <BiCalendar />
                                <p className="">. {attendance.att_date}</p>
                              </div>
                              <div className="flex-1 inline-flex items-center">
                                <AiOutlineSchedule />
                                <p className="">.  {attendance.att_actualshift}</p>
                              </div>
                          </div>
                        </div>
                        <div className="float-right">
                          <label className="text-black dark:text-gray-200" htmlFor="att_ot1hrs">
                            Overtime
                          </label>
                          <input value={attendance.att_ot1hrs} onChange={ev => setAttendance({...attendance, att_ot1hrs: ev.target.value})}
                              id="att_ot1hrs" type="text"
                              className="block w-1/3 px-4 py-2 text-center text-gray-700 font-bold bg-white border border-gray-300 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                      </div>

                      <div className="flex px-4 py-1 border-t border-gray-200 "></div>

                      <div className='flex justify-between mb-2'>
                          <label className="text-black dark:text-gray-200" htmlFor="remarks">Remarks :</label>
                          <textarea onChange={ev => setAttendance({...attendance, remarks: ev.target.value})}
                            name="remarks" id="remarks" cols="30" rows="2"
                            className="block w-3/4 py-2  bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                      </div>
                      <div className="flex space-x-3 text-sm font-medium">
                          <div className="flex-auto flex space-x-3">
                              <button
                                  className="mb-2 md:mb-0 bg-orange-200 px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                                  <span className="text-red-400 hover:text-green-500 rounded-lg">
                                    <TbClockOff />
                                  </span>
                                  <span>Decline</span>
                              </button>
                          </div>
                          <button
                              className="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 "
                              type="button" aria-label="like">
                            <span className="text-green-400 hover:text-green-500 rounded-lg">
                              <TbClockPlay />
                            </span>
                            <span>Approve</span>
                          </button>
                      </div>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <span>Last 2 minutes</span>
    </motion.div>


    </>
  )
}

export default OvertimeApproval;
