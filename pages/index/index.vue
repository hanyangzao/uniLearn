<template>
	<view class="content">
		 <swiper class="swiper" 
		 :indicator-dots="swiperOption.indicatorDots"
		 :autoplay="swiperOption.autoplay"
		 :interval="swiperOption.interval"
		 :duration="swiperOption.duration"
		 :circular="swiperOption.circular"
		 >
			<swiper-item v-for="(item,index) in imageList" :key="index">
				<view class="swiper-item">
					<image :src="item" mode=""></image>
				</view>
			</swiper-item>
			
		</swiper>
		<view class="notice-bar">
			<uni-notice-bar :speed="noticebarOption.speed" :scrollable="noticebarOption.scrollable" :showIcon="noticebarOption.showIcon" :single="noticebarOption.single" :text="noticebarOption.text"></uni-notice-bar>
		</view>
		<view class="toolWraper">
			<uni-grid :column="4" :show-border="false" :highlight="false"  :square="false">
			    <uni-grid-item v-for="item in toolList" :key="item.id">
			        <gdlToolitem :item="item" @GoTool="goTool"></gdlToolitem>
			    </uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	 export default {
	    data() {
	      return {
			//轮播配置
	        swiperOption:{
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				circular:true
			},
			imageList:[
				"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/97843/39/14762/178154/5e6a0507E7aff0697/f139d39f100bb665.jpg!cr_1125x445_0_171!q70.jpg.dpg",
				"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/92093/19/14520/133552/5e6652e3Eb3fe9891/7c899faac8a6047d.jpg!cr_1125x445_0_171!q70.jpg.dpg",
				"https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/85886/22/15520/141465/5e703e0eEd4699b57/0fc9434743cc20de.jpg!cr_1125x445_0_171!q70.jpg.dpg"
			],
			//通告栏配置
			noticebarOption:{
				speed:80,
				scrollable:true,
				showIcon:true,
				single:true,
				text:"这个一个测试项目"
			},
			// 工具列表配置
			toolList:[
				{
					id:"001",
					icon:"iconfont icon-news",
					bgColor:"#018594",
					text:"新闻",
					link:"../tools/news/news"
				},{
					id:"002",
					bgColor:"#954c1b",
					icon:"iconfont icon-jieyueguanli",
					text:"历史今日",
					link:"../tools/historyToday/historyToday"
				},{
					id:"003",
					bgColor:"#5ABA84",
					icon:"iconfont icon-wuliu",
					text:"物流查询",
					link:"../tools/logistic/logistic"
				}
			]
			
	      }
	    },
	    onLoad() {
			// this. getinfo();
	    },
	    methods: {
			// async getinfo () {
			// 	const res = await this.$myRuquest({
			// 		url:'/holiday/single/20181121?'+this.myKey
			// 	})
			// },
			
			//前往具体功能
			goTool(link){
				uni.navigateTo({
				    url: link
				});
			}
	    }
	  }
</script>

<style lang="scss">
	page{
		background-color:#f5f6f8;
	}
	.swiper{
		width: 750rpx;
		height: 300rpx;
		.swiper-item{
			height: 100%;
			color:#fff;
			image{
				width: 100%;
				height: 100%;
			}
			
		}
	}
	.notice-bar{
		margin-top: 12rpx;
		.uni-noticebar{
			margin-bottom: 0 !important;
		}
	}
	.toolWraper{
		background-color: #ffffff;
		margin-top: 12rpx;
		padding: 24rpx 0;
		
	}
	
	
</style>
