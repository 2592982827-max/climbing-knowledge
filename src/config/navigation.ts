export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export const mainNav: Record<string, NavItem[]> = {
  zh: [
    { label: "入门指南", href: "/zh/guides/" },
    { label: "技术动作", href: "/zh/techniques/" },
    { label: "装备指南", href: "/zh/equipment/" },
    { label: "安全知识", href: "/zh/safety/" },
    { label: "训练方法", href: "/zh/training/" },
    { label: "伤病预防", href: "/zh/injury/" },
    { label: "等级对照", href: "/zh/grades/" },
    { label: "术语词典", href: "/zh/terminology/" },
    { label: "攀岩地图", href: "/zh/map/" },
  ],
  en: [
    { label: "Guides", href: "/en/guides/" },
    { label: "Techniques", href: "/en/techniques/" },
    { label: "Equipment", href: "/en/equipment/" },
    { label: "Safety", href: "/en/safety/" },
    { label: "Training", href: "/en/training/" },
    { label: "Injury", href: "/en/injury/" },
    { label: "Grades", href: "/en/grades/" },
    { label: "Terminology", href: "/en/terminology/" },
    { label: "Map", href: "/en/map/" },
  ],
};

export const footerNav: Record<string, NavItem[]> = {
  zh: [
    { label: "攀岩历史", href: "/zh/history/" },
    { label: "装备选购", href: "/zh/buying/" },
    { label: "天气季节", href: "/zh/weather/" },
    { label: "关于本站", href: "/zh/about/" },
    { label: "搜索", href: "/zh/search/" },
  ],
  en: [
    { label: "History", href: "/en/history/" },
    { label: "Buying Guide", href: "/en/buying/" },
    { label: "Weather", href: "/en/weather/" },
    { label: "About", href: "/en/about/" },
    { label: "Search", href: "/en/search/" },
  ],
};
