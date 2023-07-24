import React from "react";
import { ProCard } from "@ant-design/pro-components"

import AttributeGraph from "@/pages/Layout/Result/ResultIntelligence/util/AttributeGraph";
import { Image } from "antd";

const FeatureFivePage = () => {
    const data = {
        nodes: [
            {
                id: "github.com/hartescout",
                label: "github.com/hartescout",
                socialAttributes: [
                    {
                        key: "总结",
                        value: "开放性较高，神经质(情绪稳定性)较低"
                    }
                ],
                // 为分析节点单独设置颜色,覆盖 default 配置
                style: {
                    fill: "#32E0C4"
                },
                labelCfg: {
                    style: {
                        fill: "#32E0C4"
                    }
                }
            },
            {
                id: "github.com/jaywcjlove",
                label: "github.com/jaywcjlove",
                socialAttributes: [
                    {
                        key: "总结",
                        value: "宜人性和外倾性较高"
                    }
                ],
                // 为分析节点单独设置颜色,覆盖 default 配置
                style: {
                    fill: "#32E0C4"
                },
                labelCfg: {
                    style: {
                        fill: "#32E0C4"
                    }
                }
            },
            {
                id: "开放性",
                label: "开放性",
                socialAttributes: [
                    {
                        key: "公开仓库数量",
                        value: "176 高",
                        url: ["https://github.com/hartescout?tab=repositories"],
                    },
                    {
                        key: "标星数量",
                        value: "151 高",
                        url: ["https://github.com/hartescout?tab=stars"],
                    },
                    {
                        key: "总结",
                        value: "开放性较高，易于接受新鲜事物"
                    },
                ]
            },
            {
                id: "神经质",
                label: "神经质",
                socialAttributes: [
                    {
                        key: "敏感词汇数量",
                        value: "680",
                        url: ["https://github.com/search?q=owner%3Ahartescout%20fuck&type=code"],
                    },
                    {
                        key: "敏感词汇频率",
                        value: "较常见",
                        url: ["https://github.com/hartescout/exploitdb/blob/016ad02a70d942a7596e7b03164dc986fc38ac09/exploits/linux/remote/437.c#L106"],
                    },
                    {
                        key: "总结",
                        value: "情绪稳定性差"
                    },
                ]
            },
            {
                id: "尽责性",
                label: "尽责性",
                 socialAttributes: [
                     {
                         key: "仓库文档和链接",
                         value: "结构清晰、可读性高",
                         url:["https://github.com/jaywcjlove/awesome-mac"]
                     },
                     {
                        key: "参考备忘清单",
                        value: "为开发人员分享快速参考备忘清单(速查表)",
                        url:["https://github.com/jaywcjlove/reference"]
                    },
                 ]
             },
            {
                id: "宜人性",
                label: "宜人性",
                socialAttributes: [
                    {
                        key: "开发成员Mr-Un1k0d3r技术方向",
                        value: "红队、测试",
                        url: ["https://github.com/Mr-Un1k0d3r"],
                    },
                ]
            },
            {
                id: "外倾性",
                label: "外倾性",
                socialAttributes: [
                    {
                        key: "社交账号残留",
                        value: "微博、推特、电子邮箱、主页",
                        url: ["https://github.com/jaywcjlove"],
                    },
                    {
                        key: "地域信息残留",
                        value: "中国上海",
                        url: ["https://github.com/jaywcjlove"],
                    },
                    {
                        key: "总结",
                        value: "外倾性高，互联网遗留大量个人信息"
                    }
                ]
            },
        ],
        edges: [
            {
                source: "github.com/hartescout",
                target: "开放性",
            },
            {
                source: "github.com/hartescout",
                target: "神经质",
            },
            {
                source: "github.com/jaywcjlove",
                target: "宜人性",
            },
            {
                 source: "github.com/Mr-Un1k0d3r/MaliciousMacroGenerator",
                 target: "尽责性",
             },
            {
                source: "github.com/jaywcjlove",
                target: "外倾性",
            }
        ]
    }
    return (
        <ProCard
            title="团队成员特征"
            split="horizontal"
            headerBordered
            bordered
        >
            <ProCard>
                <AttributeGraph data={data}></AttributeGraph>
            </ProCard>
            <ProCard
                split="vertical"
            >
                <ProCard title={<p><a href="https://github.com/hartescout">github.com/hartescout</a>大五人格统计结果</p>}>
                    <Image
                        src={require("@/assets/Result/IntelligenceFeature/1.png")}
                    />
                </ProCard>
                <ProCard title={<p><a href="https://github.com/jaywcjlove">github.com/jaywcjlove</a>大五人格统计结果</p>}>
                    <Image
                        src={require("@/assets/Result/IntelligenceFeature/2.png")}
                    />
                </ProCard>
            </ProCard>
        </ProCard>
    )
}

export default FeatureFivePage