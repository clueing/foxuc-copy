<!-- BEGIN:nextjs-agent-rules -->
# 这不是你熟悉的 Next.js

此版本有破坏性变更 — API、约定和文件结构可能与你的训练数据不同。编写代码前请阅读 `node_modules/next/dist/docs/` 中的相关指南。注意弃用通知。
<!-- END:nextjs-agent-rules -->

# 狐狸科技官网克隆项目

## 项目概述
foxuc.cn 官网的 Next.js 克隆项目。使用 AI 编程代理将目标网站逆向工程为现代化的 Next.js 代码库。

## 技术栈
- **框架:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** Tailwind CSS v4 + 自定义样式
- **图标:** 自定义 SVG 图标组件
- **部署:** Vercel

## 常用命令
- `npm run dev` — 启动开发服务器
- `npm run build` — 生产构建
- `npm run lint` — ESLint 检查
- `npm run typecheck` — TypeScript 检查
- `npm run check` — 运行 lint + typecheck + build

## 代码规范
- TypeScript 严格模式，禁止 `any`
- 组件 PascalCase，工具函数 camelCase
- Tailwind 工具类优先，避免内联样式
- 2 空格缩进
- 响应式：移动端优先

## 设计原则
- **像素级还原** — 精确匹配目标网站的间距、颜色、排版
- **克隆阶段不做个性化修改** — 先 1:1 还原，后再定制
- **真实内容** — 使用目标网站的实际文本和资源，不用占位符
- **美观优先** — 每个像素都很重要

## 项目结构
```
src/
  app/              # Next.js 路由
  components/       # React 组件
    ui/             # shadcn/ui 基础组件
    icons.tsx       # SVG 图标组件
  lib/
    utils.ts        # cn() 工具函数
  types/            # TypeScript 接口
  hooks/            # 自定义 React hooks
public/
  images/           # 下载的图片资源
  videos/           # 下载的视频资源
  seo/              # 收藏夹图标、OG 图片
docs/
  research/         # 提取输出（设计令牌、组件规格）
  design-references/ # 截图和视觉参考
scripts/            # 资源下载脚本
```

## 重要提示
- 使用 Claude Code 代理团队时，确保每个代理在自己的 worktree 分支中工作，最后合并所有人的工作。
- 编辑 `AGENTS.md` 后，运行 `bash scripts/sync-agent-rules.sh` 重新生成平台特定的指令文件。
- 编辑 `.claude/skills/clone-website/SKILL.md` 后，运行 `node scripts/sync-skills.mjs` 重新生成技能。

@docs/research/INSPECTION_GUIDE.md
