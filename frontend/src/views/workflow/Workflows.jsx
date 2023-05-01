import React, { Children, useEffect, useState } from 'react'
import { useStateContext } from '../../contexts/ContextProvider';
import axiosClient from '../../axios-client';
import { Link } from 'react-router-dom';
import {BiSearch,BiAddToQueue} from 'react-icons/bi'
import WorkflowModal from './WorkflowModal';

function Workflows() {
  const [workflows, setWorkflows] = useState([]);
  const [loading, setLoading] = useState(false);
  const{setTitle} = useStateContext();

  // useEffect(() => {
  //   setTitle("Workflows");
  //   getWorkflows();
  // }, []);

  // const getWorkflows = () => {
  //   setLoading(true)
  //   fetch('http://localhost:8000/api/workflows')
  //   .then((res) => res.json())
  //   .then(({data})=>{
  //     setWorkflows(data);
  //     setLoading(false)
  //   })
  //   .catch((er)=>{
  //     setLoading(false);
  //   })
  // }

  useEffect(() => {
    setTitle("Workflows");
    getWorkflows();
    console.log(workflows);
  }, []);

  const getWorkflows = () => {
    setLoading(true);
    axiosClient.get('/workflows')
    .then(({data}) => {
      setLoading(false);
      setWorkflows(data.data)
    })
    .catch(()=>{
      setLoading(false);
    })
  }

  return (
    <>
    <div className="px-2 py-2 relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between py-3 mb-2 bg-white dark:bg-gray-800 shadow-md sm:rounded-lg">
        <div>

        </div>
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative pr-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BiSearch/>
            </div>
            <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for workflows"/>
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-blue-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Workflow
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Approvers
                </th>
            </tr>
        </thead>
        <tbody>
          {loading &&
          <tr><td className="p2" colSpan={3}>Loading....</td></tr>}
          {console.log(workflows)}
          {!loading && workflows.map(w => (
            <tr key={w.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  <div className="">
                      <div className="text-base font-semibold">{w.code}</div>
                      <div className="font-normal text-gray-500">{w.name}</div>
                  </div>
              </td>
              <td className="px-6 py-4">
                {w.description}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-2">
                  <input type="number" id="second_product" className="bg-gray-50 w-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={Children.count(w.approval_steps)} disabled/>
                  {/* <WorkflowModal workflowData={w}/> */}

                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


  </>
  )
}

export default Workflows