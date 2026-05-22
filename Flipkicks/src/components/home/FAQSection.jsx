import React from 'react'
import FAQItem from './FAQItem'

const FAQSection = ({ faqs = [] }) => {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-section__list">
        {faqs.map((faq) => (
          <FAQItem key={faq.question} faq={faq} />
        ))}
      </div>
    </section>
  )
}

export default FAQSection
