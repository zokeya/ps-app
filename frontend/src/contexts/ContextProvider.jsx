import { createContext, useContext, useState } from 'react'

const StateContext = createContext({
  title: null,
  setTitle: () => {},
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
  notification: null,
  setNotification: () => {},
  attendance: null,
  setAttendance: () => {},
  overtime: null,
  setOvertime: () => {},
  workflow: null,
  setWorkflow: () => {},
  workflowSteps: null,
  setWorkflowSteps: () => {}
})

export const ContextProvider = ({children}) => {
  const [title, _setTitle] = useState('');
  const [user, setUser] = useState({});
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
  const [notification, _setNotification] = useState('');
  const [attendance, setAttendance] = useState({});
  const [overtime, setOvertime] = useState({});
  const [workflow, setWorkflow] = useState({});
  const [workflowSteps, setWorkflowSteps] = useState({});

  const setToken = (token) => {
    _setToken(token)
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    }else{
      localStorage.removeItem('ACCESS_TOKEN')
    }
  }
  const setTitle = (header) => {
    _setTitle(header);
  }

  const setNotification = (message) => {
    _setNotification(message);
    setTimeout(() => {
      _setNotification('')
    }, 3000);
  }

  return (
    <StateContext.Provider value={{
      title,
      setTitle,
        user,
        token,
        setUser,
        setToken,
        notification,
        setNotification,
        attendance,
        setAttendance,
        overtime,
        setOvertime,
        workflow,
        setWorkflow,
        workflowSteps,
        setWorkflowSteps
      }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
