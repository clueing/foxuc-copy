"use client"

import Link from "next/link"

// 新闻项数据接口
interface NewsItemProps {
  id?: number
  title: string
  date: string
}

// 单条新闻项组件
function NewsItem({ id, title, date }: NewsItemProps) {
  return (
    <li className="group flex items-center justify-between border-b border-gray-100 py-3 transition-colors">
      {id ? (
        <Link
          href={`/news/${id}`}
          className="flex-1 truncate text-sm text-gray-700 transition-colors duration-200 group-hover:text-red-500"
        >
          {title}
        </Link>
      ) : (
        <span className="flex-1 truncate text-sm text-gray-700 transition-colors duration-200 group-hover:text-red-500">
          {title}
        </span>
      )}
      <span className="ml-4 shrink-0 text-xs text-gray-400">{date}</span>
    </li>
  )
}

// 新闻栏组件
interface NewsColumnProps {
  title: string
  href: string
  items: NewsItemProps[]
}

function NewsColumn({ title, href, items }: NewsColumnProps) {
  return (
    <div className="flex-1 rounded-lg bg-white p-6 shadow-md">
      <div className="mb-4 flex items-center justify-between border-b-2 border-red-500 pb-3">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <Link href={href} className="text-sm text-gray-500 transition-colors hover:text-red-500">
          查看更多 &gt;
        </Link>
      </div>
      <ul className="space-y-0">
        {items.map((item, index) => (
          <NewsItem key={index} {...item} />
        ))}
      </ul>
    </div>
  )
}

export default function News() {
  // 网狐动态数据
  const foxucNews: NewsItemProps[] = [
    { id: 1, title: "网狐科技荣获2024年度棋牌游戏行业创新奖", date: "2024-12-15" },
    { id: 2, title: "网狐海外棋牌产品矩阵再添新成员", date: "2024-12-10" },
    { id: 3, title: "网狐科技与某知名集团达成战略合作", date: "2024-12-05" },
    { id: 4, title: "网狐技术团队赴海外考察市场动态", date: "2024-11-28" },
    { id: 5, title: "网狐科技成功举办棋牌游戏开发研讨会", date: "2024-11-20" },
    { id: 6, title: "网狐新品发布：全新德州扑克系统上线", date: "2024-11-15" },
    { id: 7, title: "网狐科技入选行业TOP10开发商", date: "2024-11-10" },
    { id: 8, title: "网狐客户案例：吉祥游戏中心月流水突破千万", date: "2024-11-05" }
  ]

  // 棋牌资讯数据
  const industryNews: NewsItemProps[] = [
    { id: 101, title: "2024年全球棋牌游戏市场趋势分析报告", date: "2024-12-14" },
    { id: 102, title: "东南亚棋牌游戏市场迎来爆发式增长", date: "2024-12-12" },
    { id: 103, title: "海外棋牌手游推广策略深度解析", date: "2024-12-08" },
    { id: 104, title: "5G时代棋牌游戏发展新机遇", date: "2024-12-01" },
    { id: 105, title: "区块链技术在棋牌游戏中的应用场景", date: "2024-11-25" },
    { id: 106, title: "全球棋牌游戏玩家行为研究报告", date: "2024-11-18" },
    { id: 107, title: "棋牌手游合规运营指南（欧美市场）", date: "2024-11-12" },
    { id: 108, title: "AI技术助力棋牌游戏体验升级", date: "2024-11-08" }
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* 左栏：网狐动态 → /news/qpnews */}
          <NewsColumn title="网狐动态" href="/news/qpnews" items={foxucNews} />
          
          {/* 右栏：棋牌资讯 → /news */}
          <NewsColumn title="棋牌资讯" href="/news" items={industryNews} />
        </div>
      </div>
    </section>
  )
}
