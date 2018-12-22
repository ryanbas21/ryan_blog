### How I've Learned to Love VIM (or Neovim)

## Disclaimer
First off - I am not an expert in vim speak. I am fairly noob. I learned out of interest in having a better work-flow but realistically, what I found was more.

I found a new language to grok out, I found new ways to break things, I found new ways to approach problems. I found a faster and more comfortable work-flow most importantly.

Let me start by saying, my biggest downside to vim - is that the keybindings aren't really extended outside of vim itself. I will make the occasionally mistake where I type into a text-box and then try to  `jk` out of it. I really enjoy the way in which I am able to move around.


## So How I started Learning?
 I learned as I said earlier out of interest for a faster or more effective work-flow. I was an `Atom` user for quite some time. I started off by installing the `vim-mode` plug-ins into the editor. I then realized that I was constantly reaching for the arrow keys when it didn't make sense to do that. I wanted to learn the `vim` way of doing it, I needed to learn the vim way of handling and approaching text.  So I disabled the arrow keys in atom. I think this was a big step for me, because although it was an emulated version of `vim` I was learning the key concepts of how to move, and navigate with `hjkl` and I wasn't diving into plug-ins immediately. Once I got comfortable enough with how to move around in the editor, I started playing around with my `.vimrc`.

  I went through vimtutor a few times, I messed up and used the arrow keys
  sometimes, I actually in `Atom` disabled the arrow keys. I struggled to get my
  vim work-flow to be faster than in `Atom`. It took a lot of trial and error. 

 I will describe messing with my `.vimrc` as my first big mistake in learning vim. I thought I needed a ton of plug-ins, I needed a cool `.vimrc`, and I needed all this stuff. Really, I didn't. I think this impeded my ability to learn `vim`. Your first instinct when you have a problem in `vim` shouldn't be, is there a plug-ins, it should be what is the  `vim` way of solving it. For example - you can search a word under the cursor in plain 'ol vim with `*` but you can also use a plug-ins, bind that to a key mapping and then hit that, but really you can just use *, even `<C-R><C-W>` will do the trick if you are in your ex command. Finally after months of slowing myself down I started learning vim more correctly. I then read people like Junneguns `.vimrc`, and got an idea of how he constructed it, and trimmed my `.vimrc` down.

 Today I really only use a handful of plug-ins, of which I think I can even
 further trim down. The important plug-ins for my every day life, is fzf. I need
 fzf as I use it within vim as well as in my terminal often. I commonly use it to
 fuzzy find files, words, and filter down buffer windows. Honestly, I am not
 even using 10% of it's power, and now that I have it working with `git`, it is
 even more powerful. I am pretty dumb, and I'll forget my branches all the time,
 so it's nice to have that fuzzy finder when I don't want to list out my branches
 to then type my checkout command again.

## Why I love vim
  I love vim because it's comfortable. I don't need to move around, I don't
  think about what I am doing, I just do it at the speed of thought (basically).
  Even right now, I am in `vim` and I am completely comfortable using it, I have
  spell checking built in, I have easy search and replace, and I am constantly
  improving my work-flow day in and day out by using it. It's an editor that has
  stood the test of time, and I am getting better at it every day.  I have used
  vim emulators, but it's not the same, I honestly feel like I am missing
  something when I use those, and most likely, because I am. 
