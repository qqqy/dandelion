import React , { Component } from 'react'

class HashTest extends Component{
  constructor(props){
    super(props)
    this.state = {
      testPass: ''
    }
  }

  async handleClick(){
    const res = await axios.post('/test/hashtest' , this.state).catch(error => console.log('ERROR: failed on backend' , error))
    alert(res.body)
  }

  render(){
    return (
      <>
        <input onChange={(e) => this.setState(e.target.value)} />

      </>
    )
  }
}