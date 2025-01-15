import React, { useState } from 'react'
import iconMenu from "../assets/menu.svg";
import logo from "../assets/logo.png";
import iconSearch from "../assets/search.svg";
import iconAppGrid from "../assets/app-grid.svg";
import iconDarkLight from "../assets/darklight.svg";
import iconAllTask from "../assets/alltask.svg";
import iconAssigned from "../assets/assigned.svg";
import iconDate from "../assets/date.svg";
import iconStard from "../assets/star.svg";
import iconPlanned from "../assets/planned.svg";
import './layout.css';
import TaskInput from '../Add task/TaskInput';
import TaskList from '../view task/TaskList';

const Layout = () => {

    const [show, setShow] = useState("");
 
    return (
        <div className='layout_div_main'>
            {/* navbar */}
            <nav>
                <div className='header_Left'>
                    <button className='menu_Btn' onClick={()=>setShow(show =>(show === "block" ? "none" : "block"))}>
                        <img src={iconMenu} alt="menu icon" />
                    </button>
                    <img src={logo} alt="logo" />
                </div>

                <div className='header_Right'>
                    <span>
                        <img src={iconSearch} alt="search icon" />
                    </span>
                    <span>
                        <img src={iconAppGrid} alt="app grid icon" />
                    </span>
                    <span>
                        <img src={iconDarkLight} alt="dark light icon" />
                    </span>
                </div>
            </nav>

            {/* Sidebar */}
            <aside style={{display: show}}>

                <div id='blank'></div>

                <div className='bg'>

                    <div className='profile_main'>
                        <span className='profile'> <img src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> </span>
                        <h3>Hey, Sumit 👋</h3>
                    </div>

                    <div className='lists_main'>
                        <li className="lists">
                            <img src={iconAllTask} alt="" /> All Tasks
                        </li>
                        <li className="lists">
                            <img src={iconDate} alt="" /> Today
                        </li>
                        <li className="lists">
                            <img src={iconStard} alt="" /> Important
                        </li>
                        <li className="lists">
                            <img src={iconPlanned} alt="" />Planned
                        </li>
                        <li className="lists">
                            <img src={iconAssigned} alt="" /> Assigned to me
                        </li>
                    </div>


                    <button className='addList_btn'>
                        + Add list
                    </button>


                    <div>
                        <div className='today_tasks'>
                            <h3>Today Tasks
                                <span> <h2>11</h2>  </span>
                            </h3>
                            ⓘ
                        </div>

                        <div className='graph_main'>
                            <div className='graph_back'>
                                <div></div>
                            </div>

                            <div className='pendin_done'>
                                <div id='pending'> <div></div> Pending</div>
                                <div id='done'> <div></div> Done</div>
                            </div>
                        </div>
                    </div>

                </div>
            </aside>

            {/* Adding / viewig task  */}
            <main>
                <TaskInput />
                <TaskList />
            </main>
        </div>
    )
}

export default Layout;