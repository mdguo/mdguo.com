window.addEventListener('load', function() {
	setTimeout(function() {
		window.addEventListener('popstate', function(event) {
			updateUI()
		})
	}, 0)
})

function updateUI() {
	var loc = window.location.pathname
	React.render(React.createElement(App, {route: loc}), document.getElementById('container'))
}

// initial load
updateUI()