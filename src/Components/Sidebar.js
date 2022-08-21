import React from 'react';
import Card from './Card';


function Sidebar({cards}) {
  return (
    <div className='sidebar'>
      {cards.map(({id, label, items}) => {
        return (
          <Card id={id} label={label} items={items} />)
      })}
    </div>
  )
}

export default Sidebar;