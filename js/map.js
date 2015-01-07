			var urlWhole = "http://localhost/geoserver/opengeo/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=opengeo%3Acb_2013_us_state_5m_diplomacy-impacts&outputformat=json";
			
			var allLayersGroup = new L.LayerGroup();
			
			var currentLegend;
			
			var currentSidebar = L.control();
			
			var keyToggle = L.control({position: "bottomleft"});
			
			function getGeoJson(data) {
				geoJsonLayerEducation = new L.geoJson(data, {style: StyleEducation, onEachFeature: onEachFeature, attribution: cmAttr});
				geoJsonLayerGrants = new L.geoJson(data, {style: StyleGrants, onEachFeature: onEachFeature, attribution: cmAttr});
				geoJsonLayerContracts = new L.geoJson(data, {style: StyleContracts, onEachFeature: onEachFeature, attribution: cmAttr});
			}
			
			$.ajax({
				url: urlWhole,
				dataType: 'json',
				jsonpCallback: getGeoJson,
				success: getGeoJson
			});
			
			var cmAttr = "<a href='mailto:dittemoremb@state.gov'>eDiplomacy Geo|DST</a>";
			//cmAttr = 'Data: <a href="http://www.eia.gov/countries/data.cfm" title="U.S. Energy Information Administration">EIA</a>, <a href="http://www.openstreetmap.org/" title="&copy; OpenStreetMap contributors">OpenStreetMap</a>, <a href="http://www.cloudmade.com/" title="&copy; 2011 CloudMade">CloudMade</a>, <a href="http://www.stamen.com/" title="Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.">Stamen Design</a>',
			
			function getColorEducation(d) {
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
			
			function getColorGrants(d) {
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
			
			function getColorContracts(d) {
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
			
			function StyleEducation(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorEducation(feature.properties.EconImpact)
				};
			}
			
			function StyleGrants(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorGrants(feature.properties.grants)
				};
			}
			
			function StyleContracts(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorContracts(feature.properties.contracts)
				};
			}
			
			var map = new L.Map('map', {
				zoomControl: false,
				center: [35, -95],
				maxZoom: 8,
				minZoom: 1,
				zoom: 4,
				maxBounds: [
					//south west
					[15, -180],
					//north east
					[73, -65]
				]
			});
			
			L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
				maxZoom: 18,
				attribution: cmAttr,
				id: 'examples.map-20v6611k'
			}).addTo(map);

			var sidebarEducation = L.control.sidebar("sidebarEducation", {
				closeButton: true,
				position: "left",
				autoPan: false
			});
			
			var sidebarGrants = L.control.sidebar("sidebarGrants", {
				closeButton: true,
				position: "left",
				autoPan: false
			});
			
			var sidebarContracts = L.control.sidebar("sidebarContracts", {
				closeButton: true,
				position: "left",
				autoPan: false
			});
			
			new L.Control.Zoom({ position: 'topright' }).addTo(map);
			
			$(document).one("ajaxStop", function() {
				allLayersGroup.addLayer(geoJsonLayerEducation);
				map.addLayer(allLayersGroup);
				legendEducation.addTo(map);
				sidebarEducation.toggle();
			$("#loading").hide();
			});
			
			var legendEducation = L.control({position: 'bottomleft'});
			var legendGrants = L.control({position: 'bottomleft'});
			var legendContracts = L.control({position: 'bottomleft'});
			
			function changeLayer() {
				currentSidebar.hide();
				allLayersGroup.clearLayers();
			}
			
			legendEducation.onAdd = function (map) {
				currentLegend = legendEducation;
				currentSidebar = sidebarEducation;
				sidebarEducation.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = [ '100000001','75000001', '50000001', '25000001', '1','No Data'],
					// this is something like a subheader
					labels = [],
					from;

				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 100', '75 to 100', '50 to 75', '25 to 50','0 to 25','No data'];
					
					labels.push(
						'<i style="background:' + getColorEducation(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "Economic Impacts of <br>Education Visas (NAFSA)";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "$USD millions";
				var key = labels.join('<br>');
				sidebarEducation.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '</div>');
				
				return div;
			};
			
			legendGrants.onAdd = function (map) {
				currentLegend = legendGrants;
				currentSidebar = sidebarGrants;
				sidebarGrants.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = ['3000001', '2000001', '1000001', '250001', '1','0'],
					// this is something like a subheader
					labels = [],
					from;
				
				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 3,000,000', '2,000,000 to 3,000,000', '1,000,000 to 2,000,000', '250,000 to 1,000,000', '1 to 250,000', '0'];
					
					labels.push(
						'<i style="background:' + getColorGrants(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "Department of State Grants";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "$USD";
				var key = labels.join('<br>');
				sidebarGrants.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '</div>');
				
				return div;
			};
			 
			legendContracts.onAdd = function (map) {
				currentLegend = legendContracts;
				currentSidebar = sidebarContracts;
				sidebarContracts.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = ['50000001', '10000001', '5000001', '250001', '-22228','No Data'],
					// this is something like a subheader
					labels = [],
					from;

				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 50,000,000', '10,000,000 to 50,000,000', '500,000 to 10,000,000', '25,000 to 500,000', '-22228 to 25,000', 'No data'];
					
					labels.push(
						'<i style="background:' + getColorContracts(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "Department of State Contracts";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "$USD";
				var key = labels.join('<br>');
				sidebarContracts.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '</div>');
				
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

			function onEachFeature(feature, layer) {
				layer.on({
				//mouseover: highlightFeature,
				//mouseout: resetHighlight
				//click: zoomToFeature
				});
			
				var popupContent = "";
				if(feature.properties.STATEFP!=null){
				
				popupContent = "<h4>" + feature.properties.StatePrope + "</h4><h5>Economic Impact: US$" + $.number(feature.properties.EconImpact) + "</h5><h5>International Students: " + $.number(feature.properties.IntlStud) + "</h5><h5>Jobs Created: " + $.number(feature.properties.Jobs) + "</h5><h5>DoS Contracts: US$" + $.number(feature.properties.contracts) + "</h5><h5>DoS Grants: US$" + $.number(feature.properties.grants) + "</h5>";
				
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