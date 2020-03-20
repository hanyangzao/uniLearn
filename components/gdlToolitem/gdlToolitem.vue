<template>
	<view class="tool-item" @click="thisClick(item.link)">
		<view class="tool-icon" :style="{ 'background-color': item.bgColor}">
			<view :class="item.icon"></view>
		</view>
		<view class="tool-text">
			{{item.text}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['item'],
		methods:{
			thisClick(link){
				this.$emit('GoTool',link);
			}
		}
	}
</script>

<style lang="scss">
.tool-item{
			text-align: center;
			.tool-icon{
				font-size: 30rpx;
				width: 100rpx;
				height: 100rpx;
				margin: auto;
				line-height: 100rpx;
				border-radius: 50rpx;
				//background-color: #007AFF;
				color:#fff;
				.iconfont{
					font-size: 50rpx;
				}
			}
			.tool-text{
				margin-top: 16rpx;
				font-size: 24rpx;
				color:#444;
			}
		}
</style>
