import React from 'react'
import "./newsletter.css"

export const Newsletter = () => {
  return (
    <div className="news-container">
        <div className='news-text'>
            <h2>Newsletter</h2>
            <form>
                <input type='email' placeholder='your@email.com' />
                <button type='submit'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter;
