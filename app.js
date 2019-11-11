// let count = 1;
// setInterval(function() { console.log("hello" + count); count++}, 1000);

var http = require("http");
//  node.js 載入模組

http.createServer(function(request, response) {
  console.log(request.url);
  if(request.url == '/'){
// 路由
    // 資料庫
    console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>index hello</h1>");
    response.end();
  }else if(request.url == '/search'){
    console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>search</h1>");
    response.end();
  }else if(request.url == '/profile'){
    console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>profile</h1><h2>記得登出<h2>");
    response.end();
  }else if(request.url == '/cart'){
    console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>cart</h1><h2>你沒錢了<h2>");
    response.end();
  }else{
    console.log("QQ！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>QQ</h1>");
    response.end();
  }
}).listen(process.env.PORT ||3000);
console.log("Server已開啟port: 3000.");

