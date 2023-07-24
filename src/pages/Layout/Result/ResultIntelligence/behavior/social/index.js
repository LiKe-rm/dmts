import React from "react";
import { ProCard } from "@ant-design/pro-components"

import AttributeGraph from "@/pages/Layout/Result/ResultIntelligence/util/AttributeGraph";

const BehaviorSocialPage = () => {
    const ageData = {
        nodes: [
            {
                id: "github.com/calaylin",
                label: "github.com/calaylin",
                socialAttributes: [
                    {
                        key: "总结",
                        value: "",
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
                id: "年龄",
                label: "年龄",
                socialAttributes: [
                    {
                        key: "年龄分布",
                        value: "大学生",
                        url: ["https://github.com/calaylin"]
                    }
                ]
            },
            {
                id: "性别",
                label: "性别",
                socialAttributes: [
                    {
                        key: "性别识别结果",
                        value: "女性",
                        url: ["https://avatars.githubusercontent.com/u/1504187?v=4"]
                    }
                ]
            },
            {
                id: "地域",
                label: "地域",
                socialAttributes: [
                    {
                        key: "地域分布",
                        value: "西雅图，华盛顿",
                        url: ["https://github.com/calaylin"]
                    }
                ]
            },
            {
                id: "受教育程度",
                label: "受教育程度",
                socialAttributes: [
                    {
                        key: "教育程度",
                        value: "大学生",
                        url: ["https://github.com/calaylin"],
                    },
                    {
                        key: "学校名称",
                        value: "华盛顿大学（University of Washington）",
                        url: ["https://github.com/calaylin"],
                    }
                ]
            },
            {
                id: "独立合作",
                label: "独立合作",
                socialAttributes: [
                    {
                        key: "编写代码协作习惯",
                        value: "倾向个人",
                        url: ["https://github.com/calaylin"],
                    },
                    {
                        key: "合作案例数量",
                        value: "1",
                        url: ["https://github.com/calaylin/CodeStylometry/graphs/contributors"],
                    },
                ]
            },
        ],
        edges: [
            {
                source: "github.com/calaylin",
                target: "年龄",
            },
            {
                source: "github.com/calaylin",
                target: "性别",
            },
            {
                source: "github.com/calaylin",
                target: "地域",
            },
            {
                source: "github.com/calaylin",
                target: "受教育程度",
            },
            {
                source: "github.com/calaylin",
                target: "独立合作",
            },
        ]
    }
    const engineeringData = {
        nodes: [
            {
                id: "github.com/TufayelLUS/LinkedIn-Scraper",
                label: "github.com/TufayelLUS/LinkedIn-Scraper",
                socialAttributes: [
                    {
                        key: "总结",
                        value: "研发规模小，代码研发周期长，具有多种研发技术的恶意代码仓库"
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
                id: "代码研发周期",
                label: "代码研发周期",
                socialAttributes: [
                    {
                        key: "研发开始时间",
                        value: "2020-09-28",
                        url: ["https://api.github.com/repos/TufayelLUS/LinkedIn-Scraper"],
                    },
                    {
                        key: "研发结束时间",
                        value: "2023-07-17",
                        url: ["https://api.github.com/repos/TufayelLUS/LinkedIn-Scraper"],
                    },
                    {
                        key: "代码研发时长",
                        value: "2年9个月",
                        url: ["https://api.github.com/repos/TufayelLUS/LinkedIn-Scraper"],
                    }
                ]
            },
            {
                id: "代码研发规模",
                label: "代码研发规模",
                socialAttributes: [
                    {
                        key: "参与开发人数",
                        value: "1",
                        url: ["https://github.com/TufayelLUS/LinkedIn-Scraper/graphs/contributors"],
                    },
                    {
                        key: "代码存储大小",
                        value: "39",
                        url: ["https://api.github.com/repos/TufayelLUS/LinkedIn-Scraper"],
                    }
                ]
            },
            {
                id: "研发管理水平",
                label: "研发管理水平",
                socialAttributes: [
                    {
                        key: "参与开发人数",
                        value: "1",
                        url: ["https://github.com/TufayelLUS/LinkedIn-Scraper/graphs/contributors"],
                    },
                    {
                        key: "研发使用技术",
                        value: "crawler scraper linkedin leads email-marketing digital-marketing scraper-engine linkedin-bot scrape-email linkedin-scraper email-scraper scrape-emails",
                        url: ["https://github.com/TufayelLUS/LinkedIn-Scraper"],
                    }
                ]
            },
        ],
        edges: [
            {
                source: "github.com/TufayelLUS/LinkedIn-Scraper",
                target: "代码研发周期",
            },
            {
                source: "github.com/TufayelLUS/LinkedIn-Scraper",
                target: "代码研发规模",
            },
            {
                source: "github.com/TufayelLUS/LinkedIn-Scraper",
                target: "研发管理水平",
            }
        ]
    }

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
            }
        ],
        edges: [
            {
                source: "github.com/Adriantega12",
                target: "互联网娱乐空间-1",
            },
            {
                source: "github.com/acedrew",
                target: "互联网娱乐空间-2",
            }
        ]
    }

    const studyData = {
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
            }
        ],
        edges: [
            {
                source: "github.com/acedrew",
                target: "互联网学习空间",
            }
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

    return (
        <ProCard
            title="社会行为模式"
            split="horizontal"
            headerBordered
            bordered
        >
            <ProCard title="独立合作模式">
                <AttributeGraph data={ageData}></AttributeGraph>
            </ProCard>
            <ProCard title="工程研发模式">
                <AttributeGraph data={engineeringData}></AttributeGraph>
            </ProCard>
            <ProCard title="社交模式">
                <AttributeGraph data={socialData}></AttributeGraph>
            </ProCard>
            <ProCard title="娱乐模式">
                <AttributeGraph data={entertainmentData}></AttributeGraph>
            </ProCard>
            <ProCard title="学习模式">
                <AttributeGraph data={studyData}></AttributeGraph>
            </ProCard>
            <ProCard title="工作模式">
                <AttributeGraph data={workData}></AttributeGraph>
            </ProCard>
            <ProCard title="时间管理模式">
                <AttributeGraph data={timeData}></AttributeGraph>
            </ProCard>
            <ProCard title="隐私保护模式">
                <AttributeGraph data={privacyData}></AttributeGraph>
            </ProCard>
        </ProCard>
    )
}

export default BehaviorSocialPage