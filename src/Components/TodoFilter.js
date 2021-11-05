import React from 'react';
import './todofilter.css';
export const TodoFilter = ({ statusHandler }) => {
  return (
    <div>
      {/* <form id="app-cover" onChange={statusHandler}>
        <div id="select-box">
          <input type="checkbox" id="options-view-button" />
          <div id="select-button" className="brd">
            <div id="selected-value">
              <span>ALL ITEMS</span>
            </div>
            <div id="chevrons">
              <i className="fas fa-chevron-up" />
              <i className="fas fa-chevron-down" />
            </div>
          </div>
          <div id="options">
            <div className="option">
              <input
                className="s-c top"
                type="radio"
                name="platform"
                defaultValue="codepen"
              />
              <input
                className="s-c bottom"
                type="radio"
                name="platform"
                defaultValue="codepen"
              />

              <span className="label">ALL</span>
              <span className="opt-val">ALL</span>
            </div>
            <div className="option">
              <input
                className="s-c top"
                type="radio"
                name="platform"
                defaultValue="dribbble"
              />
              <input
                className="s-c bottom"
                type="radio"
                name="platform"
                defaultValue="dribbble"
              />

              <span className="label">NOT COMPLETED</span>
              <span className="opt-val">NOT COMPLETED</span>
            </div>
            <div className="option">
              <input
                className="s-c top"
                type="radio"
                name="platform"
                defaultValue="behance"
              />
              <input
                className="s-c bottom"
                type="radio"
                name="platform"
                defaultValue="behance"
              />

              <span className="label">COMPLETED</span>
              <span className="opt-val">COMPLETED</span>
            </div>
            <div id="option-bg" />
          </div>
        </div>
      </form> */}
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
