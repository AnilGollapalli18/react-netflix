
import React, { useState } from 'react';
import './Accordian.css'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
    const icon = index === activeIndex ? 'x' : '+'

    return (
      <div key={item.title} className='acc-full'>
        <div className='accordian-con'>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          <span className='acc-title'>{item.title}</span>
          <span className='acc-icon'>{icon}</span>
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      {renderedItems}
    </div>
  );
};

export default Accordion;

