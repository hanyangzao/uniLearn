<template>
	<view class="content">
		<view class="hasData" v-if="newsDetail">
			<view class="otherInfo">
				<view class="dot">
					
				</view>
				<text class="source">{{newsDetail.source}}</text><text class="ptime">{{newsDetail.ptime}}</text>
			</view>
			<view class="newsTitle">
				{{newsDetail.title}}
			</view>
			<swiper  class="swiper"
			 :indicator-dots="swiperOption.indicatorDots"
			 :autoplay="swiperOption.autoplay"
			 :interval="swiperOption.interval"
			 :duration="swiperOption.duration"
			 :circular="swiperOption.circular"
			 v-if="newsDetail.images.length"
			 >
				<swiper-item v-for="(item,index) in newsDetail.images" :key="index" @click="previewImage(item.imgSrc)">
					<view class="swiper-item">
						<image :src="item.imgSrc"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="noData" v-else>
			无数据
		</view>
		
		<view class="newsdetail">
			<u-parse :content="newsDetail.content" @navigate="navigate"></u-parse>
		</view>
		
		
		
		
		
	</view>
</template>

<script>
	import uParse from '@/components/feng-parse/parse.vue'
	export default {
	    components: {
		  uParse
	    },
		data() {
			return {
				newsId:"",
				newsDetail:"",
				//轮播配置
				swiperOption:{
					indicatorDots: true,
					autoplay: true,
					interval: 2000,
					duration: 500,
					circular:true
				},
			}
		},
		onLoad(option){
			this.newsId=option.newsId;
			this.getNewsDetail();
		},
		methods: {
			async getNewsDetail(){
				const res = await this.$myRuquest({
					url: '/news/details?'+this.myKey+'&newsId='+this.newsId
				});
				//console.log(res.data.data);
				this.newsDetail=res.data.data;
			},
			navigate(e){
				console.log(e)
			},
			previewImage(currentSrc){
				var src=this.newsDetail.images.map(val=>{
						return val.imgSrc
				});
				uni.previewImage({
					urls:src,
					current:currentSrc,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.content{
		padding: 16rpx;
		.otherInfo{
			padding-top: 20rpx;
			.dot{
				width: 40rpx;
				height: 8rpx;
				background-color: $base-color;
			}
			.source{
				font-size: 24rpx;
				padding-right: 20rpx;
				color:#888;
			}
			.ptime{
				font-size: 24rpx;
				color:#888;
			}
		}
		.newsTitle{
			margin: 60rpx 0;
			font-size: 48rpx;
			font-weight: bold;
			line-height: 72rpx;
		}
		
		.swiper{
			width: 718rpx;
			height: 360rpx;
			margin-top: 20rpx;
			.swiper-item{
				height: 100%;
				width: 100%;
				box-sizing: border-box;
				image{
					width: 100%;
					display: block;
				}
			}
		}
		
		.newsdetail{
			font-size: 32rpx;
			margin-top: 28rpx;
			p{
				margin-top: 20rpx;
			}
		}
	}
	

</style>
