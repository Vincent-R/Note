var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

function eventName() {
    console.log('我是Event事件');
}

//addListener的监听事件
function addListener() {
    console.log('addlistener 触发');
}

//可以为事件绑定多个监听事件
function listenerOne() {
    console.log('listener one 触发')
}

event.on('eventName', listenerOne);

//为指定事件名绑定事件
event.on('eventName', function() {
    console.log('listener two 触发');
});

event.addListener('eventName', addListener);

setTimeout(function() {
    //触发事件,不会调用eventName事件
    //event.emit('eventName');
    //事件调用，但是不会触发监听器
    eventName();
}, 1000);