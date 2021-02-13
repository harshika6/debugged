import React, { useState } from 'react';
import FAQ from './FAQ';
import './faqfun.css';
import 'tachyons';

function App1 () {
  const [faqs, setfaqs] = useState([
    {
      question: 'What kind of projects do we want to work on?',
      answer:'hello we like to work on ........',
      open: false
    },
    {
      question: 'What kind of technologies interests us?',
      answer: 'abc dfghj.',
      open: false
    },
    {
      question: 'What kind of opportunities we are open to?',
      answer: 'dfghjk',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      <div className="faqs">
        {faqs.map((faq, i) => (
          <div>
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
               <div className="bb bw1 center mt3 " ></div>
             </div>
        ))}

      </div>
    </div>
  );
}

export default App1;
