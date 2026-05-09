export const ui = {
  zh: {
    "site.name": "攀岩知识库",
    "site.tagline": "分享攀岩知识，连接攀岩社群",
    "lang.switch": "EN",
    "lang.label": "English",
    "nav.home": "首页",
    "search.placeholder": "搜索文章...",
    "search.noResults": "没有找到相关文章",
    "toc.title": "目录",
    "breadcrumb.home": "首页",
    "backToTop": "回到顶部",
    "footer.copyright": "攀岩知识库。知识共享，安全攀爬。",
    "section.articles": "篇文章",
    "published": "发布于",
    "updated": "更新于",
    "tags": "标签",
    "related": "相关文章",
    "prev": "上一篇",
    "next": "下一篇",
  },
  en: {
    "site.name": "Climbing Knowledge Base",
    "site.tagline": "Share climbing knowledge, connect the climbing community",
    "lang.switch": "中文",
    "lang.label": "Chinese",
    "nav.home": "Home",
    "search.placeholder": "Search articles...",
    "search.noResults": "No articles found",
    "toc.title": "On this page",
    "breadcrumb.home": "Home",
    "backToTop": "Back to top",
    "footer.copyright":
      "Climbing Knowledge Base. Share knowledge, climb safely.",
    "section.articles": "articles",
    "published": "Published",
    "updated": "Updated",
    "tags": "Tags",
    "related": "Related",
    "prev": "Previous",
    "next": "Next",
  },
};

export function t(key: string, locale: string): string {
  return ui[locale]?.[key] ?? ui.zh[key] ?? key;
}
