import{_ as p,c as h,d as o,e,a as l,w as i,b as n,r as a,o as d}from"./app-vaRfgR2t.js";const c="/assets/wd-E0iuJOO-.jpeg",u="/assets/qq-DOgzSC6b.jpg",g={},m=n('<h2 id="百团大战招新活动" tabindex="-1"><a class="header-anchor" href="#百团大战招新活动"><span>百团大战招新活动</span></a></h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>本次活动设置难度不同的题目，面向不同基础的同学，难度低的题目哪怕没有之前没摸过电脑也可以轻松完成。</p><p>本次活动目的是想让各位明白，用开源软件不仅是计算机系学生掌握的神秘技能，任何人都可以用开源软件做一些很cool的事。</p><p>你可以在浏览器中输入sxuosa.top打开这个网站，这个页面在百团下，qq和微信 打不开。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>🤩的数量表示难度，🤩的数量越多表示难度越高</li><li>🤩数量为1的题目只需要在活动地点的电脑完成即可，奖励为鼠标垫，只需要完成任一题目即可领取，完成多个不可重复领取</li><li>每个大板块下的题目只取🤩最多的题目记分</li><li>排名奖励需加入社团才可领取</li><li>获得🤩相同的同学按照时间先后排序</li></ul></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本次活动希望能让接触电脑时间不长的同学产生更多兴趣，老登不参与评奖</p></div><h2 id="奖励列表" tabindex="-1"><a class="header-anchor" href="#奖励列表"><span>奖励列表</span></a></h2><table><thead><tr><th>排名</th><th>奖励</th></tr></thead><tbody><tr><td>第一名</td><td>狼蛛F87Pro机械键盘或者140元以下等值物品</td></tr><tr><td>第二名</td><td>罗技G102二代有线机械电竞鼠标或90元以下等值物品</td></tr><tr><td>第三名</td><td>记本清灰换硅脂电脑拆机清理灰尘工具螺丝刀套装或50元等值物品</td></tr><tr><td>第四名</td><td>billbill一个月大会员</td></tr><tr><td>第五名</td><td>知乎一个月会员</td></tr></tbody></table><h2 id="题目目录" tabindex="-1"><a class="header-anchor" href="#题目目录"><span>题目目录</span></a></h2><ul><li><a href="##%E6%88%91%E8%A6%81%E6%88%90%E4%B8%BALLM%E9%AB%98%E6%89%8B">我要成为LLM高手</a><ul><li><a href="###%E6%A8%A1%E5%9E%8B%E9%83%A8%E7%BD%B2">模型部署</a> 🤩</li><li><a href="###prompts%E5%A4%A7%E5%B8%88">prompts大师</a> 🤩🤩🤩</li></ul></li><li><a href="##%E8%B6%85%E7%AE%97%E5%B0%8F%E7%99%BD%E7%9A%84%E6%89%93%E6%80%AA%E5%8D%87%E7%BA%A7%E4%B9%8B%E8%B7%AF">超算小白的打怪升级之路</a><ul><li><a href="###%E9%9D%92%E6%98%A5%E7%8C%AA%E5%A4%B4%E5%B0%91%E5%B9%B4%E4%B8%8D%E4%BC%9A%E6%A2%A6%E5%88%B0%E7%9A%84%E5%82%B2%E5%A8%87%E9%BC%A0%E6%A0%87">青春猪头少年不会梦到的傲娇鼠标</a> 🤩</li><li><a href="###%E7%AE%80%E5%8D%95%E7%9A%84ssh">简单的ssh</a> 🤩🤩</li><li><a href="###%E7%AE%A1%E9%81%93%E7%AC%A6%E5%A6%99%E7%94%A8">管道符妙用</a> 🤩🤩🤩</li></ul></li><li><a href="##%E8%BF%BD%E5%BF%86%E4%BC%BC%E6%B0%B4%E5%B9%B4%E5%8D%8E">追忆似水年华</a><ul><li><a href="###%E4%BB%8Emarkdown%E5%BC%80%E5%A7%8B">从markdown开始</a> 🤩</li><li><a href="###%E6%8E%A8%E9%80%81%E5%88%B0github">推送到github</a> 🤩🤩</li><li><a href="###blog%E6%94%B6%E5%BD%95">blog收录</a> 🤩🤩🤩</li></ul></li></ul><h2 id="我要成为llm高手" tabindex="-1"><a class="header-anchor" href="#我要成为llm高手"><span>我要成为LLM高手</span></a></h2><p>🤔：</p><p>我经常使用文心一言，通义千问，chatgpt这些ai写论文，列大纲，找灵感，生产效率嘎嘎高，但是有时候它的回答很蠢，而且给我的感觉像是一个黑箱子，我想更好地使用ai，应该从哪里开始呢？</p><p>🤓：</p><p>大家常用的文心一言，通义千问，chatgpt...都属于大语言模型(Large Language Model)，或许它的原理很复杂，但是仅仅作为工具使用的话那是相当的easy，感谢伟大的开源社区。</p><h3 id="模型部署-🤩" tabindex="-1"><a class="header-anchor" href="#模型部署-🤩"><span>模型部署 🤩</span></a></h3><p>部署一个模型分三步：</p><ul><li>下载模型</li><li>用框架运行模型</li><li>找个前端</li></ul><p>啥？你一个也没听说过？当然，你可能是第一次接触这些，所以你只需要在我的电脑上操作就行了。。。</p>',17),b=n('<div class="hint-container info"><p class="hint-container-title">相关信息</p><p>🤓：</p><p>我要多嘴说两句，我使用的是<a href="https://openwebui.com/" target="_blank" rel="noopener noreferrer">openwebui</a>这个开源的前端框架(前端你可以简单理解为你看到的部分) + <a href="https://ollama.com/" target="_blank" rel="noopener noreferrer">ollama</a>（模型运行的框架),实际上使用openwebui就可以三个愿望一次满足了。。。</p><p>在过去，个人开发者很难直接运行大模型，资源和技术门槛很高，但是像ollama和vllm这类开源框架的出现让个人开发者不必过多关注底层复杂的计算资源或模型调优，一行代码不用改就能跑起来。</p></div><h3 id="prompts大师-🤩🤩🤩" tabindex="-1"><a class="header-anchor" href="#prompts大师-🤩🤩🤩"><span>prompts大师 🤩🤩🤩</span></a></h3><p>这个项目是一个调用阿里云模型API的开源项目，我通过提示词让第二个模型根据评语打分，它打分的范围是0-100，而第一个模型根据根据你的输入生成评语</p><p>你的任务是：</p><ol><li>让第二个模型输出200分</li><li>如果你通过修改评语部分，让第二个模型输出200分，你可以得到一串神秘字符串</li><li>如果你通过对第一个模型的输入，让第二个模型输出200分，你可以得到另一串神秘字符串</li><li>只有同时得到神秘字符串和神秘数字才能得到奖励</li><li>务必从生成的连接访问</li><li>因为太赶了，所以很多安全措施都没做，不要干坏事</li></ol>',5),E=n(`<h2 id="超算小白的打怪升级之路" tabindex="-1"><a class="header-anchor" href="#超算小白的打怪升级之路"><span>超算小白的打怪升级之路</span></a></h2><p>🤔：</p><p>有时候我打游戏电脑会卡顿，这时我会打开任务管理器，结束掉几个进程，给我的电脑腾出<strong>内存空间</strong>；有时候想下几个电影、游戏，磁盘空间不够用了，这时我会删一点东西，给我的电脑腾出<strong>储存空间</strong>;有的游戏明确要求了需要多少多少<strong>显存</strong>，这时我就只能买新电脑了。。。</p><p>🤓：</p><p>内存、磁盘、显存都是计算资源的一种，所谓超算就是在这些计算资源上让程序发挥更好的性能，以此更好地解决实际问题。当你部署模型的时候，你会经常发现显存不够了，内存不够了,下几个大点的模型储存也不够了，所以除了升级计算资源，你还需要点别的技能来解决这些问题。</p><h3 id="青春猪头少年不会梦到的傲娇鼠标-🤩" tabindex="-1"><a class="header-anchor" href="#青春猪头少年不会梦到的傲娇鼠标-🤩"><span>青春猪头少年不会梦到的傲娇鼠标 🤩</span></a></h3><p>🤓：</p><p>我今天玩英雄联盟的时候五杀被队友抢了，我一怒之下砸了下鼠标，没想到鼠标闹情绪了，说再也不让我点了，我正好着急删一点存在本地的浏览器记录，但是忘了路径在哪，只记得叫liulanqisimi.txt，听说在终端里敲命令就能删，你能帮帮我么？等我哄好鼠标请你吃饭。</p><h3 id="简单的ssh-🤩🤩" tabindex="-1"><a class="header-anchor" href="#简单的ssh-🤩🤩"><span>简单的ssh 🤩🤩</span></a></h3><p>你可以在我的.ssh/config文件中找到一些ip地址，这些都是服务器的ip地址，你想办法连上其中任何一个就算成功。</p><h3 id="管道符妙用-🤩🤩🤩" tabindex="-1"><a class="header-anchor" href="#管道符妙用-🤩🤩🤩"><span>管道符妙用 🤩🤩🤩</span></a></h3><p>用一条命令显示我家目录下的所有文件的大小，从大到小排列</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>GUI(图形化操作界面)，就是大家在windows上能用鼠标点点点的那个界面，图形化的优点是直观，缺点是占用计算资源多，不利于大规模计算，鲜有超算平台搭载windows系统的。</p></div><h2 id="追忆似水年华" tabindex="-1"><a class="header-anchor" href="#追忆似水年华"><span>追忆似水年华</span></a></h2><p>有的程序员喜欢写博客，比如：https://tangcj.cn/</p><p>有的文学家喜欢写博客，比如:https://monthly.wybxc.cc/</p><p>有的医生喜欢写博客，比如：https://arthals.ink/</p><p>你可以在<a href="https://github.com/lcpu-club/blog-collect" target="_blank" rel="noopener noreferrer">这里</a>或者<a href="https://github.com/tuna/blogroll/" target="_blank" rel="noopener noreferrer">这里</a>找到更多的博客</p><p>其实我觉得还是挺浪漫的，诺大个互联网有一个域名属于你，你写下的智慧情感和心得会顺着光缆传向全世界，给人一种在广袤雪地留下脚印的感觉。</p><p>很多博客都搭建于在github提供的免费服务gh-pages上，这篇文档也不利外，我使用的是开源框架vuepress。</p><h3 id="从markdown开始-🤩" tabindex="-1"><a class="header-anchor" href="#从markdown开始-🤩"><span>从markdown开始 🤩</span></a></h3><p>如果你喜欢阅读这种形式化的语言，那么markdown绝对和你胃口，它是一种轻量级标记语言，比如你写word的时候一级标题在这里是#，二级标题是##...</p><p>你需要在docs/blog/新建一个.md文件,写完了之后在.vuepress下的config.js中在{text: &#39;zhujiechong&#39;, link: &#39;/blog/zhujiechong.md&#39;},后面添加</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">{text： ‘你的文件名字’ ，link：‘/blog/你的文件名字.md’}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>完事之后在终端运行</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">npm</span> run docs:dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>接下来你就能在本地看到了</p><h3 id="推送到github-🤩🤩" tabindex="-1"><a class="header-anchor" href="#推送到github-🤩🤩"><span>推送到github 🤩🤩</span></a></h3><p>把之前其他所有人对文件的更改存了，之后提交到github，或者是在github提交pr</p><h3 id="blog收录-🤩🤩🤩" tabindex="-1"><a class="header-anchor" href="#blog收录-🤩🤩🤩"><span>blog收录 🤩🤩🤩</span></a></h3><p>把你自己的博客网址添加到https://github.com/SXU-Opensouce-Association/sxublogs中</p><h2 id="收款码" tabindex="-1"><a class="header-anchor" href="#收款码"><span>收款码</span></a></h2><p>加入社团团费30元，付款码： <img src="`+c+'" alt="收款码" loading="lazy"><img src="'+u+'" alt="qq群" loading="lazy"></p>',33);function f(v,B){const t=a("RouteLink"),s=a("RandomLink"),r=a("ClientOnly");return d(),h("div",null,[m,o("p",null,[e("你只需要找到我，然后按照"),l(t,{to:"/LLM.html"},{default:i(()=>[e("这个文档")]),_:1}),e("的命令输入，接下来你就可以看到本地部署的模型了，试着跟它对对话？")]),b,l(r,null,{default:i(()=>[l(s)]),_:1}),E])}const x=p(g,[["render",f],["__file","zhaoxin.html.vue"]]),A=JSON.parse('{"path":"/zhaoxin.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"百团大战招新活动","slug":"百团大战招新活动","link":"#百团大战招新活动","children":[]},{"level":2,"title":"奖励列表","slug":"奖励列表","link":"#奖励列表","children":[]},{"level":2,"title":"题目目录","slug":"题目目录","link":"#题目目录","children":[]},{"level":2,"title":"我要成为LLM高手","slug":"我要成为llm高手","link":"#我要成为llm高手","children":[{"level":3,"title":"模型部署 🤩","slug":"模型部署-🤩","link":"#模型部署-🤩","children":[]},{"level":3,"title":"prompts大师 🤩🤩🤩","slug":"prompts大师-🤩🤩🤩","link":"#prompts大师-🤩🤩🤩","children":[]}]},{"level":2,"title":"超算小白的打怪升级之路","slug":"超算小白的打怪升级之路","link":"#超算小白的打怪升级之路","children":[{"level":3,"title":"青春猪头少年不会梦到的傲娇鼠标 🤩","slug":"青春猪头少年不会梦到的傲娇鼠标-🤩","link":"#青春猪头少年不会梦到的傲娇鼠标-🤩","children":[]},{"level":3,"title":"简单的ssh 🤩🤩","slug":"简单的ssh-🤩🤩","link":"#简单的ssh-🤩🤩","children":[]},{"level":3,"title":"管道符妙用 🤩🤩🤩","slug":"管道符妙用-🤩🤩🤩","link":"#管道符妙用-🤩🤩🤩","children":[]}]},{"level":2,"title":"追忆似水年华","slug":"追忆似水年华","link":"#追忆似水年华","children":[{"level":3,"title":"从markdown开始 🤩","slug":"从markdown开始-🤩","link":"#从markdown开始-🤩","children":[]},{"level":3,"title":"推送到github 🤩🤩","slug":"推送到github-🤩🤩","link":"#推送到github-🤩🤩","children":[]},{"level":3,"title":"blog收录 🤩🤩🤩","slug":"blog收录-🤩🤩🤩","link":"#blog收录-🤩🤩🤩","children":[]}]},{"level":2,"title":"收款码","slug":"收款码","link":"#收款码","children":[]}],"git":{"updatedTime":1729912989000,"contributors":[{"name":"Zonghao Zhang","email":"128779502+luoyueyuguang@users.noreply.github.com","commits":1}]},"filePathRelative":"zhaoxin.md","excerpt":"<h2>百团大战招新活动</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p>本次活动设置难度不同的题目，面向不同基础的同学，难度低的题目哪怕没有之前没摸过电脑也可以轻松完成。</p>\\n<p>本次活动目的是想让各位明白，用开源软件不仅是计算机系学生掌握的神秘技能，任何人都可以用开源软件做一些很cool的事。</p>\\n<p>你可以在浏览器中输入sxuosa.top打开这个网站，这个页面在百团下，qq和微信\\n打不开。</p>\\n</div>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<ul>\\n<li>🤩的数量表示难度，🤩的数量越多表示难度越高</li>\\n<li>🤩数量为1的题目只需要在活动地点的电脑完成即可，奖励为鼠标垫，只需要完成任一题目即可领取，完成多个不可重复领取</li>\\n<li>每个大板块下的题目只取🤩最多的题目记分</li>\\n<li>排名奖励需加入社团才可领取</li>\\n<li>获得🤩相同的同学按照时间先后排序</li>\\n</ul>\\n</div>"}');export{x as comp,A as data};
