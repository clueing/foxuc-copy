import Image from "next/image";
import Link from "next/link";

/* 新闻详情内容组件 */
export default function NewsDetailContent() {
  return (
    <div className="w-full">
      {/* 标题 */}
      <div className="text-[26px] font-bold mb-[20px]">
        网狐卓越Creator平台全新上市：做市场认可的创新型棋牌
      </div>

      {/* 信息栏 */}
      <div className="flex items-center text-[14px] text-[#999] mb-[30px] pb-[20px] border-b border-[#dedede]">
        <span className="mr-[20px]">发布时间：2019-08-20 14:52</span>
        <span className="mr-[20px]">编辑：网狐管理员</span>
        <span>来源：深圳市网狐科技</span>
      </div>

      {/* 文章内容 */}
      <div className="text-[16px] leading-[2] text-[#333]">
        <p className="text-indent-[2em] mb-[20px]">
          <span style={{ fontSize: 16 }}>
            生而不凡，是为卓越。2019年8月，《网狐卓越平台》正式上市。过去的一年，棋牌市场发生了很多变化，但网狐相信，
          </span>
          <strong style={{ fontSize: 16 }}>
            棋牌市场的赢家，永远都属于死磕产品质量的坚韧者
          </strong>
          <span style={{ fontSize: 16 }}>。</span>
        </p>

        <p className="text-center mb-[20px]">
          <Image
            src="/images/news/detail-2281.png"
            alt="网狐卓越平台"
            width={600}
            height={400}
            className="mx-auto"
          />
        </p>

        <p className="text-indent-[2em] mb-[20px]">
          <span style={{ fontSize: 16 }}>
            从金币到比赛，从比赛到房卡，从房卡到俱乐部，从棋牌产品功能的不断变化中，我们其实可以看到一个最浅显，同时也是最重要的道理：
          </span>
          <strong style={{ fontSize: 16 }}>
            转变产品思路，转变市场思路，做差异化竞争
          </strong>
          <span style={{ fontSize: 16 }}>
            ，是棋牌产品成功的关键。而《网狐卓越平台》，正是网狐科技在后房卡时代的首款差异化棋牌产品。
          </span>
        </p>

        <p className="text-indent-[2em] mb-[20px]">
          <strong style={{ color: "#337FE5", fontSize: 16 }}>
            COCOS-Creator引擎开发，掌控三端用户
          </strong>
        </p>

        <p className="text-indent-[2em] mb-[20px]">
          <span style={{ fontSize: 16 }}>
            《网狐卓越平台》
          </span>
          <strong style={{ fontSize: 16 }}>
            采用COCOS-Creator引擎开发，开发语言为Typescript。
          </strong>
          <span style={{ fontSize: 16 }}>
            客户端的大厅和游戏全部重构，界面UI经过全新设计，游戏画质更加精美。而Creator引擎最大的优势在于：一套代码既可以发布成app，也可以发布为H5的网页模式。对运营商来说，这意味着只需要维护一套代码，就可以掌控APP、PC网页、H5三种终端。
          </span>
        </p>

        <p className="mb-[20px]">
          <span style={{ fontSize: 16 }}>
            更重要的是，这意味着运营商能极大地
          </span>
          <strong style={{ fontSize: 16 }}>
            提高二次开发效率，降低运营维护成本
          </strong>
          <span style={{ fontSize: 16 }}>
            。原本可能APP版和H5版各需要一个人来做运营维护，现在只需要一个人。在程序员人工成本高昂的今天，这无疑是运营商所迫切需要的。
          </span>
        </p>

        <p className="text-indent-[2em] mb-[20px]">
          <strong style={{ color: "#337FE5", fontSize: 16 }}>
            更高级别安全防护策略，为稳定运营保驾护航
          </strong>
        </p>

        <p className="text-indent-[2em] mb-[20px]">
          <span style={{ fontSize: 16 }}>
            在棋牌游戏行业，服务器安全对平台的运营来说至关重要。在通常情况下，一旦服务器被恶意攻击导致不稳定或挂掉，对玩家的游戏体验来说是致命的。而在《网狐卓越平台》中，我们做了更高级别的安全防护策略。
          </span>
        </p>

        <p className="text-indent-[2em] mb-[20px]">
          <span style={{ fontSize: 16 }}>
            《网狐卓越平台》可以开启多个链接服务器，即使某个链接服务器被攻击挂掉，玩家也可以连接其他链接服务器进行游戏，不影响游戏的正常进行。有效降低因服务器攻击问题导致的玩家流失。
          </span>
        </p>

        <p className="text-indent-[2em] mb-[20px]">
          <strong style={{ color: "#337FE5", fontSize: 16 }}>
            全新WebSocket通讯方式，让后台管理更简单
          </strong>
        </p>

        <p className="text-indent-[2em] mb-[20px]">
          <span style={{ fontSize: 16 }}>
            我们对《网狐卓越平台》的服务端进行了全面性重构。通信方式变为WebSocket通信方式，支持网站与服务端的即时通信，客户在网站的上进行的修改可以及时通知到服务端与客户端，不用再手动去刷新，让运营商后台管理更简单。
          </span>
        </p>

        <p className="text-indent-[2em] mb-[20px]">
          <strong style={{ color: "#337FE5", fontSize: 16 }}>
            完美解决苹果企业签掉包痛点，规避微信域名封禁问题
          </strong>
        </p>

        <p className="text-indent-[2em] mb-[20px]">
          <span style={{ fontSize: 16 }}>
            对于棋牌运营商来说，很多时候最头疼的问题不是产品功能问题，而是苹果企业签掉包和微信域名封禁问题。而这一次，我们给运营商提供了解决方案。《网狐卓越平台》支持多种登陆模式、支持浏览器运行。就算苹果企业签名掉包，苹果用户也可以通过浏览器继续进行游戏。
          </span>
        </p>

        <p className="text-indent-[2em] mb-[20px]">
          <strong style={{ color: "#337FE5", fontSize: 16 }}>
            全民推广三级返利，代理销售管理后台
          </strong>
        </p>

        <p className="text-indent-[2em] mb-[20px]">
          <span style={{ fontSize: 16 }}>
            对于一款成功的棋牌产品来说，本身的推广机制至关重要。《网狐卓越平台》采用了全民推广、代理销售两套方案。助力运营商推广，轻松掌握用户裂变。
          </span>
          <strong style={{ fontSize: 16 }}>每个玩家都可以成为推广员</strong>
          <span style={{ fontSize: 16 }}>
            ，通过推广过来玩家的虚拟货币消耗返利。
          </span>
          <strong style={{ fontSize: 16 }}>
            代理更有直接销售虚拟货币的功能
          </strong>
          <span style={{ fontSize: 16 }}>，轻松囊括更多高端用户。</span>
        </p>

        <p className="text-center mb-[20px]">
          <span style={{ color: "#E53333", fontSize: 16 }}>
            扫描二维码了解更多卓越平台细节
          </span>
        </p>

        <p className="text-center mb-[20px]">
          <Image
            src="/images/news/detail-3363.jpg"
            alt="了解更多"
            width={213}
            height={214}
            className="mx-auto"
          />
        </p>

        <p className="text-center text-[#E53333] mb-[20px]">
          想开发一款迅速盈利的棋牌游戏，欢迎咨询热线电话：400-000-7043
        </p>
      </div>

      {/* 版权声明 */}
      <p className="text-[14px] text-[#999] mt-[30px] pt-[20px] border-t border-[#dedede]">
        本文版权归网狐所有，如若转载请注明出处
      </p>

      {/* 分享 */}
      <div className="flex items-center mt-[20px] py-[20px] border-t border-[#dedede]">
        <span className="text-[14px] text-[#666] mr-[10px]">分享到：</span>
        <span className="text-[14px] text-[#666]">( 全文完 )</span>
      </div>

      {/* 上一篇/下一篇 */}
      <div className="mt-[30px] pt-[20px] border-t border-[#dedede]">
        <p className="mb-[10px]">
          <span className="text-[#666]">上一篇：</span>
          <Link
            href="/news/12959"
            className="text-black hover:text-red-500 transition-colors"
          >
            天神娱乐朱晔致个别中小股东公开信
          </Link>
        </p>
        <p>
          <span className="text-[#666]">下一篇：</span>
          <Link
            href="/news/12961"
            className="text-black hover:text-red-500 transition-colors"
          >
            网狐卓越Creator平台全新上市：做市场认可的创新型棋牌
          </Link>
        </p>
      </div>
    </div>
  );
}
