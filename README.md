# 纪念荔枝

一个温馨浪漫的纪念日正计时网页应用，用于记录和展示从2026年6月27日20:23开始至今经过的时间。

## ✨ 功能特点

- **实时正计时显示**：精确到秒的时间计算，每秒自动更新
- **精美视觉设计**：荔枝红粉色系主题，暖米纸色背景，营造温馨浪漫氛围
- **响应式布局**：完美适配移动端和桌面端
- **优雅动画效果**：淡入、滑动、漂浮等多种动画，增强页面生动感
- **荔枝主题装饰**：荔枝轮廓剪影、半透明果肉光晕等装饰元素

## 🎨 设计风格

- **配色方案**：荔枝壳暖红主色 + 果肉半透粉白辅助 + 暖米纸底背景
- **字体**：中文标题使用 ZCOOL XiaoWei 小楷字体，数字使用 Noto Sans SC
- **圆角设计**：rounded-xl ~ rounded-2xl，呼应荔枝果实的圆润轮廓
- **阴影效果**：柔和的阴影带暖色底光，卡片微微浮起

## 🛠 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| React | 18.x | 前端框架 |
| TypeScript | 5.x | 类型安全 |
| Vite | 6.x | 构建工具 |
| Tailwind CSS | 3.x | 样式框架 |
| Zustand | 5.x | 状态管理 |
| Lucide React | 0.x | 图标库 |

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

启动后访问 http://localhost:5173

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
npm run check
```

## 📁 项目结构

```
jinianlz/
├── public/                 # 静态资源
│   ├── favicon.svg         # 网站图标
│   └── icons.svg           # 图标资源
├── src/                    # 源代码
│   ├── assets/             # 静态资源
│   ├── components/         # 组件
│   │   ├── Decorations.tsx # 装饰元素组件
│   │   └── TimeDisplay.tsx # 时间显示组件
│   ├── hooks/              # 自定义 Hooks
│   │   ├── useTheme.ts     # 主题 Hook
│   │   └── useTimeCounter.ts # 计时器 Hook
│   ├── lib/                # 工具库
│   │   └── utils.ts        # 工具函数
│   ├── pages/              # 页面组件
│   │   └── Home.tsx        # 首页
│   ├── utils/              # 工具函数
│   │   └── timeCalculator.ts # 时间计算工具
│   ├── App.tsx             # 应用入口组件
│   ├── index.css           # 全局样式
│   ├── main.tsx            # 应用入口
│   └── vite-env.d.ts       # Vite 类型定义
├── .gitignore              # Git 忽略文件
├── components.json         # 组件配置
├── eslint.config.js        # ESLint 配置
├── index.html              # HTML 模板
├── package.json            # 项目配置
├── postcss.config.js       # PostCSS 配置
├── tailwind.config.js      # Tailwind CSS 配置
├── tsconfig.json           # TypeScript 配置
├── tsconfig.app.json       # TypeScript 应用配置
├── tsconfig.node.json      # TypeScript Node 配置
├── vercel.json             # Vercel 部署配置
└── vite.config.ts          # Vite 配置
```

## 📊 核心逻辑

### 时间计算

项目使用 `useTimeCounter` Hook 实现实时计时功能：

```typescript
const startDate = new Date('2026-06-27T20:23:00+08:00');
const timeDiff = useTimeCounter(startDate);
```

`calculateTimeDifference` 函数计算从开始时间到当前时间的差值，返回天、小时、分钟、秒数。

### 视觉效果

- **背景**：暖米纸色 `hsl(30,25%,96%)` 渐变背景
- **主色**：荔枝壳暖红 `hsl(8,55%,52%)`，用于标题和数字
- **辅助色**：果肉粉白 `hsl(8,40%,92%)`，用于卡片背景
- **文字**：深暖灰 `hsl(15,15%,18%)`，柔和可读

## 🔧 配置说明

### Vite 配置

- 使用 `@vitejs/plugin-react` 支持 React
- 使用 `vite-tsconfig-paths` 支持路径别名
- 构建时生成隐藏的 sourcemap

### Tailwind CSS 配置

- 使用自定义主题色，基于荔枝红粉色系
- 配置了响应式断点和字体

## 🚢 部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flldq666%2Fjinianlz)

项目已配置 Vercel 自动部署，推送到 `main` 分支后自动构建部署。

也可以手动部署到其他平台：

1. 运行 `npm run build` 构建
2. 将 `dist` 目录部署到静态网站托管服务

## 📝 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系方式

如有问题或建议，欢迎通过 GitHub Issue 联系。
