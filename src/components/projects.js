import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styles from './projects.module.css'
import cx from 'classnames'

export default class Projects extends Component {

  toggleProjects = () => {
    this.props.toggleProjects()
  }

  render() {
    console.log('projectsActive', this.props.sectionActive)
    const cxPage = cx(styles.page, 
      { [styles.isActive]: this.props.sectionActive })

    return (
      <div className={cxPage}>
        <div className={styles.close} onClick={this.toggleProjects}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.9 9.9">
            <polygon points="9.19 0 4.95 4.24 0.71 0 0 0.71 4.24 4.95 0 9.19 0.71 9.9 4.95 5.66 9.19 9.9 9.9 9.19 5.66 4.95 9.9 0.71 9.19 0"></polygon>
          </svg>
        </div>

        <div className={styles.container}>

          <div className={styles.project}>
            <h1 className={styles.projectTitle}>Veggies in Season</h1>
            <p className={styles.projectBody}>An iOS app to help you eat healthily, by making it easy to know which vegetables and fruits are in season. Built in React Native. Get it from the <a href="https://itunes.apple.com/es/app/veggies-in-season/id1088215278?l=en&mt=8" target="_blank">App Store</a> or read <a href="https://medium.com/@vdg/building-an-ios-app-in-react-native-3db2f73fe878#.3ah7uud6p" target="_blank">here</a> about my experience building it.</p>
          </div>

          <div className={styles.project}>
            <h1 className={styles.projectTitle}>Tinychart</h1>
            <p className={styles.projectBody}>Interactive playground to create nice-looking charts very easily. It is a
    pure client-side application built in React.js. View the <a href="https://github.com/vdel26/tinychart" target="_blank">source</a> or give
    it a <a href="http://tinychart.co/" target="_blank">try</a>. It had a steady flow of hundreds of daily users for almost 3 years, and made it to #1 of Product Hunt.</p>
          </div>

          <div className={styles.project}>
            <h1 className={styles.projectTitle}>Requestdiff</h1>
            <p className={styles.projectBody}>A troubleshooting utility to compare in a visual way the differences in HTTP
    headers and the message body between two API requests. View the <a href="https://github.com/vdel26/requestdiff" target="_blank">source</a> or visit
    the <a href="http://requestdiff.com/" target="_blank">site</a>. Featured at the top of Hacker News and received tens of thousands of visits.</p>
          </div>

          <div className={styles.project}>
            <h1 className={styles.projectTitle}>Samwise.js</h1>
            <p className={styles.projectBody}>Support widget that makes it easy to show relevant documentation links based
    on the context of the user at any moment. It is bundled as a Javascript/CSS library
    that can be embedded in any website or webapp. Learn more <a href="https://github.com/vdel26/samwise.js" target="_blank">here</a></p>
          </div>

          <div className={styles.project}>
            <h1 className={styles.projectTitle}>Play</h1>
            <p className={styles.projectBody}>A Chrome extension to control audio or video playing in background tabs. You will no longer need to search among all your open tabs every time you have to
   pause what you are listening to. You can get it <a href="https://github.com/vdel26/play" target="_blank">here</a> or check the source code <a href="https://github.com/vdel26/play" target="_blank">here</a>. Released two years before Chrome and Safari included this same feature natively.</p>
          </div>

          <div className={styles.project}>
            <h1 className={styles.projectTitle}>Gifted</h1>
            <p className={styles.projectBody}>A tiny Mac app to generate looping GIFs from videos. Just drag&drop and it
    is ready to go. Also my first stint at Objective-C development. View the source <a href="https://github.com/vdel26/gifted" target="_blank">here</a> or get it from the Mac app store.</p>
          </div>

        </div>

      </div>  
    )
  }

}

Projects.propTypes = {
  siteTitle: PropTypes.string,
}

Projects.defaultProps = {
  siteTitle: '',
}
