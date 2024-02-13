import React from 'react'
import ProjectLink from './ProjectLink'

export default function Projects() {
    return (
        <div className='mt-2 h-100'>
            <div className='d-flex flex-column w-100 h-100 align-items-center'>
                <div className='text-decoration-underline text-center script h4'>
                    Side Projects
                </div>
                <div className='d-flex flex-column border' style={{height:"200px", width:"90%",overflowY:"auto"}}>
                    <ProjectLink 
                    description="My Todo List Project. Equipped with a registration and login page
                    backed by Spring Security."
                    link="https://todolist.cfapps.us10-001.hana.ondemand.com/"
                    pictureURL="software-icons/todo-list-app.png"
                    />                    
                    <ProjectLink 
                    description="Like Wordle? Then check out my movie guessing game: Reeldle"
                    link="https://reeldle.cfapps.us10-001.hana.ondemand.com/"
                    pictureURL="software-icons/reeldle-image.png"
                    />
                    <ProjectLink 
                    description="Balanced Binary Search Tree GUI"
                    pictureURL="software-icons/BstGui.png"
                    link="https://avl-tree-gui.cfapps.us10-001.hana.ondemand.com/"
                    />
                </div>
            </div>
        </div>
    )
}
