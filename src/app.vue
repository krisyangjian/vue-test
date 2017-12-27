<template>
	<div class="parent">
	<el-scrollbar class="scrollbar">
	<div class="container">
		<div class="content">sadasd</div>
  	</div>
  </el-scrollbar>
  </div>
</template>

<script>
	export default {
		mounted() {
			console.log(3333)
		}
		// data () {
		// 	return {
  //    		}
 		}
</script>
<style>
.scrollbar {
	height: 100%;
}
	.parent, .container {
		height: 100%;
		width: 500px;
		/*overflow: hidden;*/
		
	}
	.content {
		height: 2000px;
		width: 2000px;
		background-color: blue;
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
		height: 100%;
	}
</style>