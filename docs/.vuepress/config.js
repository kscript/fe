module.exports = {
    "title": "",
    "description": "",
    "base": "/fe/",
    "dest": './docs/.vuepress/dist',
    "head": [
      [
        "link",
        {
          "rel": "icon",
          "href": "/favicon.ico"
        }
      ],
      [
        "meta",
        {
          "name": "viewport",
          "content": "width=device-width,initial-scale=1,user-scalable=no"
        }
      ],
      [
        "script",
        {
          "src": "/js/music.js"
        }
      ]
    ],
    "theme": "reco",
    "themeConfig": {
      "nav": [
        {
          "text": "首页",
          "link": "/",
          "icon": "reco-home"
        },
        {
          "text": "时间线",
          "link": "/timeline/",
          "icon": "reco-date"
        },
        {
          "text": "联系方式",
          "icon": "reco-message",
          "items": [
            {
              "text": "GitHub",
              "link": "https://github.com/kscript",
              "icon": "reco-github"
            }
          ]
        }
      ],
      "type": "blog",
      "blogConfig": {
        "category": {
          "location": 2,
          "text": "分类"
        },
        "tag": {
          "location": 3,
          "text": "标签"
        }
      },
      "friendLink": [
        {
          "title": "午后南杂",
          "desc": "Enjoy when you can, and endure when you must.",
          "email": "1156743527@qq.com",
          "link": "https://www.recoluan.com"
        },
        {
          "title": "vuepress-theme-reco",
          "desc": "A simple and beautiful vuepress Blog & Doc theme.",
          "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
          "link": "https://vuepress-theme-reco.recoluan.com"
        }
      ],
      "logo": "/logo.png",
      "search": true,
      "searchMaxSuggestions": 10,
      "sidebar": "auto",
      "lastUpdated": "Last Updated",
      "author": "",
      "authorAvatar": "/avatar.png",
      "record": "kscript",
      "startYear": "2017"
    },
    "markdown": {
      "lineNumbers": true
    }
  }