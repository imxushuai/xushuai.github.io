/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/使用hexo搭建个人博客/index.html","b7f1ce7b6be734ece0c847c2c0793cfd"],["/2018/11/27/Ngxin安装/index.html","96d1eb6b114aeb37887b6636e4a29abe"],["/2018/11/27/配置Nginx反向代理/index.html","c917963897e3fabe42ef76deb74cf00a"],["/2018/11/28/Spring-Boot自动配置原理/index.html","a91bd78f4ff0ecce9f9dc91c83a33907"],["/2018/12/02/Spring-Cloud-Eureka/index.html","685038926372e75f3d66a116df4f0630"],["/2018/12/02/Spring-Cloud简述/index.html","36f1619fde0eaaafa4b49ed9d71deccb"],["/2018/12/03/Spring-Cloud-Hystrix熔断器入门/index.html","19d1dede13374876fedea101101318cf"],["/2018/12/03/Spring-Cloud服务调用与负载均衡组件/index.html","b382e86b8b9b25aac3a3b17330d4aef6"],["/2018/12/05/Spring-Cloud-Zuul网关/index.html","3611ac629857b1735ae7cd719157e04f"],["/2018/12/13/Navicat-Premium-12破解/index.html","5793f18230b876bfd574707cc60d2f72"],["/2018/12/17/乐优商城笔记一：项目搭建/index.html","6cb13b2552d232dd12429c59cd44e557"],["/2018/12/22/FastDFS安装/index.html","75d98a4bae463e0d9f1f968d988d2b6b"],["/2018/12/22/FastDFS简介/index.html","b613900ba2d878eeed718ebd608bd54d"],["/2018/12/25/乐友商城笔记二：分类与品牌模块/index.html","e86a9ba3170529b70cf422817e037bfc"],["/2019/02/19/乐优商城笔记三：规格与商品模块/index.html","ff75a6dde537e4d6569b5d35c189323b"],["/2019/03/29/Elasticsearch的介绍和安装/index.html","4cab8ce0a3ae01793d468b920e93f99f"],["/2019/03/29/Elasticsearch的使用/index.html","8a35631415b6af6e340433dc89c08cd1"],["/2019/03/29/hexo添加天气插件/index.html","31587c0e311b48a8f23ea70e3379df94"],["/2019/03/29/乐优商城笔记五：搜索模块/index.html","0f8153a49d3444013c1bb845201fa8dc"],["/2019/03/29/乐优商城笔记四：前台页面搭建/index.html","ecaabfeb70359cb8eace7874435d5a31"],["/2019/03/29/使用SpringMVC开发Restful-API/index.html","bedb846dccd7ff5c4055eb9555d9c03d"],["/2019/03/31/Thymeleaf使用详解/index.html","907252cf1ea62e486177e46d594e18ad"],["/2019/04/08/乐优商城笔记六：商品详情页/index.html","1380266f6d430da4c830456e315983ec"],["/B.png","0a1ca80baf4569839322697233e0ba8d"],["/about/index.html","b5eb1d627c5f8b5d69af46ededacaa93"],["/archives/2018/11/index.html","4b24f3c0dcb42ad002f81f105d352348"],["/archives/2018/12/index.html","0a54ef374c1e5e0ad9816f6b06e42b9d"],["/archives/2018/index.html","e191f09428c7512984cf23ee9846ebd1"],["/archives/2018/page/2/index.html","68014faad2126c5d0c9a14a792f76427"],["/archives/2019/02/index.html","4b1b507ee925fca2d3b6411ef587a4b5"],["/archives/2019/03/index.html","0a8a380f25b24bcdb4b103acb4257631"],["/archives/2019/04/index.html","e4df8b1424d30b78fdf200bf99f934df"],["/archives/2019/index.html","d72e14595d7f5629aeacf66a02d70201"],["/archives/index.html","2026a7fc08dc367c7c8ea97081924393"],["/archives/page/2/index.html","e2d55f6630167be1d35aaaf9efa7ad24"],["/archives/page/3/index.html","f18d9016802a448522f5b9175d0adef9"],["/baidu_verify_9BnGYuUXkF.html","8a0c4b29e47129f10810908bb1dd5086"],["/categories/FastDFS/index.html","6ddaeffd281b72bcf1601df2fac9cea0"],["/categories/Spring-Boot/index.html","cbcbf6ae66cc8150a3d9a5efdacac9e4"],["/categories/Spring-Cloud/Eureka/index.html","d4bb8a7f9d88d12892c8c58159062755"],["/categories/Spring-Cloud/Feign/index.html","fa4fea8782fb1d670a9cb9c6cbb3dabd"],["/categories/Spring-Cloud/Hystrix/index.html","4d06a5a8d61dd2f177e5960fc2e534ce"],["/categories/Spring-Cloud/Ribbon/index.html","b444876d0c3984495f52cc8a2dbc62fa"],["/categories/Spring-Cloud/Zuul/index.html","2b867a6e2e4692ec5a76ecc5ebe36072"],["/categories/Spring-Cloud/index.html","bef500fd9a2f773af059de218fcfb9e3"],["/categories/index.html","2e4d8e13df69b0591fd7fe39ece9899a"],["/categories/nginx/index.html","b26186a41c1b44dc9ed1784d4c3ada2a"],["/categories/thymeleaf/index.html","c0dc98db9b7f4cbb4d270ac8f8343e82"],["/categories/乐优商城/index.html","101ed1301c82d83f6cd629f9ccd5141d"],["/categories/全文检索/elasticsearch/index.html","3debfa6ef051197fbe6518bf2aff738d"],["/categories/全文检索/index.html","77d567a680a5e85ff74b07114f4af5c5"],["/categories/其他/index.html","22ddffe2f74473e77910e03baba17804"],["/css/index.css","9bf71e9c1c78d492bfe78d60cbfe72bf"],["/css/main.css","a8ba380d0a88305b6b3e507ca95e26ae"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google76e36dab16f5466d.html","7c62ed7aed7f4a1c401985065a93f77e"],["/images/B.png","0a1ca80baf4569839322697233e0ba8d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","8ed3c3f56bbb75ed43d7e669924b7318"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","ddb523597edd87eee13ed397530aab26"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","aa07273edba2bc469a79f53b0756b804"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","c658b1575f85bd88d21707bdf4301d4f"],["/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/anime.min.js","1769fe3b640066c751c0eca61504b7ba"],["/js/src/bootstrap.js","5fd56ceccbc08ee2294cb3e321862513"],["/js/src/click.js","0585d90fb4ff18e24e50180f39692392"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/gitment.js","122c7e0843f1f95b5c43e8bbab1721b4"],["/js/src/gitment_cn.js","595235c3d17a9fd8935603be45f83cb5"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","9844a5aa660606446331101854a15a47"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","cc500945c45b2528ec908553382a2d33"],["/page/3/index.html","1290a4e3b194e6b205b2462ed95d7eb6"],["/sw-register.js","f4e3a2fbb7b4ba40a31feac6c64c801c"],["/tags/Eureka/index.html","459541f651064153f196c30c56ca1400"],["/tags/FastDFS/index.html","da1ae7ed03b61e099ea5cf5e4e3d1e58"],["/tags/Hystrix/index.html","93e9a761e3c7c47d5541dc9cdc385618"],["/tags/Navicat-Premium/index.html","b1c52d29980d350b5983c3db9b5c35b4"],["/tags/Navicat-Premium12-破解/index.html","f90efe0ccd0836d8e67aa2fb469d2a1c"],["/tags/Navicat-Premium破解/index.html","edfc2305070e112bf616e7a7d3dc96f3"],["/tags/Restful-API/index.html","e25606e2f968b9c957ef08d1352ce3c3"],["/tags/Ribbon/index.html","4a38387f2e1d08aaefe0e46f590aacb0"],["/tags/Spring-Boot/index.html","9be3f7687b0c50909ece0628e4bd8a71"],["/tags/Spring-Cloud/index.html","3b9960940c686eb311b1ab24b0b541bd"],["/tags/Spring-MVC/index.html","199a3668ec8589b8bad60d5c1bb16202"],["/tags/Zuul/index.html","062df43b33c33cf8595cc841f955872f"],["/tags/elasticsearch/index.html","dd24dfffd030b3f77eb7dd9332a654e7"],["/tags/feign/index.html","7b2746aac138b8ac1ca29a749fc62196"],["/tags/hexo-blog-个人博客/index.html","3a5c5d1f7eddc584b64fce8e9de1b113"],["/tags/hexo/index.html","277993ca8c1705588fa6db6c4897bc61"],["/tags/index.html","cffdf63aa25f421446926935633e4a89"],["/tags/nginx-服务器代理/index.html","f8840b9dfc35fbbcb73154d2d78ee76c"],["/tags/ngxin-反向代理/index.html","5c4753733d3862754c9760a0cf7f3c73"],["/tags/spring-data-elasticsearch/index.html","0e3197f7739529b1b7df85e872bab08d"],["/tags/thymeleaf/index.html","a123f2a748cf7701c7b0e217fcadb721"],["/tags/乐优商城/index.html","148b5c674bc076b63d1250adfa053c7c"],["/tags/全文检索/index.html","073ac33070fdc946881feab64b3b6572"],["/tags/分布式文件系统/index.html","be5494e1b2de5c08fa9308ab2845ee0f"],["/tags/天气插件/index.html","a3a7fe5591b7b1cac040f65e55ddc2a5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
