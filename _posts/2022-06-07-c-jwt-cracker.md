---
layout:     post
title:      "快速安装 c-jwt-cracker"
subtitle:   " \"暴力过百万\""
date:       2022-06-07 10:47
author:     "LitLuo"
link-header: https://s2.loli.net/2022/06/06/xa9gA1Uj4ndK2Wk.png
catalog: true
tags:
    - LINUX
    - JWT
    - 暴力
    - 技术
    - C
    - 中育科教
---
# 前言 Before

请先安装好 **Linux** 环境，**Win10/11** 请参考 [上期博客]({{ page.previous.url }})
为什么要装这个请参考 [SXZ++Project](https://sxz-oi.github.io/2022/06/06/%E6%B5%85%E6%9E%90%E4%B8%AD%E8%82%B2%E7%9A%84%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81/)

# Step1 下载

~~下载还要我多说吗？~~

地址：<https://github.com/brendan-rius/c-jwt-cracker>

如果不能直接在网页上 **Downlode Zip** ~~请使用VPN~~

可以将下载链接复制进 **IDM/NDM** 进行下载

下完后解压就完事了

# Step2 编译

如果没有 **gcc** 编译环境，请先安装 **gcc**：
```shell
sudo apt install gcc
```

如果没有 **make** 请安装 **make**：
```shell
sudo apt install make
```

用 **Linux** 定位进文件夹

**Win** 下定位：
```shell
cd /mnt/c/...
```

使用 **make** 命令进行编译

![image.png](https://s2.loli.net/2022/06/07/4Pg9E1uXC67k3jp.png)

~~然后，你就会发现报错了~~

![image.png](https://s2.loli.net/2022/06/07/MBRAmN4FLxtHSVg.png)

使用如下命令安装该头文件：
```shell
sudo apt-get install libssl-dev
```

再次运行 **make**，编译成功

![image.png](https://s2.loli.net/2022/06/07/Y27uKxrXgIiQb8M.png)

# Step3 使用

使用如下命令进行运行：

```shell
文件位置/jwtcrack token
eg:
litluo@DESKTOP-1T3JUS8:/mnt/f/sxz/c-jwt-cracker-master$ /mnt/f/sxz/c-jwt-cracker-master/jwtcrack  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaGludCI6IlRoZSBTaWduYXR1cmUncyBNZDUgaXMgWmlwJ3MgUGFzc3dvcmQiLCJpYXQiOjE1MTYyMzkwMjJ9.wvVICsoUEmVkDxWAfBgDR9Xp32x88OB1h08UmTTenxA
eg res:
Secret is "Zac1"
```

破译出来的秘钥可以在这个网站校验：
<https://jwt.io/>

但一般情况下运行这个命令后会出现：

![image.png](https://s2.loli.net/2022/06/07/L1ZkWQOsrhgtmFB.png)

然后一不小心就要运行个几天几夜
当然也可以 <kbd>Ctrl+C</kbd> 终止进程

# In All

祝大家玩的开心！
