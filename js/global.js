/** body元素 */
const body = document.getElementsByTagName('body')[0];

/** wrap元素 */
const wrap = document.getElementById('app')

/** wrap1元素 */
const wrap1 = document.getElementsByClassName('wrap1')[0]

/** wrap2元素 */
const wrap2 = document.getElementsByClassName('wrap2')[0]

/** box元素 */
const box = document.getElementsByClassName('box')[0]

/** tip元素 */
const tip = document.getElementsByClassName('tip')[0]

/** 搜索引擎 */
let engine = 'baidu';

/** 选择状态，当按上下键进行选择搜索建议时 */
let selectStatus = false

/** 引擎配置网页搜索路径 */
const path = {
	'baidu': 'https://www.baidu.com/s?wd=',
	'bing': 'https://www.bing.com/search?q=',
	'bingcn': 'https://cn.bing.com/search?q=',
	'google': 'https://www.google.com/search?q=',
	'fsou': 'https://fsoufsou.com/search?q=',
}

/** 自定义命令 */
const command = {
	'BgSub': "https://bgsub.cn/webapp/",
	'DB-EnginesRanking': "https://db-engines.com/en/ranking",
	'Fighting Design-vue3': "https://fighting.tianyuhao.cn/components/button.html",
	'Font Awesome': "https://fontawesome.com/search?o=r&m=free",
	'VexipUI_vue3_typescript': "https://www.vexipui.com/",
	'ahhhhfs': "https://www.abskoop.com",
	'apipost': "https://console.apipost.cn/",
	'axios': "https://www.axios-http.cn/docs/intro",
	'baidu': "https://www.baidu.com/",
	'bili': "https://t.bilibili.com/",
	'bilibili': "https://www.bilibili.com/",
	'bing': "https://cn.bing.com/",
	'cai': "https://www.runoob.com/",
	'csdn': "https://www.csdn.net/",
	'cupfox': "https://cupfox.app",
	'date-fns': "https://date-fns.org",
	'deepl': "https://www.deepl.com/translator",
	'diduan': "https://ddys.tv",
	'douyin': "https://www.douyin.com/",
	'electron': "https://www.electronjs.org/zh/docs/latest/tutorial/process-model",
	'elementplus': "https://element-plus.gitee.io/",
	'elementui': "https://element.eleme.cn/",
	'es-checker': "http://ruanyf.github.io/es-checker/index.cn.html",
	'f-TNT': "https://github.com/tnfe/TNT-Weekly",
	'f-focus': "https://frontendfoc.us/issues",
	'f-javascript-weekly': "https://javascriptweekly.com/issues",
	'f-juejin': "https://juejin.cn/frontend",
	'f-nodejs-weekly': "https://nodeweekly.com/issues",
	'f-前端精读': "https://github.com/ascoders/weekly",
	'fanyi': "https://translate.google.cn/",
	'fitacg': "https://fitacg.com",
	'flickr': "https://www.flickr.com/",
	'fsou': "https://fsoufsou.com/",
	'genshin': "https://ys.mihoyo.com/main/",
	'genshin-map': "https://webstatic.mihoyo.com/ys/app/interactive-map/index.html",
	'git': "https://git-scm.com",
	'gitee': "https://gitee.com",
	'github': "https://github.com/",
	'google': "https://www.google.com/",
	'googleimg': "https://www.google.com.tw/imghp",
	'hackernews': "https://news.ycombinator.com",
	'hifini-music': "https://www.hifini.com/",
	'houdunren': "https://doc.houdunren.com",
	'iconfinder': "https://www.iconfinder.com/",
	'icons.download': "https://icons.download/",
	'ip': "https://www.ip138.com/",
	'ipaddress': "https://www.ipaddress.com/",
	'juejin': "https://juejin.cn",
	'kaifa': "https://kaifa.baidu.com",
	'konachan': "https://konachan.net/post",
	'lodash': "https://lodash.com",
	'markdown': "https://markdown.com.cn/",
	'mdn': "https://developer.mozilla.org/",
	'miyoushe': "https://bbs.mihoyo.com/ys/",
	'nga': "https://bbs.nga.cn/",
	'nodejs': "https://nodejs.org/en/",
	'pinia': "https://pinia.vuejs.org",
	'pixiv': "https://www.pixiv.net/",
	'potplayer': "https://daumpotplayer.com/",
	'proxy-web-storage': "https://github.com/KID-joker/proxy-web-storage",
	'qidian': "https://www.qidian.com/",
	'qqmusic': "https://y.qq.com/",
	'ranyf': "https://github.com/ruanyf/weekly",
	'ruoyi': "http://www.ruoyi.vip",
	'twitter': "https://twitter.com/",
	'uniapp': "https://uniapp.dcloud.net.cn",
	'unsplash': "https://unsplash.com",
	'uviewUI': "https://www.uviewui.com/components/intro.html",
	'v8': "https://v8.dev/",
	'video-HDmoli': "https://www.hdmoli.com/",
	'vitepress': "https://vitepress.vuejs.org",
	'vmware教程': "https://zhuanlan.zhihu.com/p/272541376",
	'vue': "https://vuejs.org/",
	'vue-color-avatar': "https://vue-color-avatar.vercel.app/",
	'vuecn': "https://cn.vuejs.org",
	'vuerouter': "https://router.vuejs.org/zh/",
	'vueuse': "https://vueuse.org",
	'wallhaven': "https://wallhaven.cc/",
	'wallhere': "https://wallhere.com/",
	'webstore': "https://chrome.google.com/webstore/category/extensions",
	'wechat': "https://mp.weixin.qq.com",
	'weibo': "https://weibo.com/login.php/",
	'wexin-developers': "https://developers.weixin.qq.com/doc/",
	'wyy': "https://music.163.com/",
	'yande': "https://yande.re/post",
	'yandex': "https://yandex.com/images/",
	'youdao': "https://fanyi.youdao.com/",
	'youtube': "https://www.youtube.com/",
	'zhengze': "https://www.runoob.com/jsref/jsref-obj-regexp.html",
	'zhihu': "https://www.zhihu.com/",
	'云效': "https://devops.aliyun.com/",
	'域名备案查询': "https://beian.miit.gov.cn/#/Integrated/index",
	'星辰': "https://wudixingxing.com/user",
}

/** 指令的所有键 */
const commandKeys = Object.keys(command);
const commandKeys0 = Object.keys(command).map(v => v.toLocaleLowerCase());

/**
 * 显示提示信息
 * 参数就是提示的信息
 */
function showTip(param) {
	box.value = param ? param : '啥也没有哦';
	const timeout = setTimeout(() => {
		box.value = ''
		clearTimeout(timeout)
	}, 1000);
}
