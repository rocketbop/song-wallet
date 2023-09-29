"use client";
import React, { useState } from 'react';
import Image from 'next/image'

export default function Home() {
  const [window1Visible, setWindow1Visible] = useState(true);
  const [window2Visible, setWindow2Visible] = useState(true);
  const [bothWindowsHidden, setBothWindowsHidden] = useState(true);

  const toggleWindow1 = () => {
    setWindow1Visible(!window1Visible);
    setBothWindowsHidden(!window1Visible && !window2Visible);
  };

  const toggleWindow2 = () => {
    setWindow2Visible(!window2Visible);
    setBothWindowsHidden(!window1Visible && !window2Visible);
  };

  const windowWidth = () => {

  };

  return (
    <div className={`App`}>
      <div className="menu">
        <button className="button" onClick={toggleWindow1}>
          {window1Visible ? 'Hide Window 1' : 'Show Window 1'}
        </button>
        <button className="button" onClick={toggleWindow2}>
          {window2Visible ? 'Hide Window 2' : 'Show Window 2'}
        </button>
      </div>

      <div className="windows">
        {window1Visible && (
          <div className="window" id="window1">
            <h2>Window 1</h2>
            {/* Content for Window 1 */}
          </div>
        )}

        {window2Visible && (
          <div className="window" id="window2">
            <h2>Window 2</h2>
            {/* Content for Window 2 */}
          </div>
        )}
      </div>
    </div>
  );
}
