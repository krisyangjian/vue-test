<template>
	<el-scrollbar class="scrollbar">
	<div class="container">
		<div id="con" class="content">sss</div>
  	</div>
  </el-scrollbar>
</template>

<script>
	export default {
		mounted() {
			// setTimeout(() => {
			// 	document.getElementById('con').style.height = "5000px"
			// }, 5000)
		}
 	}
</script>
<style>
.scrollbar {
	height: 100%;
}
	.container {
		height: 100%;
		width: 100%;
		background-color: #409eff;
	}
	.content {
		height: 3000px;
		background-color: #409eff;
	}
	.el-scrollbar__thumb {
		background-color: white;
	}
	.el-scrollbar__wrap {
		margin: 0 !important;
		overflow-x: auto;
		width: calc(100% + 16px);
		height: calc(100% + 16px);
	}
	.el-scrollbar__view {
		/* height: 100%; */
	}
</style>