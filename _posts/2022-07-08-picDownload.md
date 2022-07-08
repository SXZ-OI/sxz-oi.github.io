---
layout:     post
title:      "picDownload"
subtitle:   " \"...开源脚本（这次一定）...\""
date:       2022-07-08
author:     "LitLuo,LoliconMe"
link-header: https://s2.loli.net/2022/06/06/xa9gA1Uj4ndK2Wk.png
catalog: true
mathjax: true
tags:
    - 中育科教
    - 云笔记
    - 技术
    - 实践
    - JS
    - node.js
---

# 前言

虽然不是漏洞，但是也是漏洞，希望中育修复权限问题 by LoliconMe

这次是为了完成在中育云笔记上下载图片而开发出的小工具

由于众人不会python，所以采用了nodejs后端+bootstrap前端搭建的小型服务器

地址：<https://github.com/SXZ-OI/picDownload>

下载：[link](http://friday-note.oss-cn-hangzhou.aliyuncs.com/cloudnote/notes/sxz/21967/picDownload.rar)

# 使用

github上由于不会用git，所以没有 `node_modules`

需要自行安装所需库

下载的压缩包里有node的安装包

版本为 $V16.16.0$

各种系统都有

完成配置后双击 `start.bat` 即可运行

默认端口为 $3939$ ，可在bat中调整

通过 <http://localhost:3939/> 访问

输入账号密码完成登录后在 `Download` 界面下载

单机即可，不要着急，服务机压缩要时间

# 说明

本次项目全程由 LitLuo 与 LoLiconMe 完成
