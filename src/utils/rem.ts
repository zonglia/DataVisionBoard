const setRem = () => {
    const baseSize = 16;
    const designWidth = 1920;

    // 添加错误处理
    if (!document.documentElement) {
        console.error('DOM 未就绪');
        return;
    }

    const clientWidth = document.documentElement.clientWidth;
    const scale = clientWidth / designWidth;

    // 输出调试信息
    console.log(`屏幕宽度: ${clientWidth}px, 缩放比例: ${scale}, 最终 fontSize: ${baseSize * scale}px`);

    // 设置根字体大小（可选：移除限制）
    document.documentElement.style.fontSize = `${baseSize * scale}px`;
};

// 确保 DOM 加载后执行
window.addEventListener('DOMContentLoaded', setRem);
window.addEventListener('resize', setRem);

// 初始化调用
setRem();