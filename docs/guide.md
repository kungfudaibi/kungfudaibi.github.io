---
title: 自学指南
prev: /start
next: /linux
---
# 自学指南

## 基本概念
:::important
接下来我会用几句话解释一些基本概念，请你用**开始**一节中提到的方法搞懂你不知道的名词
:::

* 你正在使用的**操作系统** 大概率是windows，它有着标志性的四窗格logo，你的一切行为都是在这个操作系统上进行的，另一个常见的操作系统常见的操作系统是[linux](/linux.md)

![windows logo](image/guide/windows.png =200x200)


* 如果你正在学习一门**编程语言**，那么你需要搭建好其对应的**开发环境**，一般是安装**IDE**，如果是**解释型语言**，那么你需要安装**解释器**，配置好对应的**环境变量**

* **编程语言**没有层级关系，你可以挑选一门自己感兴趣的语言学习，但是最好先了解不同语言的特性，比如C++的性能更好，适用于编写高性能的程序，python的语法更简单，便于学习

* 你可以在任何地方编写**源代码**，包括记事本，**源代码**是你写的程序的原始形式，你需要通过**编译器**或**解释器**将其转换为**可执行文件**，然后运行；如果在**IDE**中，你可以直接运行，因为IDE帮你做好了这些事情

* 如果你编写了一个打印hellworld程序并运行，那么在你的桌面上会弹出一个黑色的窗口并显示‘hello world’，这个黑色的窗口就是**命令行窗口**，粗略地说，这个黑窗口由两部分组成，一部分是**shell**，一部分是**terminal**

:::note
这几句话只是想让你明白写代码到底是怎么个事，如果你第一次接触感觉不好理解也没关系，你以后有的是时间和它们打交道，同时你也要养成遇到新概念查阅资料的习惯，这是程序员的基本功
:::

## 搭建好开发环境

工欲善其事必先利其器，搭建好开发环境是你学习编程的第一步，遗憾的是学校的教材根本不提，某些老师也不说，可能会对你的学习造成很大困惑，当然你需要自行搜索并搭建，这里给你一些参考（默认在windows系统下）：
### vscode 
:::tip
你可以在vscode中编写任何代码，只需要下载对应的插件，关于vscode的详细使用或许你可以上b站看看，或者在[这里](https://code.visualstudio.com/docs)查看官方文档,有了vscode,你可以不下载其他的IDE.
:::note
使用vscode运行编译型语言需要安装对应的编译器，比如说C/C++需要安装mingw,java需要安装jdk，相比较来说不如其他的IDE方便，我个人使用的配置是vscode+wsl,远程连接到wsl的linux子系统编译运行代码，你可以参考[linux之旅](/linux.md)来更多地了解linux
:::
:::warning
不要把你的用户名设置成中文，具体来说就是C盘下的用户目录不要是中文，不然运行会出现奇怪问题；不要把文件名设置成中文，原因同上
:::tip
如果你的用户名设置成了中文，那你最好要么重装系统，要么用管理员账户新建英文用户并链接替到中文用户，具体操作自行搜索
:::
### IDE
* C,C++:
    * [Visual Studio](https://visualstudio.microsoft.com/zh-hans/)
    * [CLion](https://www.jetbrains.com/clion/)
* python:
    * [PyCharm](https://www.jetbrains.com/pycharm/)
* java:
    * [IntelliJ IDEA](https://www.jetbrains.com/idea/)
* web:
    * [WebStorm](https://www.jetbrains.com/webstorm/)
:::tip
还记得么？你可以使用JetBrains学生包免费使用这些IDE
:::
## 自学资源


* [现代c++教程](https://learn-cpp.guyutongxue.site/)

* [菜鸟教程](https://www.runoob.com/)

* [csdiy](https://csdiy.wiki/)
:::tip
建议详细阅读这份由北大学生维护的wiki
:::
:::warning
csdiy已经涵盖了大部分计算机方向的优质课程，可是大多优质课程都是国外的，所以你需要魔法才能访问这些课程
:::tip
如果你已经解决了魔法问题而被英文困扰的话，可以使用[DeepL](https://www.deepl.com/translator)翻译，还记得在一开始提到的浏览器插件么？它也有插件版本。
:::

* [一生一芯](https://ysyx.oscc.cc/docs/)
:::tip
这个项目教你从零开始造一个cpu，如果你对计算机的底层不感兴趣，可以只参考预学习部分，里面汇集了一些相当好的资源，尤其是学习c语言的
:::

## 一些建议
* talk is cheap,show me the code

* 你可以在github上找到很多优质的项目，你可以学习他们的代码，学习他们的思路，甚至可以参与到他们的项目中,你可以在github的explore中找到最近全球的程序员都在关注哪些项目

* 安排好你的时间，投入足够的注意力，你能得到超乎你想象的收获



