let express = require('express');
let router = express.Router();

// var options = {selector: '#graph'};
// options.container = '<div id="container"><div id="chart"></div></div>';

/*let d3 = require('d3');
let D3Node = require('d3-node');
d3n = new D3Node();*/

/* GET Project */
router.get('/:projectId', function (req, res) {
  // let graph = renderSVG();

  res.render('graph', {
    title: 'Jama Software Capstone',
    subtitle: 'Project',
    projectId: req.param('projectId')
  });
});

/* function configD3() {
  d3.d3Element.append('span');

  // get the data
  d3.json('../js/ssProject.json', function(error, links) {
    // let nodes = {};
    let items = links.items;

    // Compute the distinct nodes from the links.
    links.relationships.forEach(function(node) {
      if (node.type != 31 || node.type != 32) {
        node.source = getItemWithId(items, node.fromItem);
        node.target = getItemWithId(items, node.toItem);
        node.value = +node.type;
      }
    });

    let width = 1000;
    let height = 800;

    let force = d3.layout.force()
      .nodes(d3.values(items))
      .links(links.relationships)
      .size([width, height])
      .linkDistance(60)
      .charge(-500)
      .on('tick', tick)
      .start();

    let svg = d3.select('body').append('svg')
      .attr('width', width)
      .attr('height', height)
      .call(d3.behavior.zoom().on("zoom", function () {
        svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
      }));

    // ============ build the arrow ================
    svg.append('svg:defs').selectAll('marker')
      .data(['end'])      // Different link/path types can be defined here
      .enter().append('svg:marker')    // This section adds in the arrows
      .attr('id', String)
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 15)
      .attr('refY', -1.5)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('class', 'arrow');

    // ============ links combined with the arrows ===========
    let path = svg.append('svg:g').selectAll('path')
      .data(force.links())
      .enter().append('svg:path')
      .attr('class', function (d) {
        return 'link ' + d.type;
      })
      .attr('class', 'link')
      .attr('marker-end', 'url(#end)');

    // define the nodes
    let node = svg.selectAll('.node')
      .data(force.nodes())
      .enter().append('g')
      .attr('class', 'node')
      .call(force.drag)
      .on("click", nodeClick);

    // add the nodes
    /!*node.append('circle')
     .attr('r', 5);*!/

    node.append('image')
      .attr('xlink:http', 'https://sevensource.jamacloud.com/img/tree/book2.png')
      .attr('x', '-12px')
      .attr('y', '-12px')
      .attr('height', '20px')
      .attr('width', '20px');

    node.append('rect')
      .attr('width', 40)
      .attr('height', 10)
      .attr('class', function (d) {
        let styleClass = 'node';
        if (d.type === 32) {
          styleClass = 'node-test';
        }
        return styleClass;
      });

    // add the text
    node.append('text')
      .attr('x', 10)
      .attr('dy', '.35em')
      .attr('class', 'nodeText')
      .text(function (d) {
        return d.name;
      });

    // ============= add the curvy lines ==============
    function tick() {
      path.attr('d', function (d) {
        let dx = d.target.x - d.source.x,
          dy = d.target.y - d.source.y,
          dr = Math.sqrt(dx * dx + dy * dy);
        return 'M' +
          d.source.x + ',' +
          d.source.y + 'A' +
          dr + ',' + dr + ' 0 0,1 ' +
          d.target.x + ',' +
          d.target.y;
      });

      node.attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      });
    }

    // ============ Toggle children on click ===========
    function nodeClick(d) {
      console.log('Node Click event fired!!!!');
      if (!d3.event.defaultPrevented) {
        //check if link is from this node, and if so, collapse
        links.relationships.forEach(function(l) {
          if(l.fromItem == d.id) {
            if(d.collapsed){
              l.target.collapsing--;
            } else {
              l.target.collapsing++;
            }
          }
        });
        d.collapsed = !d.collapsed;
      }
      update();
    }
    function getToItemValues(array, value) {
      let result = [];

      array.forEach (function (item) {
        if (item.fromItem === value) {
          result.push(item.toItem);
        }
      });
      return result;
    }

    function getItemWithId(itemArray, id) {
      let result = null;

      itemArray.forEach (function (item) {
        if (item.id === id) {
          result = item;
          return;
        }
      });

      return result;
    }
  });
}
*/

module.exports = router;
