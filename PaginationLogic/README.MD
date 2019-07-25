- 用法
  ```
  <PaginationLogic
          fetchNextPageData={this.fetchNextPageData.bind(this)}
          totalPage={this.props.total_page}
          />
  ```
  必须提供 fetchNextPageData 和 totalPage，countPerPage 为可选项，默认为 10。其中 totalPage 为总页数，fetchNextPageData 为  跳  下一页需要的操作，必须接收 nextPageNum, countPerPage 两个参数，nextPageNum 为通知获取第几页数据，countPerPage 为一页返回多少数据，具体：
  ```
  async fetchNextPageData(nextPageNum, countPerPage) {
      const currentPageInfo = await fetch(
      `/discussion_posts/259/comments?page=${nextPageNum}&count=${countPerPage}`
      );
      //刷新数据
      this.setState((state, props) => ({
      data: [...state.data, ...currentPageInfo.data]
      }));
  }
  ```
-  说明：目前只适用于在 document 滑到底部时获取下一页数据，不适用于某 div 滑到最底部后获取分页数据。暂无函数防抖
