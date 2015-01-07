			var urlWhole = "http://54.197.226.119:8080/geoserver/opengeo/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=opengeo%3Acb_2013_us_state_5m_diplomacy-impacts&outputformat=json";
			
			var allLayersGroup = new L.LayerGroup();
			
			var currentLegend;
			
			var currentSidebar = L.control();
			
			var keyToggle = L.control({position: "bottomleft"});
			
			function getGeoJson(data) {
				geoJsonLayerEducation = new L.geoJson(data, {style: StyleEducation, onEachFeature: onEachFeature, attribution: cmAttr});
				geoJsonLayerIntlStudents = new L.geoJson(data, {style: StyleIntlStudents, onEachFeature: onEachFeature, attribution: cmAttr});
				geoJsonLayerEducationJobs = new L.geoJson(data, {style: StyleEducationJobs, onEachFeature: onEachFeature, attribution: cmAttr});
				geoJsonLayerGrants = new L.geoJson(data, {style: StyleGrants, onEachFeature: onEachFeature, attribution: cmAttr});
				geoJsonLayerContracts = new L.geoJson(data, {style: StyleContracts, onEachFeature: onEachFeature, attribution: cmAttr});
				geoJsonLayerFDIInvest = new L.geoJson(data, {style: StyleFDIInvest, onEachFeature: onEachFeature, attribution: cmAttr});
				geoJsonLayerFDIJobs = new L.geoJson(data, {style: StyleFDIJobs, onEachFeature: onEachFeature, attribution: cmAttr});
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
			
			function getColorIntlStudents(d) {
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
			
			function getColorEducationJobs(d) {
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
			
			function getColorFDIInvest(d) {
				if (d > 125000000) {
					return	'#51493f'
				} else if (d > 100000000) {
					return	'#6d6252'
				} else if (d > 50000000) {
					return	'#8d7f68'
				} else if (d > 15000000) {
					return	'#b2a483'
				} else if (d > 0) {
					return	'#e0d2a4'
				} else {
					return	'#dedddd';
				}
			}
			
			function getColorFDIJobs(d) {
				if (d > 500) {
					return	'#51493f'
				} else if (d > 300) {
					return	'#6d6252'
				} else if (d > 150) {
					return	'#8d7f68'
				} else if (d > 100) {
					return	'#b2a483'
				} else if (d > 0) {
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
			
			function StyleIntlStudents(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorIntlStudents(feature.properties.IntlStud)
				};
			}
			
			function StyleEducationJobs(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorEducationJobs(feature.properties.Jobs)
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
			
			function StyleFDIInvest(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorFDIInvest(feature.properties.fdi_invest)
				};
			}
			
			function StyleFDIJobs(feature) {
				return {
					weight: 1,
					opacity: 1,
					color: 'white',
					//fillOpacity: 0.7,
					fillOpacity: 0.85,
					fillColor: getColorFDIJobs(feature.properties.fdi_jobs)
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
			
			var sidebarIntlStudents = L.control.sidebar("sidebarIntlStudents", {
				closeButton: true,
				position: "left",
				autoPan: false
			});
			
			var sidebarEducationJobs = L.control.sidebar("sidebarEducationJobs", {
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
			
			var sidebarFDIInvest = L.control.sidebar("sidebarFDIInvest", {
				closeButton: true,
				position: "left",
				autoPan: false
			});
			
			var sidebarFDIJobs = L.control.sidebar("sidebarFDIJobs", {
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
			var legendIntlStudents = L.control({position: 'bottomleft'});
			var legendEducationJobs = L.control({position: 'bottomleft'});
			var legendGrants = L.control({position: 'bottomleft'});
			var legendContracts = L.control({position: 'bottomleft'});
			var legendFDIInvest = L.control({position: 'bottomleft'});
			var legendFDIJobs = L.control({position: 'bottomleft'});
			
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
					from = ['Greater than 100', '75 to 100', '50 to 75', '25 to 50','1 to 25','No data'];
					
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
			
			legendIntlStudents.onAdd = function (map) {
				currentLegend = legendIntlStudents;
				currentSidebar = sidebarIntlStudents;
				sidebarIntlStudents.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = [ '2501','1501', '1001', '501', '1','No Data'],
					// this is something like a subheader
					labels = [],
					from;

				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 2,500', '1,500 to 2,500', '500 to 1,500', '500 to 1,000','1 to 500','No data'];
					
					labels.push(
						'<i style="background:' + getColorIntlStudents(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "International Students";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "";
				var key = labels.join('<br>');
				sidebarIntlStudents.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '</div>');
				
				return div;
			};
			
			legendEducationJobs.onAdd = function (map) {
				currentLegend = legendEducationJobs;
				currentSidebar = sidebarEducationJobs;
				sidebarEducationJobs.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = [ '1001','501', '251', '101', '1','No Data'],
					// this is something like a subheader
					labels = [],
					from;

				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 1,000', '500 to 1,000', '250 to 500', '100 to 250','1 to 100','No data'];
					
					labels.push(
						'<i style="background:' + getColorEducationJobs(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "Jobs Created";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "by International Students";
				var key = labels.join('<br>');
				sidebarEducationJobs.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '</div>');
				
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
			
			legendFDIInvest.onAdd = function (map) {
				currentLegend = legendFDIInvest;
				currentSidebar = sidebarFDIInvest;
				sidebarFDIInvest.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = ['125000001', '100000001', '50000001', '15000001', '1','0'],
					// this is something like a subheader
					labels = [],
					from;

				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 125,000,000', '100,000,000 to 125,000,000', '50,000,000 to 100,000,000', '15,000,000 to 50,000,000', '1 to 15,000,000', '0'];
					
					labels.push(
						'<i style="background:' + getColorFDIInvest(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "Foreign Direct Investments";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "$USD";
				var key = labels.join('<br>');
				sidebarFDIInvest.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '<h6>FDI data limited to Brazil, South Africa,<br>South Korea, Sweden, and UAE</h6></div>');
				
				return div;
			};
			
			legendFDIJobs.onAdd = function (map) {
				currentLegend = legendFDIJobs;
				currentSidebar = sidebarFDIJobs;
				sidebarFDIJobs.addTo(map);
				var div = L.DomUtil.create('div'),
					grades = ['501', '301', '151', '101', '1','0'],
					// this is something like a subheader
					labels = [],
					from;

				for (var i = 0; i < grades.length; i++) {
					from = ['Greater than 500', '300 to 500', '150 to 300', '100 to 150', '1 to 100', '0'];
					
					labels.push(
						'<i style="background:' + getColorFDIJobs(grades[i]) + '"></i>' +
						from[i]
					);
				}

				var name = "Foreign Direct Investment";
				var description = "<h5 class='lorem'></h5>";
				var keyText = "Jobs Created";
				var key = labels.join('<br>');
				sidebarFDIJobs.setContent('<h4>' + name + "<br /><small>" +  keyText + "</small></h4><div class='legend'>" + key + '<h6>FDI data limited to Brazil, South Africa,<br>South Korea, Sweden, and UAE</h6></div>');
				
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