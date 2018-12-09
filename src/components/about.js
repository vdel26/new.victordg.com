import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './about.module.css'

const About = ({ siteTitle }) => (
  <div className={styles.container}>

    <section>
      <p>Hi, I’m <a>Victor</a>.</p>
      <p>Co-founder at <a target="_blank" href="http://thenorthstudio.com">North</a>, a digital product studio from Barcelona.</p>
      <p>I get stuff done and help others do the same. Being outdoors, curiosity, authenticity, and life’s simple pleasures —like great food— turn me on.</p>
      <p>Here are <a>some ideas</a> I build for fun on my free time.</p>
    </section>

    <aside>
      <a href="http://twitter.com/lechienvic" target="_blank">Twitter</a>
      <a href="http://github.com/vdel26" target="_blank">Github</a>
      <a href="http://instagram.com/victordg" target="_blank">Instagram</a>
      <a href="https://es.linkedin.com/in/vdelgado" target="_blank">Linkedin</a>
    </aside>

  </div>
)

About.propTypes = {
  siteTitle: PropTypes.string,
}

About.defaultProps = {
  siteTitle: '',
}

console.log(styles)

export default About
