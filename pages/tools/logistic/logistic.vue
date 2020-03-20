<template>
	<view>
		<view class="search">
			<input class="uni-input" confirm-type="search" placeholder="请输入快递单号" @input="valueChange" @confirm="searchInfo" />
			<view class="searchBtn" @click="searchInfo">
				<icon type="search" size="26" color="#ffffff"/>			
			</view>	
		</view>
		<view class="info">
			<view class="logisticsTypeName" v-if="logisticsTypeName">
				当前快递：{{logisticsTypeName}} <text v-if="status" class="status">{{status}}</text>
			</view>
			<view class="logisticsList" v-if="details">
				<view class="item" v-for="(item,index) in details" :key="index">
					<view class="time">{{item.time}}</view>
					<view class="desc">{{item.desc}}</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logisticNo:'',
				logisticsTypeId:'',
				logisticsTypeName:'',
				details:[],
				status:''
				
			};
		},
		methods:{
			valueChange(event){
				this.logisticNo=event.target.value;
				
				
				this.logisticsTypeId='';
				this.logisticsTypeName='';
				this.details=[];
				this.status='';
			},
			searchInfo(event){
				this.getTypeId(()=>{
					this.getDetails();
				});
				
				
			},
			async  getTypeId(callBack){
				const res = await this.$myRuquest({
					url: '/logistics/discern?'+this.myKey+'&logistics_no='+this.logisticNo
				});
				console.log(res);
				if(res.data.data.searchList){
					this.logisticsTypeId=res.data.data.searchList[0].logisticsTypeId;
					this.logisticsTypeName=res.data.data.searchList[0].logisticsTypeName;
					callBack && callBack();
				}else{
					uni.showToast({
					    title: '无效的快递单号',
						icon:"none",
					    duration: 2000
					});
				}
				
				
			},
			async getDetails(){
				const res = await this.$myRuquest({
					url: '/logistics/details/search?'+this.myKey+'&logistics_no='+this.logisticNo+'&logistics_id='+this.logisticsTypeId,
				});
				this.status=res.data.data.status;
				this.details=res.data.data.data
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color:#f5f6f8;
	}
	.search{
		position: relative;
		overflow: hidden;
		background-color: #ffffff;
		width: 600rpx;
		height: 100rpx;
		border-radius: 50rpx;
		margin: 40rpx auto;
		padding-right: 130rpx;
		box-sizing: border-box;
		input{
			height: 100%;
			width: 100%;
			padding-left:30rpx;
		}
		.searchBtn{
			position: absolute;
			background-color: #5ABA84;
			right:10rpx;
			width: 80rpx;
			height: 80rpx;
			border-radius: 40rpx;
			z-index: 10;
			top:10rpx;
			text-align: center;	
			line-height: 80rpx;
		}
		
	}
	.info{
		padding: 20rpx 80rpx;
		.logisticsTypeName{
			font-size: 28rpx;
		}
		.status{
			color:$base-color;
			margin-left: 20rpx;
		}
		.logisticsList{
			margin-top: 20rpx;
			.item{
				background-color: #fff;
				border-radius: 16rpx;
				padding: 12rpx;
				margin-bottom: 12rpx;
				.time{
					font-size: 24rpx;
					margin-bottom: 8rpx;
				}
				.desc{
					font-size: 24rpx;
				}
				
			}
		}
	}
	
	
</style>
