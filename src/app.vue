<template>
	<div class="bg">
		<el-steps inish-status="success">
  		<el-step title="步骤 1"></el-step>
  		<el-step title="步骤 2"></el-step>
  		<el-step title="步骤 3"></el-step>
		</el-steps>
		<div><div><div><div><div><div class="inner-a">aaaaaa</div></div></div></div></div></div>
		<bbb></bbb>
	</div>
</template>

<script>
export default {
}
</script>
<style scoped>
	.bg {
		background-color: blue;
	}
	.bg .el-steps .el-step__icon.is-text{
		border: 10px solid;
	}
	.bg .inner-a {
		color: #ffffff;
	}
	.bg .inner-b {
		color: #ffffff;
	}
	.el-step .el-step__head{
		font-size: 12px;
	}
</style>