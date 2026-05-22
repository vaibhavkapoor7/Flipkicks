import React from 'react'

const FAQItem = ({ faq = {} }) => {
  return (
    <article className="faq-item">
      <h3>{faq.question || 'Question title'}</h3>
      <p>{faq.answer || 'Answer text goes here.'}</p>
    </article>
  )
}

export default FAQItem
