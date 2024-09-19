// src/utils/epoch.js

export function toEpoch(date) {
    return date ? Math.floor(new Date(date).getTime() / 1000) : null;
}