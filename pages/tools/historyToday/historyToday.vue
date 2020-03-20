<template>
	<view>
		<view class="historyList">
			<view class="item" v-for="(item,index) in historyList" :key="index">
				<view class="mianInfo">
					<!-- <view class="imgWrap">
						<image :src="item.picUrl"></image>
					</view> -->
					<view class="info">
						<view class="time">
							{{item.year}}-{{item.month}}-{{item.day}}
						</view>
						<view class="title">
							{{item.title}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				historyList:[]
			};
		},
		onLoad(){
			this.getHistoryInfo();
		},
		methods:{
			async getHistoryInfo(){
				const res = await this.$myRuquest({
					url:'/history/today?'+this.myKey+'&type=1'
				})
				console.log(res);
				this.historyList=res.data.data;
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color:#f5f6f8;
	}
	.historyList{
		.item{	
			margin: 12rpx;
			padding: 12rpx;
			border-radius: 12rpx;
			background-color: #ffffff;
			.mianInfo{
				display: flex;
				.imgWrap{
					width:200rpx;
					height: 120rpx;
					overflow: hidden;
					margin-right: 12rpx;
					image{
					
					}
				}
				.info{
					// display: flex;
					// flex-direction: column;
					// justify-content: space-between;
					.time{
						font-size: 40rpx;
						font-weight: bold;
						color:#666;
						font-style: italic;
					}
					.title{
						margin-top: 12rpx;
						font-size: 28rpx;
					}
				}
			}
			.detail{
				margin-top: 20rpx;
				font-size: 28rpx;
			}
		}
	}

</style>
