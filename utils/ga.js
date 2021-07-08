export const GA_TRACKING_CODE = "UA-164785769-4"

// log the pageview with their URL
export const pageview = (url) => {
    window.gtag('config', GA_TRACKING_CODE, {
        page_path: url,
    })
}

// log specific events happening.
export const event = ({ action, params }) => {
    window.gtag('event', action, params)
}