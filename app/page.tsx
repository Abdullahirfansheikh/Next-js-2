"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Task {
    title: string;
    desc: string;
}

const Page: React.FC = () => {
   
    const [title, setTitle] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [mainTask, setMainTask] = useState<Task[]>([]);
    const [completed, setcompleted] = useState<Task[]>([]);
    

    const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(title);
        console.log(desc);
        setMainTask([...mainTask, { title, desc }]);
        setTitle("");
        setDesc("");
    };

    const eventHandler = (i: number) => {
        let copyTask = [...mainTask];
        copyTask.splice(i, 1);
        setMainTask(copyTask);
        
    };
    const eventHandler2 = (i: number) => {
        let copyMainTask = [...mainTask];
        let completedTask = copyMainTask.splice(i, 1)[0];
        setMainTask(copyMainTask);
        setcompleted( ()=> [...completed, completedTask]);
        
    };
    const eventHandler3 = (i: number) => {
        let copyTask = [...completed];
        copyTask.splice(i, 1);
        setcompleted(copyTask);
       
    };
    const eventHandler4 = (i:number)=>{
    const selectedTask = mainTask[i];
    const etitle = selectedTask.title;
    const edesc = selectedTask.desc;
        let copyTask = [...mainTask];
        copyTask.splice(i, 1);
        setMainTask(copyTask);
        setTitle(etitle)
        setDesc(edesc)
    }
    let sample: JSX.Element = <h2 className='font-bold'>NO TASK AVAILABLE</h2>;

    if (mainTask.length > 0) {
        sample = (
            <>
                {mainTask.map((t: Task, i: number) => (
                    <div key={i} className='justify-between flex mb-2 '>
                        <h2>{t.title}</h2>
                        <h2>{t.desc}</h2>
                       <div>
                       <button className='bg-blue-500 border-2 rounded text-white mb-4 p-1 mx-4 text-xl border-black border-solid' onClick={() => eventHandler(i)}>Delete</button>
                        <button className='bg-blue-500 border-2 rounded text-white mb-4 p-1 mx-4 text-xl border-black border-solid' onClick={() => eventHandler2(i)}>Completed</button>
                        <button className='bg-blue-500 border-2 rounded text-white mb-4 p-1 mx-4 text-xl border-black border-solid' onClick={() => eventHandler4(i)}>Edit</button>
                       </div>
                    </div>
                ))}
            </>
        );
    }
    
    return (
        <>

            <div className='bg-blue-500 text-white p-1 text-center text-4xl flex justify-between items-center'>
                <h3 className='text-xl ml-4 font-bold'>My Todo List</h3>
                <input type="text" placeholder='' className='text-sm px-20 p-1 m-1'/>
            <div className='text-xl mr-4 font-bold'>
                <ul className='flex'>
                    <li className='mr-9'>
                    <Link href="/signup">Sign up</Link>
                    </li>
                    <li >
                    <Link href="/login">Login</Link>
                    </li>
                </ul>
            </div>
            </div>
            
     <div className='flex'>
     <div className='bg-gray-200 h-screen w-52 pt-10'>
            <ul>
                <h1 className='text-center font-bold text-xl'>Task Routes</h1>
                <li className='ml-4 mt-4'>={'>'} My Day</li>
                <li className='ml-4 mt-1'>={'>'} Important</li>
                <li className='ml-4 mt-1'>={'>'} Planned</li>
                <li className='ml-4 mt-1'>={'>'} Assigned to me</li>
                <li className='ml-4 mt-1'>={'>'} Tasks</li>
            </ul>
        </div>

<div className=' w-full'>
    
<form onSubmit={formHandler}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Enter Title here' className='border-solid border-black border-2 m-4 p-2 pr-24 mt-8' />
                <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" placeholder='Enter Description here' className='border-solid border-black border-2 m-4 p-2 pr-24 mt-8' />
                <button type="submit" className='border-black border-solid border-2 bg-blue-500 text-white m-4 p-2 rounded'>Add Task</button>
            </form>
            <div className=' text-black p-10 text-center text-2xl'>
                {sample}
            </div>
            <div className='width-full height-full'>            
    <h1 className='mt-10 mb-10 text-center font-bold text-2xl'> COMPLETED</h1>
    {completed.map((t: Task, i: number) => (
        <div key={i} className='justify-around flex mb-2'>
            <h2>{t.title}</h2>
            <h2>{t.desc}</h2>
            <button className='bg-blue-500 border-2 rounded text-white mb-4 p-1 mx-4 text-xl border-black border-solid' onClick={() => eventHandler3(i)}>Delete</button>
        </div>
    ))}
</div>
</div>

     </div>
        </>
    );
    
};

export default Page;
