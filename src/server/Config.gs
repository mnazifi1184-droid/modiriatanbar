/**
 * Central project configuration.
 * Keep environment-specific values in Script Properties.
 */

const APP_CONFIG = Object.freeze({
  APP_NAME: 'مدیریت انبار',
  DEFAULT_PAGE: 'Login',
  SESSION_TTL_SECONDS: 21600,
  VALID_ROLES: ['Admin', 'Editor', 'User'],
  SHEETS: {
    USERS: 'Users',
    RECORDS: 'Records',
    SETTINGS: 'Settings'
  },
  PAGES: ['Login', 'Signup', 'Dashboard', 'Upload', 'View', 'Merge']
});

function getConfig_() {
  const properties = PropertiesService.getScriptProperties();

  return {
    ...APP_CONFIG,
    SPREADSHEET_ID: properties.getProperty('SPREADSHEET_ID') || '',
    UPLOAD_SPREADSHEET_ID: properties.getProperty('UPLOAD_SPREADSHEET_ID') || ''
  };
}
