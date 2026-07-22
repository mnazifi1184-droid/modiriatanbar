/**
 * Shared server-side utility functions.
 */

function requireValue_(value, fieldName) {
  if (value === null || value === undefined || String(value).trim() === '') {
    throw new Error(`${fieldName} is required.`);
  }
  return String(value).trim();
}

function normalizeUsername_(username) {
  return String(username || '').trim().toLowerCase();
}

function createId_() {
  return Utilities.getUuid();
}

function jsonResponse_(success, message, data) {
  return {
    success: Boolean(success),
    message: message || '',
    ...(data || {})
  };
}
