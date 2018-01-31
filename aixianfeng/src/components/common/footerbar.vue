<template>
 	<div>
 	 	<ul>
 			<router-link class="r" to="/home" activeClass="active"><i class="iconfont icon-shouye"></i><span>首页</span></router-link>
 			<router-link class="r" to="/send" activeClass="active"><i class="iconfont icon-shandian"></i><span>闪送超市</span></router-link>
 			<router-link class="r" to="/car" activeClass="active"><i class="iconfont icon-cart"></i><span>购物车</span></router-link>
 			<router-link class="r" to="/my" activeClass="active"><i class="iconfont icon-home"></i><span>我的</span></router-link>
 		</ul>	
 	</div> 

</template>

<script>
export default {

  name: 'footerbar',

  data () {
    return {

    }
  }
}
</script>

<style src="@/assets/iconfont/iconfont.css"></style>

<style lang="scss" scoped>
	.active{
		background:#ffd600
	}
	ul{
		width:100%;
		background:#f5f5f5;
		position: fixed;
		bottom:0px;
		display: flex;
		
	}
	.r{	
		color:black;
		text-decoration: none;
		height:55px;
		line-height: 55px;
		flex:1;
		text-align:center;

		}
</style>

<!-- 
 -->








