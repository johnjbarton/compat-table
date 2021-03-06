// exports browsers and tests

exports.name = 'ES7';
exports.target_file = 'es7/index.html';
exports.skeleton_file = 'es7/skeleton.html';

exports.browsers = {
  tr: {
    full: 'Traceur compiler',
    short: 'Traceur',
    obsolete: false // always up-to-date version
  },
  ejs: {
    full: 'Echo JS',
    short: 'EJS',
    obsolete: false // always up-to-date version
  },
  ie11: {
    full: 'Internet Explorer',
    short: 'IE 11',
    obsolete: false
  },
  firefox31: {
    full: 'Firefox',
    short: 'FF 31'
  },
  firefox32: {
    full: 'Firefox',
    short: 'FF 32'
  },
  chrome30: {
    full: 'Chrome',
    short: 'CH 30',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome33: {
    full: 'Chrome',
    short: 'CH 33',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome34: {
    full: 'Chrome',
    short: 'CH 34',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome35: {
    full: 'Chrome',
    short: 'CH 35',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome37: {
    full: 'Chrome',
    short: 'CH 37',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  safari7: {
    full: 'Safari',
    short: 'SF 7',
    obsolete: false
  },
  webkit: {
    full: 'WebKit r168571',
    short: 'WK',
    obsolete: false // always up-to-date
  },
  opera15: {
    full: 'Opera 15.0',
    short: 'OP 15',
    obsolete: false // current version
  },
  konq49: {
    full: 'Konqueror 4.9',
    short: 'KQ 4.9'
  },
  rhino17: {
    full: 'Rhino 1.7',
    short: 'RH'
  },
  phantom: {
    full: 'PhantomJS 1.9.7 AppleWebKit/534.34',
    short: 'PH'
  },
  node: {
    full: 'Node 0.10',
    short: 'Node',
    obsolete: false // current version
  },
  nodeharmony: {
    full: 'Node 0.11.11 harmony',
    short: 'Node harmony',
    obsolete: false, // current version
    note_id: 'harmony-flag',
    note_html: 'Have to be enabled via --harmony flag'
  }
};

exports.tests = [
{
  name: 'Typed Objects',
  link: 'https://github.com/dslomov-chromium/typed-objects-es7',
  exec: function () {
    return typeof StructType !== 'undefined';
  },
  res: {
    tr: false,
    ejs: false,
    ie11: false,
    firefox30: false,
    firefox31: false,
    firefox32: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    chrome37: false,
    safari7: false,
    webkit: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
},
{
  name: 'Object.observe',
  exec: function () {
    return typeof Object.observe === 'function';
  },
  res: {
    tr: false,
    ejs: false,
    ie11: false,
    firefox31: false,
    firefox32: false,
    chrome30: false,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    chrome37: true,
    safari7: false,
    webkit: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true
  }
},
{
  name: 'Object.getOwnPropertyDescriptors',
  link: 'https://gist.github.com/WebReflection/9353781',
  exec: function () {
    return typeof Object.getOwnPropertyDescriptors === 'function';
  },
  res: {
    tr: false,
    ejs: false,
    ie11: false,
    firefox31: false,
    firefox32: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    chrome37: false,
    safari7: false,
    webkit: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false
  }
}
];
