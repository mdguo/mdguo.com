/** @jsx React.DOM */
var About = React.createClass({displayName: "About",
	render: function () {
    	return (
    		React.createElement("h2", null, "About")
    		)
	}
})

var Home = React.createClass({displayName: "Home",
  	render: function () {
    	return (
    		React.createElement("div", null, 
    			React.createElement("div", {className: "side-panel fluid"}, 
    				React.createElement("h1", {className: "color-4"}, "Michael Guo"), 
    				React.createElement("p", null, "Michael Guo is an aspiring web and software developer")
    			), 
    			React.createElement("div", {className: "main-panel fluid"}, 
	    			React.createElement("div", {className: "selector-wheel relative"}, 
	    				React.createElement("ul", {className: "center pie"}, 
	    					React.createElement("li", {className: "slice slice-1"}, React.createElement("div", {className: "slice-contents"}, React.createElement("img", {src: "/images/Linkedin-icon.png"}))), 
	    					React.createElement("li", {className: "slice slice-2"}, React.createElement("div", {className: "slice-contents"}, "github")), 
	    					React.createElement("li", {className: "slice slice-3"}, React.createElement("div", {className: "slice-contents"}, "resume"))
	    				)
	    			)
    			)
    		)
    		)
	}
})

var App = React.createClass({displayName: "App",
  	render: function () {
    	var Child
	    switch (this.props.route) {
	    	case '/about': 
	    		Child = About
	    		break
	    	default:      
	    		Child = Home
	    		// TODO: modify url
	    }

	    return (
	    	React.createElement("div", null, 
	    		React.createElement(Child, null)
	    	)
	    	)
  	}
})