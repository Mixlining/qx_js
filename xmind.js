/******************************
[rewrite_local]

https?:\/\/www\.xmind\.(cn|net|app)\/\_res\/devices url script-response-body https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/Xmind/Script/Xmind.js

[mitm]

hostname = www.xmind.cn, www.xmind.net, www.xmind.app
**********************************/
var _0x49754b=JSON['parse']($response['body']);_0x49754b['license']['status']='sub';_0x49754b['license']['expireTime']=0x1b8d90e4000;$done({'body':JSON['stringify'](_0x49754b)});