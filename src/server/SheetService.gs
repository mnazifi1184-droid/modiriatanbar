/**
 * Google Sheets data access layer.
 * Business logic should not access SpreadsheetApp directly when avoidable.
 */

function getMainSpreadsheet_() {
  const id = getConfig_().SPREADSHEET_ID;
  if (!id) throw new Error('SPREADSHEET_ID is not configured in Script Properties.');
  return SpreadsheetApp.openById(id);
}

function getUploadSpreadsheet_() {
  const id = getConfig_().UPLOAD_SPREADSHEET_ID || getConfig_().SPREADSHEET_ID;
  if (!id) throw new Error('UPLOAD_SPREADSHEET_ID is not configured in Script Properties.');
  return SpreadsheetApp.openById(id);
}

function getOrCreateSheet_(spreadsheet, sheetName, headers) {
  let sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }

  if (headers && sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }

  return sheet;
}

function getSheetValues_(sheet) {
  if (!sheet || sheet.getLastRow() === 0 || sheet.getLastColumn() === 0) {
    return [];
  }

  return sheet.getDataRange().getDisplayValues();
}
