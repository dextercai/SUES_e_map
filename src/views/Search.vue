<template>
	<div id="body">
		<el-card shadow="always" width="50%">
			<el-form ref="form" :model="form">
				<el-form-item label="">
					<el-input v-model="form.keyword"></el-input>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					keyword: ""
				}
			};
		},
		mounted() {
			
			
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
