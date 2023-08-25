"use client"
import React, {useEffect, useState } from 'react';
import FileUploadButton from '../fileUpload/page';

interface TaskDropDownProps {
    task:string;
    objectOptions: string;
}

const TaskDropdown: React.FC<TaskDropDownProps>=({task, objectOptions})=>{
    return(
        <div>
            <div className='py-0 text-left text-zinc-800 text-sm font-normal leading-tight'>
                <div className={'ml-0'}>
                    <div className='flex-col hover-Cblue py-2 pl-2'>
                        {objectOptions}
                        <FileUploadButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskDropdown;