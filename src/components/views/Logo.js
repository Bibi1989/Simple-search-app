import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const Logo = () => (
  <div>
    <Button icon labelPosition='left' style={{background: "transparent", color: "purple", fontSize: "1.8em", position: "absolute", top: "20px", left: "10%"}}>
      <Icon name='hourglass outline' />
      LOOKUP
    </Button>
  </div>
)

export default Logo