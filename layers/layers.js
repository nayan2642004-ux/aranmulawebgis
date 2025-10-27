var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WardBoundary_1 = new ol.format.GeoJSON();
var features_WardBoundary_1 = format_WardBoundary_1.readFeatures(json_WardBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WardBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WardBoundary_1.addFeatures(features_WardBoundary_1);
var lyr_WardBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WardBoundary_1, 
                style: style_WardBoundary_1,
                popuplayertitle: 'WardBoundary',
                interactive: true,
    title: 'WardBoundary<br />\
    <img src="styles/legend/WardBoundary_1_0.png" /> ARANMULA<br />\
    <img src="styles/legend/WardBoundary_1_1.png" /> ARANMULA WEST<br />\
    <img src="styles/legend/WardBoundary_1_2.png" /> ARATTUPUZHA<br />\
    <img src="styles/legend/WardBoundary_1_3.png" /> EDASSERIMALA<br />\
    <img src="styles/legend/WardBoundary_1_4.png" /> EDAYARANMULA NORTH<br />\
    <img src="styles/legend/WardBoundary_1_5.png" /> ERUMAKKADU<br />\
    <img src="styles/legend/WardBoundary_1_6.png" /> GURUKKANKUNNU<br />\
    <img src="styles/legend/WardBoundary_1_7.png" /> KALARIKKODU<br />\
    <img src="styles/legend/WardBoundary_1_8.png" /> KIDANGANNUR EAST<br />\
    <img src="styles/legend/WardBoundary_1_9.png" /> KIDANGANNUR WEST<br />\
    <img src="styles/legend/WardBoundary_1_10.png" /> KOTTA EAST<br />\
    <img src="styles/legend/WardBoundary_1_11.png" /> KOTTA WEST<br />\
    <img src="styles/legend/WardBoundary_1_12.png" /> KOTTAKAKAM<br />\
    <img src="styles/legend/WardBoundary_1_13.png" /> KURICHIMUTTAM NORTH<br />\
    <img src="styles/legend/WardBoundary_1_14.png" /> KURICHIMUTTAM SOUTH<br />\
    <img src="styles/legend/WardBoundary_1_15.png" /> MALAKKARA<br />\
    <img src="styles/legend/WardBoundary_1_16.png" /> NALKALIKKAL<br />\
    <img src="styles/legend/WardBoundary_1_17.png" /> NEERVILAKAM<br />\
    <img src="styles/legend/WardBoundary_1_18.png" /> VALLANA<br />\
    <img src="styles/legend/WardBoundary_1_19.png" /> <br />' });
var format_Anganawadi01_2 = new ol.format.GeoJSON();
var features_Anganawadi01_2 = format_Anganawadi01_2.readFeatures(json_Anganawadi01_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anganawadi01_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anganawadi01_2.addFeatures(features_Anganawadi01_2);
var lyr_Anganawadi01_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anganawadi01_2, 
                style: style_Anganawadi01_2,
                popuplayertitle: 'Anganawadi01',
                interactive: true,
                title: '<img src="styles/legend/Anganawadi01_2.png" /> Anganawadi01'
            });
var format_Location_3 = new ol.format.GeoJSON();
var features_Location_3 = format_Location_3.readFeatures(json_Location_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Location_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Location_3.addFeatures(features_Location_3);
var lyr_Location_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Location_3, 
                style: style_Location_3,
                popuplayertitle: 'Location',
                interactive: true,
                title: '<img src="styles/legend/Location_3.png" /> Location'
            });
var format_RationShop_4 = new ol.format.GeoJSON();
var features_RationShop_4 = format_RationShop_4.readFeatures(json_RationShop_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RationShop_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RationShop_4.addFeatures(features_RationShop_4);
var lyr_RationShop_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RationShop_4, 
                style: style_RationShop_4,
                popuplayertitle: 'RationShop',
                interactive: true,
                title: '<img src="styles/legend/RationShop_4.png" /> RationShop'
            });
var format_Road01_5 = new ol.format.GeoJSON();
var features_Road01_5 = format_Road01_5.readFeatures(json_Road01_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road01_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road01_5.addFeatures(features_Road01_5);
var lyr_Road01_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road01_5, 
                style: style_Road01_5,
                popuplayertitle: 'Road01',
                interactive: true,
                title: '<img src="styles/legend/Road01_5.png" /> Road01'
            });
