import Image from "next/image";

/* 合作流程步骤 */
const steps = [
  "合作申请",
  "合作洽谈",
  "条件审核",
  "合同签订",
  "技术准备",
  "团队组建",
  "平台上线",
];

/* 合作流程区块 */
export default function OperateFlow() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* 标题 */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">合作流程</h2>
        </div>

        {/* 流程步骤 */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              {/* 步骤项 */}
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500 text-lg font-bold text-white">
                  {index + 1}
                </div>
                <p className="mt-2 text-sm font-medium text-gray-700">
                  {step}
                </p>
              </div>
              {/* 箭头（非最后一个） */}
              {index < steps.length - 1 && (
                <div className="mx-3">
                  <Image
                    src="/images/operate/flow_icon.png"
                    alt=""
                    width={30}
                    height={30}
                    className="h-[30px] w-[30px] object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
