import {logger} from "./logger.js";

export const trackEvent=(eventName)=>{
    logger.info(`[Analytics] ${eventName}`);
};

export const analytics={
    trackEvent,
}