---
title: AI
prev: /network
next: /about
---
# Artificial Intelligence
> 使机械具有人一样的智能

最简单的人工智能其实就是条件控制
```python
if ...:
    ...
elif ...:
    ...
elif ...:
    ...
...
```
比如说游戏里有个怪物碰到你就追你，碰到障碍就使坐标偏移之类的，但是这样的代码解决不了一些复杂的问题，比如说图片的分类、复杂的对话等等，机械学习包括后面的深度学习就是为了解决这些问题的。

## 相关资源
- [动手学深度学习](https://zh.d2l.ai/)
:::tip
这是一本可以运行的书，需要你在本地搭建好环境，自行搜索并下载anaconda或者miniconda,创建虚拟环境，如果你的jupyter更换内核有问题，可以参考[有魔法访问](https://medium.com/@sairampillai/how-to-add-your-conda-environment-to-your-jupyter-notebook-in-just-3-steps-6b0d44bf7ade),[无魔法](https://stackoverflow.com/questions/39604271/conda-environments-not-showing-up-in-jupyter-notebook)
:::
- [NLP for you](https://lena-voita.github.io/nlp_course.html)
:::warning
需要魔法访问
:::
- [吴恩达B站](https://www.bilibili.com/video/BV1FT4y1E74V/?vd_source=7aa5d5e2ccdd8646589b9266487f6683)
- csdiy相关课程
- [huggingface](https://huggingface.co/)

huggingface 是一个开源的模型库，里面有很多预训练的模型，你可以在线运行也可以下载到本地或者云算力平台
:::warning
需要魔法访问,如果你想下载huggingface的模型，可以从[huggingface-cli](https://hf-mirror.com/)下载
:::
- [魔塔社区](https://www.modelscope.cn/home)

- [模型竞技场](https://chat.lmsys.org/)
:::warning
需要魔法访问
:::
- 中文竞技场
## 跑一个大模型
:::tip
首先要搞清楚自己的电脑的配置，比如内存，显存等等，模型的主页会显示部署它的最小需求
:::
大家耳熟能详的chatgpt等等生成式AI都属于LLM(Large Language Model),得益于开源社区的努力，我们可以很方便的使用这些模型，下面提供几种本地部署的方法
- [ollama](https://ollama.com/)

- [LM studio](https://lmstudio.ai/)

- [vllm](https://docs.vllm.ai/en/latest/index.html)
:::tip
相比较而言，使用 LM studio 和 ollama 都比较简单，LM studio甚至有UI界面，vllm是一个加速推理的框架，使用相对复杂一些，不过截止至2024年8月，vllm仍然是模型推理的最佳实践之一
:::
:::info
* 我在部署模型时到底发生了什么？

简单来说，你从huggingface上下载好的是**预训练**好的模型，下载好的文件包含**模型权重**、**模型配置**、**词表**等等，你需要在特定的**框架**中加载这些文件，当你向模型输入一段话的时候，实际上，这段话被分词并转化成模型能识别的**token**，然后模型根据这些token输出下一个token，直到输出一个特殊的token，比如说`<eos>`，这样就完成了一次**推理**，最后根据词表将输出的token转化成人类能看懂的文本。你会发现这个过程就像是一个猜词游戏，由预训练的内容决定一个词出现的概率，哪个概率大就输出哪个，令人迷惑的是这种基于概率的预测在参数足够大的情况下令模型涌现出令人惊叹的能力，所以有人说LLM是"力大砖飞"
:::
:::info
* 关于llama的申请

如果你想下载meta的llama系列模型，需要向meta官方申请使用，在国籍部分不能填写中国，其他部分可以随意填写，比如我写的组织是MIT
:::warning
需要魔法
:::
## 云算力平台
个人电脑的配置有限，所以我们经常需要在云算力平台部署模型，下面推荐几个出名的云算力平台
* [启智AI](https://openi.pcl.ac.cn/)

* [飞桨](https://aistudio.baidu.com/index)

* [colab](https://colab.research.google.com/)
:::warning
colab 需要魔法和谷歌账户
:::
:::tip
以上提到的几个平台都可以白嫖运行时，当然你也可以使用其它你觉得好用的平台
:::

<CommentService/>