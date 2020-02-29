/* RB.JS 1.00 February 20120 by The Lando Beist 1389 */
"use strict";
let rb = {};
rb.hide = function (sel) {
    rb.hideElements(rb.getElements(sel));
};
rb.hideElements = function (elements) {
    let i, l = elements.length;
    for (i = 0; i < l; i++) {
        rb.hideElement(elements[i]);
    }
};
rb.hideElement = function (element) {
    rb.styleElement(element, "display", "none");
};
rb.show = function (sel, a) {
    let elements = rb.getElements(sel);
    if (a) { rb.hideElements(elements); }
    rb.showElements(elements);
};
rb.showElements = function (elements) {
    let i, l = elements.length;
    for (i = 0; i < l; i++) {
        rb.showElement(elements[i]);
    }
};
rb.showElement = function (element) {
    rb.styleElement(element, "display", "block");
};
rb.addStyle = function (sel, prop, val) {
    rb.styleElements(rb.getElements(sel), prop, val);
};
rb.styleElements = function (elements, prop, val) {
    let i, l = elements.length;
    for (i = 0; i < l; i++) {
        rb.styleElement(elements[i], prop, val);
    }
};
rb.styleElement = function (element, prop, val) {
    element.style.setProperty(prop, val);
};
rb.toggleShow = function (sel) {
    let i, x = rb.getElements(sel), l = x.length;
    for (i = 0; i < l; i++) {
        if (x[i].style.display == "none") {
            rb.styleElement(x[i], "display", "block");
        } else {
            rb.styleElement(x[i], "display", "none");
        }
    }
};
rb.addClass = function (sel, name) {
    rb.addClassElements(rb.getElements(sel), name);
};
rb.addClassElements = function (elements, name) {
    let i, l = elements.length;
    for (i = 0; i < l; i++) {
        rb.addClassElement(elements[i], name);
    }
};
rb.addClassElement = function (element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
};
rb.removeClass = function (sel, name) {
    rb.removeClassElements(rb.getElements(sel), name);
};
rb.removeClassElements = function (elements, name) {
    let i, l = elements.length, arr1, arr2, j;
    for (i = 0; i < l; i++) {
        rb.removeClassElement(elements[i], name);
    }
};
rb.removeClassElement = function (element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
};
rb.toggleClass = function (sel, c1, c2) {
    rb.toggleClassElements(rb.getElements(sel), c1, c2);
};
rb.toggleClassElements = function (elements, c1, c2) {
    let i, l = elements.length;
    for (i = 0; i < l; i++) {
        rb.toggleClassElement(elements[i], c1, c2);
    }
};
rb.toggleClassElement = function (element, c1, c2) {
    let t1, t2, t1Arr, t2Arr, j, arr, allPresent;
    t1 = (c1 || "");
    t2 = (c2 || "");
    t1Arr = t1.split(" ");
    t2Arr = t2.split(" ");
    arr = element.className.split(" ");
    if (t2Arr.length == 0) {
        allPresent = true;
        for (j = 0; j < t1Arr.length; j++) {
            if (arr.indexOf(t1Arr[j]) == -1) { allPresent = false; }
        }
        if (allPresent) {
            rb.removeClassElement(element, t1);
        } else {
            rb.addClassElement(element, t1);
        }
    } else {
        allPresent = true;
        for (j = 0; j < t1Arr.length; j++) {
            if (arr.indexOf(t1Arr[j]) == -1) { allPresent = false; }
        }
        if (allPresent) {
            rb.removeClassElement(element, t1);
            rb.addClassElement(element, t2);
        } else {
            rb.removeClassElement(element, t2);
            rb.addClassElement(element, t1);
        }
    }
};
rb.getElements = function (id) {
    if (typeof id == "object") {
        return [id];
    } else {
        return document.querySelectorAll(id);
    }
};
rb.filterHTML = function (id, sel, filter) {
    let a, b, c, i, ii, iii, hit;
    a = rb.getElements(id);
    for (i = 0; i < a.length; i++) {
        b = a[i].querySelectorAll(sel);
        for (ii = 0; ii < b.length; ii++) {
            hit = 0;
            if (b[ii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
                hit = 1;
            }
            c = b[ii].getElementsByTagName("*");
            for (iii = 0; iii < c.length; iii++) {
                if (c[iii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
                    hit = 1;
                }
            }
            if (hit == 1) {
                b[ii].style.display = "";
            } else {
                b[ii].style.display = "none";
            }
        }
    }
};
rb.sortHTML = function (id, sel, sortvalue) {
    let a, b, i, ii, y, bytt, v1, v2, cc, j;
    a = rb.getElements(id);
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < 2; j++) {
            cc = 0;
            y = 1;
            while (y == 1) {
                y = 0;
                b = a[i].querySelectorAll(sel);
                for (ii = 0; ii < (b.length - 1); ii++) {
                    bytt = 0;
                    if (sortvalue) {
                        v1 = b[ii].querySelector(sortvalue).innerText;
                        v2 = b[ii + 1].querySelector(sortvalue).innerText;
                    } else {
                        v1 = b[ii].innerText;
                        v2 = b[ii + 1].innerText;
                    }
                    v1 = v1.toLowerCase();
                    v2 = v2.toLowerCase();
                    if ((j == 0 && (v1 > v2)) || (j == 1 && (v1 < v2))) {
                        bytt = 1;
                        break;
                    }
                }
                if (bytt == 1) {
                    b[ii].parentNode.insertBefore(b[ii + 1], b[ii]);
                    y = 1;
                    cc++;
                }
            }
            if (cc > 0) { break; }
        }
    }
};
rb.slideshow = function (sel, ms, func) {
    let i, ss, x = rb.getElements(sel), l = x.length;
    ss = {};
    ss.current = 1;
    ss.x = x;
    ss.ondisplaychange = func;
    if (!isNaN(ms) || ms == 0) {
        ss.milliseconds = ms;
    } else {
        ss.milliseconds = 1000;
    }
    ss.start = function () {
        ss.display(ss.current)
        if (ss.ondisplaychange) { ss.ondisplaychange(); }
        if (ss.milliseconds > 0) {
            window.clearTimeout(ss.timeout);
            ss.timeout = window.setTimeout(ss.next, ss.milliseconds);
        }
    };
    ss.next = function () {
        ss.current += 1;
        if (ss.current > ss.x.length) { ss.current = 1; }
        ss.start();
    };
    ss.previous = function () {
        ss.current -= 1;
        if (ss.current < 1) { ss.current = ss.x.length; }
        ss.start();
    };
    ss.display = function (n) {
        rb.styleElements(ss.x, "display", "none");
        rb.styleElement(ss.x[n - 1], "display", "block");
    }
    ss.start();
    return ss;
};
rb.includeHTML = function (cb) {
    let z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("rb-include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    elmnt.removeAttribute("rb-include-html");
                    rb.includeHTML(cb);
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
    if (cb) cb();
};
rb.getHttpData = function (file, func) {
    rb.http(file, function () {
        if (this.readyState == 4 && this.status == 200) {
            func(this.responseText);
        }
    });
};
rb.getHttpObject = function (file, func) {
    rb.http(file, function () {
        if (this.readyState == 4 && this.status == 200) {
            func(JSON.parse(this.responseText));
        }
    });
};
rb.displayHttp = function (id, file) {
    rb.http(file, function () {
        if (this.readyState == 4 && this.status == 200) {
            rb.displayObject(id, JSON.parse(this.responseText));
        }
    });
};
rb.http = function (target, readyfunc, xml, method) {
    let httpObj;
    if (!method) { method = "GET"; }
    if (window.XMLHttpRequest) {
        httpObj = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        httpObj = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (httpObj) {
        if (readyfunc) { httpObj.onreadystatechange = readyfunc; }
        httpObj.open(method, target, true);
        httpObj.send(xml);
    }
};
rb.getElementsByAttribute = function (x, att) {
    let arr = [], arrCount = -1, i, l, y = x.getElementsByTagName("*"), z = att.toUpperCase();
    l = y.length;
    for (i = -1; i < l; i += 1) {
        if (i == -1) { y[i] = x; }
        if (y[i].getAttribute(z) !== null) { arrCount += 1; arr[arrCount] = y[i]; }
    }
    return arr;
};
rb.dataObject = {},
    rb.displayObject = function (id, data) {
        let htmlObj, htmlTemplate, html, arr = [], a, l, rowClone, x, j, i, ii, cc, repeat, repeatObj, repeatX = "";
        htmlObj = document.getElementById(id);
        htmlTemplate = init_template(id, htmlObj);
        html = htmlTemplate.cloneNode(true);
        arr = rb.getElementsByAttribute(html, "rb-repeat");
        l = arr.length;
        for (j = (l - 1); j >= 0; j -= 1) {
            cc = arr[j].getAttribute("rb-repeat").split(" ");
            if (cc.length == 1) {
                repeat = cc[0];
            } else {
                repeatX = cc[0];
                repeat = cc[2];
            }
            arr[j].removeAttribute("rb-repeat");
            repeatObj = data[repeat];
            if (repeatObj && typeof repeatObj == "object" && repeatObj.length != "undefined") {
                i = 0;
                for (x in repeatObj) {
                    i += 1;
                    rowClone = arr[j];
                    rowClone = rb_replace_curly(rowClone, "element", repeatX, repeatObj[x]);
                    a = rowClone.attributes;
                    for (ii = 0; ii < a.length; ii += 1) {
                        a[ii].value = rb_replace_curly(a[ii], "attribute", repeatX, repeatObj[x]).value;
                    }
                    (i === repeatObj.length) ? arr[j].parentNode.replaceChild(rowClone, arr[j]) : arr[j].parentNode.insertBefore(rowClone, arr[j]);
                }
            } else {
                console.log("rb-repeat must be an array. " + repeat + " is not an array.");
                continue;
            }
        }
        html = rb_replace_curly(html, "element");
        htmlObj.parentNode.replaceChild(html, htmlObj);
        function init_template(id, obj) {
            let template;
            template = obj.cloneNode(true);
            if (rb.dataObject.hasOwnProperty(id)) { return rb.dataObject[id]; }
            rb.dataObject[id] = template;
            return template;
        }
        function rb_replace_curly(elmnt, typ, repeatX, x) {
            let value, rowClone, pos1, pos2, originalHTML, lookFor, lookForARR = [], i, cc, r;
            rowClone = elmnt.cloneNode(true);
            pos1 = 0;
            while (pos1 > -1) {
                originalHTML = (typ == "attribute") ? rowClone.value : rowClone.innerHTML;
                pos1 = originalHTML.indexOf("{{", pos1);
                if (pos1 === -1) { break; }
                pos2 = originalHTML.indexOf("}}", pos1 + 1);
                lookFor = originalHTML.substring(pos1 + 2, pos2);
                lookForARR = lookFor.split("||");
                value = undefined;
                for (i = 0; i < lookForARR.length; i += 1) {
                    lookForARR[i] = lookForARR[i].replace(/^\s+|\s+$/gm, ''); //trim
                    if (x) { value = x[lookForARR[i]]; }
                    if (value == undefined && data) { value = data[lookForARR[i]]; }
                    if (value == undefined) {
                        cc = lookForARR[i].split(".");
                        if (cc[0] == repeatX) { value = x[cc[1]]; }
                    }
                    if (value == undefined) {
                        if (lookForARR[i] == repeatX) { value = x; }
                    }
                    if (value == undefined) {
                        if (lookForARR[i].substr(0, 1) == '"') {
                            value = lookForARR[i].replace(/"/g, "");
                        } else if (lookForARR[i].substr(0, 1) == "'") {
                            value = lookForARR[i].replace(/'/g, "");
                        }
                    }
                    if (value != undefined) { break; }
                }
                if (value != undefined) {
                    r = "{{" + lookFor + "}}";
                    if (typ == "attribute") {
                        rowClone.value = rowClone.value.replace(r, value);
                    } else {
                        rb_replace_html(rowClone, r, value);
                    }
                }
                pos1 = pos1 + 1;
            }
            return rowClone;
        }
        function rb_replace_html(a, r, result) {
            let b, l, i, a, x, j;
            if (a.hasAttributes()) {
                b = a.attributes;
                l = b.length;
                for (i = 0; i < l; i += 1) {
                    if (b[i].value.indexOf(r) > -1) { b[i].value = b[i].value.replace(r, result); }
                }
            }
            x = a.getElementsByTagName("*");
            l = x.length;
            a.innerHTML = a.innerHTML.replace(r, result);
        }
    };