export interface CragLocation {
  id: string;
  name: string;
  nameEn: string;
  type: "gym" | "outdoor";
  province: string;
  city: string;
  lat: number;  // WGS-84
  lng: number;  // WGS-84
  difficulty?: string;
  url?: string;
  description?: string;
  descriptionEn?: string;
}

export const crags: CragLocation[] = [
  // === 北京 ===
  { id: "bj-yanshi-dawanglu", name: "岩时攀岩（大望路店）", nameEn: "Yanshi Climbing (Dawanglu)", type: "gym", province: "北京", city: "北京", lat: 39.9087, lng: 116.4716, difficulty: "V0-V10", description: "北京最知名的抱石馆之一" },
  { id: "bj-yanshi-798", name: "岩时攀岩（798店）", nameEn: "Yanshi Climbing (798)", type: "gym", province: "北京", city: "北京", lat: 39.9855, lng: 116.4968, difficulty: "V0-V10" },
  { id: "bj-baihe", name: "白河攀岩场", nameEn: "Baihe (White River) Crag", type: "outdoor", province: "北京", city: "密云", lat: 40.5667, lng: 116.8167, difficulty: "5.7-5.14", description: "中国北方最著名的户外运动攀岩场", descriptionEn: "The most famous outdoor sport climbing area in northern China" },

  // === 上海 ===
  { id: "sh-pongo", name: "Pongo Climbing", nameEn: "Pongo Climbing", type: "gym", province: "上海", city: "上海", lat: 31.2304, lng: 121.4737, difficulty: "V0-V10" },
  { id: "sh-factory", name: "攀岩工厂", nameEn: "Climbing Factory", type: "gym", province: "上海", city: "上海", lat: 31.2614, lng: 121.5143, difficulty: "V0-V11", description: "上海最大的抱石馆之一", descriptionEn: "One of the largest bouldering gyms in Shanghai" },

  // === 广州 ===
  { id: "gz-climbon", name: "爬客攀岩", nameEn: "Climb On", type: "gym", province: "广东", city: "广州", lat: 23.1291, lng: 113.2644, difficulty: "V0-V8" },
  { id: "gz-very", name: "超极限攀岩", nameEn: "Very Climbing", type: "gym", province: "广东", city: "广州", lat: 23.1357, lng: 113.3233, difficulty: "V0-V9" },

  // === 深圳 ===
  { id: "sz-bonbon", name: "BonBon Climbing", nameEn: "BonBon Climbing", type: "gym", province: "广东", city: "深圳", lat: 22.5431, lng: 114.0579, difficulty: "V0-V10" },

  // === 阳朔 ===
  { id: "gl-yangshuo", name: "阳朔攀岩", nameEn: "Yangshuo Climbing", type: "outdoor", province: "广西", city: "阳朔", lat: 24.7785, lng: 110.4966, difficulty: "5.6-5.15a", description: "中国最富盛名的户外攀岩胜地，拥有上千条路线", descriptionEn: "China's premier outdoor climbing destination with over 1000 routes" },

  // === 格凸 ===
  { id: "gz-getu", name: "格凸攀岩", nameEn: "Getu Climbing", type: "outdoor", province: "贵州", city: "安顺", lat: 25.7167, lng: 106.2667, difficulty: "5.8-5.15b", description: "世界级大岩壁攀岩胜地", descriptionEn: "World-class big wall climbing destination" },

  // === 黎明 ===
  { id: "yn-liming", name: "黎明攀岩", nameEn: "Liming Climbing", type: "outdoor", province: "云南", city: "丽江", lat: 27.0167, lng: 99.6500, difficulty: "5.7-5.14", description: "传统攀岩砂岩裂缝圣地", descriptionEn: "Sandstone crack climbing paradise for trad climbers" },

  // === 成都 ===
  { id: "cd-climbing-factory", name: "攀岩工厂（成都）", nameEn: "Climbing Factory (Chengdu)", type: "gym", province: "四川", city: "成都", lat: 30.5728, lng: 104.0668, difficulty: "V0-V9" },

  // === 昆明 ===
  { id: "km-rock-touch", name: "岩续攀岩", nameEn: "Rock Touch", type: "gym", province: "云南", city: "昆明", lat: 25.0389, lng: 102.7183, difficulty: "V0-V8" },

  // === 西安 ===
  { id: "xa-climb-wall", name: "攀岩墙（西安）", nameEn: "Xi'an Climbing Wall", type: "gym", province: "陕西", city: "西安", lat: 34.3416, lng: 108.9398, difficulty: "V0-V7" },

  // === 杭州 ===
  { id: "hz-ascend", name: "向上攀岩", nameEn: "Ascend Climbing", type: "gym", province: "浙江", city: "杭州", lat: 30.2741, lng: 120.1551, difficulty: "V0-V9" },

  // === 四姑娘山 ===
  { id: "sc-siguniang", name: "四姑娘山", nameEn: "Siguniang (Four Sisters)", type: "outdoor", province: "四川", city: "阿坝", lat: 31.1000, lng: 102.9000, difficulty: "5.8-5.12", description: "高海拔大岩壁攀岩", descriptionEn: "High-altitude big wall climbing" },
];
