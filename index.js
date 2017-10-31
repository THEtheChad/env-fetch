function env(key, default_value) {
  if (arguments.length === 1 && !process.env.hasOwnProperty(key)) {
    throw new Error(`Missing environment variable: ${key}`);
  }
}

env.prefix = function (prefix) {
  return function (key, default_value) {
    return arguments.length === 1 ?
      retrieve(prefix + key) :
      retrieve(prefix + key, default_value);
  }
}

module.exports = env;