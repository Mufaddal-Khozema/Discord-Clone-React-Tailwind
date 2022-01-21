import React, { useState } from 'react';
import { XIcon } from "@heroicons/react/solid";

const AddChannelModal = ({className, modalClose, addChannel}) => {
    const [channelName, setChannelName] = useState('');
    const [channelDesc, setChannelDesc] = useState('');
    const [showChannelNameErr, setShowChannelNameErr] = useState(false)
    return (
        <div className={className}>
            <div className='absolute left-0 right-0 top-0 w-screen h-screen bg-[black] opacity-50'></div>
                <div className="absolute flex left-0 right-0 top-6 mx-auto w-96 flex-col gap-2 text-xl p-8 rounded-xl text-secondary bg-[white]">
                    <button onClick={modalClose}><XIcon className="ml-auto w-6 h-6"/></button>
                    <h3 className="font-extrabold text-2xl mb-4">Input Channel Info</h3>
                    <div className='flex'>
                        <span className='font-normal mr-1'>#</span>
                        <input 
                        className="mb-2 border-primary border-b-[1px] flex-auto focus:outline-0 focus:border-b-2 focus:border-b-primary" 
                        placeholder="Add a Channel Name"
                        onChange={e => {
                            if (e.target.value.length > 15) {
                                setShowChannelNameErr(true);
                                setChannelName(e.target.value);
                            } else {
                                setShowChannelNameErr(false);
                                setChannelName(e.target.value);
                            }
                        }}/>
                    </div>
                    {showChannelNameErr && <span className='text-[red]'>Length cannot be over 15 characters</span>}
                    <input 
                        className="mb-4 focus:outline-0 border-b-[1px] focus:border-b-2 focus:border-b-primary" 
                        placeholder="Add a Channel Description"
                        onChange={e => {
                            setChannelDesc(e.target.value)
                        }}/>
                    <input 
                        type='submit' 
                        className="bg-primary text-neutral hover:bg-secondary font-extrabold p-1 py-3 rounded-full w-1/2 mx-auto"
                        onClick={() => {
                            if (channelName.length <= 15) {
                                addChannel(channelName, channelDesc);
                                modalClose()
                            }
                        }}/>
                </div>
        </div>
    )

}

export default AddChannelModal