<template>
	<div>
		
		<swipe class="my-swipe">
		  <swipe-item class="slide1"></swipe-item>
		  <swipe-item class="slide2"></swipe-item>
		  <swipe-item class="slide3"></swipe-item>
		</swipe>
		爱鲜蜂首页666
	</div>
	
</template>

<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
import Vue from 'vue';
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

import axios from 'axios';

export default {

	  name: 'home',

	  data () {
	    return {
	    	data:''
	    }
	  },
	  
	  mounted(){
	  	//http://m.beequick.cn/data/home?asid=5a4b6bb462b149534&_r=0.14925313532709672&reflogid=5a5355ec6686d3407&cart_pids=2436%2C2437&location=113.95708%2C22.547141&defPid=&designated_dealerid=
	  	axios.get('/data/home?asid=5a4b6bb462b149534&_r=0.7809532760620863&reflogid=5a51ce755ac8d7507&cart_pids=2436%2C2437&location=113.95708%2C22.547141&defPid=&designated_dealerid=').then(res=>{
	  		//console.log(res.data.data.act_info[0].act_rows) //轮播
	  		console.log(res.data)
	  	})
	  }
}
</script>

<style lang="scss" scoped>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: red;
  color: #fff;
}

.slide2 {
  background-color: green;
  color: #000;
}

.slide3 {
  background-color: blue;
  color: #fff;
}
</style>