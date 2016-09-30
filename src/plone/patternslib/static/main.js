var config;
if (typeof(require) === "undefined") {
    /* XXX: Hack to work around r.js's stupid parsing.
     * We want to save the configuration in a variable so that we can reuse it in
     * tests/main.js.
     */
    require = { config: function (c) { config = c; } };
}

require.config({
    baseUrl: "src",
    paths: {
        "ev-emitter":                       "bower_components/ev-emitter",
        "eventie":                          "bower_components/eventie",
        "get-size":                         "bower_components/get-size",
        "get-style-property":               "bower_components/get-style-property",
        "google-code-prettify":             "bower_components/google-code-prettify/src/prettify",
        "imagesloaded":                     "bower_components/imagesloaded/imagesloaded",
        "jcrop":                            "bower_components/jcrop/js/jquery.Jcrop",
        "jquery":                           "bower_components/jquery/dist/jquery",
        "jquery.browser":                   "bower_components/jquery.browser/dist/jquery.browser",
        "jquery.anythingslider":            "bower_components/AnythingSlider/js/jquery.anythingslider",
        "jquery.chosen":                    "bower_components/chosen/chosen/chosen.jquery",
        "jquery.form":                      "bower_components/jquery-form/jquery.form",
        "jquery.fullcalendar":              "bower_components/fullcalendar/fullcalendar.min",
        "jquery.fullcalendar.dnd":          "bower_components/fullcalendar/lib/jquery-ui.custom.min",
        "jquery.placeholder":               "bower_components/jquery-placeholder/jquery.placeholder.min",
        "jquery.textchange":                "bower_components/jquery-textchange/jquery.textchange",
        "logging":                          "bower_components/logging/src/logging",
        "masonry":                          "bower_components/masonry/dist/masonry.pkgd",
        "matches-selector":                 "bower_components/matches-selector",
        "modernizr":                        "bower_components/modernizr/modernizr",
        "modernizr-csspositionsticky":      "bower_components/modernizr/feature-detects/css-positionsticky",
        "outlayer":                         "bower_components/outlayer",
        "parsley":                          "bower_components/parsleyjs/parsley",
        "parsley.extend":                   "bower_components/parsleyjs/parsley.extend",
        "patternslib.slides":               "bower_components/slides/src/slides",
        "photoswipe":                       "bower_components/photoswipe/dist/photoswipe",
        "photoswipe-ui":                    "bower_components/photoswipe/dist/photoswipe-ui-default",
        "pikaday":                          "bower_components/pikaday/pikaday",
        "prefixfree":                       "bower_components/prefixfree/prefixfree.min",
        "select2":                          "bower_components/select2/select2.min",
        "showdown":                         "bower_components/showdown/src/showdown",
        "showdown-github":                  "bower_components/showdown/src/extensions/github",
        "showdown-prettify":                "bower_components/showdown/src/extensions/prettify",
        "showdown-table":                   "bower_components/showdown/src/extensions/table",
        "spectrum":                         "bower_components/spectrum/spectrum",
        "text":                             "bower_components/requirejs-text/text",
        "tinymce":                          "bower_components/jquery.tinymce/jscripts/tiny_mce/jquery.tinymce",
        "underscore":                       "bower_components/underscore/underscore",
        "validate":                         "bower_components/validate/validate",

        // Calendar pattern
        "moment": "bower_components/moment/moment",
        "moment-timezone": "bower_components/moment-timezone/moment-timezone",
        "moment-timezone-data": "bower_components/patternslib/src/pat/calendar/moment-timezone-with-data-2010-2020",

        // Core
        "pat-compat":               "bower_components/patternslib/src/core/compat",
        "pat-base":                 "bower_components/patternslib/src/core/base",
        "pat-date-picker":          "bower_components/patternslib/src/pat/date-picker/date-picker",
        "pat-depends_parse":        "bower_components/patternslib/src/lib/depends_parse",
        "pat-dependshandler":       "bower_components/patternslib/src/lib/dependshandler",
        "pat-htmlparser":           "bower_components/patternslib/src/lib/htmlparser",
        "pat-input-change-events":  "bower_components/patternslib/src/lib/input-change-events",
        "pat-jquery-ext":           "bower_components/patternslib/src/core/jquery-ext",
        "pat-logger":               "bower_components/patternslib/src/core/logger",
        "pat-parser":               "bower_components/patternslib/src/core/parser",
        "pat-mockup-parser":        "bower_components/patternslib/src/core/mockup-parser",
        "pat-registry":             "bower_components/patternslib/src/core/registry",
        "pat-remove":               "bower_components/patternslib/src/core/remove",
        "pat-store":                "bower_components/patternslib/src/core/store",
        "pat-url":                  "bower_components/patternslib/src/core/url",
        "pat-utils":                "bower_components/patternslib/src/core/utils",

        // Patterns
        "pat-ajax":                    "bower_components/patternslib/src/pat/ajax/ajax",
        "pat-autofocus":               "bower_components/patternslib/src/pat/autofocus/autofocus",
        "pat-autoscale":               "bower_components/patternslib/src/pat/auto-scale/auto-scale",
        "pat-auto-scale":               "bower_components/patternslib/src/pat/auto-scale/auto-scale",
        "pat-autosubmit":              "bower_components/patternslib/src/pat/auto-submit/auto-submit",
        "pat-auto-submit":              "bower_components/patternslib/src/pat/auto-submit/auto-submit",
        "pat-autosuggest":             "bower_components/patternslib/src/pat/auto-suggest/auto-suggest",
        "pat-auto-suggest":             "bower_components/patternslib/src/pat/auto-suggest/auto-suggest",
        "pat-breadcrumbs":             "bower_components/patternslib/src/pat/breadcrumbs/breadcrumbs",
        "pat-bumper":                  "bower_components/patternslib/src/pat/bumper/bumper",
        "pat-calendar":                "bower_components/patternslib/src/pat/calendar/calendar",
        "pat-carousel":                "bower_components/patternslib/src/pat/carousel/carousel",
        "pat-checkedflag":             "bower_components/patternslib/src/pat/checked-flag/checked-flag",
        "pat-checked-flag":             "bower_components/patternslib/src/pat/checked-flag/checked-flag",
        "pat-checklist":               "bower_components/patternslib/src/pat/checklist/checklist",
        "pat-chosen":                  "bower_components/patternslib/src/pat/chosen/chosen",
        "pat-clone":                   "bower_components/patternslib/src/pat/clone/clone",
        "pat-collapsible":             "bower_components/patternslib/src/pat/collapsible/collapsible",
        "pat-colour-picker":           "bower_components/patternslib/src/pat/colour-picker/colour-picker",
        "pat-depends":                 "bower_components/patternslib/src/pat/depends/depends",
        "pat-edit-tinymce":            "bower_components/patternslib/src/pat/edit-tinymce/edit-tinymce",
        "pat-equaliser":               "bower_components/patternslib/src/pat/equaliser/equaliser",
        "pat-expandable":              "bower_components/patternslib/src/pat/expandable-tree/expandable-tree",
        "pat-expandable-tree":         "bower_components/patternslib/src/pat/expandable-tree/expandable-tree",
        "pat-focus":                   "bower_components/patternslib/src/pat/focus/focus",
        "pat-form-state":              "bower_components/patternslib/src/pat/form-state/form-state",
        "pat-forward":                 "bower_components/patternslib/src/pat/forward/forward",
        "pat-gallery":                 "bower_components/patternslib/src/pat/gallery/gallery",
        "pat-gallery-url":             "bower_components/patternslib/src/pat/gallery",
        "pat-grid":                    "bower_components/patternslib/src/pat/grid/grid",  // Hack, there's no grid jS, but we need for website bundler
        "pat-syntax-highlight":        "bower_components/patternslib/src/pat/syntax-highlight/syntax-highlight",
        "pat-image-crop":              "bower_components/patternslib/src/pat/image-crop/image-crop",
        "pat-inject":                  "bower_components/patternslib/src/pat/inject/inject",
        "pat-legend":                  "bower_components/patternslib/src/pat/legend/legend",
        "pat-markdown":                "bower_components/patternslib/src/pat/markdown/markdown",
        "pat-masonry":                 "bower_components/patternslib/src/pat/masonry/masonry",
        "pat-menu":                    "bower_components/patternslib/src/pat/menu/menu",
        "pat-modal":                   "bower_components/patternslib/src/pat/modal/modal",
        "pat-navigation":              "bower_components/patternslib/src/pat/navigation/navigation",
        "pat-notification":            "bower_components/patternslib/src/pat/notification/notification",
        "pat-placeholder":             "bower_components/patternslib/src/pat/placeholder/placeholder",
        "pat-selectbox":               "bower_components/patternslib/src/pat/selectbox/selectbox",
        "pat-skeleton":                "bower_components/patternslib/src/pat/skeleton/skeleton",
        "pat-slides":                  "bower_components/patternslib/src/pat/slides/slides",
        "pat-slideshow-builder":       "bower_components/patternslib/src/pat/slideshow-builder/slideshow-builder",
        "pat-sortable":                "bower_components/patternslib/src/pat/sortable/sortable",
        "pat-stacks":                  "bower_components/patternslib/src/pat/stacks/stacks",
        "pat-subform":                 "bower_components/patternslib/src/pat/subform/subform",
        "pat-switch":                  "bower_components/patternslib/src/pat/switch/switch",
        "pat-scroll":                  "bower_components/patternslib/src/pat/scroll/scroll",
        "pat-tabs":                    "bower_components/patternslib/src/pat/tabs/tabs",
        "pat-toggle":                  "bower_components/patternslib/src/pat/toggle/toggle",
        "pat-tooltip":                 "bower_components/patternslib/src/pat/tooltip/tooltip",
        "pat-validation":              "bower_components/patternslib/src/pat/validation/validation",
        "pat-zoom":                    "bower_components/patternslib/src/pat/zoom/zoom",
        "patterns":                    "patterns",


        // pat-leaflet
        "pat-leaflet":             "bower_components/pat-leaflet/src/pat-leaflet",
        "leaflet":                 "bower_components/leaflet/dist/leaflet-src",
        "leaflet-fullscreen":      "bower_components/Leaflet.fullscreen/dist/Leaflet.fullscreen",
        "leaflet-providers":       "bower_components/leaflet-providers/leaflet-providers",
        "leaflet-geosearch":       "bower_components/L.GeoSearch/src/js/l.control.geosearch",
        "leaflet-geosearch-bing":  "bower_components/L.GeoSearch/src/js/l.geosearch.provider.bing",
        "leaflet-geosearch-esri":  "bower_components/L.GeoSearch/src/js/l.geosearch.provider.esri",
        "leaflet-geosearch-google": "bower_components/L.GeoSearch/src/js/l.geosearch.provider.google",
        "leaflet-geosearch-openstreetmap": "bower_components/L.GeoSearch/src/js/l.geosearch.provider.openstreetmap",
        "leaflet-markercluster":   "bower_components/leaflet.markercluster/dist/leaflet.markercluster-src",
        "leaflet-awesomemarkers":  "bower_components/Leaflet.awesome-markers/dist/leaflet.awesome-markers",
        "leaflet-locatecontrol":   "bower_components/leaflet.locatecontrol/src/L.Control.Locate",
        "leaflet-minimap":         "bower_components/Leaflet-MiniMap/dist/Control.MiniMap.min",
        "leaflet-sleep":           "bower_components/Leaflet.Sleep/Leaflet.Sleep",
        "leaflet-simplemarkers":   "bower_components/Leaflet.SimpleMarkers/lib/Control.SimpleMarkers",
    },

    shim: {
        "jcrop":                        { deps: ["jquery"] },
        "jquery":                       { exports: ["jQuery"] },
        "jquery.anythingslider":        { deps: ["jquery"] },
        "jquery.chosen":                { deps: ["jquery"] },
        "jquery.fullcalendar.dnd":      { deps: ["jquery"] },
        "jquery.placeholder":           { deps: ["jquery"] },
        "jquery.textchange":            { deps: ["jquery"] },
        "parsley":                      { deps: ["jquery"] },
        "parsley.extend":               { deps: ["jquery"] },
        "select2":                      { deps: ["jquery"] },
        "spectrum":                     { deps: ["jquery"] },
        "tinymce":                      { deps: ["jquery"] },
        "showdown-github":              { deps: ["showdown"] },
        "showdown-prettify":            { deps: ["showdown", "google-code-prettify"] },
        "showdown-table":               { deps: ["showdown"] },
        "modernizr-csspositionsticky":  { deps: ["modernizr"] },
        "leaflet-fullscreen": { deps: ["leaflet"] },
        "leaflet-geosearch": { deps: ["leaflet"] },
        "leaflet-geosearch-bing": { deps: ["leaflet-geosearch"] },
        "leaflet-geosearch-esri": { deps: ["leaflet-geosearch"] },
        "leaflet-geosearch-google": { deps: ["leaflet-geosearch"] },
        "leaflet-geosearch-openstreetmap": { deps: ["leaflet-geosearch"] },
        "leaflet-markercluster": { deps: ["leaflet"] },
        "leaflet-awesomemarkers": { deps: ["leaflet"] },
        "leaflet-locatecontrol": { deps: ["leaflet"] },
        "leaflet-minimap": { deps: ["leaflet"] },
        "leaflet-sleep": { deps: ["leaflet"] },
        "leaflet-simplemarkers": { deps: ["leaflet"] },
    },
});

if (typeof(require) === "function") {
    require(["patterns"], function(patterns) {});
}
