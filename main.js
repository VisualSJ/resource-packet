var Fs = require("fs");
var Path = require("path");
var ConfigTemplate = require("./template/config.js");

//����һЩ���õı���
const configName = "packet-config.json";
const groupName = "packet-group.json";

var SettingsDir;//����Ŀ¼�µ�settingsĿ¼
var configJson;//config�ļ��ľ���·��
var groupJson;//group�ļ��ľ���·��

var config = {};
//var data = Fs.readFileSync(Editor.url('./config.json'), {encoding:'utf8'});

var updateConfig = function(){
    if(Fs.existsSync(configJson)){
        //�ļ�����
        console.log("read %s", configJson);
    }else{
        //�����ļ������ڣ���������
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