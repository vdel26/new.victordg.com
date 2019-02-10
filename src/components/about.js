import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styles from './about.module.css'
import cx from 'classnames'

export default class About extends Component {

  state = {
    isShowingContact: false
  }

  toggleContact = () => {
    this.setState({ isShowingContact: !this.state.isShowingContact })
  }

  toggleProjects = () => {
    this.props.toggleProjects()
  }

  render() {
    console.log('sectionActive', this.props.sectionActive)
    const cxPage = cx(styles.page, 
      { [styles.pageIsNotActive]: !this.props.sectionActive })
    const cxContainer = cx(styles.container, 
      { [styles.containerIsContactActive]: this.state.isShowingContact })
    const cxContactLink = cx(styles.link, 
      { [styles.linkIsActive]: this.state.isShowingContact })
    const cxContact = cx(styles.aside,
      { [styles.isVisible]: this.state.isShowingContact })
    const cxProjectsLink = cx(styles.link, 
      { [styles.linkIsActive]: this.state.isShowingProjects })

    return (
      <div className={cxPage}>
        <div className={cxContainer}>
          <section>
            <p>Hi, I’m <a className={cxContactLink} onClick={this.toggleContact}>Victor</a>.</p>
            <p>Co-founder at <a className={styles.link} target="_blank" href="http://thenorthstudio.com">North</a>, a digital product studio from Barcelona.</p>
            <p>I get stuff done and help others do the same. Being outdoors, curiosity, authenticity, and life’s simple pleasures —like great food— turn me on.</p>
            <p>Here are <a className={cxProjectsLink} onClick={this.toggleProjects}>some ideas</a> I build for fun on my free time.</p>
          </section>

          <aside className={cxContact}>
            <a href="http://twitter.com/lechienvic" target="_blank">Twitter</a>
            <a href="http://github.com/vdel26" target="_blank">Github</a>
            <a href="http://instagram.com/victordg" target="_blank">Instagram</a>
            <a href="https://es.linkedin.com/in/vdelgado" target="_blank">Linkedin</a>
          </aside>

        </div>
      </div>
    )
  }

}

About.propTypes = {
  siteTitle: PropTypes.string,
}

About.defaultProps = {
  siteTitle: '',
}
