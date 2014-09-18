/** @jsx React.DOM */

/* to rename the component, change name of ./component.js and  "dependencies" section of ../../component.js */

var stacktoc=Require("stacktoc"); // in dev2014/components/ksanaforge-stacktoc
/* include 
"ksanaforge/stacktoc": "*"
in ../component.json dependencies
*/
var toc=[
{depth:0,text:"Root", hit:1},   // only one root node with depth==0
{depth:1,text:"N1", hit:11},
{depth:2,text:"N1.1", hit:22},
{depth:3,text:"N1.1.1", hit:33},
{depth:3,text:"N1.1.2", hit:333},
{depth:1,text:"N2", hit:44},
{depth:2,text:"N2.1", hit:55},
{depth:3,text:"N2.1.1", hit:66},
{depth:3,text:"N2.1.2", hit:77},
{depth:2,text:"N2.2", hit:88},
{depth:3,text:"N2.2.2", hit:99},
{depth:3,text:"N2.2.3", hit:100},
]
var main = React.createClass({
  getInitialState: function() {
    return {toc:toc};
  },
  render: function() {
    return (
      <div className="col-md-4">
        <stacktoc data={this.state.toc}/>
      </div>
    );
  }
});
module.exports=main;