"use strict"
!(function () {
	var e = {
		_scheme: "auto",
		change: {
			light: "<i>Turn on dark mode</i>",
			dark: "<i>Turn off dark mode</i>"
		},
		buttonsTarget: ".theme-switcher",
		init: function () {
			;(this.scheme = this._scheme), this.initSwitchers()
		},
		get preferedColorScheme() {
			return window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light"
		},
		initSwitchers: function () {
			var t = this
			document.querySelectorAll(this.buttonsTarget).forEach(function (e) {
				e.addEventListener(
					"click",
					function () {
						"dark" == t.scheme ? (t.scheme = "light") : (t.scheme = "dark")
					},
					!1
				)
			})
		},
		addButton: function (e) {
			var t = document.createElement(e.tag)
			;(t.className = e.class), document.querySelector(e.target).appendChild(t)
		},
		set scheme(e) {
			"auto" == e
				? "dark" == this.preferedColorScheme
					? (this._scheme = "dark")
					: (this._scheme = "light")
				: ("dark" != e && "light" != e) || (this._scheme = e),
				this.applyScheme()
		},
		get scheme() {
			return this._scheme
		},
		applyScheme: function () {
			var i = this
			document.querySelector("html").setAttribute("data-theme", this.scheme),
				document.querySelectorAll(this.buttonsTarget).forEach(function (e) {
					var t = "dark" == i.scheme ? i.change.dark : i.change.light
					;(e.innerHTML = t),
						e.setAttribute("aria-label", t.replace(/<[^>]*>?/gm, ""))
				})
		}
	}
	e.addButton({
		tag: "BUTTON",
		class: "contrast switcher theme-switcher",
		target: "body"
	}),
		e.init()
})()
