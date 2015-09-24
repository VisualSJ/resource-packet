var Fs = require("fs");
var Path = require("path");

var ConfigTemplate = require("./template/config.js");

var SettingsDir = Editor. _type2profilepath.project;
var configJson = Path.join(SettingsDir, "config.json");
var groupJson = Path.join(SettingsDir, "group.json");
if(Fs.existsSync(SettingsDir)){
    console.log("true");
}

var data = Fs.readFileSync(Editor.url('./config.json'), {encoding:'utf8'});

module.exports = {
    'resource-packet:open': function(){
        Editor.Panel.open('resource-packet.panel');
    }
};