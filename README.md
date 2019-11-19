# 说明
该工程供qcms项目使用

# 需求-包含功能
1. css js资源引入(done) 
2. es6  babel(done) 
3. less + prefix(done)
4. 本地server(done)
5. eslint(done)

# 使用
1. 安装```npm install```
2. 本地调试```npm start```
3. 打包```npm run build```
4. 发布 将index.html文件直接粘贴到qcms即可。

# dist目录说明
dist-.
     |- app.bundle.js      index.js的打包文件
     |- index.html         动态生成的index.html文件
     |- runtime.bundle.js  webpack的框架环境
     '- venders.bundle.js  三方依赖
