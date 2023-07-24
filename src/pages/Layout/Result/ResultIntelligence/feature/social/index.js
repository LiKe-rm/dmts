import React from "react";
import { ProCard } from "@ant-design/pro-components"

import AttributeGraph from "@/pages/Layout/Result/ResultIntelligence/util/AttributeGraph";

const FeatureSocialPage = () => {
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

    const careerData = {
        nodes: [
            {
                id: "github.com/Rapptz/Gears",
                label: "github.com/Rapptz/Gears",
                socialAttributes: [
                    {
                        key: "兴趣爱好",
                        value: "游戏和安全",
                        url: ["https://github.com/W4RH4WK/W4RH4WK/blob/main/README.md"]
                    },
                    {
                        key: "职业特征",
                        value: "红客",
                        url: ["https://camo.githubusercontent.com/2fbf8f2cf3daa06e08af8dfc9a6d60b25c82f2440baa5c804a634f3cf16178fe/68747470733a2f2f6d6574726963732e6c65636f712e696f2f6d6f6c6f63682d2d3f74656d706c6174653d636c617373696326616368696576656d656e74733d3126616368696576656d656e74732e7468726573686f6c643d4326616368696576656d656e74732e736563726574733d7472756526616368696576656d656e74732e646973706c61793d64657461696c656426616368696576656d656e74732e6c696d69743d3026636f6e6669672e74696d657a6f6e653d416d65726963612532464368696361676f"]
                    },
                    {
                        key: "社交程度",
                        value: "高",
                        url: ["https://twitter.com/jmhobbs"]
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
                id: "github.com/W4RH4WK/Raygun",
                label: "github.com/W4RH4WK/Raygun",
                socialAttributes: [
                    {
                        key: "兴趣爱好",
                        value: "游戏和安全",
                        url: ["https://github.com/W4RH4WK/W4RH4WK/blob/main/README.md"]
                    }
                ]
            },
            {
                id: "github.com/moloch--/Unzpaq-g",
                label: "github.com/moloch--/Unzpaq-g",
                socialAttributes: [
                    {
                        key: "职业特征",
                        value: "红客",
                        url: ["https://camo.githubusercontent.com/2fbf8f2cf3daa06e08af8dfc9a6d60b25c82f2440baa5c804a634f3cf16178fe/68747470733a2f2f6d6574726963732e6c65636f712e696f2f6d6f6c6f63682d2d3f74656d706c6174653d636c617373696326616368696576656d656e74733d3126616368696576656d656e74732e7468726573686f6c643d4326616368696576656d656e74732e736563726574733d7472756526616368696576656d656e74732e646973706c61793d64657461696c656426616368696576656d656e74732e6c696d69743d3026636f6e6669672e74696d657a6f6e653d416d65726963612532464368696361676f"]
                    }
                ]
            },
            {
                id: "github.com/jmhobbs/libvcvideo",
                label: "github.com/jmhobbs/libvcvideo",
                socialAttributes: [
                    {
                        key: "社交程度",
                        value: "高",
                        url: ["https://twitter.com/jmhobbs"]
                    }
                ]
            },
            {
                id: "github.com/5l1v3r1/ESP01_DHT11_MQTT_Publisher",
                label: "github.com/5l1v3r1/ESP01_DHT11_MQTT_Publisher",
                socialAttributes: []
            },
            {
                id: "github.com/nurupo/nfk-lobby",
                label: "github.com/nurupo/nfk-lobby",
                socialAttributes: []
            },
            {
                id: "github.com/Rapptz/jsonpp",
                label: "github.com/Rapptz/jsonpp",
                socialAttributes: []
            }
        ],
        edges: [
            {
                source: "github.com/Rapptz/Gears",
                target: "github.com/Rapptz/jsonpp",
            },
            {
                source: "github.com/Rapptz/Gears",
                target: "github.com/W4RH4WK/Raygun",
                label: "兴趣爱好"
            },
            {
                source: "github.com/Rapptz/Gears",
                target: "github.com/moloch--/Unzpaq-g",
                label: "职业特征"
            },
            {
                source: "github.com/Rapptz/Gears",
                target: "github.com/jmhobbs/libvcvideo",
                label: "社交程度"
            },
            {
                source: "github.com/Rapptz/Gears",
                target: "github.com/5l1v3r1/ESP01_DHT11_MQTT_Publisher",
            },
            {
                source: "github.com/Rapptz/Gears",
                target: "github.com/nurupo/nfk-lobby",
            }
        ]
    }

    const socialStatusData = {
        nodes: [
            {
                id: "github.com/professorisidro",
                label: "github.com/professorisidro",
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
                id: "社会地位",
                label: "社会地位",
                socialAttributes: [
                    {
                        key: "粉丝数量",
                        value: "613",
                        url: ["https://github.com/professorisidro?tab=followers"]
                    },
                    {
                        key: "被点赞数量",
                        value: "119",
                        url: ["https://camo.githubusercontent.com/568836cc0470869f813aaef7ea45632a0c8aa2fbc9cd56a754bc10c451feb9df/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d70726f666573736f7269736964726f2673686f775f69636f6e733d74727565267468656d653d64726163756c6126696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565"]
                    },
                    {
                        key: "总结",
                        value: "受编程爱好者喜爱，被接纳度高"
                    }
                ]
            },
            {
                id: "地域",
                label: "地域",
                socialAttributes: [
                    {
                        key: "地域分布",
                        value: "巴西",
                        url: ["https://github.com/professorisidro"]
                    },
                ]
            },
            {
                id: "职业特征",
                label: "职业特征",
                socialAttributes: [
                    {
                        key: "兴趣爱好偏向",
                        value: "游戏开发，Java",
                        url: ["https://github.com/professorisidro"]
                    },
                ]
            },
        ],
        edges: [
            {
                source: "github.com/professorisidro",
                target: "社会地位",
            },
            {
                source: "github.com/professorisidro",
                target: "地域",
            },
            {
                source: "github.com/professorisidro",
                target: "职业特征",
            },
        ]
    }

    const economicData = {
        nodes: [
            {
                id: "github.com/tedaditya",
                label: "github.com/tedaditya",
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
                id: "经济地位",
                label: "经济地位",
                socialAttributes: [
                    {
                        key: "购物偏向",
                        value: "物联网设备",
                        url: ["https://twitter.com/tedaditya/status/1632955286959927297"]
                    }
                ]
            },
        ],
        edges: [
            {
                source: "github.com/tedaditya",
                target: "经济地位",
            },
        ]
    }

    const religionData = {
        nodes: [
            {
                id: "github.com/agbolade667",
                label: "github.com/agbolade667",
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
                id: "宗教背景",
                label: "宗教背景",
                socialAttributes: [
                    {
                        key: "宗教倾向",
                        value: "基督教",
                        url: ["https://github.com/agbolade667"]
                    }
                ]
            },
            {
                id: "性别",
                label: "性别",
                socialAttributes: [
                    {
                        key: "性别",
                        value: "男",
                        url: ["https://avatars.githubusercontent.com/u/24415969?v=4"]
                    }
                ]
            },
            {
                id: "地域",
                label: "地域",
                socialAttributes: [
                    {
                        key: "地域分布",
                        value: "尼日利亚拉各斯",
                        url: ["https://github.com/agbolade667"]
                    }
                ]
            },
        ],
        edges: [
            {
                source: "github.com/agbolade667",
                target: "宗教背景",
            },
            {
                source: "github.com/agbolade667",
                target: "性别",
            },
            {
                source: "github.com/agbolade667",
                target: "地域",
            },
        ]
    }

    const languageFeatureData = {
        nodes: [
            {
                id: "github.com/Jiab77",
                label: "github.com/Jiab77",
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
                id: "语言特征",
                label: "语言特征",
                socialAttributes: [
                    {
                        key: "语言习惯倾向",
                        value: "倾向于开心、笑哭的表情",
                        url: ["https://twitter.com/Jiab77"]
                    }
                ]
            },
        ],
        edges: [
            {
                source: "github.com/Jiab77",
                target: "语言特征",
            },
        ]
    }

    return (
        <ProCard
            title="社会态特征（社会属性）"
            split="horizontal"
            headerBordered
            bordered
        >
            <ProCard title="年龄、地域、性别、受教育程度和独立合作">
                <AttributeGraph data={ageData}></AttributeGraph>
            </ProCard>
            <ProCard title="社交程度、兴趣爱好和职业特征">
                <AttributeGraph data={careerData}></AttributeGraph>
            </ProCard>
            <ProCard title="社会地位、地域和职业特征">
                <AttributeGraph data={socialStatusData}></AttributeGraph>
            </ProCard>
            <ProCard title="经济地位">
                <AttributeGraph data={economicData}></AttributeGraph>
            </ProCard>
            <ProCard title="宗教背景、性别和地域">
                <AttributeGraph data={religionData}></AttributeGraph>
            </ProCard>
            <ProCard title="语言特征">
                <AttributeGraph data={languageFeatureData}></AttributeGraph>
            </ProCard>
        </ProCard>
    )
}

export default FeatureSocialPage