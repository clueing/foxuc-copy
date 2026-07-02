/* 合作方式数据 */
const methods = [
  {
    title: "棋牌合作",
    description:
      "如果您熟悉本土棋牌，且有优质的地方资源，有志于成就自己的一番事业，可与网狐合作。我们会根据您的具体情况，制定符合双方利益的合作方案。",
  },
  {
    title: "渠道合作",
    description:
      "如果您掌握丰富的推广资源和渠道，欢迎您参与我们的广告投放、网络营销、地面推广等各项营销计划，将资源利用起来，充分发挥效益。",
  },
  {
    title: "其他合作",
    description:
      "在网狐的棋牌生态链中，您可以参与的方式还有：各类比赛联合主办，礼品商城、支付渠道、服务器软硬件、线下推广、资源互换等。",
  },
];

/* 合作方式区块 */
export default function OperateMethods() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* 标题 */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            可以和网狐有怎样的合作？
          </h2>
        </div>

        {/* 合作方式卡片 */}
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {methods.map((method, index) => (
            <li
              key={index}
              className="rounded-lg border border-gray-200 p-8 transition-shadow hover:shadow-lg"
            >
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                {method.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {method.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
