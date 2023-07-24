import React from "react";
import { ProCard } from "@ant-design/pro-components"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import AttributeGraph from "@/pages/Layout/Result/ResultIntelligence/util/AttributeGraph";


const PsychologicalMultiSpacesPage = () => {
    const socialData = {
        nodes: [
            {
                id: "github.com/arinerron",
                label: "github.com/arinerron",
                socialAttributes: [
                    {
                        key: "地址",
                        value: "https://twitter.com/arinerron",
                        url: "https://twitter.com/arinerron"
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
                id: "互联网社交空间-社交匿名性",
                label: "互联网社交空间-社交匿名性",
                socialAttributes: [
                    {
                        key: "真实姓名",
                        value: "Aaron Esau",
                        url: "https://aaronesau.com/"

                    },
                    {
                        key: "推特",
                        value: "https://twitter.com/arinerron",
                        url: "https://twitter.com/arinerron"
                    },
                    {
                        key: "匿名性",
                        value: "低",
                        url: "https://twitter.com/arinerron/status/1612206626207076352"
                    },
                    {
                        key: "",
                        value: ""
                    },
                ]
            },
            {
                id: "互联网社交空间-社交言论分析",
                label: "互联网社交空间-社交言论分析",
                socialAttributes: [
                    {
                        key: "社交面貌",
                        value: "乐观",
                        url: "https://twitter.com/arinerron/status/1642778873585872896"
                    },
                    {
                        key: "领域",
                        value: "计算机",
                        url: "https://twitter.com/arinerron/status/1448107828846026754"
                    },
                    {
                        key: "特点",
                        value: "守序、传统",
                        url: "https://twitter.com/arinerron/status/1626659413519134720"
                    },
                    {
                        key: "",
                        value: "",
                    }
                ]
            },
            {
                id: "互联网社交空间-社交活跃程度",
                label: "互联网社交空间-社交活跃程度",
                socialAttributes: [
                    {
                        key: "每月发推",
                        value: "7.72",
                        url: "https://twitter.com/arinerron"
                    },
                    {
                        key: "与好友互动数",
                        value: "2.74",
                        url: "https://twitter.com/arinerron"
                    },
                    {
                        key: "活跃程度",
                        value: "相对活跃",
                        url: "https://twitter.com/arinerron"
                    },
                ]
            },

        ],
        edges: [
            {
                source: "github.com/arinerron",
                target: "互联网社交空间-社交匿名性",
            },
            {
                source: "github.com/arinerron",
                target: "互联网社交空间-社交言论分析",
            },
            {
                source: "github.com/arinerron",
                target: "互联网社交空间-社交活跃程度",
            },

        ]
    }
    const entertainmentData = {
        nodes: [
            {
                id: "github.com/acedrew",
                label: "github.com/acedrew",
                socialAttributes: [
                    {
                        key: "地址",
                        value: "https://github.com/acedrew",
                        url: "https://github.com/acedrew"
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
                id: "github.com/Adriantega12",
                label: "github.com/Adriantega12",
                socialAttributes: [
                    {
                        key: "地址",
                        value: "https://github.com/Adriantega12",
                        url: "https://github.com/Adriantega12"
                    }
                ],
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
                id: "互联网娱乐空间-1",
                label: "互联网娱乐空间",
                socialAttributes: [
                    {
                        key: "娱乐方式",
                        value: "摄影",
                    },
                    {
                        key: "来源",
                        value: "mastodon社交平台",
                        url: "https://mastodon.social/@acedrew"
                    },
                ]
            },
            {
                id: "互联网娱乐空间-2",
                label: "互联网娱乐空间",
                socialAttributes: [
                    {
                        key: "娱乐方式",
                        value: "游戏",
                    },
                    {
                        key: "来源",
                        value: "推特",
                        url: "https://twitter.com/Adriantega12/media"
                    },
                ]
            },
            {
                id: "互联网学习空间",
                label: "互联网学习空间",
                socialAttributes: [
                    {
                        key: "编程语言",
                        value: "C++->Python->Javascript",
                    },
                    {
                        key: "提交数",
                        value: "154提交(今年来)",
                    },

                    {
                        key: "进步情况",
                        value: "不明显",
                    },
                    {
                        key: "熟练程度",
                        value: "C++、python老手，javascript新手",
                    },
                    {
                        key: "来源",
                        value: "github",
                        url: "https://github.com/acedrew"
                    }
                ]
            },

        ],
        edges: [
            {
                source: "github.com/Adriantega12",
                target: "互联网娱乐空间-1",
            },
            {
                source: "github.com/acedrew",
                target: "互联网娱乐空间-2",
            },
            {
                source: "github.com/acedrew",
                target: "互联网学习空间",
            },

        ]
    }
    const workData = {
        nodes: [
            {
                id: "github.com/petermartens98",
                label: "github.com/petermartens98",
                socialAttributes: [
                    {
                        key: "地址",
                        value: "https://github.com/petermartens98",
                        url:"https://github.com/petermartens98"
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
                id: "互联网工作空间-1",
                label: "互联网工作空间-代码领域",
                socialAttributes: [
                    {
                        key: "代码领域",
                        value: "机器学习、前端开发",
                        url: "https://github.com/petermartens98"
                    },

                ],
            },
            {
                id: "互联网工作空间-2",
                label: "互联网工作空间-提交日期",
                socialAttributes: [
                    {
                        key: "提交日期",
                        value: "工作日",
                        url: "https://github.com/petermartens98/GPT4-LangChain-Agents-Research-Web-App/commits/main"
                    },
                ]
            },
            {
                id: "互联网工作空间-3",
                label: "互联网工作空间-可能职业",
                socialAttributes: [
                    {
                        key: "可能职业",
                        value: "数据分析师",
                        url: "https://github.com/petermartens98"
                    },
                ]
            },

        ],
        edges: [
            {
                source: "github.com/petermartens98",
                target: "互联网工作空间-1",
            },
            {
                source: "github.com/petermartens98",
                target: "互联网工作空间-2",
            },
            {
                source: "github.com/petermartens98",
                target: "互联网工作空间-3",
            }
        ]
    }
    const privacyData = {
        nodes: [
            {
                id: "互联网隐私空间",
                label: "互联网隐私空间",
                socialAttributes: [
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
                id: "github.com/ashawkey",
                label: "github.com/ashawkey",
                socialAttributes: [
                    {
                        key: "泄露信息",
                        value: "姓名、学历",
                    },
                    {
                        key: "危险等级",
                        value: "中等",
                    },
                    {
                        key: "来源",
                        value: "个人主页",
                        url: "https://me.kiui.moe/"

                    }

                ],
            },
            {
                id: "divyanshu-mehta.gitbook.io/researchs/",
                label: "divyanshu-mehta.gitbook.io/researchs/",
                socialAttributes: [
                    {
                        key: "泄露信息",
                        value: "社交账号、个人照片",
                        url: "https://twitter.com/gh0st_r1d3r_0x9"
                    },
                    {
                        key: "危险等级",
                        value: "高",
                    },
                    {
                        key: "来源",
                        value: "个人主页",
                        url: "https://divyanshu-mehta.gitbook.io/researchs/"
                    }
                ]
            },
            {
                id: "github.com/sachinl0har",
                label: "github.com/sachinl0har",
                socialAttributes: [
                    {
                        key: "泄露信息",
                        value: "姓名、学历、照片、各大平台账号",
                    },
                    {
                        key: "危险等级",
                        value: "超高",
                    },
                    {
                        key: "来源1",
                        value: "推特",
                        url: "https://twitter.com/sachinl0har"
                    },
                    {
                        key: "来源2",
                        value: "领英",
                        url: "https://www.linkedin.com/in/sachinl0har/"
                    },
                    {
                        key: "来源3",
                        value: "个人主页",
                        url: "https://www.sachinlohar.com/#about"
                    }
                ]
            },

        ],
        edges: [
            {
                source: "互联网隐私空间",
                target: "github.com/ashawkey",
            },
            {
                source: "互联网隐私空间",
                target: "divyanshu-mehta.gitbook.io/researchs/",
            },
            {
                source: "互联网隐私空间",
                target: "github.com/sachinl0har",
            }
        ]
    }
    const timeData = {
        nodes: [
            {
                id: "github.com/JehanKandy",
                label: "github.com/JehanKandy",
                socialAttributes: [
                    {
                        key: "地址",
                        value: "https://github.com/JehanKandy",
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
                id: "时间管理空间-1",
                label: "时间管理空间-提交时间",
                socialAttributes: [
                    {
                        key: "上午6：00~9：00",
                        value: "76%",
                        url: "https://github.com/JehanKandy"
                    },
                    {
                        key: "其他",
                        value: "24%",
                        url: "https://github.com/JehanKandy"
                    },

                ],
            },
            {
                id: "时间管理空间-2",
                label: "时间管理空间-学习工作习惯",
                socialAttributes: [
                    {
                        key: "学习时间",
                        value: "白天",
                        url: "https://github.com/JehanKandy"
                    },
                    {
                        key: "工作时间",
                        value: "白天",
                        url: "https://github.com/JehanKandy"
                    },
                ]
            },
            {
                id: "时间管理空间-3",
                label: "时间管理空间-管理能力",
                socialAttributes: [
                    {
                        key: "自律性",
                        value: "良好",
                    },
                ]
            },

        ],
        edges: [
            {
                source: "github.com/JehanKandy",
                target: "时间管理空间-1",
            },
            {
                source: "github.com/JehanKandy",
                target: "时间管理空间-2",
            },
            {
                source: "github.com/JehanKandy",
                target: "时间管理空间-3",
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
                <ProCard title="互联网社交空间">
                    <AttributeGraph data={socialData}></AttributeGraph>
                </ProCard>
                <ProCard title="互联网娱乐空间、互联网学习空间">
                    <AttributeGraph data={entertainmentData}></AttributeGraph>
                </ProCard>
            </ProCard>
            <ProCard
                split='vertical'
            >
                <ProCard title="互联网工作空间">
                    <AttributeGraph data={workData}></AttributeGraph>
                </ProCard>
                <ProCard title="互联网隐私空间">
                    <AttributeGraph data={privacyData}></AttributeGraph>
                </ProCard>
            </ProCard>
            <ProCard
                split='vertical'
            >
                <ProCard title="时间管理空间">
                    <AttributeGraph data={timeData}></AttributeGraph>
                </ProCard>
            </ProCard>
        </ProCard>
    )
}

export default PsychologicalMultiSpacesPage