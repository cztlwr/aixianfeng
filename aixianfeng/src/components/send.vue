<template>
	<div>
		
		<div class="l d1">
			<ul>
				<router-link to="/send/food" tag="li" activeClass="active"><h2>食物</h2></router-link>
				<router-link to="/send/water" tag="li" activeClass="active"><h2>水</h2></router-link>
				<router-link to="/send/milk" tag="li" activeClass="active"><h2>牛奶</h2></router-link>
			</ul>
		</div>
		<div class="l d2">
			<router-view></router-view>	
		</div>
			
	</div>
</template>

<script>
export default {

  name: 'send',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	.l{
		float:left;
	}
	.d1{
		border:1px solid red;
		width:100px;
	}
	.active{
		background: blue;
	}
</style>