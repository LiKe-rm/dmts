import React from "react";
import { ProCard } from "@ant-design/pro-components"

import AttributeGraph from "@/pages/Layout/Result/ResultIntelligence/util/AttributeGraph";

const PsychologicalTracePage = () => {
    const data = {
        nodes: [
            {
                id: "aaronesau的社会属性空间",
                label: "aaronesau的社会属性空间",
                socialAttributes: [
                    {
                        key: "职业",
                        value: "智能合约审计员和web/pwn技术顾问",
                        url: ["https://aaronesau.com/"],
                    },
                ]
            },
            {
                id: "aaronesau的互联网工作空间",
                label: "aaronesau的互联网工作空间",
                socialAttributes: [
                    {
                        key: "github用户名",
                        value: "arinerron",
                        url: ["https://github.com/arinerron"],
                    },
                    {
                        key: "仓库数量",
                        value: 105,
                        url: ["https://github.com/Arinerron?tab=repositories"],
                    },
                    {
                        key: "标星数量",
                        value: 369,
                        url: ["https://github.com/arinerron"],
                    }
                ]
            },
            {
                id: "aaronesau的互联网社交空间",
                label: "aaronesau的互联网社交空间",
                socialAttributes: [
                    {
                        key: "社交言论分析-领域",
                        value: "计算机",
                        url: ["https://twitter.com/arinerron/status/1448107828846026754"],
                    }
                ]
            },
            {
                id: "jaywcjlove的性格特质空间",
                label: "jaywcjlove的性格特质空间",
                socialAttributes: [
                    {
                        key: "外倾性",
                        value: "高，个人信息残留较多",
                        url: ["https://github.com/jaywcjlove"],
                    },
                ]
            },
            {
                id: "hartescout的性格特质空间",
                label: "hartescout的性格特质空间",
                socialAttributes: [
                    {
                        key: "神经质",
                        value: "神经质(情绪稳定性)较低",
                        url: ["https://github.com/hartescout/exploitdb/blob/016ad02a70d942a7596e7b03164dc986fc38ac09/exploits/linux/remote/437.c#L106"],
                    }
                ]
            },
            {
                id: "jaywcjlove的互联网学习空间",
                label: "jaywcjlove的互联网学习空间",
                socialAttributes: [
                    {
                        key: "代码提交数量",
                        value: "6.1K",
                        url: ["https://github.com/jaywcjlove"]
                    },
                    {
                        key: "个人主页类型",
                        value: "学习笔记和项目介绍",
                        url: ["https://wangchujiang.com/"],
                    },
                ]
            },
            {
                id: "hartescout的互联网工作空间",
                label: "hartescout的互联网工作空间",
                socialAttributes: [
                    {
                        key: "互联网工作空间-提交数",
                        value: "154提交(今年来)",
                    },
                    {
                        key: "互联网工作空间-公开仓库数量",
                        value: "176 高",
                        url: ["https://github.com/hartescout?tab=repositories"],
                    },
                    {
                        key: "互联网工作空间-标星数量",
                        value: "151 高",
                        url: ["https://github.com/hartescout?tab=stars"],
                    }
                ]
            },
            {
                id: "acedrew的互联网娱乐空间",
                label: "acedrew的互联网娱乐空间",
                socialAttributes: [
                    {
                        key: "兴趣爱好",
                        value: "摄影",
                        url: ["https://mastodon.social/@hannah@social.alt-text.org/110759001920740773"],
                    }
                ]
            },
            {
                id: "acedrew的互联网社交空间",
                label: "acedrew的互联网社交空间",
                socialAttributes: [
                    {
                        key: "社交平台",
                        value: "mastodon",
                        url: "https://mastodon.social/@acedrew"
                    }
                ]
            }
        ],
        edges: [
            {
                source: "aaronesau的社会属性空间",
                target: "aaronesau的互联网社交空间",
                label: "职业",
            },
            {
                source: "aaronesau的社会属性空间",
                target: "aaronesau的互联网工作空间",
                label: "职业",
            },
            {
                source: "jaywcjlove的性格特质空间",
                target: "jaywcjlove的互联网学习空间",
                label: "外倾性",
            },
            {
                source: "hartescout的性格特质空间",
                target: "hartescout的互联网工作空间",
                label: "神经质",
            },
            {
                source: "acedrew的互联网娱乐空间",
                target: "acedrew的互联网社交空间",
                label: "兴趣爱好"
            }
        ]
    }
    return (
        <ProCard
            split="horizontal"
            headerBordered
            bordered
        >
            <ProCard
                split='vertical'
            >
                <ProCard title="社交跟踪范围">
                    <AttributeGraph data={data}></AttributeGraph>
                </ProCard>
            </ProCard>
        </ProCard >
    )
}

export default PsychologicalTracePage