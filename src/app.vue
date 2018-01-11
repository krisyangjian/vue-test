<template>
	<!-- <el-scrollbar 
		wrapClass="wrapper"
		viewClass="view"
		barWidth="12"> -->
		<div class="content" ref="con">
			<ul>
				<li>1111</li>
				<li>2222</li>
				<li>3333</li>
				<li>4444</li>
				<li>5555</li>
				<li>6666asasassadasddasddasdasd</li>
				<li>sasdasdasdassdsdsdasddsdfsdasdaasdasdsdasd</li>
			</ul>
		</div>
	<!-- </el-scrollbar> -->
</template>

<script>
// import p from "./a.js"
// console.log(p.name)
	export default {
		props: ['wrapClass'],
		mounted() {
			console.log(this.wrapClass);
			// setTimeout(() => {
			// 	this.$refs.con.style.height = "900px"
			// }, 5000)
			// console.log()
		}
 	}
</script>
<style lang="scss">
@import "./var.scss";
@import "./var.scss";
@import "./var.scss";
@import "./var.scss";
	.content {
		color: $--color-primary;
	}
</style>