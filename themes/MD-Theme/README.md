# MD-Theme

**A Material Design Theme for Hugo**

# Features

- Responsive

# Installation

```bash
cd themes
git clone git@github.com:Tangyanxin/MD-Theme.git
```

update config.toml like this 
```toml
baseURL = "http://inkbottle.site/"
languageCode = "zh-cmn"
title = "inkbottle's site"
author = "inkbottle"
theme = "MD-Theme"
publishDir = "docs"
paginate = 10
copyright = "Copyright © 2017 inkbottle's Blog"

[params]
  description = "这个人很懒..."
  keywords = ["博客","个人网站"]

# CDN URL for Static Source 
  # MDUI is the css library for the theme
  mduistyle = "//cdn.bootcss.com/mdui/0.2.1/css/mdui.min.css"
  mduiscript = "//cdn.bootcss.com/mdui/0.2.1/js/mdui.min.js"
  #prism is the highlight plugin for the theme
  prismstyle = "//cdn.bootcss.com/prism/9000.0.1/themes/prism-okaidia.min.css"
  prismscript = ""
```
# Contributing


