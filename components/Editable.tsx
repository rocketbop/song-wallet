import React from 'react'
import { Highlight, themes } from 'prism-react-renderer'

export function Editable({ songRaw, editorRef }) {
  return (
    <Highlight theme={themes.duotoneDark} code={songRaw} language="javascript">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} ref={editorRef}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
              {i < line.length - 1 ? '\n' : null}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
