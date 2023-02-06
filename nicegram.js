/******************************
[rewrite_local]

https?:\/\/restore-access\.indream\.app\/restoreAccess\?id=\d{5,10} url echo-response text/json echo-response https://raw.githubusercontent.com/Mixlining/qx_js/main/nicegram.js

[mitm]

hostname = restore-access.indream.app
**********************************/
{
  "data": {
    "premiumAccess": true
  }
}
