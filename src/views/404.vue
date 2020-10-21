<template>
	<div id="DefalutBody" style="height: 85vh;">
		<section id="Content">
			<b-container>
				<b-row>
					<b-col md="8" offset="1">
						<h2 class="animated wow fadeIn" data-wow-offset="50" data-wow-delay="0.9s">404 Not Found</h2>
						<h4 class="animated wow fadeIn" data-wow-offset="50" data-wow-delay="0.9s"><a href="javascript:history.back(-1)">返回上一页</a></h4>
					</b-col>
				</b-row>
			</b-container>
		</section>
	</div>
</template>

<script>

</script>

<style>
	#DefalutBody {
		background: #303030;
		color: #ffffff;
		font-family: 'Open Sans', sans-serif;
		font-weight: 300;
		overflow-x: hidden; /* prevent horizontal scrollbar from appearing */
	}
	#Content {
		background-size: cover;
		padding-top: 160px;
		padding-bottom: 100px;
		height: 100%;
	}
</style>