var _wm = {
    initialize: function() {
        this.ua.initialize()
    },
    ua: {
        initialize: function() {
            this.browser = this.searchString(this.list_browser) || 'unknown';
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || 'unknown';
            this.os = this.searchString(this.list_os) || 'unknown'
        },
        list_browser: [{
            str: navigator.userAgent,
            subStr: 'Chrome',
            id: 'Chrome',
        }, {
            str: navigator.userAgent,
            subStr: 'OmniWeb',
            versionSearch: 'OmniWeb/',
            id: 'OmniWeb',
        }, {
            str: navigator.vendor,
            subStr: 'Apple',
            id: 'Safari',
            versionSearch: 'Version',
        }, {
            prop: window.opera,
            id: 'Opera',
            versionSearch: 'Version'
        }, {
            str: navigator.vendor,
            subStr: 'iCab',
            id: 'iCab',
        }, {
            str: navigator.vendor,
            subStr: 'KDE',
            id: 'Konqueror',
        }, {
            str: navigator.userAgent,
            subStr: 'Firefox',
            id: 'Firefox',
        }, {
            str: navigator.vendor,
            subStr: 'Camino',
            id: 'Camino',
        }, {
            str: navigator.userAgent,
            subStr: 'Netscape',
            id: 'Netscape',
        }, {
            str: navigator.userAgent,
            subStr: 'MSIE',
            id: 'Explorer',
            versionSearch: 'MSIE',
        }, {
            str: navigator.userAgent,
            subStr: 'Gecko',
            id: 'Mozilla',
            versionSearch: 'rv',
        }, {
            str: navigator.userAgent,
            subStr: 'Mozilla',
            id: 'Netscape',
            versionSearch: 'Mozilla',
        }],
        list_os: [{
            str: navigator.platform,
            subStr: 'Win',
            id: 'Windows',
        }, {
            str: navigator.platform,
            subStr: 'Mac',
            id: 'Mac',
        }, {
            str: navigator.userAgent,
            subStr: 'iPhone',
            id: 'iPhone/iPod',
        }, {
            str: navigator.platform,
            subStr: 'Linux',
            id: 'Linux',
        }],
        searchString: function(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t].str;
                var r = e[t].prop;
                this.versionSearchString = e[t].versionSearch || e[t].id;
                if (n) {
                    if (n.indexOf(e[t].subStr) != -1) return e[t].id
                } else if (r) return e[t].id
            }
        },
        searchVersion: function(e) {
            var t = e.indexOf(this.versionSearchString);
            if (t == -1) return;
            return parseFloat(e.substr(t + this.versionSearchString.length + 1))
        },
    },
    cookie: {
        get: function(a, b) {
            var c = new Date();
            c.setTime(c.getTime());
            var d = new Date(c.getTime() + (1000 * 60 * 60 * b)).toGMTString();
            var e = document.cookie.split(';');
            var f = '';
            var g = '';
            var h = [0, d];
            for (var i = 0; i < e.length; i++) {
                f = e[i].split('=');
                g = f[0].replace(/^\s+|\s+$/g, '');
                if (g == a) {
                    b_cookie_found = true;
                    if (f.length > 1) {
                        h = unescape(f[1]).split('|');
                        if (h.length == 1) h[1] = d
                    }
                    return h
                }
                f = null;
                g = ''
            }
            return h
        },
        set: function(a, b, c) {
            document.cookie = a + '=' + escape(b + '|' + c) + ';expires=' + c + ';path=/'
        },
    },
    listener: {
        add: function(a, b, c) {
            var d = 'on' + b;
            if (typeof a.addEventListener != 'undefined') a.addEventListener(b, c, arguments.callee);
            else if (typeof a.attachEvent != 'undefined') a.attachEvent(d, c);
            else {
                if (typeof a[d] != 'function') a[d] = c;
                else {
                    var e = a[d];
                    a['old_' + d] = e;
                    a[d] = function() {
                        e();
                        return c()
                    }
                }
            }
        },
        remove: function(a, b, c) {
            var d = 'on' + b;
            if (typeof a.removeEventListener != 'undefined') a.removeEventListener(b, c, false);
            else if (typeof a.detachEvent != 'undefined') a.detachEvent(d, c);
            else {
                if (typeof a['old_' + d] != 'function') a[d] = null;
                else a[d] = a['old_' + d]
            }
        },
    },
    format: {},
    random: function() {
        return Math.floor(Math.random() * 1000001)
    }
};

