export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
  // GA_TRACKING_ID が設定されていない場合は、処理終了
  // NOTE: return を描かないと 'config' で Errorが発生する
  if (!GA_TRACKING_ID) return
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: any) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
