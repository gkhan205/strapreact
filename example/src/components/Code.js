import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Code = ({ children }) => (
  <SyntaxHighlighter language='htmlbars' style={darcula}>
    {children}
  </SyntaxHighlighter>
)

export default Code
