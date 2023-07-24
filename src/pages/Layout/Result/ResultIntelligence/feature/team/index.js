import React from "react";
import { ProCard } from "@ant-design/pro-components"

import AttributeGraph from "@/pages/Layout/Result/ResultIntelligence/util/AttributeGraph";

const FeatureTeamPage = () => {
    const data = {
        nodes: [
            {
                id: "github.com/Mr-Un1k0d3r/MaliciousMacroGenerator",
                label: "github.com/Mr-Un1k0d3r/MaliciousMacroGenerator",
                socialAttributes: [
                    {
                        key: "总结",
                        value: "团体规模小，团体成员技术集中于红队、安全，代码可信程度极高"
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
                id: "团队规模",
                label: "团队规模",
                socialAttributes: [
                    {
                        key: "项目团体人数",
                        value: "6",
                        url: ["https://github.com/Mr-Un1k0d3r/MaliciousMacroGenerator/graphs/contributors"],
                    },
                ]
            },
            {
                id: "团队技术水平",
                label: "团队技术水平",
                socialAttributes: [
                    {
                        key: "研发使用技术",
                        value: "无",
                    },
                    {
                        key: "代码规范聚合度",
                        value: "高",
                        url: ["https://github.com/Mr-Un1k0d3r/MaliciousMacroGenerator/blob/master/TEMPLATE.md"],
                    }
                ]
            },
            {
                id: "团队成员差异",
                label: "团队成员差异",
                socialAttributes: [
                    {
                        key: "开发成员Mr-Un1k0d3r技术方向",
                        value: "红队、测试",
                        url: ["https://github.com/Mr-Un1k0d3r"],
                    },
                    {
                        key: "开发成员infosecn1nja技术方向",
                        value: "安全研究、红队、对抗模拟、威胁情报收集",
                        url: ["https://github.com/infosecn1nja"],
                    },
                    {
                        key: "开发成员mr-sato技术方向",
                        value: "无",
                        url: ["https://github.com/mr-sato"],
                    },
                    {
                        key: "开发成员taherio技术方向",
                        value: "无",
                        url: ["https://github.com/taherio"],
                    },
                    {
                        key: "开发成员tothi技术方向",
                        value: "漏洞、代理劫持",
                        url: ["https://github.com/tothi"],
                    },
                    {
                        key: "总结",
                        value: "团体成员技术差异小、方向集中：安全、红队"
                    }
                ]
            },
            {
                id: "团队核心成员",
                label: "团队核心成员",
                socialAttributes: [
                    {
                        key: "开发成员1",
                        value: "Mr-Un1k0d3r",
                        url: ["https://github.com/Mr-Un1k0d3r"],
                    },
                    {
                        key: "开发成员2",
                        value: "infosecn1nja",
                        url: ["https://github.com/infosecn1nja"],
                    },
                    {
                        key: "开发成员3",
                        value: "mr-sato",
                        url: ["https://github.com/mr-sato"],
                    },
                    {
                        key: "开发成员4",
                        value: "taherio",
                        url: ["https://github.com/taherio"],
                    },
                    {
                        key: "开发成员5",
                        value: "tothi",
                        url: ["https://github.com/tothi"],
                    },
                ]
            },
            {
                id: "团队可信程度",
                label: "团队可信程度",
                socialAttributes: [
                    {
                        key: "标星数量",
                        value: "804",
                        url: ["https://github.com/Mr-Un1k0d3r/MaliciousMacroGenerator"],
                    },
                    {
                        key: "分叉数量",
                        value: "209",
                        url: ["https://github.com/Mr-Un1k0d3r/MaliciousMacroGenerator"],
                    },
                    {
                        key: "关注数量",
                        value: "43",
                        url: ["https://github.com/Mr-Un1k0d3r/MaliciousMacroGenerator"],
                    },
                    {
                        key: "可信程度总得分",
                        value: "1517 (804+43*2+209*3) 极高",
                    },
                ]
            },
        ],
        edges: [
            {
                source: "github.com/Mr-Un1k0d3r/MaliciousMacroGenerator",
                target: "团队规模",
            },
            {
                source: "github.com/Mr-Un1k0d3r/MaliciousMacroGenerator",
                target: "团队技术水平",
            },
            {
                source: "github.com/Mr-Un1k0d3r/MaliciousMacroGenerator",
                target: "团队成员差异",
            },
            {
                source: "github.com/Mr-Un1k0d3r/MaliciousMacroGenerator",
                target: "团队核心成员",
            },
            {
                source: "github.com/Mr-Un1k0d3r/MaliciousMacroGenerator",
                target: "团队可信程度",
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
        </ProCard>
    )
}

export default FeatureTeamPage