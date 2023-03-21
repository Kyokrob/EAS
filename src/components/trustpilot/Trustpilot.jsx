import React from 'react'
import './trustpilot.css'

const Trustpilot = () => {
  return (
    <div>
         {/* <!-- TrustBox widget - Micro Review Count --> */}
         <div
          className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="5419b6a8b0d04a076446a9ad"
          data-businessunit-id="640aaf9e12b68efbdc8adfb0"
          data-style-height="50px"
          data-style-width="100%"
          data-theme="light"
          data-min-review-count="10"
          data-without-reviews-preferred-string-id="4"
          data-style-alignment="center"
        >
          <a
            href="https://www.trustpilot.com/review/easthai.co"
            target="_blank"
            rel="noreferrer"
          >
            Trustpilot
          </a>
        </div>
        {/* <!-- End TrustBox widget --> */}
    </div>
  )
}

export default Trustpilot