export interface Term {
  term: string;
  termEn: string;
  definition: string;
  definitionEn: string;
  category: "discipline" | "hold" | "move" | "safety" | "gear" | "grade" | "general";
}

export const terms: Term[] = [
  // Discipline
  { term: "抱石", termEn: "Bouldering", definition: "在较低高度（通常4-5米）不借助绳索进行的攀爬，下方有缓冲垫保护。", definitionEn: "Climbing on shorter walls (typically 4-5m) without a rope, protected by crash pads below.", category: "discipline" },
  { term: "运动攀", termEn: "Sport Climbing", definition: "在已经打好挂片的岩壁上，使用快挂和绳索进行保护的攀爬方式。", definitionEn: "Climbing on pre-bolted routes using quickdraws and a rope for protection.", category: "discipline" },
  { term: "传统攀", termEn: "Trad Climbing", definition: "攀爬者自行放置可移除的保护装置（如岩塞、机械塞）进行保护的攀爬方式。", definitionEn: "Climbing where the climber places removable protection (nuts, cams) into the rock.", category: "discipline" },
  { term: "顶绳", termEn: "Top Rope", definition: "绳索从顶端锚点垂下，攀爬者始终处于上方保护的状态。", definitionEn: "Rope runs from the belayer up through a top anchor and back down to the climber.", category: "discipline" },
  { term: "先锋攀", termEn: "Lead Climbing", definition: "攀爬者从地面开始，沿途将绳索挂入快挂（或放置保护装置）的攀爬方式。", definitionEn: "Climber starts from the ground and clips the rope into protection points while ascending.", category: "discipline" },

  // Holds
  { term: "捏点", termEn: "Crimp", definition: "小且薄的岩点，通常只能用指尖捏住。", definitionEn: "A small, thin hold gripped with fingertips.", category: "hold" },
  { term: "开放式抓握", termEn: "Open Hand", definition: "手指不捏紧，手掌和手指自然伸展的抓握方式，对指关节压力较小。", definitionEn: "A grip where fingers are not crimped but extended, reducing stress on finger joints.", category: "hold" },
  { term: "口袋点", termEn: "Pocket", definition: "岩壁上有一个洞，只能用一两个手指的指力拉起。", definitionEn: "A hole in the rock that can only fit one or two fingers.", category: "hold" },
  { term: "斜面点", termEn: "Sloper", definition: "表面光滑、没有明显可抓边缘的大面积岩点，依靠摩擦力抓握。", definitionEn: "A large, smooth hold with no positive edge, relying on friction.", category: "hold" },
  { term: "大把手", termEn: "Jug", definition: "大而好抓的岩点，手指可以完全扣进去，通常是最容易抓的点。", definitionEn: "A large, easy-to-grip hold where the fingers can wrap around fully.", category: "hold" },
  { term: "侧拉点", termEn: "Sidepull", definition: "需要从侧面拉拽的岩点。", definitionEn: "A hold that is pulled sideways rather than downwards.", category: "hold" },
  { term: "反拉点", termEn: "Undercling", definition: "从下方反向拉拽的岩点。", definitionEn: "A hold gripped from underneath, pulling upward.", category: "hold" },
  { term: "指洞", termEn: "Mono", definition: "只能放进一根手指的小洞。", definitionEn: "A pocket just large enough for one finger.", category: "hold" },
  { term: "摩擦点", termEn: "Pinch", definition: "需要用拇指和其他手指对捏的岩点。", definitionEn: "A hold gripped by pinching between thumb and fingers.", category: "hold" },

  // Moves
  { term: "动态发力", termEn: "Dyno", definition: "跳跃式动作，双手（或双脚）同时离开岩壁，飞向目标点。", definitionEn: "A dynamic move where both hands (and sometimes feet) leave the wall to jump to the target hold.", category: "move" },
  { term: "挂脚", termEn: "Heel Hook", definition: "用脚跟勾住岩点，利用大腿后侧力量辅助身体移动。", definitionEn: "Hooking the heel onto a hold and using hamstring strength to assist movement.", category: "move" },
  { term: "脚尖勾", termEn: "Toe Hook", definition: "用脚尖勾住岩点，通常用于防止身体摆荡。", definitionEn: "Hooking the top of the toe onto a hold, often to prevent swinging.", category: "move" },
  { term: "侧蹬", termEn: "Flag", definition: "一只脚不踩点，伸向身体一侧以保持平衡的技巧。", definitionEn: "Extending one leg to the side without placing it on a hold for balance.", category: "move" },
  { term: "膝顶", termEn: "Knee Bar", definition: "将膝盖或大腿卡在两个岩点或岩面之间获得休息位。", definitionEn: "Wedging the knee or thigh between two holds or rock features to create a rest.", category: "move" },
  { term: "交叉手", termEn: "Cross Through", definition: "一只手绕过另一只手去抓更远的点。", definitionEn: "Reaching one hand across the other to grab a hold.", category: "move" },
  { term: "折膝", termEn: "Drop Knee", definition: "将膝盖向内旋转下压，使身体更贴近岩壁。", definitionEn: "Rotating the knee inward and downward to pull the body closer to the wall.", category: "move" },
  { term: "烟囱", termEn: "Stemming", definition: "在两面相对的岩壁之间，用双手双脚分别撑住两侧向上移动的技巧。", definitionEn: "Technique of pressing hands and feet against two opposing walls to ascend.", category: "move" },
  { term: "斗士", termEn: "Mantel", definition: "在岩壁顶部平台，像从泳池边爬出来一样用手掌下压撑起身体的动作。", definitionEn: "Pushing down with palms to mantle onto a ledge, like getting out of a pool.", category: "move" },
  { term: "背对攀爬", termEn: "Layback", definition: "双手拉点、双脚蹬墙，身体向后倾斜的攀爬方式。", definitionEn: "Pulling with hands while pushing feet against the wall, body leaning back.", category: "move" },

  // Safety
  { term: "保护", termEn: "Belay", definition: "通过保护器控制绳索，保护攀爬者安全的行为。", definitionEn: "Managing the rope through a belay device to protect the climber.", category: "safety" },
  { term: "先锋冲坠", termEn: "Lead Fall", definition: "先锋攀爬时发生的冲坠，坠落距离包含绳索弹性延展和余绳长度。", definitionEn: "A fall while lead climbing, fall distance includes rope stretch and slack.", category: "safety" },
  { term: "挂快挂", termEn: "Clip", definition: "将绳索挂入岩壁上的快挂中。", definitionEn: "Attaching the rope into a quickdraw on the wall.", category: "safety" },
  { term: "摘绳", termEn: "Clean", definition: "攀爬完成后将路线上的快挂等装备全部收回。", definitionEn: "Removing all gear from a route after climbing.", category: "safety" },
  { term: "冲坠系数", termEn: "Fall Factor", definition: "冲坠距离与有效绳长之比，用于评估冲坠的严重程度。", definitionEn: "The ratio of fall distance to the length of rope available to absorb the fall.", category: "safety" },

  // Gear
  { term: "快挂", termEn: "Quickdraw", definition: "由两把铁锁和一条扁带连接而成的装备，用于连接绳索和挂片。", definitionEn: "Two carabiners connected by a sling, used to connect rope to bolts.", category: "gear" },
  { term: "保护器", termEn: "Belay Device", definition: "用于控制保护绳的装置，常见的有管式保护器和辅助制动保护器。", definitionEn: "A device used to control the rope when belaying.", category: "gear" },
  { term: "机械塞", termEn: "Cam", definition: "可调节大小的保护装置，放入岩石缝隙后通过弹簧膨胀固定。", definitionEn: "An adjustable protection device that expands via springs when placed in a crack.", category: "gear" },
  { term: "镁粉", termEn: "Chalk", definition: "碳酸镁粉，用于保持手掌干燥，增加摩擦力。", definitionEn: "Magnesium carbonate powder used to keep hands dry and increase friction.", category: "gear" },

  // Grade
  { term: "首攀", termEn: "First Ascent (FA)", definition: "某条路线或某块巨石第一次被成功攀爬。", definitionEn: "The first successful climb of a route or boulder problem.", category: "grade" },
  { term: "首攀者", termEn: "First Ascensionist", definition: "完成某条路线首攀的人。", definitionEn: "The person who completed the first ascent of a route.", category: "grade" },
  { term: "完攀", termEn: "Send", definition: "从开始到结束不间断地完成一条路线，没有脱落或挂在绳上休息。", definitionEn: "To complete a route from start to finish without falling or resting on the rope.", category: "grade" },
  { term: "闪攀", termEn: "Flash", definition: "第一次尝试就完攀一条路线，但之前看过别人爬或获取了方法信息。", definitionEn: "Completing a route on the first attempt with prior information about moves.", category: "grade" },
  { term: "视攀", termEn: "Onsight", definition: "第一次尝试、没有获取任何方法信息的情况下完攀一条路线。", definitionEn: "Completing a route on the first attempt without any prior information.", category: "grade" },
  { term: "红线", termEn: "Redpoint", definition: "经过多次尝试和练习后最终完攀一条路线。", definitionEn: "Completing a route after multiple attempts and practice.", category: "grade" },
  { term: "方案", termEn: "Beta", definition: "完成某条路线的方法信息，包括用什么动作、怎么抓点等。", definitionEn: "Information about how to complete a climb, including moves and hold usage.", category: "grade" },
  { term: "难点", termEn: "Crux", definition: "一条路线中最难的一段或最关键的一个动作。", definitionEn: "The hardest section or most critical move of a route.", category: "grade" },

  // General
  { term: "路线", termEn: "Route / Problem", definition: "抱石中通常叫\"问题\"，有绳索保护的攀爬中叫\"路线\"。", definitionEn: "In bouldering it's called a 'problem'; with a rope it's called a 'route'.", category: "general" },
  { term: "岩馆", termEn: "Climbing Gym", definition: "室内攀岩运动场所，提供人造攀爬岩壁。", definitionEn: "An indoor facility with artificial climbing walls.", category: "general" },
  { term: "岩场", termEn: "Crag", definition: "户外攀岩场所。", definitionEn: "An outdoor climbing area.", category: "general" },
  { term: "抱石垫", termEn: "Crash Pad", definition: "抱石时放在地上用以缓冲坠落的泡沫垫。", definitionEn: "A foam pad placed on the ground to cushion bouldering falls.", category: "general" },
];
