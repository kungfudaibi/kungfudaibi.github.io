---
title: Linux 之旅
prev: /guide
next: /HPC
---
> Fu** you Nvidia!          
--Linus
# Linux之旅
:::important
请阅读[linux101](https://101.ustclug.org/),[命令行的艺术](https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md),[The missing class](https://missing-semester-cn.github.io/)
:::
## 为什么要使用Linux
* 拥抱开源

开源文化是计算机能够飞速发展的基石,开发者的成长也离不开前人无私分享的经验，你会发现本文提到的很多文档都是开源的，融入开源文化浓厚的社区会让你成长得更快。
:::info
* 开源

开源，简单来说就是我把代码公开，任何人都可以获取修改等等，但是必须要遵守我的开源协议。其本质是认为软件就应该像人类的知识一样共享，在前人基础上能做出更好的成果。开源的好处有很多，比如说你可以看到别人的代码，学习别人的思路，也可以让别人看到你的代码，让别人帮你找bug，提出建议等等，但是开源也有一些问题，比如说你的代码可能会被人拿去直接用并不遵守你的开源协议，现在一些打着“开源”旗号的公司也并不那么开源。
:::

* 学到更多

windows非常稳定，所以你可能不会遇到显卡掉了，声音没了，亮度调节喜欢把自己调到最暗等等一系列古怪的问题，为了修好这些问题你可能得耗费一个上午甚至好几天，不过相较于你在解决这些问题过程中的收获来说，这都是值得的。你会在不断地受挫中变得更加坚韧，也会不断受到社区的帮助，许多发行版的维护都是由社区进行的，比如说archlinux，除了货币，还有东西能把不同人种、国籍、基本毫无交集的人聚集起来做成一件了不起的事情，那就是兴趣。
:::info
笔者认识的大佬都喜欢把linux当作自己的日常开发工具，经常使用linux的人也会对一些提高开发效率的工具相当熟悉，比如说vim,ssh等；他们也喜欢个性化配置自己的shell,比如说使用zsh的插件或者使用oh-my-zsh，oh-my-bash，在～/.zshrc里设置自己常用命令的别名，你的默认shell一般是bash,你也可以自己试着配置
:::
:::info
现代大多数服务器都使用linux做操作系统，熟悉linux意味着你能很快适应运维的工作,笔者有一次意外发现有疑似挖矿脚本的程序隐藏进程并占用显卡，几个大佬能在短时间内通过查找定时任务、分析用户组找到病毒的确切位置并推测病毒运行的大致流程，找出了服务器被入侵的确切时间和爆破服务器的肉机ip,体现出几乎与专业运维人员相当的素养
:::
* cool

不是，在命令行里敲命令指挥电脑也太酷了吧，你甚至可以把鼠标扔了，单纯用键盘敲命令实现一切。

## 一份仅供参考的个人使用Linux历程

### 从WSL开始

如果你之前从未接触过linux，那么Windows Subsystem for Linux(WSL)是一个不错的选择，你可以在[这里](https://learn.microsoft.com/zh-cn/windows/wsl/install)查看微软官方的教程，WSL的使用也非常简单，你可以直接在微软商店下载你想用的发行版，调出终端后在+中新建你下载好的发行版终端就可以直接使用了
:::tip
你新建的终端没有图形界面，我们也不建议你使用图形界面，一切操作在终端就可以完成了，你可以先在wsl里练习一些基本命令,参考[linux101](https://101.ustclug.org/);如果你希望在wsl做开发，可以在vscode中下载wsl插件，在远程连接窗口中连接目标；对发行版的选择，笔者推荐用ubuntu入门
:::
:::warning
如果你在wsl遇到和魔法相关的网络问题可以使用Tun魔法
:::
### 装个ubuntu实体机

:::note
我们推荐使用Ventoy制作启动盘，其他部分网上教程很多，STFW
:::

### 装ArchLinux
:::danger
不管运行什么命令，请三思而后行
:::
* [简明archwiki](https://arch.icekylin.online/)

* [archwiki](https://wiki.archlinuxcn.org/wiki/)

* [arch studio](https://archlinuxstudio.github.io/ArchLinuxTutorial/#/)


:::important
是否使用linux只是一个选择问题，在linux里能做的事情在windows里也能做，如果你不愿意折腾系统而更愿意把时间花在别的地方也是完全没问题的
:::


<CommentService/>