+++
categories = "教程"
date = "2017-09-24T22:41:57+08:00"
draft = true
image = ""
tags = ["坚果云","网易云音乐","同步"]
title = "利用坚果云Android-PC之间同步网易云音乐"

+++

# 前言

众所周知，网易云音乐在国内还是挺不错的一款产品（这里可不是打广告哈），然而，它自身却不支持多设备同步离线音乐的功能。今天我就教大家通过坚果云在Android和PC之间同步网易云音乐的离线音乐。

# 准备

### 账号
1. [坚果云](https://www.jianguoyun.com/)

### PC
1. [坚果云](https://www.jianguoyun.com/)客户端
2. 网易云音乐

### Android
1. FolderSync
2. 网易云音乐

# 过程

## PC
首先到坚果云的官方网站注册一个账号。可以根据自己的实际情况看是否要开通会员。点击右上角个人信息下拉菜单，选择“账户信息”。切换到“安全选项”选项卡，拉到最底部。输入名称并选择生成密码。名称没有特殊限制，具有辨识度即可。

![](https://ws1.sinaimg.cn/large/006B8wjnly1fjvxr5peqyj307009nglj.jpg)

![](https://ws1.sinaimg.cn/large/006B8wjnly1fjvxre3q85j311y0kggn7.jpg)

下载并安装客户端。安装方法同一般软件，选好安装目录下一步即可。

打开坚果云客户端的主界面，选择“创建同步文件夹”。

![](https://ws1.sinaimg.cn/large/006B8wjnly1fjvxj723nqj30ak0dsjrl.jpg)

找到网易云音乐的离线文件夹，并右击拖入下图所示的区域。

![](https://ws1.sinaimg.cn/large/006B8wjnly1fjvxjmsztfj30dm0cpq39.jpg)

至此，PC端配置完成

## Android
下载并安装FolderSync，侧滑选择账户选项卡

点击右下角的“+”，下拉至WebDAV选项，点击添加账户。

唯一名称可以自定，以下都使用“坚果云”作为唯一名称。服务器地址以及账户在[https://www.jianguoyun.com/d/account#safe](https://www.jianguoyun.com/d/account#safe)这个页面有，密码用刚才生成的密码，填入即可，其他默认，选择保存。

侧滑选择同步文件夹选项卡，点击“+”，名称随意，账户选择“坚果云”，同步类型选择“双向”。远程文件夹选择你刚才在PC端同步网易云的那个文件夹，本地文件夹选择网易云的音乐文件夹，具体在`/netease/cloudmusic/Music`。计划任务打开，按照自己的需求进行设置，一般选择一天或者12小时。在同步选项中选择同步删除旧文件。其他配置可以按照自己的需求进行设置。然后点击保存。

![](https://ws1.sinaimg.cn/large/006B8wjnly1fjw2mybfh6j30u01hc41k.jpg)

![](https://ws1.sinaimg.cn/large/006B8wjnly1fjw2n0bo7rj30u01hc797.jpg)

最后一步，如果你的手机自带安全管理软件，请把FolderSync添加至白名单。否则将无法自动进行同步。

至此，我们的所有配置已经完成。现在，你在手机和电脑上的文件夹在设置的时间内都会自动同步哦，以后再也不会为一个软件两份歌单而发愁了~~

