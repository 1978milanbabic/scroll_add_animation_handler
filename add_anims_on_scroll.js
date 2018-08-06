(function ($, win, doc) {

    $(doc).ready(function () {
        //prehide anims
        $(".anim").css("opacity", "0"); //best practice is to add css property
    });

    $(win).load(function () {
        //************** anim object ***********
        var scroll_animator = {
            elems: $(".anim"),
            initiated: [],
            initiated_fn: false,
            aStarts: [],
            aDelays: [],
            aClass: [],
            elemPos: [],
            elemH: [],
            init: function (sctop) {
                var t = this;
                //first time loaded
                if (!t.initiated_fn) {
                    t.initiated_fn = true;
                    for (var i = 0; i < t.elems.length; i++) {
                        var elem = t.elems[i]; //returns DOM Object

                        t.initiated.push(false);

                        var data_astart;
                        if (elem.dataset.astart && elem.dataset.astart != null && elem.dataset.astart != "undefined" && elem.dataset.astart != "") {
                            data_astart = elem.dataset.astart;
                        } else {
                            data_astart = "0";
                        }
                        t.aStarts.push(data_astart);

                        var data_adelay;
                        if (elem.dataset.adelay && elem.dataset.adelay != null && elem.dataset.adelay != "undefined" && elem.dataset.adelay != "") {
                            data_adelay = elem.dataset.adelay;
                        } else {
                            data_adelay = "0";
                        }
                        t.aDelays.push(data_adelay);

                        var allClasses = elem.className.split(" ");
                        for (var j = 0; j < allClasses.length; j++) {
                            var patt = new RegExp("a-");
                            var res = patt.test(allClasses[j]);
                            if (res) {
                                t.aClass.push(allClasses[j]);
                            }
                        }

                        var $elem = $(elem); //back to jquery object

                        var elemPos = $elem.offset().top;
                        t.elemPos.push(elemPos);

                        var elemH = $elem.outerHeight();
                        t.elemH.push(elemH);
                    }
                }
                t.addAnim(sctop);
            },
            addAnim: function (sctop) {
                var t = this;

                var WH = $(win).height();

                for (var i = 0; i < t.elems.length; i++) {
                    var elem = $(t.elems[i]);
                    //if not already animated
                    if (!t.initiated[i]) {
                        var startH = t.aStarts[i] / 6; //Only 1/6th's of element height!!!!
                        if ((sctop + WH - startH * t.elemH[i]) > t.elemPos[i] && !t.initiated[i]) {
                            //adding class action
                            t.initiated[i] = true;
                            var klasa = t.aClass[i].substring(2);
                            if (t.aDelays[i] != 0) {
                                var timetou = parseInt(t.aDelays[i]);
                                var classa = klasa;
                                t.timeic(timetou, classa, elem);
                            } else {
                                elem.addClass(klasa);
                            }
                        }
                    }
                }
            },
            timeic: function (timeo, clas, el) {
                setTimeout(function () {
                    el.addClass(clas);
                }, timeo);
            }
        };

        //scroll events
        var sctop = $(win).scrollTop();
        scroll_animator.init(sctop);

        //win scroll
        $(win).scroll(function () {
            sctop = $(win).scrollTop();
            scroll_animator.init(sctop);
        });

    }); //win load

}(jQuery, window, document));