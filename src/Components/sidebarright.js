import React from 'react';

const SidebarRight = props => {
    return (
      <div className={props.sidebarStatus ? 'w-1/6' : 'flex-initial'}>
        <div className='px-2'>
          <button className="text-3xl" onClick={props.clickEvent}>↔</button>
          {props.sidebarStatus ? <p className='p-6 text-center'>THANKS FOR CHECKING OUT MY PROJECT :3</p> : ''}
        </div>
      </div>
    )
}

export default SidebarRight;