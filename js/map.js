			//var urlWhole = "http://54.197.226.119:8080/geoserver/opengeo/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=opengeo%3Acb_2013_us_state_5m_diplomacy-impacts&outputformat=json";
			var urlWholeCD = "http://54.197.226.119:8080/geoserver/opengeo/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=opengeo%3Acb_2013_us_cd113_5m_diplomacy-impacts&outputformat=json";
			var urlWholeState = "http://54.197.226.119:8080/geoserver/opengeo/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=opengeo%3Acb_2013_us_state_5m_diplomacy-impacts&outputformat=json";
			//var urlFDIdata = "http://54.197.226.119:8080/geoserver/opengeo/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=opengeo%3ADATATABLE&outputformat=json";
			var urlFDIDomestic = "http://54.197.226.119:8080/geoserver/opengeo/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=opengeo%3Atbl_FDIDomestic&outputformat=json";
			var urlFDIForeign = "http://54.197.226.119:8080/geoserver/opengeo/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=opengeo%3Atbl_FDIForeign0&outputformat=json";
			
			/*
			var cds = L.tileLayer(mapboxUrl, {id: 'MapID', attribution: mapboxAttribution}),
				counties = L.tileLayer(mapboxUrl, {id: 'MapID', attribution: mapboxAttribution}),
				states = L.tileLayer(mapboxUrl, {id: 'MapID', attribution: mapboxAttribution});
			*/
			var allLayersGroup = new L.LayerGroup();
			
			var currentLegend;
			
			var currentSidebar = L.control();
			
			var keyToggle = L.control({position: "bottomleft"});
			
			function getGeoJsonCD(data) {
				geoJsonLayerEducationCD = new L.geoJson(data, {style: StyleEducationCD, onEachFeature: onEachFeatureCD, attribution: cmAttr});
				geoJsonLayerIntlStudentsCD = new L.geoJson(data, {style: StyleIntlStudentsCD, onEachFeature: onEachFeatureCD, attribution: cmAttr});
				geoJsonLayerEducationJobsCD = new L.geoJson(data, {style: StyleEducationJobsCD, onEachFeature: onEachFeatureCD, attribution: cmAttr});
				//geoJsonLayerGrantsCD = new L.geoJson(data, {style: StyleGrantsCD, onEachFeature: onEachFeatureCD, attribution: cmAttr});
				//geoJsonLayerContractsCD = new L.geoJson(data, {style: StyleContractsCD, onEachFeature: onEachFeatureCD, attribution: cmAttr});
				geoJsonLayerFDIInvestCD = new L.geoJson(data, {style: StyleFDIInvestCD, onEachFeature: onEachFeatureCD, attribution: cmAttr});
				geoJsonLayerFDIJobsCD = new L.geoJson(data, {style: StyleFDIJobsCD, onEachFeature: onEachFeatureCD, attribution: cmAttr});
			}
			
			function getGeoJsonState(data) {
				geoJsonLayerEducationState = new L.geoJson(data, {style: StyleEducationState, onEachFeature: onEachFeatureState, attribution: cmAttr});
				geoJsonLayerIntlStudentsState = new L.geoJson(data, {style: StyleIntlStudentsState, onEachFeature: onEachFeatureState, attribution: cmAttr});
				geoJsonLayerEducationJobsState = new L.geoJson(data, {style: StyleEducationJobsState, onEachFeature: onEachFeatureState, attribution: cmAttr});
				geoJsonLayerGrantsState = new L.geoJson(data, {style: StyleGrantsState, onEachFeature: onEachFeatureState, attribution: cmAttr});
				geoJsonLayerContractsState = new L.geoJson(data, {style: StyleContractsState, onEachFeature: onEachFeatureState, attribution: cmAttr});
				geoJsonLayerFDIInvestState = new L.geoJson(data, {style: StyleFDIInvestState, onEachFeature: onEachFeatureState, attribution: cmAttr});
				geoJsonLayerFDIJobsState = new L.geoJson(data, {style: StyleFDIJobsState, onEachFeature: onEachFeatureState, attribution: cmAttr});
			}
			
			$.ajax({
				url: urlWholeCD,
				dataType: 'json',
				jsonpCallback: getGeoJsonCD,
				success: getGeoJsonCD
			});
			
			$.ajax({
				url: urlWholeState,
				dataType: 'json',
				jsonpCallback: getGeoJsonState,
				success: getGeoJsonState
			});
			
			var cmAttr = "<a href='mailto:dittemoremb@state.gov'>eDiplomacy Geo|DST</a>";
			//cmAttr = 'Data: <a href="http://www.eia.gov/countries/data.cfm" title="U.S. Energy Information Administration">EIA</a>, <a href="http://www.openstreetmap.org/" title="&copy; OpenStreetMap contributors">OpenStreetMap</a>, <a href="http://www.cloudmade.com/" title="&copy; 2011 CloudMade">CloudMade</a>, <a href="http://www.stamen.com/" title="Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.">Stamen Design</a>',
			
			function getColorEducationCD(d) {
				if (d > 75000000) {
					return	'#51493f'
				} else if (d > 40000000) {
					return	'#6d6252'
				} else if (d > 20000000) {
					return	'#8d7f68'
				} else if (d > 10000000) {
					return	'#b2a483'
				} else if (d > 0) {
					return	'#e0d2a4'
				} else {
					return	'#dedddd';
				}
			}
			
			function getColorIntlStudentsCD(d) {
				if (d > 2500) {
					return	'#51493f'
				} else if (d > 1500) {
					return	'#6d6252'
				} else if (d > 500) {
					return	'#8d7f68'
				} else if (d > 250) {
					return	'#b2a483'
				} else if (d > 0) {
					return	'#e0d2a4'
				} else {
					return	'#dedddd';
				}
			}
			
			function getColorEducationJobsCD(d) {
				if (d > 1000) {
					return	'#51493f'
				} else if (d > 400) {
					return	'#6d6252'
				} else if (d > 150) {
					return	'#8d7f68'
				} else if (d > 50) {
					return	'#b2a483'
				} else if (d > 0) {
					return	'#e0d2a4'
				} else {
					return	'#dedddd';
				}
			}
			/*
			function getColorGrantsCD(d) {
				if (d > 3000000) {
					return	'#51493f'
				} else if (d > 2000000) {
					return	'#6d6252'
				} else if (d > 1000000) {
					return	'#8d7f68'
				} else if (d > 250000) {
					return	'#b2a483'
				} else if (d > 0) {
					return	'#e0d2a4'
				} else {
					return	'#dedddd';
				}
			}
			
			function getColorContractsCD(d) {
				if (d > 50000000) {
					return	'#51493f'
				} else if (d > 10000000) {
					return	'#6d6252'
				} else if (d > 5000000) {
					return	'#8d7f68'
				} else if (d > 250000) {
					return	'#b2a483'
				} else if (d > -22229) {
					return	'#e0d2a4'
				} else {
					return	'#dedddd';
				}
			}
			*/
			function getColorFDIInvestCD(d) {
				if (d > 1000000000) {
					return	'#51493f'
				} else if (d > 635000000) {
					return	'#6d6252'
				} else if (d > 400000000) {
					return	'#8d7f68'
				} else if (d > 200000000) {
					return	'#b2a483'
				} else if (d > 0) {
					return	'#e0d2a4'
				} else {
					return	'#dedddd';
				}
			}
			
			function getColorFDIJobsCD(d) {
				if (d > 3500) {
					return	'#51493f'
				} else if (d > 2500) {
					return	'#6d6252'
				} else if (d > 1500) {
					return	'#8d7f68'
				} else if (d > 1000) {
					return	'#b2a483'
				} else if (d > 0) {
					return	'#e0d2a4'
				} else {
					return	'#dedddd';
				}
			}
			
			function getColorEducationState(d) {
				if (d > 100000000) {
					return	'#51493f'
				} else if (d > 75000000) {
					return	'#6d6252'
				} else if (d > 50000000) {
					return	'#8d7f68'
				} else if (d > 25000000) {
					return	'#b2a483'
				} else if (d > 0) {
					return	'#e0d2a4'
				} else {
					return	'#dedddd';
				}
			}
			
			function getColorIntlStudentsState(d) {
				if (d > 2500) {
					return	'#51493f'
				} else if (d > 1500) {
					return	'#6d6252'
				} else if (d > 1000) {
					return	'#8d7f68'
				} else if (d > 500) {
					return	'#b2a483'
				} else if (d > 0) {
					return	'#e0d2a4'
				} else {
					return	'#dedddd';
				}
			}
			
			function getColorEducationJobsState(d) {
				if (d > 1000) {
					return	'#51493f'
				} else if (d > 500) {
					return	'#6d6252'
				} else if (d > 250) {
					return	'#8d7f68'
				} else if (d > 100) {
					return	'#b2a483'
				} else if (d > 0) {
					return	'#e0d2a4'
				} else {
					return	'#dedddd';
				}
			}
			
			function getColorGrantsState(d) {
				if (d > 3000000) {
					return	'#51493f'
				} else if (d > 2000000) {
					return	'#6d6252'
				} else if (d > 1000000) {
					return	'#8d7f68'
				} else if (d > 250000) {
					return	'#b2a483'
				} else if (d > 0) {
					return	'#e0d2a4'
				} else {
					return	'#dedddd';
				}
			}
			
			function getColorContractsState(d) {
				if (d > 50000000) {
					return	'#51493f'
				} else if (d > 10000000) {
					return	'#6d6252'
				} else if (d > 5000000) {
					return	'#8d7f68'
				} else if (d > 250000) {
					return	'#b2a483'
				} else if (d > -22229) {
					return	'#e0d2a4'
				} else {
					return	'#dedddd';
				}
			}
			
			function getColorFDIInvestState(d) {
				if (d > 170000000) {
					return	'#51493f'
				} else if (d > 100000000) {
					return	'#6d6252'
				} else if (d > 70000000) {
					return	'#8d7f68'
				} else if (d > 20000000) {
					return	'#b2a483'
				} else if (d > 0) {
					return	'#e0d2a4'
				} else {
					return	'#dedddd';
				}
			}
			
			function getColorFDIJobsState(d) {
				if (d > 3000) {
					return	'#51493f'
				} else if (d > 1500) {
					return	'#6d6252'
				} else if (d > 700) {
					return	'#8d7f68'
				} else if (d > 350) {
					return	'#b2a483'
				} else if (d > 0) {
					return	'#e0d2a4'
				} else {
					return	'#dedddd';
				}
			}
			
			function StyleEducationCD(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorEducationCD(feature.properties.EconImpact)
				};
			}
			
			function StyleIntlStudentsCD(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorIntlStudentsCD(feature.properties.IntlStud)
				};
			}
			
			function StyleEducationJobsCD(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorEducationJobsCD(feature.properties.Jobs)
				};
			}
			/*
			function StyleGrantsCD(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorGrantsCD(feature.properties.grants)
				};
			}
			
			function StyleContractsCD(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorContractsCD(feature.properties.contracts)
				};
			}
			*/
			function StyleFDIInvestCD(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorFDIInvestCD(feature.properties.fdi_invest)
				};
			}
			
			function StyleFDIJobsCD(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorFDIJobsCD(feature.properties.fdi_jobs)
				};
			}
			
			function StyleEducationState(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorEducationState(feature.properties.EconImpact)
				};
			}
			
			function StyleIntlStudentsState(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorIntlStudentsState(feature.properties.IntlStud)
				};
			}
			
			function StyleEducationJobsState(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorEducationJobsState(feature.properties.Jobs)
				};
			}
			
			function StyleGrantsState(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorGrantsState(feature.properties.grants)
				};
			}
			
			function StyleContractsState(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorContractsState(feature.properties.contracts)
				};
			}
			
			function StyleFDIInvestState(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorFDIInvestState(feature.properties.fdi_invest)
				};
			}
			
			function StyleFDIJobsState(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorFDIJobsState(feature.properties.fdi_jobs)
				};
			}
			
			var map = new L.Map('map', {
				zoomControl: false,
				center: [35, -95],
				maxZoom: 8,
				minZoom: 1,
				zoom: 4
				/*
				,
				maxBounds: [
					//south west
					[15, -180],
					//north east
					[73, -65]
				]
				*/
			});
			
			L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
				maxZoom: 18,
				attribution: cmAttr,
				id: 'examples.map-20v6611k'
			}).addTo(map);

			var geoJsonLayerFDIDomestic;
			var geoJsonLayerFDIForeign;
			
			function getFDIDomesticGeoJson(data) {
				var geoJsonLayerFDIDomestic = new L.geoJson(data, {
					onEachFeature: function (feature, layer) {
						layer.bindPopup("<h4>" + feature.properties.AffName + "</h4><h5>Parent Company: " + feature.properties.ForName + "</h5><h5>FDI Invested: US$" + $.number(feature.properties.fdi_invest) + "</h5><h5>Jobs Created by FDI: " + $.number(feature.properties.fdi_jobs) + "</h5>");
					}
				});
			
				markersDomestic = L.markerClusterGroup({showCoverageOnHover: false, maxClusterRadius: 30});
				markersDomestic.addLayer(geoJsonLayerFDIDomestic);
				//map.addLayer(markersDomestic);
			}

			function getFDIForeignGeoJson(data) {
				var geoJsonLayerFDIForeign = new L.geoJson(data, {
					onEachFeature: function (feature, layer) {
						layer.bindPopup("<h4>Foreign Firm: " + feature.properties.ForName + " </h4><h5>FDI Invested: US$" + $.number(feature.properties.SumOffdi_i) + "</h5><h5>Jobs Created by FDI: " + $.number(feature.properties.SumOffdi_j) + "</h5>");
					}
				});
			
				markersForeign = L.markerClusterGroup({showCoverageOnHover: false, maxClusterRadius: 30});
				markersForeign.addLayer(geoJsonLayerFDIForeign);
				//map.addLayer(markersForeign);
			}

			$.ajax({
				url: urlFDIDomestic,
				dataType: 'json',
				jsonpCallback: getFDIDomesticGeoJson,
				success: getFDIDomesticGeoJson
			});
		
			$.ajax({
				url: urlFDIForeign,
				dataType: 'json',
				jsonpCallback: getFDIForeignGeoJson,
				success: getFDIForeignGeoJson
			});
			
			var sidebarEducationCD = L.control.sidebar("sidebarEducationCD", {
				closeButton: true,
				position: "left",
				autoPan: false
			});
			
			var sidebarIntlStudentsCD = L.control.sidebar("sidebarIntlStudentsCD", {
				closeButton: true,
				position: "left",
				autoPan: false
			});
			
			var sidebarEducationJobsCD = L.control.sidebar("sidebarEducationJobsCD", {
				closeButton: true,
				position: "left",
				autoPan: false
			});
			/*
			var sidebarGrantsCD = L.control.sidebar("sidebarGrantsCD", {
				closeButton: true,
				position: "left",
				autoPan: false
			});
			
			var sidebarContractsCD = L.control.sidebar("sidebarContractsCD", {
				closeButton: true,
				position: "left",
				autoPan: false
			});
			*/
			var sidebarFDIInvestCD = L.control.sidebar("sidebarFDIInvestCD", {
				closeButton: true,
				position: "left",
				autoPan: false
			});
			
			var sidebarFDIJobsCD = L.control.sidebar("sidebarFDIJobsCD", {
				closeButton: true,
				position: "left",
				autoPan: false
			});
			
			var sidebarEducationState = L.control.sidebar("sidebarEducationState", {
				closeButton: true,
				position: "left",
				autoPan: false
			});
			
			var sidebarIntlStudentsState = L.control.sidebar("sidebarIntlStudentsState", {
				closeButton: true,
				position: "left",
				autoPan: false
			});
			
			var sidebarEducationJobsState = L.control.sidebar("sidebarEducationJobsState", {
				closeButton: true,
				position: "left",
				autoPan: false
			});
			
			var sidebarGrantsState = L.control.sidebar("sidebarGrantsState", {
				closeButton: true,
				position: "left",
				autoPan: false
			});
			
			var sidebarContractsState = L.control.sidebar("sidebarContractsState", {
				closeButton: true,
				position: "left",
				autoPan: false
			});
			
			var sidebarFDIInvestState = L.control.sidebar("sidebarFDIInvestState", {
				closeButton: true,
				position: "left",
				autoPan: false
			});
			
			var sidebarFDIJobsState = L.control.sidebar("sidebarFDIJobsState", {
				closeButton: true,
				position: "left",
				autoPan: false
			});
			
			new L.Control.Zoom({ position: 'topright' }).addTo(map);
			
			$(document).one("ajaxStop", function() {
				allLayersGroup.addLayer(geoJsonLayerEducationState);
				map.addLayer(allLayersGroup);
				legendEducationState.addTo(map);
				sidebarEducationState.toggle();
			$("#loading").hide();
			});
			
			var legendEducationCD = L.control({position: 'bottomleft'});
			var legendIntlStudentsCD = L.control({position: 'bottomleft'});
			var legendEducationJobsCD = L.control({position: 'bottomleft'});
			//var legendGrantsCD = L.control({position: 'bottomleft'});
			//var legendContractsCD = L.control({position: 'bottomleft'});
			var legendFDIInvestCD = L.control({position: 'bottomleft'});
			var legendFDIJobsCD = L.control({position: 'bottomleft'});
			var legendEducationState = L.control({position: 'bottomleft'});
			var legendIntlStudentsState = L.control({position: 'bottomleft'});
			var legendEducationJobsState = L.control({position: 'bottomleft'});
			var legendGrantsState = L.control({position: 'bottomleft'});
			var legendContractsState = L.control({position: 'bottomleft'});
			var legendFDIInvestState = L.control({position: 'bottomleft'});
			var legendFDIJobsState = L.control({position: 'bottomleft'});
			
			function changeLayer() {
				currentSidebar.hide();
				allLayersGroup.clearLayers();
			}
			
			legendEducationCD.onAdd = function (map) {
				currentLegend = legendEducationCD;
				currentSidebar = sidebarEducationCD;
				sidebarEducationCD.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = [ '75000001','40000001', '20000001', '10000001', '1','No Data'],
					// this is something like a subheader
					labels = [],
					from;

				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 75', '40 to 75', '20 to 40', '10 to 20','1 to 10','No data'];
					
					labels.push(
						'<i style="background:' + getColorEducationCD(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "Economic Impacts of <br>Education Visas (NAFSA)";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "$USD millions";
				var key = labels.join('<br>');
				sidebarEducationCD.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '</div>');
				
				return div;
			};
			
			legendIntlStudentsCD.onAdd = function (map) {
				currentLegend = legendIntlStudentsCD;
				currentSidebar = sidebarIntlStudentsCD;
				sidebarIntlStudentsCD.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = [ '2501','1501', '1001', '501', '1','No Data'],
					// this is something like a subheader
					labels = [],
					from;

				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 2,500', '1,500 to 2,500', '500 to 1,500', '500 to 1,000','1 to 500','No data'];
					
					labels.push(
						'<i style="background:' + getColorIntlStudentsCD(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "International Students";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "";
				var key = labels.join('<br>');
				sidebarIntlStudentsCD.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '</div>');
				
				return div;
			};
			
			legendEducationJobsCD.onAdd = function (map) {
				currentLegend = legendEducationJobsCD;
				currentSidebar = sidebarEducationJobsCD;
				sidebarEducationJobsCD.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = [ '2501','1501', '501', '251', '1','No Data'],
					// this is something like a subheader
					labels = [],
					from;

				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 2,500', '1,500 to 2,500', '500 to 1,500', '250 to 500','1 to 250','No data'];
					
					labels.push(
						'<i style="background:' + getColorEducationJobsCD(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "Jobs Created";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "by International Students";
				var key = labels.join('<br>');
				sidebarEducationJobsCD.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '</div>');
				
				return div;
			};
			/*
			legendGrantsCD.onAdd = function (map) {
				currentLegend = legendGrantsCD;
				currentSidebar = sidebarGrantsCD;
				sidebarGrantsCD.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = ['3000001', '2000001', '1000001', '250001', '1','0'],
					// this is something like a subheader
					labels = [],
					from;
				
				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 3,000,000', '2,000,000 to 3,000,000', '1,000,000 to 2,000,000', '250,000 to 1,000,000', '1 to 250,000', '0'];
					
					labels.push(
						'<i style="background:' + getColorGrantsCD(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "Department of State Grants";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "$USD";
				var key = labels.join('<br>');
				sidebarGrantsCD.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '</div>');
				
				return div;
			};
			 
			legendContractsCD.onAdd = function (map) {
				currentLegend = legendContractsCD;
				currentSidebar = sidebarContractsCD;
				sidebarContractsCD.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = ['50000001', '10000001', '5000001', '250001', '-22228','No Data'],
					// this is something like a subheader
					labels = [],
					from;

				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 50,000,000', '10,000,000 to 50,000,000', '500,000 to 10,000,000', '25,000 to 500,000', '-22228 to 25,000', 'No data'];
					
					labels.push(
						'<i style="background:' + getColorContractsCD(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "Department of State Contracts";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "$USD";
				var key = labels.join('<br>');
				sidebarContractsCD.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '</div>');
				
				return div;
			};
			*/
			legendFDIInvestCD.onAdd = function (map) {
				currentLegend = legendFDIInvestCD;
				currentSidebar = sidebarFDIInvestCD;
				sidebarFDIInvestCD.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = ['1000000001', '635000001', '400000001', '200000001', '1','0'],
					// this is something like a subheader
					labels = [],
					from;

				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 1,000', '635 to 1,000', '400 to 635', '200 to 400', '1 to 200', '0'];
					
					labels.push(
						'<i style="background:' + getColorFDIInvestCD(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "Foreign Direct Investments";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "$USD million";
				var key = labels.join('<br>');
				sidebarFDIInvestCD.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '<h6>FDI data limited to Brazil, South Africa,<br>South Korea, Sweden, and UAE</h6></div>');
				
				return div;
			};
			
			legendFDIJobsCD.onAdd = function (map) {
				currentLegend = legendFDIJobsCD;
				currentSidebar = sidebarFDIJobsCD;
				sidebarFDIJobsCD.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = ['3501', '2501', '1501', '1001', '1','0'],
					// this is something like a subheader
					labels = [],
					from;

				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 3,500', '2,500 to 3,500', '1,500 to 2,500', '1,000 to 1,500', '1 to 1,000', '0'];
					
					labels.push(
						'<i style="background:' + getColorFDIJobsCD(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "Foreign Direct Investment";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "Jobs Created";
				var key = labels.join('<br>');
				sidebarFDIJobsCD.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '<h6>FDI data limited to Brazil, South Africa,<br>South Korea, Sweden, and UAE</h6></div>');
				
				return div;
			};
			
			legendEducationState.onAdd = function (map) {
				currentLegend = legendEducationState;
				currentSidebar = sidebarEducationState;
				sidebarEducationState.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = [ '100000001','75000001', '50000001', '25000001', '1','No Data'],
					// this is something like a subheader
					labels = [],
					from;

				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 100', '75 to 100', '50 to 75', '25 to 50','1 to 25','No data'];
					
					labels.push(
						'<i style="background:' + getColorEducationState(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "Economic Impacts of <br>Education Visas (NAFSA)";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "$USD millions";
				var key = labels.join('<br>');
				sidebarEducationState.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '</div>');
				
				return div;
			};
			
			legendIntlStudentsState.onAdd = function (map) {
				currentLegend = legendIntlStudentsState;
				currentSidebar = sidebarIntlStudentsState;
				sidebarIntlStudentsState.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = [ '2501','1501', '1001', '501', '1','No Data'],
					// this is something like a subheader
					labels = [],
					from;

				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 2,500', '1,500 to 2,500', '500 to 1,500', '500 to 1,000','1 to 500','No data'];
					
					labels.push(
						'<i style="background:' + getColorIntlStudentsState(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "International Students";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "";
				var key = labels.join('<br>');
				sidebarIntlStudentsState.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '</div>');
				
				return div;
			};
			
			legendEducationJobsState.onAdd = function (map) {
				currentLegend = legendEducationJobsState;
				currentSidebar = sidebarEducationJobsState;
				sidebarEducationJobsState.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = [ '1001','401', '151', '51', '1','No Data'],
					// this is something like a subheader
					labels = [],
					from;

				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 1,000', '400 to 1,000', '150 to 400', '50 to 150','1 to 50','No data'];
					
					labels.push(
						'<i style="background:' + getColorEducationJobsState(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "Jobs Created";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "by International Students";
				var key = labels.join('<br>');
				sidebarEducationJobsState.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '</div>');
				
				return div;
			};
			
			legendGrantsState.onAdd = function (map) {
				currentLegend = legendGrantsState;
				currentSidebar = sidebarGrantsState;
				sidebarGrantsState.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = ['3000001', '2000001', '1000001', '250001', '1','0'],
					// this is something like a subheader
					labels = [],
					from;
				
				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 3,000,000', '2,000,000 to 3,000,000', '1,000,000 to 2,000,000', '250,000 to 1,000,000', '1 to 250,000', '0'];
					
					labels.push(
						'<i style="background:' + getColorGrantsState(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "Department of State Grants";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "$USD";
				var key = labels.join('<br>');
				sidebarGrantsState.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '</div>');
				
				return div;
			};
			 
			legendContractsState.onAdd = function (map) {
				currentLegend = legendContractsState;
				currentSidebar = sidebarContractsState;
				sidebarContractsState.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = ['50000001', '10000001', '5000001', '250001', '-22228','No Data'],
					// this is something like a subheader
					labels = [],
					from;

				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 50,000,000', '10,000,000 to 50,000,000', '500,000 to 10,000,000', '25,000 to 500,000', '-22228 to 25,000', 'No data'];
					
					labels.push(
						'<i style="background:' + getColorContractsState(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "Department of State Contracts";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "$USD";
				var key = labels.join('<br>');
				sidebarContractsState.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '</div>');
				
				return div;
			};

			legendFDIInvestState.onAdd = function (map) {
				currentLegend = legendFDIInvestState;
				currentSidebar = sidebarFDIInvestState;
				sidebarFDIInvestState.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = ['170000001', '100000001', '70000001', '20000001', '1','0'],
					// this is something like a subheader
					labels = [],
					from;

				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 170', '100 to 170', '70 to 100', '20 to 70', '1 to 20', '0'];
					
					labels.push(
						'<i style="background:' + getColorFDIInvestState(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "Foreign Direct Investments";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "$USD million";
				var key = labels.join('<br>');
				sidebarFDIInvestState.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '<h6>FDI data limited to Brazil, South Africa,<br>South Korea, Sweden, and UAE</h6></div>');
				
				return div;
			};
			
			legendFDIJobsState.onAdd = function (map) {
				currentLegend = legendFDIJobsState;
				currentSidebar = sidebarFDIJobsState;
				sidebarFDIJobsState.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = ['3001', '1501', '701', '351', '1','0'],
					// this is something like a subheader
					labels = [],
					from;

				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 3,000', '1,500 to 3,000', '700 to 1.500', '350 to 700', '1 to 350', '0'];
					
					labels.push(
						'<i style="background:' + getColorFDIJobsState(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "Foreign Direct Investment";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "Jobs Created";
				var key = labels.join('<br>');
				sidebarFDIJobsState.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '<h6>FDI data limited to Brazil, South Africa,<br>South Korea, Sweden, and UAE</h6></div>');
				
				return div;
			};
			
			function highlightFeature(e) {
				var layer = e.target;

				layer.setStyle({
					weight: 2,
					color: '#666',
					dashArray: '',
					fillOpacity: 0.7
				});

				if (!L.Browser.ie && !L.Browser.opera) {
					layer.bringToFront();
				}
			}
			
			function resetHighlight(e) {
				geoJsonLayer1.resetStyle(e.target);
				//geoJsonLayer2.resetStyle(e.target);
			}
			
			function zoomToFeature(e) {
				map.fitBounds(e.target.getBounds());
			}

			var popup = L.popup();

			function onEachFeatureCD(feature, layer) {
				layer.on({
				//mouseover: highlightFeature,
				//mouseout: resetHighlight
				//click: zoomToFeature
				});
			
				var popupContent = "";
				if(feature.properties.CD113FP!=null){
				
				popupContent = "<h4>" + feature.properties.StatePrope + " " + feature.properties.CD113FP + "</h4><h5>Economic Impact: US$" + $.number(feature.properties.EconImpact) + "</h5><h5>International Students: " + $.number(feature.properties.IntlStud) + "</h5><h5>Jobs Created: " + $.number(feature.properties.Jobs) + "</h5><h5>DoS Contracts: US$" + $.number(feature.properties.contracts) + "</h5><h5>DoS Grants: US$" + $.number(feature.properties.grants) + "</h5><h5>FDI Invested: US$" + $.number(feature.properties.fdi_invest) + "</h5><h5>Jobs Created by FDI: " + $.number(feature.properties.fdi_jobs) + "</h5>";
				
				layer.bindPopup(popupContent);
				}
				
			}
			
			function onEachFeatureState(feature, layer) {
				layer.on({
				//mouseover: highlightFeature,
				//mouseout: resetHighlight
				//click: zoomToFeature
				});
			
				var popupContent = "";
				if(feature.properties.STATEFP!=null){
				
				popupContent = "<h4>" + feature.properties.StatePrope + "</h4><h5>Economic Impact: US$" + $.number(feature.properties.EconImpact) + "</h5><h5>International Students: " + $.number(feature.properties.IntlStud) + "</h5><h5>Jobs Created: " + $.number(feature.properties.Jobs) + "</h5><h5>DoS Contracts: US$" + $.number(feature.properties.contracts) + "</h5><h5>DoS Grants: US$" + $.number(feature.properties.grants) + "</h5><h5>FDI Invested: US$" + $.number(feature.properties.fdi_invest) + "</h5><h5>Jobs Created by FDI: " + $.number(feature.properties.fdi_jobs) + "</h5>";
				
				layer.bindPopup(popupContent);
				}
				
			}
			
			//legend.addTo(map);
			
			keyToggle.onAdd = function (map) {
				this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
				this._div.innerHTML = "<a data-toggle='collapse' data-parent='#accordion' onclick='currentSidebar.hide();currentSidebar.show();'>Show/Hide Key</a>";
				return this._div;
			};

			// method that we will use to update the control based on feature properties passed
			
			keyToggle.addTo(map);	