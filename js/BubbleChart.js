var date1 = new Date();  //开始时间


width = 1800;
height = 1500;
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var format = d3.format(",d");

var color = d3.scaleOrdinal(d3.schemeCategory20c);

var pack = d3.pack()
    .size([width, height])
    .padding(1.5);

d3.csv("Data/Data.txt", function (d) {
    d.value = +d.value;
    if (d.value) return d;
}, function (error, classes) {
    if (error) throw error;

    for (var i = 0; i < classes.length; i++) {
        if (classes[i].value < 50000) {
            classes.splice(i, 1);
        }
    }
    for (var i = 0; i < classes.length; i++) {
        for (var j = 0; j < i; j++) {
            if (classes[i].id == classes[j].id) {
                classes.splice(j, 1);
                j--
            }
        }
    }

    var root = d3.hierarchy({ children: classes })
        .sum(function (d) { return d.value; })
        .each(function (d) {
            if (id = d.data.id) {
                var id, i = id.lastIndexOf(".");
                d.id = id;
                d.package = id.slice(0, i);
                d.class = id.slice(i + 1);
            }
        });
    var _data = pack(root).leaves().filter(function (d) { if (d.value > 50000) { return this } else { return null } })

    var node = svg.selectAll(".node")
        .data(_data)
        .enter().append("g")
        .attr("class", "node")
        .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });
    var date2 = new Date();    //结束时间
    var date_ = date2.getTime() - date1.getTime()  //时间差的毫秒数
    console.log(date_)
    node.append("circle")
        .attr("id", function (d) { return d.id; })
        .attr("r", function (d) { return d.r; })
        .style("fill", function (d) { return "#cccccc"; });

    node.append("clipPath")
        .attr("id", function (d) { return "clip-" + d.id; })
        .append("use")
        .attr("xlink:href", function (d) { return "#" + d.id; });

    node.append("text")
        .append("tspan")
        .attr("font-size", function (d) {
            return d.r / 2
        })
        .attr('y', function (d) {
            return d.r / 4
        })
        .text(function (d) { return d.id; });

    var date3 = new Date();    //结束时间

    var date__ = date3.getTime() - date2.getTime()  //时间差的毫秒数
    console.log(date__)

    //   node.append("title")
    //       .text(function(d) { return d.id + "\n" + format(d.value); }); 
});
