const LOG_LEVEL_ERROR = 1; // 0001
const LOG_LEVEL_WARNING = 2; // 0010
const LOG_LEVEL_INFO = 4; // 0100
const LOG_LEVEL_DEBUG = 8; // 1000

let logLevel;

const getLogLevel = () => {
  if (logLevel) return logLevel;
  const params = new URLSearchParams(window.location.search);
  const level = +params.get("log_level");
  logLevel = level in [1, 2, 4, 8] ? level : 15; // allo everything by default.
  return logLevel;
};

const isLevelAllowed = level => getLogLevel() & level;

const createLog = ({ data, level }) => {
  if (!isLevelAllowed(level)) return;
  console.log(data);
};

export const error = data => createLog({ data, level: LOG_LEVEL_ERROR });

export const warn = data => createLog({ data, level: LOG_LEVEL_WARNING });

export const info = data => createLog({ data, level: LOG_LEVEL_INFO });

export const debug = data => createLog({ data, level: LOG_LEVEL_DEBUG });

export default { error, warn, info, debug };
