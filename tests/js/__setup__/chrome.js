require('jest-webextension-mock');
require('web-ext-plugins/mock');
const Adapter = require('enzyme-adapter-react-16');
const enzyme = require('enzyme');
enzyme.configure({ adapter: new Adapter() })
