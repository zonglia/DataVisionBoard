class DevicePixelRatio {
    // 检测Windows系统（需扩展其他系统可在此补充）
    private _getSystem(): boolean {
        return navigator.userAgent.toLowerCase().includes("windows");
    }

    // 校正缩放比例（核心算法）
    private _correct(): void {
        const body = document.getElementsByTagName('body')[0];
        body.style.zoom = `${1 / window.devicePixelRatio}`;
    }

    // 监听窗口缩放事件
    private _watch(): void {
        window.addEventListener('resize', this._correct.bind(this));
    }

    // 初始化
    public init(): void {
        if (this._getSystem()) {
            this._correct();
            this._watch();
        }
    }
}

export default DevicePixelRatio;