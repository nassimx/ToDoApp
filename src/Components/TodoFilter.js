import React from 'react';
import './todofilter.css';
export const TodoFilter = ({ statusHandler }) => {
  return (
    <div>
      <div className="selectdiv">
        <label className="labelfilter">
          <select className="selectfilter" onChange={statusHandler}>
            <option selected id="selected-value">
              ALL ITEMS
            </option>
            <option>COMPLETED</option>
            <option>NOT COMPLETED</option>
          </select>
        </label>
      </div>
    </div>
  );
};
