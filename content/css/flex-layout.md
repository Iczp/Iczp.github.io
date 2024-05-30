# flex 排版



## flex-flow

- 复合属性。flex-direction flex-wrap

## flex-direction

- 该属性通过定义 flex 容器的主轴方向来决定 felx 子项在 flex 容器中的位置。
- 默认值：row
- 属性值：
  - row：从左到右为主轴
  - row-reverse：从右到做为主轴
  - column：从上到下为主轴
  - column-reverse：从下到上为主轴

## flex-wrap

- 该属性控制flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向。
- 默认值：nowrap
- 属性值：
  - nowrap：单行
  - wrap：多行，副轴从上到下
  - wrap-reverse：多行，副轴从下到上

---

## justify-content

- 设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。
- 默认值：
  - flex-start：行内的项目集中在行的开始位置
  - flex-end：行内的项目集中在行的结束位置
  - center：行内的项目集中在行的中间位置
  - space-between：行内的项目，第一列在开始位置，最后一列在结束位置，其他都在中间位置
  - space-around：行内的项目，每一列都在中间位置

## align-items

- 定义 flex 子项在 flex 容器的当前行的侧轴（纵轴）方向上的对齐方式。
- 默认值：stretch
- 属性值：
  - stretch：行内的项目占满整行
  - center：行内的项目位于该行的正中，不再占满整行
  - flex-start：行内的项目位于该行的开始，不再占满整行
  - flex-end：行内的项目位于该行的结尾，不再占满整行
  - baseline：行内的项目位于该行的基线（好像就是开始位置），不再占满整行

## align-content

- 行和行之间的位置关系，除了stretch其他都要求行有固定高度
- 默认值：stretch
- 属性值：
  - center:所有行集中在中间，
  - flex-start：所有行集中在开始位置
  - flex-end：所有行集中在结束位置
  - stretch：每一行的项占满整行的空间
  - space-between:第一行内的项目在开始位置，最后一行内的项目在结束位置，其他行内的项目都在中间位置
  - space-around：所有行内的项目都在中间位置

------

# 子元素

## flex

- 复合属性flex-grow、flex-shrink、flex-basis

## flex-grow

- 设置或检索弹性盒的扩展比率。
- 默认值：0
- 属性值:number

## flex-shrink

- 设置或检索弹性盒的收缩比率。
- 默认值：1
- 属性值：number

## flex-basis

- 设置或检索弹性盒伸缩基准值。
- 默认值：auton
- 属性值：
  - 一个长度单位或百分比
  - auto
- 注释：即使设置为确定的长度单位，当元素内容溢出时，该元素依然会被扩展已保证内部元素被正确显示

------

## align-self

- 定义 flex 子项单独在侧轴（纵轴）方向上的对齐方式。
- 默认值：auot
- 属性值：
  - stretch：该项目占满整行
  - center：该项目位于该行的正中，不再占满整行
  - flex-start：该项目位于该行的开始，不再占满整行
  - flex-end：该项目位于该行的结尾，不再占满整行
  - baseline：该项目位于该行的基线（好像就是开始位置），不再占满整行

## order

- 设置或检索弹性盒模型对象的子元素出现的順序
- 默认值：0
- 属性值：number