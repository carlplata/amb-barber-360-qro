declare function fbq(...args: unknown[]): void;

export function trackLead() {
    if (typeof fbq !== "undefined") {
        fbq("track", "Lead");
    }
}
