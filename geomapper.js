// GeoMapper - Amchart customization for maps

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldHigh;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#e4e4e7");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#ccccff");

// Remove Antarctica
// polygonSeries.exclude = ["AQ"];

// Add zoom control
chart.zoomControl = new am4maps.ZoomControl();

// Add Home Button
var button = chart.chartContainer.createChild(am4core.Button);
button.padding(5, 5, 5, 5);
button.align = "right";
button.marginRight = 15;
button.events.on("hit", function() {
  chart.goHome();
});
button.icon = new am4core.Sprite();
button.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";

// Add some data
polygonSeries.data = [
  {"id": "AE", "fill": "#3399ff"},
  {"id": "AU", "fill": "#3399ff"},
  {"id": "KH", "fill": "#3399ff"},
  {"id": "CH", "fill": "#3399ff"},
  {"id": "HK", "fill": "#3399ff"},
  {"id": "IN", "fill": "#3399ff"},
  {"id": "ID", "fill": "#3399ff"},
  {"id": "MO", "fill": "#3399ff"},
  {"id": "MY", "fill": "#3399ff"},
  {"id": "MM", "fill": "#3399ff"},
  {"id": "ES", "fill": "#3399ff"},
  {"id": "SG", "fill": "#3399ff"},
  {"id": "GR", "fill": "#3399ff"},
  {"id": "TH", "fill": "#3399ff"},
  {"id": "VN", "fill": "#3399ff"},
  {"id": "IL", "fill": "#3399ff"},
  {"id": "AT", "fill": "#3399ff"},
  {"id": "IT", "fill": "#3399ff"},
  {"id": "JP", "fill": "#3399ff"},
  {"id": "BE", "fill": "#3399ff"},
  {"id": "CZ", "fill": "#3399ff"},
  {"id": "DK", "fill": "#3399ff"},
  {"id": "LT", "fill": "#3399ff"},
  {"id": "LU", "fill": "#3399ff"},
  {"id": "LV", "fill": "#3399ff"},
  {"id": "EE", "fill": "#3399ff"},
  {"id": "FI", "fill": "#3399ff"},
  {"id": "FR", "fill": "#3399ff"},
  {"id": "DE", "fill": "#3399ff"},
  {"id": "HU", "fill": "#3399ff"},
  {"id": "NL", "fill": "#3399ff"},
  {"id": "OM", "fill": "#3399ff"},
  {"id": "NO", "fill": "#3399ff"},
  {"id": "PL", "fill": "#3399ff"},
  {"id": "PT", "fill": "#3399ff"},
  {"id": "QA", "fill": "#3399ff"},
  {"id": "SK", "fill": "#3399ff"},
  {"id": "SE", "fill": "#3399ff"},
  {"id": "GB", "fill": "#3399ff"},
  {"id": "TW", "fill": "#3399ff"},
  {"id": "TZ", "fill": "#3399ff"},
  {"id": "US", "fill": "#3399ff"},
  {"id": "VA", "fill": "#3399ff"},
  {"id": "PE", "fill": "#3399ff"},
  {"id": "AG", "fill": "#00ffcc"},
  {"id": "AL", "fill": "#ccffcc"},
  {"id": "AM", "fill": "#66ff33"},
  {"id": "AO", "fill": "#99ffcc"},
  {"id": "AQ", "fill": "#ccffcc"},
  {"id": "AR", "fill": "#ccffcc"},
  {"id": "AW", "fill": "#ccffcc"},
  {"id": "AZ", "fill": "#99ffcc"},
  {"id": "BA", "fill": "#ccffcc"},
  {"id": "BB", "fill": "#33cc33"},
  {"id": "BH", "fill": "#00ffcc"},
  {"id": "BJ", "fill": "#66ff33"},
  {"id": "BM", "fill": "#ccffcc"},
  {"id": "BO", "fill": "#99ff33"},
  {"id": "BQ", "fill": "#ccffcc"},
  {"id": "BS", "fill": "#ccffcc"},
  {"id": "BT", "fill": "#33cc33"},
  {"id": "BW", "fill": "#99ff33"},
  {"id": "BZ", "fill": "#ccffcc"},
  {"id": "CC", "fill": "#ccffcc"},
  {"id": "CI", "fill": "#99ffcc"},
  {"id": "CK", "fill": "#33cc33"},
  {"id": "CL", "fill": "#ccffcc"},
  {"id": "CO", "fill": "#ccffcc"},
  {"id": "CR", "fill": "#ccffcc"},
  {"id": "CU", "fill": "#ccffcc"},
  {"id": "CV", "fill": "#99ff33"},
  {"id": "CW", "fill": "#ccffcc"},
  {"id": "CX", "fill": "#ccffcc"},
  {"id": "DJ", "fill": "#99ffcc"},
  {"id": "DM", "fill": "#33cc33"},
  {"id": "DO", "fill": "#ccffcc"},
  {"id": "ET", "fill": "#66ff33"},
  {"id": "FJ", "fill": "#33cc33"},
  {"id": "FM", "fill": "#33cc33"},
  {"id": "GA", "fill": "#66ff33"},
  {"id": "GD", "fill": "#33cc33"},
  {"id": "GE", "fill": "#00ffcc"},
  {"id": "GN", "fill": "#99ffcc"},
  {"id": "GT", "fill": "#ccffcc"},
  {"id": "GW", "fill": "#66ff33"},
  {"id": "HN", "fill": "#ccffcc"},
  {"id": "HT", "fill": "#33cc33"},
  {"id": "IR", "fill": "#99ff33"},
  {"id": "JM", "fill": "#33cc33"},
  {"id": "JO", "fill": "#99ff33"},
  {"id": "KE", "fill": "#66ff33"},
  {"id": "KG", "fill": "#99ffcc"},
  {"id": "KM", "fill": "#99ff33"},
  {"id": "KN", "fill": "#33cc33"},
  {"id": "KR", "fill": "#ccffcc"},
  {"id": "KY", "fill": "#ccffcc"},
  {"id": "LA", "fill": "#66ff33"},
  {"id": "LC", "fill": "#99ff33"},
  {"id": "LK", "fill": "#66ff33"},
  {"id": "LS", "fill": "#99ffcc"},
  {"id": "ME", "fill": "#ccffcc"},
  {"id": "MG", "fill": "#99ff33"},
  {"id": "MH", "fill": "#99ff33"},
  {"id": "MK", "fill": "#ccffcc"},
  {"id": "MR", "fill": "#99ff33"},
  {"id": "MS", "fill": "#33cc33"},
  {"id": "MU", "fill": "#33cc33"},
  {"id": "MV", "fill": "#33cc33"},
  {"id": "MW", "fill": "#99ffcc"},
  {"id": "MX", "fill": "#ccffcc"},
  {"id": "MZ", "fill": "#99ff33"},
  {"id": "NF", "fill": "#ccffcc"},
  {"id": "NI", "fill": "#ccffcc"},
  {"id": "NP", "fill": "#33cc33"},
  {"id": "NU", "fill": "#33cc33"},
  {"id": "PA", "fill": "#ccffcc"},
  {"id": "PG", "fill": "#99ffcc"},
  {"id": "PH", "fill": "#ccffcc"},
  {"id": "PN", "fill": "#33cc33"},
  {"id": "PR", "fill": "#ccffcc"},
  {"id": "PW", "fill": "#99ff33"},
  {"id": "RS", "fill": "#33cc33"},
  {"id": "RU", "fill": "#99ffcc"},
  {"id": "RW", "fill": "#66ff33"},
  {"id": "SC", "fill": "#99ff33"},
  {"id": "SH", "fill": "#66ff33"},
  {"id": "SL", "fill": "#99ff33"},
  {"id": "SN", "fill": "#33cc33"},
  {"id": "SO", "fill": "#99ff33"},
  {"id": "SR", "fill": "#99ffcc"},
  {"id": "ST", "fill": "#00ffcc"},
  {"id": "SV", "fill": "#33cc33"},
  {"id": "SX", "fill": "#ccffcc"},
  {"id": "TC", "fill": "#33cc33"},
  {"id": "TG", "fill": "#99ff33"},
  {"id": "TJ", "fill": "#99ffcc"},
  {"id": "TL", "fill": "#99ff33"},
  {"id": "TN", "fill": "#33cc33"},
  {"id": "TR", "fill": "#ccffcc"},
  {"id": "TT", "fill": "#33cc33"},
  {"id": "TV", "fill": "#99ff33"},
  {"id": "UG", "fill": "#66ff33"},
  {"id": "UZ", "fill": "#99ffcc"},
  {"id": "VC", "fill": "#33cc33"},
  {"id": "VG", "fill": "#33cc33"},
  {"id": "VU", "fill": "#33cc33"},
  {"id": "WS", "fill": "#99ff33"},
  {"id": "XK", "fill": "#ccffcc"},
  {"id": "ZM", "fill": "#99ffcc"},
  {"id": "ZW", "fill": "#66ff33"},
  {"id": "CA", "fill": "#ccffcc"},
];

// Bind "fill" property to "fill" key in data
polygonTemplate.propertyFields.fill = "fill";