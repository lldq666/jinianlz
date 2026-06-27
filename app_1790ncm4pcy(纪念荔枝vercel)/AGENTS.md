# 纪念荔枝 - 需求拆解文档

## 产品概述

- **产品类型**: 纪念日正计时工具
- **场景类型**: <scene_type>prototype-app</scene_type>
- **目标用户**: 希望记录和纪念某个特殊时刻的用户（情侣、家人、朋友等）
- **核心价值**: 以温馨浪漫的视觉风格，实时展示从2026年6月27日20:23开始经过的时间，让用户随时感受时光的珍贵
- **界面语言**: 中文
- **主题偏好**: 用户指定（荔枝红粉色系，温馨浪漫风格）
- **导航模式**: 无导航

---

## 页面结构总览

> **说明**：此表为页面生成的唯一数据源，包含所有页面（一级+二级）

### 无导航模式:

**页面文件**: `HomePage.tsx`

| 区域 | 说明 |
|-----|------|
| 背景装饰区 | 荔枝主题装饰元素（荔枝图案、花瓣、柔光等），营造温馨浪漫氛围 |
| 主标题区 | 大字体展示"纪念荔枝第 X 天"，X为整数天数 |
| 精确计时区 | 展示"已经过去了 X天 X小时 X分 X秒"的精确时间 |
| 底部信息区 | 可选的开始时间标注或寄语文字 |

---

## 页面布局建议

- **布局模式**: 单栏居中布局 —— 页面内容垂直居中，适配移动端和桌面端，视觉焦点集中在计时数字上
- **视觉重心**: 主标题区的天数数字 —— 这是用户最关注的核心信息，需要最大字号和最醒目的视觉效果
- **结果承载区**: 精确计时区（天/时/分/秒）作为主标题的补充，初始态即显示实时计算结果，无需空状态或骨架屏

---

## 数据来源声明

| 数据/操作 | 来源类型 | 实现要求 | mock 兜底 |
|---|---|---|---|
| 开始时间 | demo-mock | 硬编码常量 `START_TIME = new Date('2026-06-27T20:23:00')` | ✅ 本身就是固定值 |
| 实时计时计算 | demo-mock | 使用 `setInterval` 每秒计算当前时间与 START_TIME 的差值，更新 state | ✅ 纯前端计算，无需 mock |

---

## 功能列表

- **页面**: 纪念荔枝计时页
  - **页面目标**: 实时展示从2026年6月27日20:23至今经过的时间，营造温馨纪念氛围
  - **功能点**:
    - **实时天数展示**: 大字体居中显示"纪念荔枝第 X 天"，X为从开始时间到当前时间经过的整数天数，每秒更新
    - **精确时间展示**: 在主标题下方显示"已经过去了 X天 X小时 X分 X秒"，精确到秒，每秒刷新
    - **荔枝主题视觉**: 页面使用荔枝红粉色系（如 `#E8A0A8`、`#F5C6CB`、`#FFE4E6` 等），搭配荔枝图案装饰元素（可用 CSS 绘制或 SVG 图标），背景使用柔和渐变或纹理
    - **动画过渡效果**: 时间数字变化时使用平滑过渡动画（如 fade 或 scale 微动效），装饰元素可添加轻微浮动或旋转动画，增强页面的生动感和纪念意义
    - **响应式适配**: 页面在移动端和桌面端均居中显示，字体大小和间距根据视口自适应调整

---

## 数据共享配置

无跨页面数据共享需求（单页应用）。

-------

<scene_type>prototype-app</scene_type>

# UI 设计指南

## 1. 设计推导依据

- **参考意图**: Free Direction —— 无参考材料，从产品语义与情绪出发自主建立视觉方向
- **核心情绪 / 应用类型**: 温馨浪漫的纪念计时器，以荔枝为情感符号，表达对一段关系的珍视与仪式感
- **独特记忆点**: 荔枝果壳的粗糙红褐纹理与果肉的半透明白皙形成材质对比，转化为页面的色彩层次与柔和光影

## 2. Art Direction

- **方向名**: 荔枝果语
- **Design Style**: Soft Pop + Warm Natural —— 柔和的圆润几何承载浪漫情绪，自然暖调让纪念日像翻开一本手工相册
- **DNA 参数**: 圆角 soft（rounded-xl ~ rounded-2xl）/ 阴影 subtle（shadow-sm ~ shadow-md，带暖色底光）/ 间距 spacious（gap-6 ~ gap-8）/ 字体方向 中文圆体为主，数字用温和无衬线 / 装饰手法 荔枝轮廓剪影、半透明果肉光晕、微粉渐变背景
- **应用类型**: Landing —— 单页居中展示，叙事型信息层级

## 3. Color System

**色彩关系**: 荔枝壳暖红主色 + 果肉半透粉白辅助 + 暖米纸底背景
**配色设计理由**: primary 取荔枝外壳的成熟暖红，承载标题中的"荔枝"品牌锚点与主行动；bg 用暖米纸色营造翻阅纪念册的温柔感；accent 取果肉半透粉白，用于卡片底和轻量反馈，保持页面通透不沉闷
**主色推导**: 从荔枝壳的砖红-珊瑚红区间提取，降低饱和度至舒适可读范围，避免高饱和警报感；暖红与粉白搭配传递浪漫而非热烈
**使用比例**: 60% 中性暖底 / 30% 粉白辅助 / 10% 暖红 primary

