# SXU helper

welcome to SXU helper

![1731895574709](image/thefirsts/1731895574709.png)

# 关于本项目

本项目是python 程序设计实验课大作业，使用以下工具和第三方库

* flet
* School_SDK（new-school-sdk)
* pdm + uv + git
* dashscope

# 项目搭建环境

- 使用git + Github（远程托管）管理代码库
- 由pdm + uv（pdm的实验性加速组件）进行包管理

# 实现功能

- 基础功能：查询当前学期课表、查询上学期成绩
- 特色功能：接入了第三方API的学生手册助手

# GUI

全新的跨平台UI框架：Flet（python上Flutter的实现）

一套代码，多个平台。

我们使用2种方式构建自定义UI组件

- 从现有组件继承，通过添加自定义函数和修改函数实现，实现新功能
- 构造build函数，通过build函数从自定义类中构造出一个组件

# 课表查询 + 成绩查询

## 爬取数据

初始实现：Selenium爬取

在尝试使用request库重写的同时，我们找到了正方教务系统的第三方API实现 `new-school-sdk`。

升级实现：引入new-school-sdk

- 基于request库的基础爬取
- 使用pytorch工具进行验证码自动识别

## 数据存储

我们对爬取的结果进行了解析。为课程、课程表等元素都构造了相应的对象，内部由List、Dict等结构存储数据。

# 学生手册助手 + 菜单界面

## 菜单界面

* 使用flet 组件，容器包裹侧边弹出式导航栏

```python
  # 创建菜单按钮，用于打开导航抽屉
        menu_button = ft.IconButton(
            icon=ft.icons.MENU,
            icon_color="white",  # 设置图标颜色
            on_click=lambda e: (setattr(drawer, "open", True), page.update())  # 打开导航抽屉
        )
  row_content = ft.Row(
            controls=[menu_button, github_icon],
            alignment=ft.MainAxisAlignment.SPACE_BETWEEN,  # 水平分布元素，间隔平均
            spacing=10,  # 控件间距
        )
  menu_container = ft.Container(
            content=row_content,
            bgcolor=ft.colors.ON_SECONDARY_CONTAINER,  # 设置背景颜色
            padding=20,
            alignment=ft.alignment.center_left,
            # width=page.width,  # 使容器宽度与页面一致
            border_radius=ft.border_radius.only(bottom_left=10, bottom_right=10),   # 设置圆角
            height=80,  # 设置容器高度
        )

        # 创建主页面视图，并设置drawer
        main_view = ft.View(
            "/",
            controls=[
                menu_container,
                ft.Container(
                    content=ft.Text("欢迎使用 SXU helper!已实现功能如下：", size=30, weight=ft.FontWeight.BOLD),
                    padding=20,
                    alignment=ft.alignment.center,
                    width=page.width,
                ),
                features_row,
            ],
            drawer=drawer  # 在主页面视图中添加导航抽屉
        )

```

## 学生手册助手

* 使用阿里云百炼平台，创建智能体应用，将学生手册电子版作为AI知识库，让AI的回答基于此

  ![1731895666829](image/thefirsts/1731895666829.png)
* 使用api调用

详情查看/src/gui/ai.py,本项目的api-key几日后注销

# 多端部署

支持任意系统

## 本地

```shell
git clone https://github.com/xu-zih/sxujw_helper.git
cd sxujw_helper
pdm install
pdm run /wrc/gui.py
```

## Web

[Flet App](http://8.141.119.119:367/)

## 其它（未测试）
