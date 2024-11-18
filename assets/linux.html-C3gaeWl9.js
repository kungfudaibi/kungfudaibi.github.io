import{_ as n,c as t,a as i,b as o,o as r,r as a}from"./app-BYqUhG-d.js";const s={},l=o(`<h1 id="journey-into-the-linux-operating-system" tabindex="-1"><a class="header-anchor" href="#journey-into-the-linux-operating-system"><span>Journey into the Linux Operating System</span></a></h1><p>We recommend the following resources:</p><ul><li><p><a href="https://training.linuxfoundation.org/training/introduction-to-linux/" target="_blank" rel="noopener noreferrer">Introduction to Linux (LFS101)</a></p></li><li><p><a href="https://github.com/jlevy/the-art-of-command-line/blob/master/README.md" target="_blank" rel="noopener noreferrer">The Art of Command Line</a></p></li><li><p><a href="https://missing.csail.mit.edu/" target="_blank" rel="noopener noreferrer">The Missing Semester of Your CS Education</a></p></li></ul><h2 id="why-use-linux" tabindex="-1"><a class="header-anchor" href="#why-use-linux"><span>Why use Linux</span></a></h2><h3 id="linux-is-open-source" tabindex="-1"><a class="header-anchor" href="#linux-is-open-source"><span>Linux is <strong>Open Source</strong></span></a></h3><p>Open source is the cornerstone of rapid technological advancement in the computer industry. Every developer&#39;s growth is intrinsically linked to the selfless contributions of those who came before them.</p><p>By engaging with the open source community, you&#39;ll discover that many resources mentioned in this article are freely available. Actively participating in this collaborative ecosystem will undoubtedly accelerate your learning journey and broaden your horizons as a developer.</p><p>Moreover, contributing to open source projects allows you to give back to the community, hone your skills, and potentially make a lasting impact on the software landscape. It&#39;s a symbiotic relationship that fosters innovation, knowledge sharing, and continuous improvement.</p><h4 id="what-is-open-source" tabindex="-1"><a class="header-anchor" href="#what-is-open-source"><span>What is Open Source</span></a></h4><p>In simple terms, Open Source is publishing your code so that others can access, modify, and distribute it, within the constraints of the open source license. The essence of Open Source is that software should be shared like knowledge, and on the basis of previous work, better results can be achieved.</p><h4 id="why-open-source" tabindex="-1"><a class="header-anchor" href="#why-open-source"><span>Why Open Source</span></a></h4><p>There are many benefits to Open Source, the most important ones are:</p><ul><li><p>You can see others&#39; code and learn from them, improving your skills.</p></li><li><p>Others can see your code and give you suggestions, helping you improve your code.</p></li></ul><p>However, the Open Source philosophy are faced with some challenges:</p><ul><li><p>Others may use your code without following the open source license.</p></li><li><p>There are some companies that claim to be open source but are not truly open source.</p></li></ul><h3 id="learning-from-failure" tabindex="-1"><a class="header-anchor" href="#learning-from-failure"><span>Learning from failure</span></a></h3><p>As you may have noticed, Linux isn&#39;t for everyone. When you are embarking on your journey into the Linux world, you may (will) encounter tons of problems, and often there isn&#39;t a diagnosis wizard to help you.</p><p>While Windows restricts the user&#39;s access to the system, making it more user-friendly and seemingly more stable, Linux grants you (the system admin) the supreme power over your system, with which you can do anything you want to your system, which also means you have to be responsible for everything on your system.</p><p>You may encounter various issues and difficulties including but not limited to:</p><ul><li>Getting display glitch after login (almost exclusively <a href="https://wiki.archlinux.org/title/NVIDIA/Troubleshooting" target="_blank" rel="noopener noreferrer">NVIDIA</a>)</li></ul><blockquote><p>So NVIDIA, F*ck you.<br> Linus Torvalds<br><a href="https://www.youtube.com/watch?v=Q4SWxWIOVBM" target="_blank" rel="noopener noreferrer">Aalto Center for Entrepreneurship, 2012</a></p></blockquote><ul><li><p>Don&#39;t know how to connect to <a href="https://wiki.archlinux.org/title/Network_configuration/Wireless" target="_blank" rel="noopener noreferrer">Wireless network</a></p></li><li><p>Kernel Panic <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Ubuntu_13.04_VirtualBox_Kernel_Panic.png" alt="Kernel Panic" loading="lazy"></p></li></ul><p>You will spend hours, maybe even days, tackling these issues, but when you finally fix them, you&#39;ll feel a sense of accomplishment and fulfillment. This experience is invaluable, as it greatly enhances your problem-solving skills, which is something Windows can&#39;t offer you.</p><p>For many distros, maintainance is done by the community, and you can always find help from the community. There are other distros that are made by companies, their communities are also active and helpful. While you are working on these issues, you will get help from the awesome Linux community (e.g. <a href="https://bbs.archlinux.org/" target="_blank" rel="noopener noreferrer">Arch Linux Forums</a>, <a href="https://askubuntu.com/" target="_blank" rel="noopener noreferrer">Ask Ubuntu</a>).</p><p>Interest, as a common bond, can bring together people from different races, nationalities, and backgrounds to accomplish something remarkable. Your interest is what drives you to learn and explore, and it is what will keep you going.</p><h3 id="linux-is-cool" tabindex="-1"><a class="header-anchor" href="#linux-is-cool"><span>Linux is cool</span></a></h3><p>Many people in SXU Open Source Association use Linux as their daily driver, and are very familiar with various cool tools. Because you are the owner of your system, you can customize it as you like, from the <a href="https://wiki.archlinux.org/title/Command-line_shell" target="_blank" rel="noopener noreferrer">shell</a> to the <a href="https://wiki.archlinux.org/title/Desktop_environment" target="_blank" rel="noopener noreferrer">desktop environment</a>.</p><p>Linux is widely used in the field of <a href="https://en.wikipedia.org/wiki/Cloud_computing" target="_blank" rel="noopener noreferrer">cloud computing</a>, familiarizing yourself with Linux will give you a good foundation for cloud computing.</p><p><em>Having all your work done in the terminal with only keyboard? I mean, who needs a mouse?</em></p><h2 id="how-to-use-linux" tabindex="-1"><a class="header-anchor" href="#how-to-use-linux"><span>How to use Linux</span></a></h2><h3 id="windows-subsystem-for-linux" tabindex="-1"><a class="header-anchor" href="#windows-subsystem-for-linux"><span>Windows Subsystem for Linux</span></a></h3><p>From <a href="https://learn.microsoft.com/en-us/windows/wsl/about" target="_blank" rel="noopener noreferrer">Microsoft Learn</a>:</p><p>Windows Subsystem for Linux (WSL) is a feature of Windows that allows you to run a Linux environment on your Windows machine, without the need for a separate virtual machine or dual booting. WSL is designed to provide a seamless and productive experience for developers who want to use both Windows and Linux at the same time.</p><p>You can use WSL to run most of the Linux commands on your Windows machine, with no worries about breaking your Windows system.</p><p>But as the name suggests, WSL is Windows <strong>Subsystem</strong> for Linux. There are limitations, the most important one is that WSL cannot run GUI applications.</p><p>Which means you won&#39;t have the <em>full</em> Linux experience on WSL.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><figure><img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Red_and_blue_pill.jpg" alt="Red and blue pill" tabindex="0" loading="lazy"><figcaption>Red and blue pill</figcaption></figure><blockquote><p><a href="https://www.imdb.com/title/tt0133093/characters/nm0000401" target="_blank" rel="noopener noreferrer">Morpheus</a> :</p><p>This is your last chance. After this, there is no turning back.</p><p>You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe.</p><p>You take the red pill - you stay in Wonderland and I show you how deep the rabbit hole goes.</p></blockquote><p>Linux is not meant for everyone.</p><p>Most tasks you want to do on Linux can be done on Windows. If you are OK with that, you can close this page now.</p><p>But if you are truly interested, the least we can do is to show you the entrance to the rabbit hole.</p></div><div class="hint-container caution"><p class="hint-container-title">Caution</p><p>Proceed with caution with whatever you are about to do.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">We trust you have received the usual lecture from the local System</span>
<span class="line">Administrator. It usually boils down to these three things:</span>
<span class="line"></span>
<span class="line">    #1) Respect the privacy of others.</span>
<span class="line">    #2) Think before you type.</span>
<span class="line">    #3) With great power comes great responsibility.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="distrowatch" tabindex="-1"><a class="header-anchor" href="#distrowatch"><span>DistroWatch</span></a></h3><p><a href="https://distrowatch.com/" target="_blank" rel="noopener noreferrer">DistroWatch</a> is a website that provides information about various Linux distributions. You can find information about the popularity, features, and requirements of each distribution.</p><h3 id="linux-mint" tabindex="-1"><a class="header-anchor" href="#linux-mint"><span>Linux Mint</span></a></h3><p><a href="https://linuxmint.com/" target="_blank" rel="noopener noreferrer">Linux Mint</a> is an operating system for desktop and laptop computers. It is designed to work &#39;out of the box&#39; and comes fully equipped with the apps most people need.</p><p>In other words, Linux Mint might be excellent for beginners.</p><p><a href="https://linuxmint-installation-guide.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Linux Mint Installation Guide</a></p><h3 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu"><span>Ubuntu</span></a></h3><p><a href="https://ubuntu.com/desktop" target="_blank" rel="noopener noreferrer">Ubuntu</a> : The number 1 open source operating system powers millions of PCs and laptops around the world.</p><p>Ubuntu is regarded as the most popular Linux distro with a large community and support.</p><p><a href="https://ubuntu.com/tutorials/install-ubuntu-desktop" target="_blank" rel="noopener noreferrer">Install Ubuntu desktop</a></p><h3 id="arch-linux" tabindex="-1"><a class="header-anchor" href="#arch-linux"><span>Arch Linux</span></a></h3><p><a href="https://archlinux.org/" target="_blank" rel="noopener noreferrer">Arch Linux</a> : A simple, lightweight distribution</p><p>Arch Linux is a minimalistic distribution that focuses on simplicity and flexibility. It&#39;s harder to use than distros mentioned above. If you are a beginner, you might want to try other distros first.</p><p>I use Arch BTW.</p><p><a href="https://wiki.archlinux.org/title/Installation_guide" target="_blank" rel="noopener noreferrer">Installation guide</a></p>`,53);function u(h,p){const e=a("CommentService");return r(),t("div",null,[l,i(e)])}const d=n(s,[["render",u],["__file","linux.html.vue"]]),m=JSON.parse('{"path":"/en/linux.html","title":"Journey into the Linux Operating System","lang":"en-US","frontmatter":{"title":"Journey into the Linux Operating System"},"headers":[{"level":2,"title":"Why use Linux","slug":"why-use-linux","link":"#why-use-linux","children":[{"level":3,"title":"Linux is Open Source","slug":"linux-is-open-source","link":"#linux-is-open-source","children":[]},{"level":3,"title":"Learning from failure","slug":"learning-from-failure","link":"#learning-from-failure","children":[]},{"level":3,"title":"Linux is cool","slug":"linux-is-cool","link":"#linux-is-cool","children":[]}]},{"level":2,"title":"How to use Linux","slug":"how-to-use-linux","link":"#how-to-use-linux","children":[{"level":3,"title":"Windows Subsystem for Linux","slug":"windows-subsystem-for-linux","link":"#windows-subsystem-for-linux","children":[]},{"level":3,"title":"DistroWatch","slug":"distrowatch","link":"#distrowatch","children":[]},{"level":3,"title":"Linux Mint","slug":"linux-mint","link":"#linux-mint","children":[]},{"level":3,"title":"Ubuntu","slug":"ubuntu","link":"#ubuntu","children":[]},{"level":3,"title":"Arch Linux","slug":"arch-linux","link":"#arch-linux","children":[]}]}],"git":{"updatedTime":1731897864000,"contributors":[{"name":"kungfudaibi","email":"1534779821@qq.com","commits":1}]},"filePathRelative":"en/linux.md","excerpt":"\\n<p>We recommend the following resources:</p>\\n<ul>\\n<li>\\n<p><a href=\\"https://training.linuxfoundation.org/training/introduction-to-linux/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Introduction to Linux (LFS101)</a></p>\\n</li>\\n<li>\\n<p><a href=\\"https://github.com/jlevy/the-art-of-command-line/blob/master/README.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">The Art of Command Line</a></p>\\n</li>\\n<li>\\n<p><a href=\\"https://missing.csail.mit.edu/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">The Missing Semester of Your CS Education</a></p>\\n</li>\\n</ul>"}');export{d as comp,m as data};