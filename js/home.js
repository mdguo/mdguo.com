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
    			React.createElement("h2", null, "Website under construction, check back soon!"), 
    			React.createElement("a", {href: "/resume"}, " Check out my resume")
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