_wm.initialize();
_wm.format.popunder = {
    settings: {
        url: "https://asunderdestructmuddy.com/"+rndaz()+"?key=f08fd33a75e1be11db8c64ac631b2dbc",
        times: 2,
        hours: 1.000000,
        cookie: "flash",
    },
    isBinded: false,
    isTriggered: false,
    initialize: function() {
        var a = _wm.cookie.get(_wm.format.popunder.settings.cookie, _wm.format.popunder.settings.hours);
        this.cookie = {};
        this.cookie.times = !isNaN(Number(a[0])) ? Number(a[0]) : 0;
        this.cookie.expires = !isNaN(Date.parse(a[1])) ? a[1] : new Date().toGMTString();
        if (document.readyState == 'complete') setTimeout(_wm.format.popunder.bind, 1);
        else {
            _wm.listener.add(document, 'DOMContentLoaded', function() {
                _wm.listener.remove(document, 'DOMContentLoaded');
                _wm.format.popunder.bind()
            });
            _wm.listener.add(document, 'onreadystatechange', function() {
                if (document.readyState == 'complete') {
                    _wm.listener.remove(document, 'onreadystatechange');
                    _wm.format.popunder.bind()
                }
            });
            _wm.listener.add(window, 'load', _wm.format.popunder.bind)
        }
    },
    bind: function() {
        if (_wm.format.popunder.isBinded) return;
        _wm.format.popunder.isBinded = true;
        if (_wm.format.popunder.cookie.times >= _wm.format.popunder.settings.times) return;
        var a = {};
        for (var b in _wm.format.popunder.binders) {
            var c = _wm.format.popunder.binders[b];
            var d = b.split('');
            var e = '',
                l = '';
            var f = 1,
                type;
            for (var i = 0; i < d.length; i++) {
                var g = d[i];
                if (g.match(/[a-z0-9]/) == null) continue;
                type = g.search(/[a-z]/) == 0;
                if (type) {
                    if (type != f) {
                        a[e][l] = c;
                        e = g
                    } else e += g
                } else {
                    if (type != f || parseInt(i) + 1 == d.length) {
                        if (type != f) {
                            if (typeof a[e] != 'object') a[e] = {};
                            l = g
                        }
                        if (parseInt(i) + 1 == d.length) a[e][type == f ? l + g : l] = c
                    } else l += g
                }
                f = type
            }
        }
        var h = a[_wm.ua.browser.toLowerCase()] || a.all;
        var j = Object.keys(h);
        j.sort();
        for (var k = 0; k < j.length; k++) {
            var l = j[k];
            if (_wm.ua.version <= l) break
        }
        h[l]()
    },
    binders: {
        chrome28: function() {
            _wm.listener.add(document, 'click', _wm.format.popunder.triggers.triple_trigger)
        },
        firefox12_chrome21: function() {
            _wm.listener.add(document, 'click', _wm.format.popunder.triggers.double_trigger)
        },
        explorer0: function() {
            _wm.listener.add(document, 'click', _wm.format.popunder.triggers.single_delay)
        },
        all0: function() {
            _wm.listener.add(document, 'click', _wm.format.popunder.triggers.single)
        },
    },
    triggers: {
        triple_trigger: function() {
            _wm.listener.remove(document, 'click', _wm.format.popunder.triggers.triple_trigger);
            if (!_wm.format.popunder.registerTrigger()) return;
            window.open('javascript:window.focus()', '_self');
            var w = window.open('about:blank', 'pu_' + _wm.random(), _wm.format.popunder.config);
            var a = document.createElement('a');
            a.style.display = 'none';
            document.body.appendChild(a);
            var e = document.createEvent('MouseEvents');
            e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null);
            a.dispatchEvent(e);
            document.body.removeChild(a);
            w.document.open().write('<div style="display:block;position:absolute;top:0px;z-index:1;height:100%;width:100%"> <script type="text/javascript">window.location="' + _wm.format.popunder.settings.url + '";<\/script><\/div>');
            w.document.close()
            _wm.listener.add(document, 'click', _wm.format.popunder.triggers.triple_trigger);
        },
        double_trigger: function() {
            _wm.listener.remove(document, 'click', _wm.format.popunder.triggers.double_trigger);
            if (!_wm.format.popunder.registerTrigger()) return;
            var w = window.open(_wm.format.popunder.settings.url, 'pu_' + _wm.random(), _wm.format.popunder.config);
            if (w) {
                w.blur();
                try {
                    var b = w.window.open('about:blank');
                    b.close()
                } catch (i) {}
                if (_wm.ua.browser == 'Firefox') window.showModalDialog("javascript:window.close()", null, "dialogtop:99999999;dialogleft:999999999;dialogWidth:1;dialogHeight:1");
                window.focus()
            }
            
            _wm.listener.add(document, 'click', _wm.format.popunder.triggers.double_trigger);
        },
        single_delay: function() {
            _wm.listener.remove(document, 'click', _wm.format.popunder.triggers.single_delay);
            if (!_wm.format.popunder.registerTrigger()) return;
            var w = window.open(_wm.format.popunder.settings.url, 'pu_' + _wm.random(), _wm.format.popunder.config);
            window.setTimeout(window.focus, 750);
            window.setTimeout(window.focus, 850);
            if (w) w.blur()
            _wm.listener.add(document, 'click', _wm.format.popunder.triggers.single_delay);
        },
        single: function(a) {
            _wm.listener.remove(document, 'click', _wm.format.popunder.triggers.single);
            if (!_wm.format.popunder.registerTrigger()) return;
            var w = window.open(_wm.format.popunder.settings.url, 'pu_' + _wm.random(), _wm.format.popunder.config);
            if (w) {
                w.blur();
                window.focus()
            }
            _wm.listener.add(document, 'click', _wm.format.popunder.triggers.single);
        },
    },
    registerTrigger: function() {
        if (_wm.format.popunder.cookie.times >= _wm.format.popunder.settings.times) return false;
        if (_wm.format.popunder.settings.hours > 0) _wm.cookie.set(_wm.format.popunder.settings.cookie, ++_wm.format.popunder.cookie.times, _wm.format.popunder.cookie.expires);
        return true
    },
};
_wm.format.popunder.initialize();

if (!Object.keys) {
    Object.keys = (function() {
        var hasOwnProperty = Object.prototype.hasOwnProperty,
            hasDontEnumBug = !({
                toString: null
            }).propertyIsEnumerable('toString'),
            dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
            dontEnumsLength = dontEnums.length;
        return function(a) {
            if (typeof a !== 'object' && typeof a !== 'function' || a === null) throw new TypeError('Object.keys called on non-object');
            var b = [];
            for (var c in a) {
                if (hasOwnProperty.call(a, c)) b.push(c)
            }
            if (hasDontEnumBug) {
                for (var i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(a, dontEnums[i])) b.push(dontEnums[i])
                }
            }
            return b
        }
    })()
}