| 角色 | CSS 变量 | Tailwind Class | HSL 值 | 设计说明 |
|---|---|---|---|---|
| bg | `--background` | `bg-background` | hsl(30 25% 96%) | 暖米纸底，像纪念册内页 |
| card | `--card` | `bg-card` | hsl(30 20% 99%) | 微暖白卡片，比 bg 更亮，承载计时面板 |
| text | `--foreground` | `text-foreground` | hsl(15 15% 18%) | 深暖灰，标题和正文，柔和可读 |
| textMuted | `--muted-foreground` | `text-muted-foreground` | hsl(15 10% 48%) | 辅助时间文字、秒数单位 |
| primary | `--primary` | `bg-primary` / `text-primary` | hsl(8 55% 52%) | 荔枝壳暖红，标题"荔枝"二字、天数数字、主按钮 |
| primaryForeground | `--primary-foreground` | `text-primary-foreground` | hsl(30 25% 98%) | primary 上的浅色文字 |
| accent | `--accent` | `bg-accent` | hsl(8 40% 92%) | 荔枝果肉粉白，卡片内分隔底、hover 浅底 |
| accentForeground | `--accent-foreground` | `text-accent-foreground` | hsl(8 35% 38%) | accent 上的文字，比 primary 弱一档 |
| border | `--border` | `border-border` | hsl(15 12% 85%) | 暖灰边界，卡片和输入框分隔 |

**语义色提示**: 无（本页面无成功/警告/错误状态需求）

## 4. 字体与节奏

- **font-display**: ZCOOL XiaoWei —— 优雅小楷，中文"纪念荔枝第X天"用此字体传递手写纪念册的温柔感
- **font-body**: Noto Sans SC —— 清晰可读，精确计时数字和辅助信息使用，与 display 形成手写/数字的节奏对比
- **字号**: 标题"纪念荔枝第 X 天" text-4xl md:text-6xl；精确计时 text-lg md:text-2xl；辅助说明 text-sm
- **圆角**: soft（rounded-xl ~ rounded-2xl）—— 呼应荔枝果实的圆润轮廓，避免尖锐直角破坏温馨感

## 5. 全局布局契约

- **Reference Layout Use**: 按需求结构推导 —— 单页垂直居中，自上而下：标题 → 天数 → 精确计时
- **Page / Section Order**: 单页单区块，无多页面路由
- **Standard Content Zone**: `max-w-lg` + `mx-auto`，移动端全宽 `px-6`，桌面端居中限制阅读宽度
- **Shell / Frame Alignment**: 无 chrome 框架，纯内容页，内容区独立居中
- **Padding & Rhythm**: `px-6 py-16 md:py-24`，垂直节奏宽松，让纪念信息有呼吸感
- **Full-bleed Zones**: 背景渐变和装饰元素可 `w-full` 延伸至视口边缘，文字和计时卡片仍受 Standard Content Zone 约束
- **Local Narrowing**: 精确计时行可在卡片内局部收窄至 `max-w-xs`，与标题形成视觉对比
- **Overflow Strategy**: 无宽表格或横向滚动需求
- **Flexibility Boundary**: 允许移动端调整标题字号和卡片内边距；全局 max-w、圆角、主色和阴影语言保持一致

## 6. 视觉与动效

- **装饰**: 荔枝轮廓剪影（低透明度暖红）、半透明果肉光晕圆斑、微粉到暖米的径向渐变背景
- **阴影/边界**: 轻 —— `shadow-sm` 带暖色底光，卡片微微浮起，像贴在手账上的拍立得
- **动效**: 精致 —— 秒数跳动时数字微缩放（scale 1 → 1.05 → 1），天数变化时淡入淡出过渡；页面入场从下向上 fade-in；装饰光晕缓慢呼吸式明暗变化

## 7. 组件原则

- 计时卡片：Default 为暖白底 + 轻阴影；无交互状态变化，纯展示
- 数字跳动：每秒更新时仅秒数位触发 scale 微动效，避免整行重绘闪烁
- 加载状态：首次加载时显示占位文字"正在计算..."，使用 textMuted + 脉冲动画，延续暖色调

## 8. Image Direction

- **Image Role**: 背景氛围图 —— 低透明度荔枝轮廓剪影与果肉光晕，作为页面背景层，不干扰文字阅读
- **Image Art Direction**: 极简荔枝主题背景，2-3 颗荔枝的侧面剪影以不同透明度和大小散布在暖米色底上，果壳纹理用细线暗示而非写实渲染；画面右下角有一片柔和粉白光晕模拟果肉透光感；整体构图留白充足，视觉重心在页面中央的文字区；光线从左上角斜射，暖黄微光；情绪是安静、温柔、私密的纪念感
- **Image Prompt Keywords**: lychee silhouette, soft pink glow, warm cream background, translucent fruit flesh, subtle shell texture, gentle diagonal light, minimalist botanical, romantic memory aesthetic, hand-drawn quality, low opacity overlay
- **Image Avoidance**: 避免写实摄影风荔枝照片、高饱和红色水果堆叠、电商促销式鲜艳配色、复杂植物插画喧宾夺主、冷色调或蓝色系元素

## 9. Anti-patterns

- **Split personality**: 移动端和桌面端切换圆角强度或主色饱和度；全端共享同一套暖红-粉白-米底色板
- **Phantom tokens**: 编造不存在的 CSS 变量；只使用已定义的 9 个基础色角色
- **Default SaaS drift**: 回到默认蓝按钮或通用紫渐变；本页面无按钮，primary 仅用于标题文字锚点和天数数字
- **Invisible interaction**: 本页面为纯展示计时器，无交互元素，无需 focus-visible 状态
- **Mono-hue tyranny**: 暖红铺满标题、数字、装饰、边框；按 60-30-10 把 primary 收回到"荔枝"二字和天数数字，其余交由 accent 粉白和中性暖底
- **Status color drift**: 无状态色需求，不引入绿色/黄色/蓝色破坏暖调统一性