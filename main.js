var Fs = require("fs");
var Path = require("path");
var ConfigTemplate = require("./template/config.js");

//定义一些配置的变量
const configName = "packet-config.json";
const groupName = "packet-group.json";

var SettingsDir;//工程目录下的settings目录
var configJson;//config文件的绝对路径
var groupJson;//group文件的绝对路径

var config = {};
//var data = Fs.readFileSync(Editor.url('./config.json'), {encoding:'utf8'});

var updateConfig = function(){
    if(Fs.existsSync(configJson)){
        //文件存在
        console.log("read %s", configJson);
    }else{
        //配置文件不存在，创建配置
        console.log("create %s", configJson);
        Fs.writeFileSync(configJson, JSON.stringify(config));
    }
};

module.exports = {
    'resource-packet:open': function(){
        if(!SettingsDir)
            SettingsDir = Editor. _type2profilepath.project;
        if(!configJson)
            configJson = Path.join(SettingsDir, configName);
        if(!groupJson)
            groupJson = Path.join(SettingsDir, groupName);
        Editor.Panel.open('resource-packet.panel');
    },
    'resource-packet:set-config': function(){
        updateConfig();
        Editor.sendToPanel('resource-packet.panel', 'resource-packet:set-config', config);
    }
};