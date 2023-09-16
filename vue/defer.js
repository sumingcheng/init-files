export default function (maxFrameCount) {
  return {
    // 数据定义部分
    data() {
      return {
        frameCount: 0, // 当前的帧计数
      };
    },

    // 当 Vue 组件被挂载（即插入到 DOM 中）时会执行此生命周期钩子
    mounted() {
      // 定义一个函数来更新帧计数
      const refreshFrameCount = () => {
        // 使用 requestAnimationFrame 来异步地执行代码
        // 这确保了代码在浏览器的下一个绘制帧之前被执行
        requestAnimationFrame(() => {
          this.frameCount++; // 增加帧计数

          // 如果当前帧计数小于 maxFrameCount，继续更新帧计数
          if (this.frameCount < maxFrameCount) {
            refreshFrameCount();
          }
        });
      };

      // 开始帧计数
      refreshFrameCount();
    },

    methods: {
      // 定义一个方法，它会返回 true 当当前帧计数大于或等于指定的帧计数
      // 这可以用于根据帧计数延迟显示或渲染某些内容
      defer(showInFrameCount) {
        return this.frameCount >= showInFrameCount;
      },
    },
  };
}
