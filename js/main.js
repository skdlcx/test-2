require([
        "esri/map",
        "esri/layers/ArcGISDynamicMapServiceLayer",
        "esri/dijit/OverviewMap",
        "dojo/parser",
        "esri/dijit/LayerList",
        "esri/dijit/LocateButton",
        "dijit/layout/BorderContainer",
        "dijit/layout/ContentPane",
        "dojo/domReady!"
    ],
    function(
        Map,
        ArcGISDynamicMapServiceLayer,
        OverviewMap,
        parser,
        LayerList,
        LocateButton

    ) {
        parser.parse();

        var map= new Map("map", {
            basemap: "hybrid",  //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
            center: [118.4855556, 37.4563889], // longitude, latitude
            zoom: 11,
            slider:true
        });

        var layer=new ArcGISDynamicMapServiceLayer("http://localhost:6080/arcgis/rest/services/Yihonghe/MapServer",{
            visible:false
        });

        map.addLayer(layer) ;

        dojo.connect(layer,"onLoad",loadList);

        function loadList(layers) {}

        var overviewMapDijit = new OverviewMap({
            map:map,
            visible: true,
            zoom: 20
        });
        overviewMapDijit.startup();

        var layerList = new LayerList({
            map:map,
            showLegend:true,
            showSubLayers:true,
            showOpacitySlider:true,
            layers:[]
        },"layerListDom")
        layerList.startup();

        var geoLocate = new LocateButton({
            map: map,
            highlightLocation: true
        }, "LocateButton");
        geoLocate.startup();

    });