import ReactPixel from "react-facebook-pixel";

const PIXEL_ID = "1571738971071266";

export const initMetaPixel = () => {
  ReactPixel.init(PIXEL_ID);
  ReactPixel.pageView();
};

export const trackPageView = () => {
  ReactPixel.pageView();
};

export const trackLead = () => {
  ReactPixel.track("Lead");
};
