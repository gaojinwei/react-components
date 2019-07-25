import React from 'react';

class PaginationLogic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: false,
      pageNum: 1,
      countPerPage: props.countPerPage || 10
    };
  }

  render() {
    return null;
  }

  componentDidMount() {
    const { fetchNextPageData, totalPage } = this.props;

    const windowHeight = window.innerHeight;
    window.document.addEventListener('scroll', async () => {
      let { pending, pageNum, countPerPage } = this.state;
      if (pending) {
        return;
      }
      if (document.body.scrollHeight - Math.round(window.scrollY) === windowHeight) {
        //已经是最后一页
        if (pageNum === totalPage) {
          return;
        }
        const nextPageNum = ++pageNum;

        this.setState({
          pageNum: nextPageNum,
          pending: true
        });

        await fetchNextPageData(nextPageNum, countPerPage);

        this.setState({
          pending: false
        });
      }
    });
  }
}

export default PaginationLogic;
