
### 一、各话题关注量气泡图
![ZHTTVis-1](https://img.sz-p.cn/ZHTTVis-1.png)
&ensp;&ensp;&ensp;&ensp;以气泡图的形式展示各个话题的关注量</br>
图片分辨率为4728*4960大小为5.37M放大可查看细节（服务器1兆的小水管加载可能比较耗时）
### 二、可展开式话题树
![ZHTTVis-2](https://img.sz-p.cn/ZHTTVis-2.png)
&ensp;&ensp;&ensp;&ensp;点击节点可折叠或展开该话题用于探查整个话题树</br>
&ensp;&ensp;&ensp;&ensp;[演示地址](http://sz-p.cn/ZHTTVisualization/FoldTree.html) (加载数据文件耗时严重)
### 三、话题树旭日图
>&ensp;&ensp;&ensp;&ensp;旭日图（sunburst），也称为太阳图，一种圆环镶接图，每一个圆环就代表了同一级别的比例数据，离原点越近的圆环级别越高，最内层的圆表示层次结构的顶级。除了圆环外，旭日图还有若干从原点放射出去的‘射线’，这些‘射线’展示出了不同级别数据间的脉络关系。

![ZHTTVis-3](https://img.sz-p.cn/ZHTTVis-3.png)
![ZHTTVis-4](https://img.sz-p.cn/ZHTTVis-4.png)
![ZHTTVis-5](https://img.sz-p.cn/ZHTTVis-5.png)
&ensp;&ensp;&ensp;&ensp;对关注量数据由叶子节点向根节点求和，每个节点的值为该节点的关注量以及所有的子节点的关注量之和。以圆弧的弧度的弧度作为映射展示该话题在同一级别下所占的比例。点击不同的圆弧可将该话题移至第二级，第一级为该话题的父话题以此为交互方式展示整个话题树</br>
&ensp;&ensp;&ensp;&ensp;[演示地址](http://sz-p.cn/ZHTTVisualization/partition.html) (加载数据文件耗时严重)
### 四、话题树图
![ZHTTVis-6](https://img.sz-p.cn/ZHTTVis-6.png)
&ensp;&ensp;&ensp;&ensp;展示整个话题树的脉络。线条的宽度代表关注量。鼠标覆盖可对该条枝干加粗并标注节点名称。

### 2019-4-11更新
---
### 数据及源码
  鉴于有部分同学需要源码和数据这里临时整理至github，各位同学star后取需：）
  可视化部分连接: [github](https://github.com/shizhao1100/zhihu-topicTree-visualization)
  爬虫部分连接: [github](https://github.com/shizhao1100/zhihu-topicTree-spider)
### 共同参与
  由于项目开发时间较早，可能并不十分成熟，欢迎感兴趣的同学在取得数据和源码后共同参与，共同努力，使程序更规范、更效率、更美观。

## 参考&引用
>http://blog.sina.com.cn/s/blog_49f78a4b0102wg92.html
>http://www.nytimes.com/interactive/2012/11/02/us/politics/paths-to-the-white-house.html
>http://blog.csdn.net/tianxuzhang/article/details/14170243