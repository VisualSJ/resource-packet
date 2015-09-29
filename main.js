var Fs = require("fs");
var Path = require("path");
var ConfigTemplate = require("./template/config.js");

//定义一些配置的变量
const configName = "packet-config.json";

var SettingsDir;//工程目录下的settings目录
var configJson;//config文件的绝对路径

var config = null;

var checkPath = function(){
    if(!SettingsDir)
        SettingsDir = Editor. _type2profilepath.project;
    if(!configJson)
        configJson = Path.join(SettingsDir, configName);
};

var updateConfig = function(){
    if(!Fs.existsSync(configJson)){
        //配置文件不存在，创建配置
        console.log("create %s", configJson);
        if(!config)
            config = ConfigTemplate;
        Fs.writeFileSync(configJson, JSON.stringify(config));
        console.log(config);
    }else{
        console.log("read %s", configJson);
        config = Fs.readFileSync(configJson);
        config = JSON.parse(config);
    }
};

module.exports = {

    'resource-config:open': function(){
        checkPath();
        Editor.Panel.open('resource-config.panel');
    },

    'resource-config:load-config': function(){
        checkPath();
        updateConfig();
        Editor.sendToPanel('resource-config.panel', 'resource-config:set-config', config);
    },

    'resource-config:save-config': function(config){
        checkPath();
        if(configJson){
            console.log("save %s", configJson);
            //console.log(config);
            Fs.writeFileSync(configJson, JSON.stringify(config));
        }
    }
};