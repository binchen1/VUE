// 配置代理

// 开发人员机器
var host = {
  // 本地服务
  default: "http://localhost:8080",
  // 开发环境
  dev: "http://192.168.2.4",
  // 邓云焱
  dengyy: "192.168.2.158"
}

var target = host.default;

proxy = {
    '/': {
      target: target,
      // pathRewrite: {'^/api' : ''},
      changeOrigin: true,
      secure: false,
    }
}

module.exports = proxy;