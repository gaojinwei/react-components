### 用法

    <Tabs value={pendantTab} onChange={this.changeTab.bind(this)}>
        <Tab label="1" />
        <Tab label="2" />
        <Tab label="3" />
    </Tabs>

- 必须提供 value 及 onChange，value 为 0，1，2 的值表明当前在哪个 tab，onChange 形如：
  ```
  changeTab(value) {
      this.setState({
        pendantTab: value
      });
  }
  ```
  切换 tab 时触发，会传递给该函数切换 tab 后的 index 值，话说不提供 onChange 的话用这个 tabs 干嘛呢，切换着玩吗
- 目前不提供样式覆盖，整个 tabs 会占据 100%宽度，并且各个 tab space-between 分布：
  ![image](https://note.youdao.com/src/4DDC5F656C32442B92F8754F397FFE62)
