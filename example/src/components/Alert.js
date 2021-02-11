import React from 'react'
import { Alert } from 'strapreact'

import Code from './Code'

const AlertComponent = () => {
  const basicUsage = `
  <Alert>A simple primary alert—check it out with default prop!</Alert>
  <Alert color='primary'>
    A simple primary alert—check it out with color prop!
  </Alert>
  <Alert color='secondary'>A simple secondary alert—check it out!</Alert>
  <Alert color='success'>A simple success alert—check it out!</Alert>
  <Alert color='danger'>A simple danger alert—check it out!</Alert>
  <Alert color='warning'>A simple warning alert—check it out!</Alert>
  <Alert color='info'>A simple info alert—check it out!</Alert>
  <Alert color='light'>A simple light alert—check it out!</Alert>
  <Alert color='dark'>A simple dark alert—check it out!</Alert>
  `

  const additionalContent = `
  <Alert color='success'>
    <h4 className='alert-heading'>Well done!</h4>
    <p>
      Aww yeah, you successfully read this important alert message. This
      example text is going to run a bit longer so that you can see how
      spacing within an alert works with this kind of content.
    </p>
    <hr />
    <p className='mb-0'>
      Whenever you need to, be sure to use margin utilities to keep things
      nice and tidy.
    </p>
  </Alert>
  `

  return (
    <>
      <h1>Alert</h1>
      <h3>Basic Usage</h3>
      <hr />
      <Alert>A simple primary alert—check it out with default prop!</Alert>
      <Alert color='primary'>
        A simple primary alert—check it out with color prop!
      </Alert>
      <Alert color='secondary'>A simple secondary alert—check it out!</Alert>
      <Alert color='success'>A simple success alert—check it out!</Alert>
      <Alert color='danger'>A simple danger alert—check it out!</Alert>
      <Alert color='warning'>A simple warning alert—check it out!</Alert>
      <Alert color='info'>A simple info alert—check it out!</Alert>
      <Alert color='light'>A simple light alert—check it out!</Alert>
      <Alert color='dark'>A simple dark alert—check it out!</Alert>

      <Code>{basicUsage}</Code>

      <h3>Additional Content</h3>
      <hr />
      <Alert color='success'>
        <h4 className='alert-heading'>Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className='mb-0'>
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>

      <Code>{additionalContent}</Code>

      <h3>Dismissing Alert</h3>
      <hr />
      <Alert closable>This is dismissible alert</Alert>
      <Code>{` <Alert closable>This is dismissible alert</Alert>`}</Code>
    </>
  )
}

export default AlertComponent
