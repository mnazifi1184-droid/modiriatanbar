/**
 * Authentication service.
 * Password hashing will be added before production deployment.
 */

function getUsersSheet_() {
  const config = getConfig_();
  const sheet = getOrCreateSheet_(
    getMainSpreadsheet_(),
    config.SHEETS.USERS,
    ['id', 'fullname', 'username', 'passwordHash', 'role', 'isActive', 'createdAt']
  );
  return sheet;
}

function signUp(fullname, username, password, role) {
  requireValue_(fullname, 'Full name');
  requireValue_(username, 'Username');
  requireValue_(password, 'Password');

  const normalizedUsername = normalizeUsername_(username);
  const sheet = getUsersSheet_();
  const values = getSheetValues_(sheet);

  const exists = values.slice(1).some(row => normalizeUsername_(row[2]) === normalizedUsername);
  if (exists) return jsonResponse_(false, 'Username already exists.');

  const config = getConfig_();
  const safeRole = config.VALID_ROLES.includes(role) ? role : 'User';

  sheet.appendRow([
    createId_(),
    String(fullname).trim(),
    normalizedUsername,
    String(password),
    safeRole,
    true,
    new Date()
  ]);

  return jsonResponse_(true, 'Registration successful.');
}

function findUserByUsername_(username) {
  const values = getSheetValues_(getUsersSheet_());
  const normalizedUsername = normalizeUsername_(username);
  return values.slice(1).find(row => normalizeUsername_(row[2]) === normalizedUsername) || null;
}

function signIn(username, password) {
  requireValue_(username, 'Username');
  requireValue_(password, 'Password');

  const row = findUserByUsername_(username);
  if (!row) return jsonResponse_(false, 'User not found.');
  if (String(row[3]) !== String(password)) return jsonResponse_(false, 'Invalid username or password.');
  if (String(row[5]).toLowerCase() === 'false') return jsonResponse_(false, 'User is inactive.');

  const sessionUser = {
    id: row[0],
    fullname: row[1],
    username: row[2],
    role: row[4]
  };

  const token = createSession_(sessionUser);
  return jsonResponse_(true, 'Login successful.', { token, user: sessionUser });
}
