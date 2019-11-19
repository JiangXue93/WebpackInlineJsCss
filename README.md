# 说明
经常有需要把css，js作为inline完全塞到html中的需求出现。之前用的fis3来构建工程，最近学习webpack，所以根据学到的再把平时的需求采用webpack搭建了一个基础的框架。

# 包含功能
1. css js资源inline引入html(done) 
2. es6  babel(done) 
3. less autoprefix(done)
4. 本地开发server(done)
5. eslint(done)

# 使用
1. 安装```npm install```
2. 本地调试```npm start```
3. 打包```npm run build```
4. 发布 将index.html文件包含所有的js和css可以单独打开或放服务器上。

# dist目录说明
```
dist-.
     |- app.bundle.js      index.js的打包文件
     |- index.html         动态生成的index.html文件
     |- runtime.bundle.js  webpack的框架环境
     '- venders.bundle.js  三方依赖
```