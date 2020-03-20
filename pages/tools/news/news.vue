<template>
	<view class="content">
		<scroll-view scroll-x="true" class="tabs scroll-x">
				<view 
				 class="tabs-item"
				 :class="navIndex==index?'active':''"
				 v-for="(item,index) in NewsTabs" 
				 :key="item.typeId"
				 @click="changeTabs(index,item)"
				 >
					<view class="item_typeName">
						{{item.typeName}}
					</view>
				</view>
		</scroll-view>
		<view class="newsList">
			<view class="listItem" v-for="(item,index) in NewsList" :key="item.newsId" @click="ToNewsDetail(item.newsId)">
				<view class="img-wrap" v-if="item.imgList">
					<image lazy-load="true" mode="aspectFill" :src="item.imgList[0]"></image>
				</view>
				<view class="itemInfo">
					<view class="itemtitle">
						{{item.title}}
					</view>
					<view class="other">
						<text class="source">{{item.source}}</text>
						<text class="postTime">{{item.postTime}}</text>
					</view>
					
				</view>
			</view>
		</view>
		<uni-load-more :status="more" v-if="NewsList.length"></uni-load-more>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navIndex:0,
				current_typeId:'',
				current_page:1,
				triggered:false,
				more:"more",
				NewsTabs:[],
				NewsList:[],
			};
		},
		onLoad(){
			this.getNewsTabs();
		},
		onPullDownRefresh(){
			console.log("Refresh");
			this.NewsList=[];
			this.current_page=1;
			this.more="more";
			this.getNewsList(this.current_typeId,this.current_page);
			setTimeout(function(){
				uni.stopPullDownRefresh()
			},1000)
		},
		onReachBottom(){
			this.more="loading";
			var that=this;
			
			this.getNewsList(this.current_typeId,++this.current_page,function(res){
				//console.log(res.data.data.length);
				if(res.data.data.length==0){
					that.more="noMore";
				}else{
					that.more="more";
				}
				
				
			});
			
		},
		methods:{
			// async getinfo () {
			// 	const res = await this.$myRuquest({
			// 		url:'/holiday/single/20181121?'+this.myKey
			// 	})
			// },
			async getNewsTabs(){
				const res = await this.$myRuquest({
					url:'/news/types?'+this.myKey
				})
				this.NewsTabs=res.data.data;
				this.current_typeId=this.NewsTabs[0].typeId;
				this.current_page=1
				this.NewsList=[];
				this.getNewsList(this.current_typeId,this.current_page);
				
			},
			async getNewsList(typeId,page,callBack){
				const res = await this.$myRuquest({
					url:'/news/list?'+this.myKey+'&typeId='+typeId+'&page='+page
				})
			
				this.NewsList=[...this.NewsList,...res.data.data];
				callBack && callBack(res)
			},
			changeTabs(index,data){
				this.navIndex=index;
				this.current_typeId=data.typeId;
				this.current_page=1;
				this.NewsList=[];
				this.more="more";
				this.getNewsList(this.current_typeId,this.current_page);
			},
			//跳转到新闻详情
			ToNewsDetail(id){
				uni.navigateTo({
				    url: '../news-detail/news-detail?'+'newsId='+id
				});
				
			}
			
		}
	}
</script>

<style lang="scss">
	page{
		background-color:#f5f6f8;
	}
	.content{
		position:relative;
	}
	.tabs{
		position: fixed;
		z-index: 10;
		top:var(--window-top);
		right: 0;
		left: 0;
		box-sizing: border-box;
		white-space: nowrap;
		padding: 10rpx;
		padding-bottom: 12rpx;
		margin-right: 20rpx;
		background-color: #ffffff;
		.tabs-item{
			display: inline-block;
			font-size: 30rpx;
			margin: 0 16rpx;
			border-bottom:2px solid transparent;
			&.active{
				border-bottom:2px solid #018594;
			}
		}
	}
	
	.newsList{
		//height:calc(100vh - var(--window-top) - 37px);
		padding-top: 37px;
	}
	.listItem{
		display: flex;
		padding: 16rpx;
		background-color: #fff;
		margin: 8rpx;
		min-height: 140rpx;
		border-radius: 8rpx;
		.img-wrap{
			width: 200rpx;
			height: 140rpx;
			margin-right: 12rpx;
			image{
				width: 100%;
				height: 100%;
				display: block;
			
			}
		}
		.itemInfo{
			flex: 1;
			display: flex;
			flex-direction:column;
			justify-content: space-between;
			.itemtitle{
				font-size: 28rpx;
			}
			.other{
				font-size: 24rpx;
				color:#888;
				.source{
					margin-right: 20rpx;
				}
				.postTime{
					
				}
			}
		}
	}
</style>
