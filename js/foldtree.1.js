size = new GSS();
//位置参数
var margin = { top: 20, right: 120, bottom: 20, left: 120 },
    width = size.offsetWidth - margin.right - margin.left,
    height = size.offsetHeight - margin.top - margin.bottom;

var i = 0,
    duration = 750,
    root;
// 声明树布局
var tree = d3.layout.tree()
    .size([height, width]);
// 指定为横向布局
var diagonal = d3.svg.diagonal()
    .projection(function (d, i) {
        if (i % 2 == 0) {
            return [d.y, d.x];

        } else {
            return [d.y, d.x];
        }
    });

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("test.json", function (error, flare) {
    // 根节点和位置
    root = flare;
    root.x0 = height / 2;
    root.y0 = 0;
    //(1) 折叠函数，递归调用,有子孙的就把children（显示）给_children（不显示）暂存，便于折叠，
    function collapse(d) {
        if (d.children) {
            d._children = d.children;
            d._children.forEach(collapse);
            d.children = null;
        }
    }
    // 折叠根节点的每个孩子
    root.children.forEach(collapse);
    // 折叠之后要重绘
    update(root);
});

//(2) 更新布局
function update(source) {
    // (2-1) 计算新树的布局
    var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);

    // (2-2) 树的深度这里树d.y。树的宽度最大720，要分四层，所以每层就乘180
    nodes.forEach(function (d,i) {
        if(i%2==0){
            d.y = -d.depth * 180;// 树的x,y倒置了，所以这里Y其实是横向的
        }else{
            d.y = d.depth * 180;// 树的x,y倒置了，所以这里Y其实是横向的
        }
    });

    // (2-3) 数据连接，根据id绑定数据
    var node = svg.selectAll("g.node")
        .data(nodes, function (d) {
            return d.id //最初新点开的节点都没有id
                || (d.id = ++i); //为没有id的节点添加上ID
        });

    // (2-4) 点击时增加新的子节点
    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
        .on("click", click);
    nodeEnter.append("circle")
        .attr("r", 1e-6)
        .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });
    nodeEnter.append("text")
        .attr("x", function (d) { return d.children || d._children ? -10 : 10; })
        .attr("dy", ".35em")
        .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "start"; })
        .text(function (d) { return d.name; })
        .style("fill-opacity", 1e-6);

    // (2-5) 原有节点更新到新位置
    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });
    nodeUpdate.select("circle")
        .attr("r", 4.5)
        .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });
    nodeUpdate.select("text")
        .style("fill-opacity", 1);

    // (2-6) 折叠节点的子节点收缩回来
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function (d) {
            return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();
    nodeExit.select("circle")
        .attr("r", 1e-6);
    nodeExit.select("text")
        .style("fill-opacity", 1e-6);

    // (2-7) 数据连接，根据目标节点的id绑定数据
    var link = svg.selectAll("path.link")
        .data(links, function (d) { return d.target.id; });

    // (2-8) 增加新连接
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function (d) {
            var o = { x: source.x0, y: source.y0 };
            return diagonal({ source: o, target: o });
        });

    // (2-9) 原有连接更新位置
    link.transition()
        .duration(duration)
        .attr("d", diagonal);

    // (2-10) 折叠的链接，收缩到源节点处
    link.exit().transition()
        .duration(duration)
        .attr("d", function (d) {
            var o = { x: source.x, y: source.y };
            return diagonal({ source: o, target: o });
        })
        .remove();
    // 把旧位置存下来，用以过渡
    nodes.forEach(function (d, i) {
        d.y0 = d.y;
        d.x0 = d.x;
    });
}

// (3) 切换折叠与否
function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
    update(d);// 重新渲染
}