var format_Transformer1_6 = new ol.format.GeoJSON();
var features_Transformer1_6 = format_Transformer1_6.readFeatures(json_Transformer1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transformer1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transformer1_6.addFeatures(features_Transformer1_6);
var lyr_Transformer1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Transformer1_6, 
                style: style_Transformer1_6,
                popuplayertitle: 'Transformer1',
                interactive: true,
                title: '<img src="styles/legend/Transformer1_6.png" /> Transformer1'
            });

lyr_OSMStandard_0.setVisible(true);lyr_WardBoundary_1.setVisible(true);lyr_Anganawadi01_2.setVisible(true);lyr_Location_3.setVisible(true);lyr_RationShop_4.setVisible(true);lyr_Road01_5.setVisible(true);lyr_Transformer1_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_WardBoundary_1,lyr_Anganawadi01_2,lyr_Location_3,lyr_RationShop_4,lyr_Road01_5,lyr_Transformer1_6];
lyr_WardBoundary_1.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_Anganawadi01_2.set('fieldAliases', {'id': 'id', 'AssetName': 'AssetName', 'Location': 'Location', 'Date': 'Date', 'LULC': 'LULC', 'Remarks': 'Remarks', 'Photo': 'Photo', 'Surveyor': 'Surveyor', 'layer': 'layer', 'path': 'path', });
lyr_Location_3.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_RationShop_4.set('fieldAliases', {'id': 'id', 'AssetName': 'AssetName', 'Location': 'Location', 'Date': 'Date', 'LULC': 'LULC', 'Remarks': 'Remarks', 'Photo': 'Photo', 'Surveyor': 'Surveyor', 'layer': 'layer', 'path': 'path', });
lyr_Road01_5.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_Transformer1_6.set('fieldAliases', {'id': 'id', 'AssetName': 'AssetName', 'Location': 'Location', 'Date': 'Date', 'LULC': 'LULC', 'Remarks': 'Remarks', 'Photo': 'Photo', 'Surveyor': 'Surveyor', 'layer': 'layer', 'path': 'path', });
lyr_WardBoundary_1.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_Anganawadi01_2.set('fieldImages', {'id': '', 'AssetName': '', 'Location': '', 'Date': '', 'LULC': '', 'Remarks': '', 'Photo': '', 'Surveyor': '', 'layer': '', 'path': '', });
lyr_Location_3.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_RationShop_4.set('fieldImages', {'id': '', 'AssetName': '', 'Location': '', 'Date': '', 'LULC': '', 'Remarks': '', 'Photo': '', 'Surveyor': '', 'layer': '', 'path': '', });
lyr_Road01_5.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_Transformer1_6.set('fieldImages', {'id': '', 'AssetName': '', 'Location': '', 'Date': '', 'LULC': '', 'Remarks': '', 'Photo': '', 'Surveyor': '', 'layer': '', 'path': '', });
lyr_WardBoundary_1.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_Anganawadi01_2.set('fieldLabels', {'id': 'no label', 'AssetName': 'no label', 'Location': 'inline label - always visible', 'Date': 'no label', 'LULC': 'inline label - always visible', 'Remarks': 'no label', 'Photo': 'inline label - always visible', 'Surveyor': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Location_3.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - always visible', 'barrier': 'no label', 'highway': 'inline label - always visible', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'inline label - always visible', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_RationShop_4.set('fieldLabels', {'id': 'no label', 'AssetName': 'no label', 'Location': 'inline label - always visible', 'Date': 'no label', 'LULC': 'inline label - always visible', 'Remarks': 'no label', 'Photo': 'inline label - always visible', 'Surveyor': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Road01_5.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'inline label - always visible', 'waterway': 'inline label - always visible', 'aerialway': 'inline label - always visible', 'barrier': 'inline label - always visible', 'man_made': 'inline label - always visible', 'railway': 'inline label - always visible', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_Transformer1_6.set('fieldLabels', {'id': 'no label', 'AssetName': 'no label', 'Location': 'inline label - always visible', 'Date': 'no label', 'LULC': 'inline label - always visible', 'Remarks': 'no label', 'Photo': 'inline label - always visible', 'Surveyor': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Transformer1_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});