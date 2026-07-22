/**
 * Web App entry point and shared routing.
 */

function doGet(e) {
  const config = getConfig_();
  const requestedPage = e?.parameter?.page || config.DEFAULT_PAGE;
  const page = config.PAGES.includes(requestedPage)
    ? requestedPage
    : config.DEFAULT_PAGE;

  const template = HtmlService.createTemplateFromFile(page);
  template.baseUrl = ScriptApp.getService().getUrl();

  return template
    .evaluate()
    .setTitle(config.APP_NAME)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getAppInfo() {
  const config = getConfig_();
  return {
    appName: config.APP_NAME,
    version: '1.0.0'
  };
}
