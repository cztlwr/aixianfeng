<template>
	<div>
		<nav>
			
			<span>北京饭店301</span>
			<div class="r">
				<i class="iconfont icon-sousuo"></i>
				<span >搜索</span>
			</div>
			

		</nav>
		
	</div>
</template>

<script>
export default {

  name: 'navbar',

  data () {
    return {

    }
  }
}
</script>

<style src="@/assets/iconfont/iconfont.css">
	
</style>

<style lang="scss" scoped>
	.r{
		float:right;
	}
	nav{
		background:#ffd600;
		height:50px;
		width:100%;
		line-height: 50px;
		text-align:center
	}
</style>