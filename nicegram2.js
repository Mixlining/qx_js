/******************************
[rewrite_local]

^https?:\/\/restore-access\.indream\.app\/restoreAccess\?id=\w+$ url script-echo-response https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/Nicegram/Script/Nicegram.js

[mitm]

hostname = restore-access.indream.app
**********************************/
const a = typeof $task != "undefined";
const b = typeof $httpClient != "undefined";
if (b) {
  console["log"](
    "\x0aR·E\x20Nicegram\x20Script\x20Log:\x0aNicegram\x20Premium已解锁😎"
  );
  $done({
    response: {
      status: 0xc8,
      body: "{\x22data\x22:\x20{\x22premiumAccess\x22:\x20true}}",
    },
  });
} else if (a) {
  console["log"](
    "\x0aR·E\x20Nicegram\x20Script\x20Log:\x0aNicegram\x20Premium已解锁😎"
  );
  $done({
    status: "HTTP/1.1\x20200\x20OK",
    headers: { "Content-Type": "application/json" },
    body: "{\x22data\x22:\x20{\x22premiumAccess\x22:\x20true}}",
  });
} else {
  console["log"](
    "\x0aR·E\x20Nicegram\x20Script\x20Log:\x0aNicegram\x20Premium已解锁😎"
  );
  $done({
    status: 0xc8,
    body: "{\x22data\x22:\x20{\x22premiumAccess\x22:\x20true}}",
  });
}
