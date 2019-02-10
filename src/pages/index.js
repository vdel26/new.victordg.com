import React, { Component } from 'react'

import Layout from '../components/layout'
import About from '../components/about'
import Projects from '../components/projects'

export default class IndexPage extends Component {
  state = {
    sectionIsProjects: false
  }
  
  toggleProjects = () => {
    this.setState({ sectionIsProjects: !this.state.sectionIsProjects })
  }

  render() {
    return (
      <Layout>
        <About toggleProjects={this.toggleProjects} sectionActive={!this.state.sectionIsProjects} />
        <Projects toggleProjects={this.toggleProjects} sectionActive={this.state.sectionIsProjects} />
      </Layout>
    )
  }
}