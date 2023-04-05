# Vue 3 + Vite  通用后台管理系统

# 一、使用相关技术简介

1. 项目使用Vue3 + Vite 搭建
2. 使用Element-plus UI框架来布局
3. 为了方便，后端接口就不写了。数据是通过mock.js/fastmock.js来模拟，然后封装axios去请求。
4. 使用 ECharts 数据图形化

# 二、项目难点

* tab标签：实现根据用户点击的功能添加/删除标签
* 路由权限：不同账号登录，左侧菜单栏显示的功能不同
* 动态路由：解决了动态路由刷新页面空白问题

# 三、项目运行

1、通过 yarn install 或 npm install 命令来下载依赖

![img](https://github.com/hh920920/images/blob/main/img/image-20230405135320275.png)

2、通过yarn dev 或 npm run serve 来运行项目

![img](https://github.com/hh920920/images/blob/main/img/image-20230405135320275.png)

# 四、系统部分界面运行图

## 3.1、登录页面

* 【Ps】账号密码默认设置了两个，在src/api/mockData目录下permission.js文件里可看到 ，分别为：admin和user，根据两个账号的权限，登录后左侧菜单栏功能显示的不一样。

* 登录后会返回token及相关数据，通过vuex或localstorage保存数据

![img](https://github.com/hh920920/images/blob/main/img/image-20230405140115813.png)

  * Admin账号登录： 

![img](https://github.com/hh920920/images/blob/main/img/image-20230405140612208.png)

![img](https://github.com/hh920920/images/blob/main/img/image-20230405140820591.png)

## 3.2、用户管理界面

* 可以对用户进行添加、删除、修改等

![img](https://github.com/hh920920/images/blob/main/img/image-20230405141023195.png)

## 3.3、其他界面

* 退出功能：右上角点击或鼠标悬停头像时出现功能，退出则清除token及相关数据

![img](https://github.com/hh920920/images/blob/main/img/image-20230405141120575.png)

* 由于时间问题，其他界面暂未开发..
