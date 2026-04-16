declare function fbq(...args: unknown[]): void;

// Standard Event Names
export const PIXEL_EVENTS = {
    LEAD: "Lead",
    CONTACT: "Contact",
    FIND_LOCATION: "FindLocation",
    VIEW_CONTENT: "ViewContent",
    SELECT_CONTENT: "SelectContent",
} as const;

// Custom Event Names
export const CUSTOM_EVENTS = {
    CTA_CLICK: "CTAClick",
    WHATSAPP_CLICK: "WhatsAppClick",
    PRICING_INTERACTION: "PricingInteraction",
    SEGMENT_SELECTION: "SegmentSelection",
    LINKTREE_CLICK: "LinktreeClick",
    VIDEO_PLAY: "VideoPlay",
} as const;

interface TrackingParams {
    location?: string;
    button_text?: string;
    label?: string;
    plan_name?: string;
    modality?: string;
    segment_id?: string;
    video_title?: string;
    [key: string]: unknown;
}

/**
 * Generic tracking function with safety checks and console logging for debugging
 */
export function trackEvent(eventName: string, params?: TrackingParams, isCustom = true) {
    if (typeof fbq !== "undefined") {
        if (isCustom) {
            fbq("trackCustom", eventName, params);
        } else {
            fbq("track", eventName, params);
        }
        
        // Debugging log (visible in development)
        if (import.meta.env.DEV) {
            console.log(`[Pixel] ${isCustom ? 'Custom' : 'Standard'} Event: ${eventName}`, params);
        }
    } else {
        if (import.meta.env.DEV) {
            console.warn(`[Pixel] fbq not defined. Event ${eventName} not tracked.`, params);
        }
    }
}

// Helper Trackers
export const pixelTrackers = {
    // Lead / WhatsApp
    trackWhatsApp: (location: string, label: string) => {
        trackEvent(PIXEL_EVENTS.LEAD, { location, label, type: "WhatsApp" }, false);
        trackEvent(CUSTOM_EVENTS.WHATSAPP_CLICK, { location, label });
    },

    // CTAs
    trackCTA: (location: string, label: string) => {
        trackEvent(PIXEL_EVENTS.CONTACT, { location, label }, false);
        trackEvent(CUSTOM_EVENTS.CTA_CLICK, { location, label });
    },

    // Pricing
    trackPricing: (planName: string, modality: string) => {
        trackEvent(PIXEL_EVENTS.SELECT_CONTENT, { plan_name: planName, modality, content_type: "product" }, false);
        trackEvent(CUSTOM_EVENTS.PRICING_INTERACTION, { plan_name: planName, modality });
    },

    // Segments
    trackSegment: (segmentId: string) => {
        trackEvent(PIXEL_EVENTS.SELECT_CONTENT, { segment_id: segmentId, content_type: "user_segment" }, false);
        trackEvent(CUSTOM_EVENTS.SEGMENT_SELECTION, { segment_id: segmentId });
    },

    // Location
    trackLocation: (type: "google_maps" | "address" | "phone") => {
        trackEvent(PIXEL_EVENTS.FIND_LOCATION, { type }, false);
    },

    // Linktree
    trackLinktree: (location: string) => {
        trackEvent(CUSTOM_EVENTS.LINKTREE_CLICK, { location });
    },

    // Videos
    trackVideoPlay: (videoTitle: string) => {
        trackEvent(CUSTOM_EVENTS.VIDEO_PLAY, { video_title: videoTitle });
    }
};

/**
 * Legacy support for trackLead
 */
export function trackLead() {
    pixelTrackers.trackWhatsApp("generic", "legacy_track_lead");
}
