import React, { useState } from 'react'
import classNames from 'classnames'

import styles from './Accordion.module.scss'

export const Accordion = ({ title, children }) => {
  const [isContentOpen, setIsContentOpen] = useState(true)

  const toggleContent = () => {
    setIsContentOpen(!isContentOpen)
  }

  const contentClassName = classNames(styles.accordion__content, {
    [styles['accordion__content--is-closed']]: !isContentOpen
  })

  return (
    <section className={styles.accordion}>
      <div
        className={styles.accordion__header}
        onClick={toggleContent}
      >
        {title}
      </div>
      <div className={contentClassName}>
        {children}
      </div>
    </section>
  )
}
