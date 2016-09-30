var http = require('http');

var PORT = 9001;
var ZHIHU_ADDRESS = 'news-at.zhihu.com/';

// 获取请求的headers，去掉host和connection
var getHeader = function (req) {
  var ret = {};
  for (var i in req.headers) {
    if (!/host|connection/i.test(i)) {
      ret[i] = req.headers[i];
    }
  }
  return ret;
};

var getPath = function (req) {
  var url = req.url;
  if (url.substr(0, 7).toLowerCase() === 'http://') {
    var i = url.indexOf('/', 7);
    if (i !== -1) {
      url = url.substr(i);
    }
  }
  return url;
};

function onRequest(req, res) {
  debugger;
  var opt = {
    host: ZHIHU_ADDRESS,
    path: req.url.slice(1),
    method: req.mothod,
    headers: getHeader(req)
  };

  console.log('#\t%s http://%s%s', req.method, opt.host, opt.path);
  var zhihuReqest = http.request(opt, function(zhihuResponse) {
    res.writeHead(zhihuResponse.statusCode, zhihuResponse.headers);
    zhihuResponse.pipe(res);
    zhihuResponse.on('end', function() {
      console.log('#zhihu request finished');
    })
  });

  if (/POST|PUT/i.test(req.method)) {
    req.pipe(zhihuReqest);
  } else {
    zhihuReqest.end();
  }

  zhihuReqest.on('error', function (err) {
    console.log('#ERROR: %s', err.stack);
    res.end(err.stack);
  });

}

var server = http.createServer(onRequest);
server.listen(PORT, function() {
  console.log('server listen on port', PORT);
});
