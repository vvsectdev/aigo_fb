import ReactGA4 from "react-ga4";
//G-T5H3KF4W7W - nikita
//GTM-T57B7R4X - aigo
export const InitializeGoogleAnalytics = () => {
  ReactGA4.initialize("GTM-T57B7R4X");
};

export const TrackGoogleAnalyticsEvent = () => {
  ReactGA4.event({
    category: 'pageView',
    action: `onboard_page_show`,
  });
}

export const TrackGoogleAnalyticsEventOnTap = () => {
  ReactGA4.event({
    category: 'pageView',
    action: `onboarding_banner_tap`,
  });
}

export const TrackGoogleAnalyticsEventWithParams = (girlName: string) => {
  ReactGA4.event({
    category: 'pageView',
    action: `onboarding_card_tap_girlName_${girlName}`,
  });
}