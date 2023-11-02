import React from 'react'

export default function ContactUs() {
  return (
    <div>
        <h1>Contact Us</h1>
        <form>
            <label>
                <span>Your Email</span>
                <input type='email' name = 'email' />
            </label>
            <label>
                <span>Your Message:</span>
                <textarea name='message' required></textarea>
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}
