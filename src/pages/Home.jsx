import {React,useEffect,useState} from 'react'
import { FaPlus } from "react-icons/fa6";
import Todo from "../Todo";
import axios from "axios";
import { Input, Modal } from 'antd';

const Home = () => {

    const[todos,setTodos] = useState([])
    const [title,setTitle] = useState('')
    const [updated,setUpdated] = useState('')
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [currentTodoId, setCurrentTodoId] = useState(null);
  
    //Create todo
    const createTodo = async()=>{
      try {
        const response = await axios.post("https://todomernbackend-production.up.railway.app/todo", { title });
        if (response.data.isSuccessfull) {
          console.log(response.data.message); // "Data posted successfully"
          getTodo()
          setTitle("")
        } else {
          console.error(response.data.error); // Show error from the API
        }
      } catch (error) {
        console.error("Error posting the todo:", error.message);
      }
    }
  
    const getTodo = async()=>{
      axios
        .get("https://todomernbackend-production.up.railway.app/todo")
        .then((response) => {
          setTodos(response.data.data); // Assuming your API response has a "data" key
          console.log(todos)
        })
        .catch((err) => {
          
          console.error("Error fetching todos:", err);
        });
    }
  
    //Delete todo
    const delTodo = async(id)=>{
      try {
        const response = await axios.delete(`https://todomernbackend-production.up.railway.app/todo/${id}`);
        if (response.data.isSuccessfull) {
          console.log(response.data.message); // "Todo deleted successfully"
          getTodo(); // Refresh the list after deletion
        } else {
          console.error(response.data.error);
        }
      } catch (error) {
        console.error("Error deleting the todo:", error.message);
      }
    }
  
    const editTodo = async(id)=>{
      setCurrentTodoId(id); // Set the id of the todo being edited
      showModal(); // Open the modal
    }
  
    const showModal = (id) => {
      setOpen(true);
    };
  
    const handleOk = async() => {
      try {
        setConfirmLoading(true);
        const response = await axios.put(`https://todomernbackend-production.up.railway.app/todo/${currentTodoId}`, {
          title: updated,
        });
    
        if (response.data.isSuccessfull) {
          console.log(response.data.message); // "Todo updated successfully"
          getTodo(); // Refresh the list after updating
        } else {
          console.error(response.data.error);
        }
    
        setOpen(false);
        setConfirmLoading(false);
        setUpdated(""); // Clear the updated input
      } catch (error) {
        console.error("Error updating the todo:", error.message);
        setConfirmLoading(false);
      }
    };
  
    const handleCancel = () => {
      setOpen(false);
    };
  
  
    //Read data
    useEffect(
      ()=>{
        getTodo()
    },[])
  

  return (
    <div>
       <div className="h-screen w-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... p-10">
      
         <div className='max-w-[600px] w-full m-auto bg-slate-100 rounded-md shadow-xl border p-4'>
           <h1 className="text-gray-800 text-3xl font-bold text-center p-2">Todo App</h1>
           <div className="flex justify-between my-2">
             <input type="text" className="p-2 w-full border-2 rounded-sm" placeholder="Add Todos"
             value={title} onChange={(e)=>setTitle(e.target.value)}/>
             <button className="p-4 ml-2 bg-violet-500 text-slate-100 border rounded-sm" onClick={createTodo}><FaPlus/></button>
           </div>
           <div>
           <ul>
                {todos.map((todo , index)=>(
                    <Todo key={index} text={todo.title} onDelete={()=>{delTodo(todo._id)}} onEdit={()=>{editTodo(todo._id)}}/>
                ))}

             </ul>
           </div>
           <Modal
        title="Update Todo"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Input placeholder="Enter updated text" onChange={(e)=>{setUpdated(e.target.value)}}/>
      </Modal>
         </div>

      </div>
    </div>
  )
}

export default Home
 