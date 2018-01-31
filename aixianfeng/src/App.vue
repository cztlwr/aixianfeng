<template>
 	<div>

 		<navbar></navbar>
 		
 		<router-view></router-view>
 		
 		<footerbar></footerbar>
 		
 	</div>
</template>

<script>
import navbar from "@/components/common/navbar"
import footerbar from "@/components/common/footerbar"

export default {
  name: 'app',
  data(){
  	return{}
  },
  components:{
  	navbar,
  	footerbar
  }
}
</script>

<style lang="scss" >
	
	*{
		margin:0;
		padding:0;
	}
	html,body{
		width:100%;
		height:100%
	}
</style>
