/**
 * 环境配置文件
 * 一般在企业级项目里面有三个环境
 * 开发环境
 * 测试环境
 * 线上环境
 */
// 当前的环境
const env = import.meta.env.MODE || 'prod'
 
const EnvConfig = {
  // 开发环境
  development: {
    baseApi: '/api',
    mockApi: 'https://www.fastmock.site/mock/7e44d48a8d9f3ca02745d4e018e57e5c/api',
  },
  // 测试环境
  test: {
    baseApi: '//test.future.com/api',
    mockApi: 'https://www.fastmock.site/mock/7e44d48a8d9f3ca02745d4e018e57e5c',
  },
  // 生产环境
  pro: {
    baseApi: '//future.com/api',
    mockApi: 'https://www.fastmock.site/mock/7e44d48a8d9f3ca02745d4e018e57e5c',
  },
}
 
export default {
  env,
  // mock的总开关,
  mock: false,
  ...EnvConfig[env]
}