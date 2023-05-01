import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axiosClient from '../../axios-client';
import { FaRegTrashAlt,FaRegWindowClose } from "react-icons/fa";
import { BsPersonAdd } from "react-icons/bs";
import {BiAddToQueue} from 'react-icons/bi'
import Modal from 'react-bootstrap/Modal';

function WorkflowModal(props) {
  const workflowData = props.workflowData;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [users, setUsers] = useState([]);
  const [workflowSteps, setWorkflowSteps] = useState(
    []);

  if (workflowData) {
    useEffect(() => {
      // workflowData.workflowSteps ? setWorkflowSteps(workflowData.workflowSteps)
      //   : setWorkflowSteps([
      //     {
      //       code: '',
      //       name: '',
      //       use_reports_to: false,
      //       level: 1,
      //       user_id: null
      //     }
      //   ]);
      axiosClient.get(`/users`)
      .then(({data}) => {
        setUsers(data.data)
      })
      .catch(() => {
      })
    }, []);
  }

  const addApprover = (ev) => {
    ev.preventDefault();
    setWorkflowSteps([
      {
        code: '',
        name: '',
        use_reports_to: false,
        level: 1,
        user_id: null
      }
    ]);
  }

  const removeApprover = () => {
    console.log('123');
  }

  return (
    <>
      <button onClick={handleShow}
        className="inline-flex items-center p-1 text-sm font-medium text-blue-500 bg-white border border-blue-300 rounded-full focus:outline-none hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">
        <BiAddToQueue className='h-4 w-6' />
      </button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update {workflowData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="flex-auto px-2 lg:px-4 py-10 pt-0">
            <form >
              <h6 className="text-blueGray-400 text-sm mt-2 mb-2 font-bold uppercase">
                Workflow details
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-2/12 px-2">
                  <div className="relative w-full mb-2">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="code">
                      Code
                    </label>
                    <input type="text" value={workflowData.code} onChange={ev => setWorkflow({...workflow, code: ev.target.value})} id="code"
                      className='border-0 px-2 py-2 text-blueGray-600 bg-inherit rounded text-sm shadow w-full '
                      disabled />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-2">
                  <div className="relative w-full mb-2">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="name">
                      Name
                    </label>
                    <input type="text" value={workflowData.name} onChange={ev => setWorkflow({...workflow, name: ev.target.value})} id="name"
                      className='border-0 px-2 py-2 text-blueGray-600 bg-inherit rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      disabled />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-2">
                  <div className="relative w-full mb-2">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="desctiption">
                      Description
                    </label>
                    <input type="text" value={workflowData.description} onChange={ev => setWorkflow({...workflow, description: ev.target.value})} id="description"
                      className='border-0 px-2 py-2 text-blueGray-600 bg-inherit rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      disabled />
                  </div>
                </div>
              </div>
              <hr className="mt-2 border-b-1 border-blue-300" />
              <div className='flex justify-between py-2'>
                <h6 className='text-blueGray-400 text-sm font-bold uppercase'>Approvers</h6>
                <button className="p-1 rounded bg-purple-400 upp text-white font-semibold text-sm font-mono hover:bg-purple-600" onClick={addApprover}>+ Approver</button>
              </div>
              <div className="w-full lg:w-12/12 px-0 border rounded">
              <table className="table-auto w-full font-mono">
                    <thead className="text-sm font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                            <th></th>
                            <th className="p-2">
                                <div className="font-semibold text-left">Code</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-left">Name</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-left">Use Mrg</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-left">User</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-left">Level</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-center">Action</div>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="text-sm divide-y divide-gray-100">
                      {workflowData && workflowData.workflowSteps.map((ws) => {
                        return(<tr key={ws.id}><td colSpan={6}>123</td></tr>)
                        // <tr key={ws.id}>
                        //     <td className="p-2">
                        //         <input type="checkbox" className="w-5 h-5" value="id-1"
                        //           />
                        //     </td>
                        //     <td className="p-2">
                        //         <div className="font-medium text-gray-800">
                        //           <input type="text" id="code"
                        //             // value={workflowSteps['code']} onChange={ev => setWorkflow({...workflow, workflowSteps: ev.target.value})}
                        //             className="rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                        //         </div>
                        //     </td>
                        //     <td className="p-2">
                        //         <div className="font-medium text-gray-800">
                        //           <input type="text" id='name'
                        //             // value={workflowSteps['name']} onChange={ev => setWorkflow({...workflow, workflow_steps: ev.target.value})}
                        //               className="rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                        //         </div>
                        //     </td>
                        //     <td className="p-2">
                        //         <div className="text-left">
                        //           <input type="checkbox" className="w-5 h-5" value=""
                        //             />
                        //         </div>
                        //     </td>
                        //     <td className="p-2">
                        //         <div className="font-medium text-gray-800">
                        //           <select name="user_id" id=""
                        //             className='rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'>
                        //             <option value="">Select Approver</option>
                        //             {users.map((u) =>{
                        //               <option value={u.id}>{u.name}</option>
                        //             })}
                        //           </select>
                        //         </div>
                        //     </td>
                        //     <td className="p-2">
                        //         <div className="text-left font-medium text-green-500">
                        //           <input type="number" id='level'
                        //             // value={workflowSteps['level']} onChange={ev => setWorkflow({...workflow, workflowSteps: ev.target.value})}
                        //               className="rounded text-sm shadow focus:outline-none focus:ring w-14 ease-linear transition-all duration-150" />
                        //         </div>
                        //     </td>
                        //     <td className="p-2">
                        //         <div className="flex justify-center">
                        //             <button>
                        //               <FaRegTrashAlt className='w-6 h-6 hover:text-red-600 rounded-full hover:bg-gray-100 p-1'/>
                        //             </button>
                        //         </div>
                        //     </td>
                        // </tr>
                    }) }

                    </tbody>
                </table>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className='bg-slate-400 hover:bg-slate-600 border rounded-full px-4 py-1 text-white' onClick={handleClose}>
            Close
          </button>
          <button className="py-1 px-4 font-normal text-center text-white bg-purple-500
            rounded-full transition duration-200 hover:bg-purple-600 ease">
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default WorkflowModal