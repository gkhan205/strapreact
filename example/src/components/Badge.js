import React from 'react'
import { Badge } from 'strapreact'

import Code from './Code'

const example1 = `
<h1>
  Example heading <Badge>New</Badge>
</h1>
<h2>
  Example heading <Badge>New</Badge>
</h2>
<h3>
  Example heading <Badge>New</Badge>
</h3>
<h4>
  Example heading <Badge>New</Badge>
</h4>
<h5>
  Example heading <Badge>New</Badge>
</h5>
<h6>
  Example heading <Badge>New</Badge>
</h6>
`

const example2 = `
<button type='button' class='btn btn-primary'>
  Notifications <Badge color='secondary'>4</Badge>
</button>
`

const example3 = `
<Badge color='primary'>Primary</Badge>
<Badge color='secondary'>Secondary</Badge>
<Badge color='success'>Success</Badge>
<Badge color='danger'>Danger</Badge>
<Badge color='warning'>Warning</Badge>
<Badge color='info'>Info</Badge>
<Badge color='light'>Light</Badge>
<Badge color='dark'>Dark</Badge>
`

const example4 = `
<Badge rounded color='primary'>Primary</Badge>
<Badge rounded color='secondary'>Secondary</Badge>
<Badge rounded color='success'>Success</Badge>
<Badge rounded color='danger'>Danger</Badge>
<Badge rounded color='warning'>Warning</Badge>
<Badge rounded color='info'>Info</Badge>
<Badge rounded color='light'>Light</Badge>
<Badge rounded color='dark'>Dark</Badge>
`

const BadgeComponent = () => {
  return (
    <>
      <h1>Badge</h1>
      <h3>Examples</h3>
      <hr />

      <h1>
        Example heading <Badge>New</Badge>
      </h1>
      <h2>
        Example heading <Badge>New</Badge>
      </h2>
      <h3>
        Example heading <Badge>New</Badge>
      </h3>
      <h4>
        Example heading <Badge>New</Badge>
      </h4>
      <h5>
        Example heading <Badge>New</Badge>
      </h5>
      <h6 className='mb-3'>
        Example heading <Badge>New</Badge>
      </h6>

      <Code>{example1}</Code>

      <p>
        Badges can be used as part of links or buttons to provide a counter.
      </p>

      <button type='button' class='btn btn-primary mb-3'>
        Notifications <Badge color='secondary'>4</Badge>
      </button>

      <Code>{example2}</Code>

      <h3>Background colors</h3>
      <hr />

      <Badge color='primary'>Primary</Badge>
      <Badge color='secondary'>Secondary</Badge>
      <Badge color='success'>Success</Badge>
      <Badge color='danger'>Danger</Badge>
      <Badge color='warning'>Warning</Badge>
      <Badge color='info'>Info</Badge>
      <Badge color='light'>Light</Badge>
      <Badge color='dark'>Dark</Badge>

      <br />
      <br />

      <Code>{example3}</Code>

      <h3>Rounded Pills</h3>
      <hr />

      <Badge color='primary' rounded>
        Primary
      </Badge>
      <Badge color='secondary' rounded>
        Secondary
      </Badge>
      <Badge color='success' rounded>
        Success
      </Badge>
      <Badge color='danger' rounded>
        Danger
      </Badge>
      <Badge color='warning' rounded>
        Warning
      </Badge>
      <Badge color='info' rounded>
        Info
      </Badge>
      <Badge color='light' rounded>
        Light
      </Badge>
      <Badge color='dark' rounded>
        Dark
      </Badge>

      <br />
      <br />

      <Code>{example4}</Code>
    </>
  )
}

export default BadgeComponent
