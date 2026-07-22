/**
 * Session management service.
 */

function createSession_(user) {
  const token = Utilities.getUuid();
  CacheService.getScriptCache().put(
    `session_${token}`,
    JSON.stringify(user),
    getConfig_().SESSION_TTL_SECONDS
  );
  return token;
}

function getSessionUser(token) {
  if (!token) return null;
  const raw = CacheService.getScriptCache().get(`session_${token}`);
  return raw ? JSON.parse(raw) : null;
}

function signOut(token) {
  if (token) CacheService.getScriptCache().remove(`session_${token}`);
  return jsonResponse_(true, 'Signed out successfully.');
}

function requireSession_(token) {
  const user = getSessionUser(token);
  if (!user) throw new Error('Authentication required.');
  return user;
}

function requireRole_(token, roles) {
  const user = requireSession_(token);
  if (!roles.includes(user.role)) {
    throw new Error('You do not have permission to perform this action.');
  }
  return user;
}
