<template>
	<div id="body">
		<div id="map"></div>
	</div>
</template>

<script>
	import buildData from "@/assets/building.json"
	import posImg from "@/assets/pos.png"
	export default {
		data() {
			return {
				MapObj: {},
				MapControlObj: null,
			};
		},
		mounted() {
			var OSM = this.$L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
				maxZoom: 24,
				minZoom: 4,
				attribution: "SUES eMap by DexterCai"
			});
			let mapObj = this.$L.map("map", {
				center: [31.055645,121.205053],
				zoom: 17,
				layers: [OSM],
				zoomControl: true,
				worldCopyJump: true
			});
			var corner1 = this.$L.latLng(31.060584,121.193755),
			corner2 = this.$L.latLng(31.048654,121.213497),
			bounds = this.$L.latLngBounds(corner1, corner2);
			mapObj.setMaxBounds(bounds);
			this.mapObj = mapObj;
			window.MapObj = mapObj;
			var baseLayers = {};
			this.MapControlObj = this.$L.control.layers(baseLayers);
			this.MapControlObj.addTo(mapObj);
			
			var posIcon = this.$L.icon({iconUrl: posImg,iconAnchor: [12, 35]});
			
			Object.keys(buildData).forEach((key) =>{
				let thisItem = buildData[key]
				let thisMarker = this.$L.marker([thisItem.lat , thisItem.lon],{
					title: thisItem.name,
					icon: posIcon
				})
				thisMarker.bindPopup(thisItem.name);
				thisMarker.addTo(this.mapObj);
				let titleIcon = this.$L.divIcon({
					html: "<p style=\"width:100px\">" + thisItem.name + "</p>",
					iconAnchor: [0, 9],
					iconSize: [6, 5]
				});
				let thisMarkerTitle = this.$L.marker([thisItem.lat , thisItem.lon],{
					riseOnHover: true,
					icon: titleIcon
				})
				
				thisMarkerTitle.addTo(this.mapObj);
				
				
			})
			
			
		}
	}
</script>

<style>
	#map {
		width:100%;
		height:90vh;
		position: relative;
		z-index: 5;
	}
</style>
