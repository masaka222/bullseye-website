import React from 'react';

const HeadingPrimary = (props) => {
  return (
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className = "heading-primary-main">
          {props.headerHeading}
        </span>
        <span className="heading-secondary-main">
          &#x02605;{props.headerSubHeading}&#x02605;
        </span>
      </h1>
      <a 
        className='btn btn-white' 
        target="_blank"
        rel="noopener noreferrer"
        href='https://slicelife.com/restaurants/pa/glenside/19038/bullseye-burger-house-glenside/menu'
      >
        Order Online
      </a>
    </div>
  );
}

export default HeadingPrimary;