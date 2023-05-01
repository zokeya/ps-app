import React, { useEffect } from 'react'
import { useStateContext } from '../../contexts/ContextProvider';
import { useState } from 'react';
import axiosClient from '../../axios-client';
import { useParams } from 'react-router-dom';
import {BiCalendar, BiCheckCircle} from 'react-icons/bi';
import {AiOutlineSchedule} from 'react-icons/ai';
import {IoMdEye} from 'react-icons/io';
import {TbClockOff, TbClockPlay} from 'react-icons/tb'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function OvertimeApproval(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const overtime = props.overtime;
  const [loading, setLoading] = useState(false);

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
    <>
      <button onClick={handleShow}><IoMdEye className='h-4 w-6' /></button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Approve Overtime</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="max-w-screen-md mx-auto">
          <div className="flex flex-col space-y-2 bg-white/30 rounded-lg">
            <div className="flex justify-between py-2 px-2">
                <div className="flex items-center space-x-2">
                    <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" className="rounded-full h-14 w-14" alt="" />
                    <div className="flex flex-col space-y-1">
                        <span className="font-bold">{overtime.emp_code} - {overtime.emp_names}</span>
                        <span className="text-stone-600 text-xs md:text-sm ">{overtime.emp_department} : {overtime.emp_designation}</span>
                    </div>
                </div>
                <div className="flex-none px-2 py-2 text-stone-600 text-xs md:text-sm">
                  <div className="flex flex-col space-y-1">
                    <span>{overtime.att_date}</span>
                    <span>Shift : {overtime.att_actualshift}</span>
                  </div>
                </div>
            </div>
            <div className="flex flex-between px-2">
              <div className="flex-none w-1/4 px-2 text-stone-600 text-xs md:text-sm">
                <label className="block uppercase tracking-wide text-stone-600 text-xs md:text-sm mb-2" htmlFor="grid-first-name">
                  Overtime
                </label>
                <input value={overtime.att_ot1hrs} onChange={(ev) => setAttendance({...attendance, att_ot1hrs: ev.target.value})}
                                id="att_ot1hrs" type="text"
                                className="w-14 rounded text-center" />
              </div>
              <div className="flex-grow-1 sm:flex-grow md:flex-grow-0 lg:flex-grow xl:flex-grow-0">
                <label className="block uppercase tracking-wide text-stone-600 text-xs md:text-sm mb-2" htmlFor="grid-first-name">
                  Remarks
                </label>
                <input name='remarks' id="remarks" type="text" placeholder="...comments"
                  value={overtime.remarks} onChange={(ev) => setAttendance({...attendance, remarks: ev.target.value})}
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  />
              </div>
            </div>
          </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className='bg-slate-400 hover:bg-slate-600 border rounded-full px-4 py-1 text-white' onClick={handleClose}>
            Close
          </button>
          <button
            className="bg-white px-4 py-1 shadow-sm border border-red-500 text-red-500 hover:bg-red-500 rounded-full inline-flex items-center space-x-2">
            <span className=" rounded-lg">
              <TbClockOff />
            </span>
            <span>Decline</span>
        </button>
          <button
            form='otApprovalForm'
              className="px-4 py-1 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-green-400 hover:text-white inline-flex items-center space-x-2"
              type="button" aria-label="like">
            <span className="text-green-400  hover:text-white rounded-lg">
              <TbClockPlay />
            </span>
            <span className='text-green-400  hover:text-white'>Approve</span>
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
