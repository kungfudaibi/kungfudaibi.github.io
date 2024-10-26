---
title: Journey into the Linux Operating System
---

# Journey into the Linux Operating System

We recommend the following resources:

- [Introduction to Linux (LFS101)](https://training.linuxfoundation.org/training/introduction-to-linux/)

- [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line/blob/master/README.md)

- [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/)

## Why use Linux

### Linux is **Open Source**

Open source is the cornerstone of rapid technological advancement in the computer industry. Every developer's growth is intrinsically linked to the selfless contributions of those who came before them.

By engaging with the open source community, you'll discover that many resources mentioned in this article are freely available. Actively participating in this collaborative ecosystem will undoubtedly accelerate your learning journey and broaden your horizons as a developer.

Moreover, contributing to open source projects allows you to give back to the community, hone your skills, and potentially make a lasting impact on the software landscape. It's a symbiotic relationship that fosters innovation, knowledge sharing, and continuous improvement.

#### What is Open Source

In simple terms, Open Source is publishing your code so that others can access, modify, and distribute it, within the constraints of the open source license. The essence of Open Source is that software should be shared like knowledge, and on the basis of previous work, better results can be achieved.

#### Why Open Source

There are many benefits to Open Source, the most important ones are:

- You can see others' code and learn from them, improving your skills.

- Others can see your code and give you suggestions, helping you improve your code.

However, the Open Source philosophy are faced with some challenges:

- Others may use your code without following the open source license.

- There are some companies that claim to be open source but are not truly open source.

### Learning from failure

As you may have noticed, Linux isn't for everyone. When you are embarking on your journey into the Linux world, you may (will) encounter tons of problems, and often there isn't a diagnosis wizard to help you.

While Windows restricts the user's access to the system, making it more user-friendly and seemingly more stable, Linux grants you (the system admin) the supreme power over your system, with which you can do anything you want to your system, which also means you have to be responsible for everything on your system. 

You may encounter various issues and difficulties including but not limited to:

- Getting display glitch after login (almost exclusively [NVIDIA](https://wiki.archlinux.org/title/NVIDIA/Troubleshooting))

> So NVIDIA, F*ck you.  
> Linus Torvalds  
> [Aalto Center for Entrepreneurship, 2012](https://www.youtube.com/watch?v=Q4SWxWIOVBM)

- Don't know how to connect to [Wireless network](https://wiki.archlinux.org/title/Network_configuration/Wireless)

- Kernel Panic ![Kernel Panic](https://upload.wikimedia.org/wikipedia/commons/c/c4/Ubuntu_13.04_VirtualBox_Kernel_Panic.png)

You will spend hours, maybe even days, tackling these issues, but when you finally fix them, you'll feel a sense of accomplishment and fulfillment. This experience is invaluable, as it greatly enhances your problem-solving skills, which is something Windows can't offer you.

For many distros, maintainance is done by the community, and you can always find help from the community. There are other distros that are made by companies, their communities are also active and helpful. While you are working on these issues, you will get help from the awesome Linux community (e.g. [Arch Linux Forums](https://bbs.archlinux.org/), [Ask Ubuntu](https://askubuntu.com/)).  

Interest, as a common bond, can bring together people from different races, nationalities, and backgrounds to accomplish something remarkable. Your interest is what drives you to learn and explore, and it is what will keep you going.

### Linux is cool

Many people in SXU Open Source Association use Linux as their daily driver, and are very familiar with various cool tools. Because you are the owner of your system, you can customize it as you like, from the [shell](https://wiki.archlinux.org/title/Command-line_shell) to the [desktop environment](https://wiki.archlinux.org/title/Desktop_environment).

Linux is widely used in the field of [cloud computing](https://en.wikipedia.org/wiki/Cloud_computing), familiarizing yourself with Linux will give you a good foundation for cloud computing.

*Having all your work done in the terminal with only keyboard? I mean, who needs a mouse?*

## How to use Linux

### Windows Subsystem for Linux

From [Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/about):

Windows Subsystem for Linux (WSL) is a feature of Windows that allows you to run a Linux environment on your Windows machine, without the need for a separate virtual machine or dual booting. WSL is designed to provide a seamless and productive experience for developers who want to use both Windows and Linux at the same time.

You can use WSL to run most of the Linux commands on your Windows machine, with no worries about breaking your Windows system.

But as the name suggests, WSL is Windows **Subsystem** for Linux. There are limitations, the most important one is that WSL cannot run GUI applications.

Which means you won't have the *full* Linux experience on WSL.

:::warning

![Red and blue pill](https://upload.wikimedia.org/wikipedia/commons/5/52/Red_and_blue_pill.jpg)

> [Morpheus](https://www.imdb.com/title/tt0133093/characters/nm0000401) : 
> 
> This is your last chance. After this, there is no turning back. 
> 
> You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe. 
>
> You take the red pill - you stay in Wonderland and I show you how deep the rabbit hole goes. 

Linux is not meant for everyone.

Most tasks you want to do on Linux can be done on Windows. If you are OK with that, you can close this page now.

But if you are truly interested, the least we can do is to show you the entrance to the rabbit hole.

:::

:::danger

Proceed with caution with whatever you are about to do.

```
We trust you have received the usual lecture from the local System
Administrator. It usually boils down to these three things:

    #1) Respect the privacy of others.
    #2) Think before you type.
    #3) With great power comes great responsibility.
```

:::

### DistroWatch

[DistroWatch](https://distrowatch.com/) is a website that provides information about various Linux distributions. You can find information about the popularity, features, and requirements of each distribution.

### Linux Mint

[Linux Mint](https://linuxmint.com/) is an operating system for desktop and laptop computers. It is designed to work 'out of the box' and comes fully equipped with the apps most people need.

In other words, Linux Mint might be excellent for beginners.

[Linux Mint Installation Guide](https://linuxmint-installation-guide.readthedocs.io/en/latest/)

### Ubuntu

[Ubuntu](https://ubuntu.com/desktop) : The number 1 open source operating system powers millions of PCs and laptops around the world.

Ubuntu is regarded as the most popular Linux distro with a large community and support.

[Install Ubuntu desktop](https://ubuntu.com/tutorials/install-ubuntu-desktop)

### Arch Linux

[Arch Linux](https://archlinux.org/) : A simple, lightweight distribution

Arch Linux is a minimalistic distribution that focuses on simplicity and flexibility. It's harder to use than distros mentioned above. If you are a beginner, you might want to try other distros first.

I use Arch BTW.

[Installation guide](https://wiki.archlinux.org/title/Installation_guide)

<CommentService/>
