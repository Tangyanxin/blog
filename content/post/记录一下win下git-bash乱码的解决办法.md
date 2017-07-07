+++
categories = "GIT"
date = "2017-07-07T14:00:59+08:00"
draft = true
image = "https://ws1.sinaimg.cn/large/006B8wjnly1fhbanbxbnmj30pa0akt8l.jpg"
tags = ["乱码","教程","git"]
title = "记录一下win下git bash乱码的解决办法"

+++

# 前言

我的git bash客户端乱码大致有这么几种：
1. `git log`命令下的中文以十六进制显示
2. `git subtree`的`commit`信息乱码 `push`时显示
```bash
Warning: commit message did not conform to UTF-8. You may want to amend it after fixing the message, or set the config variable i18n.commitencoding to the encoding your project uses.
```
3. `git status`命令下中文乱码

# 解决

```bash
$ git config --global core.quotepath false          # 显示 status 编码
$ git config --global gui.encoding utf-8            # 图形界面编码
$ git config --global i18n.commit.encoding utf-8    # 提交信息编码
$ git config --global i18n.logoutputencoding utf-8  # 输出 log 编码
$ export LESSCHARSET=utf-8
```

[参考]('http://www.cnblogs.com/youxin/p/3227961.html')
