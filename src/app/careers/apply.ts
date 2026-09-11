export const APPLY_EMAIL = "careers@ethberry.io";

export const applyMailto = (title: string): string => `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(title)}`;
