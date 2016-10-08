var http = require('http');

var PORT = 9001;
var ZHIHU_ADDRESS = 'news-at.zhihu.com';

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

function onRequest(req, res) {
  var opt = {
    host: ZHIHU_ADDRESS,
    path: req.url,
    method: req.method,
    headers: getHeader(req)
  };

  if (/zhimg\.com/.test(req.url)) {
    opt.host = req.url.split('/')[1];
    opt.path = req.url.replace(/\/.*\.zhimg\.com/, '');
    delete opt.headers;
  }

  console.log('#\t%s http://%s%s', req.method, opt.host, opt.path);
  var zhihuReqest = http.request(opt, function(zhihuResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
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
