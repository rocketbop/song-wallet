import React from 'react';

export function Editable({ songRaw, editorRef }) {
  return (
    <pre
      ref={editorRef}
    >
      {songRaw.split(/\r?\n/).map((content, i, arr) => (
        <React.Fragment key={i}>
          <span style={{ color: `hsl(${((i % 20) * 17) | 0}, 80%, 50%)` }}>
            {content}
          </span>
          {i < arr.length - 1 ? '\n' : null}
        </React.Fragment>
      ))}
    </pre>
  )
};
