const BASE_URL = 'https://www.mxnzp.com/api';
export const appId='rnjkyksipltmggnn&app_secret=M2xpR2k0SjN4TGJnMnBQemh6MHVIUT09'
export const appSecret='M2xpR2k0SjN4TGJnMnBQemh6MHVIUT09'
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res)=>{
				//console.log(res);
				if(res.data.code == 0) {
					return uni.showToast({
						title: res.data.msg
					})
				}
				resolve(res)
			},
			fail: (err)=>{
				uni.showToast({
					title: '请求接口失败'
				})
				reject(err)
			}
		})
	})
}