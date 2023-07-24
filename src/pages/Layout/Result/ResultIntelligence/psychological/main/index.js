import React from "react";
import { useStore } from "@/store";
import { ProCard } from "@ant-design/pro-components"
import { Table } from "antd";

import "./index.scss"


const PsychologicalTablePage = () => {
    const { resultStore } = useStore()
    return (
        <ProCard
            headerBordered
            bordered
            split="horizontal"
        >
            <ProCard
                title="代码作者全场景心理特征融合算法"
                subTitle="社会属性达10种，多重空间达10种，社交跟踪范围达10层"
            >
                <Table
                    dataSource={resultStore.outlineTableData.psychological.data}
                    columns={resultStore.outlineTableData.psychological.columns}
                    pagination={{ pageSize: 100 }}
                    rowClassName={(_, index) => {
                        if (index <= 11) {
                            return "odd"
                        } else if (index <= 21) {
                            return "even"
                        } else {
                            return "odd"
                        }
                    }}
                />
            </ProCard>
        </ProCard >
    )
}

export default PsychologicalTablePage