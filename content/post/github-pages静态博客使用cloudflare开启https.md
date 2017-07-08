+++
categories = "教程"
date = "2017-07-08T21:16:39+08:00"
draft = true
image = ""
tags = ["github","https","坑"]
title = "github pages静态博客使用cloudflare开启https重定向次数过多的解决办法"

+++

# 前言

中午心血来潮突然想给博客改个域名，于是乎就有了现在这个`tangxin.me`

然而配置域名之前突然想到，何不直接上https呢？搜了一下资料，有一篇官方的[教程](https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/), 嗯，开干！

按照教程配置完成之后，出现问题了：访问首页一直是重定向次数过多。打开F12看了一下，一直是从`https://tangxin.me`和`https:///www.tangxin.me`之间跳转

再次检查cloudflare的规则之后，没毛病啊？而且我的站点也没有跳转的代码，是咋回事呢？而且最气的是根本搜不到相关的资料-。-

# 解决

后来一直改着改那，并没有什么变化！于是乎，我决定：删除之前的所有配置，从头走一遍教程！

结果我读到第二步的时候才注意到：

![](https://ws1.sinaimg.cn/large/006B8wjnly1fhcta5d5rlj30ip043t8j.jpg)

教程里的CNAME设置的是`www.example.com`，而我在配置时用的是`example.com`，会不会是这里出问题了呢？

于是CNAME改为`www.tangxin.me`问题成功解决

分析了一下：造成无限重定向的原因应该如下

>![](https://ws1.sinaimg.cn/large/006B8wjnly1fhctl48fbrj30r30m841x.jpg)

这一步，是让没有www前缀的裸域名跳转到带www前缀的域名

然而我们的带www的域名又通过CNAME映射在了裸域名上，所以会一直重定向

# 后记

搞定域名之后，又发现从github引用的文件部分无法使用，不是全部，而是部分，非常奇怪

后来改来改去也没有解决

最后死马当活马医，索性将github上的doc文件夹删除后又重新push一遍发现都ok了

人生处处是大坑啊~

