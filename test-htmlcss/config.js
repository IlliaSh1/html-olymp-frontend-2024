
const config = require('./component-1');
const hero = require('./component-2');
const events = require('./component-3');
const form = require('./component-4');
const learning = require('./component-5');
const about = require('./component-6');
const gallery = require('./component-7');
const contacts = require('./component-8');
const footer = require('./component-9');

config.scenarios = [
  ...config.scenarios, // header
  ...hero.scenarios,
  ...events.scenarios,
  ...form.scenarios,
  ...learning.scenarios,
  ...about.scenarios,
  ...gallery.scenarios,
  ...contacts.scenarios,
  ...footer.scenarios,
]

module.exports = config;
