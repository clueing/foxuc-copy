# 狐狸科技官网克隆

基于 Next.js 16 + Tailwind CSS v4 的 foxuc.cn 官网克隆项目。

## 项目简介

使用 AI 编程代理将 foxuc.cn 网站逆向工程为现代化的 Next.js 代码库。已完成首页、国际页、产品页、新闻页、关于页、联系页、案例页、合作页的完整克隆。

## 技术栈

- **框架:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** Tailwind CSS v4 + 自定义样式
- **图标:** 自定义 SVG 图标组件
- **部署:** Vercel

## 命令

```bash
npm run dev      # 启动开发服务器
npm run build    # 生产构建
npm run lint     # ESLint 检查
npm run typecheck # TypeScript 检查
npm run check    # 运行 lint + typecheck + build
```

## 项目结构

```
src/
  app/                    # Next.js 路由页面
    page.tsx              # 首页
    inter/                # 国际页
      page.tsx            # 联运介绍
      tech/page.tsx       # 技术服务
    product/              # 产品页
      page.tsx            # 至尊版
      hw/page.tsx         # 至尊版详情
      zy/page.tsx         # 环球版
      qj/page.tsx         # 极速版
    news/                 # 新闻页
      page.tsx            # 棋牌资讯
      qpnews/page.tsx     # 网狐动态
      [id]/page.tsx       # 文章详情
    about/                # 关于页
      page.tsx            # 关于我们
      culture/page.tsx    # 企业文化
      course/page.tsx     # 发展历程
    contact/page.tsx      # 联系页
    case/page.tsx         # 案例页
    operate/page.tsx      # 合作页
  components/
    Header.tsx            # 共享导航栏
    Footer.tsx            # 共享页脚
    ContactPopup.tsx      # 联系二维码弹窗
    FloatingButtons.tsx   # 浮动按钮（在线留言+客服中心）
    SubNav.tsx            # 子页面导航组件
    icons.tsx             # SVG 图标组件
    home/                 # 首页专用组件
    inter/                # 国际页组件
    product/              # 产品页组件
    news/                 # 新闻页组件
    about/                # 关于页组件
    contact/              # 联系页组件
    case/                 # 案例页组件
    operate/              # 合作页组件
  lib/
    utils.ts              # cn() 工具函数
public/
  images/                 # 图片资源
    home/                 # 首页图片
    inter/                # 国际页图片
    product/              # 产品页图片
    news/                 # 新闻页图片
    about/                # 关于页图片
    contact/              # 联系页图片
    case/                 # 案例页图片
    operate/              # 合作页图片
scripts/                  # 资源下载脚本
```

## 页面路由

| 路由 | 页面 | 说明 |
|------|------|------|
| `/` | 首页 | 轮播、产品、海外联运、国际优势、新闻、案例 |
| `/inter` | 联运介绍 | 海外棋牌联运详情 |
| `/inter/tech` | 技术服务 | 技术服务详情 |
| `/product` | 产品（重定向到 /product/hw） | 自动跳转至尊版 |
| `/product/hw` | U3D至尊版 | 产品详情 |
| `/product/zy` | H5环球版 | 产品详情 |
| `/product/qj` | H5极速版 | 产品详情 |
| `/news` | 棋牌资讯 | 新闻列表 |
| `/news/qpnews` | 网狐动态 | 新闻列表 |
| `/news/[id]` | 文章详情 | 动态路由 |
| `/about` | 关于我们 | 公司介绍 |
| `/about/culture` | 企业文化 | 文化理念 |
| `/about/course` | 发展历程 | 时间线 |
| `/contact` | 联系页 | 联系方式 |
| `/case` | 案例页 | 合作案例 |
| `/operate` | 合作页 | 合作运营 |

## 开发规范

- TypeScript 严格模式，禁止 `any`
- 组件使用 PascalCase，工具函数使用 camelCase
- Tailwind 工具类优先，避免内联样式
- 2 空格缩进
- 中文注释
- 使用模板字符串包裹含中文引号的字符串
