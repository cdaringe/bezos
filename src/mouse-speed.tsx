type OnUpdate = (opts: { isPaused?: boolean }) => void;
const baseOptions = {};

export default class MouseSpeed {
  public speedX: number;
  public speedY: number;
  public oldX: number;
  public oldY: number;
  public isFirstCalculation: boolean;
  public timerId: number | undefined;
  public onUpdate: OnUpdate;
  public lastUpdate: number;
  public clearInterval: number | null;

  constructor(onUpdate: OnUpdate) {
    this.speedX = 0;
    this.speedY = 0;
    this.oldX = 0;
    this.oldY = 0;
    this.isFirstCalculation = true;
    this.timerId = undefined;
    this.onUpdate = onUpdate;
    this.lastUpdate = Date.now();
    this.clearInterval = null;
  }

  bindClearInterval = () => {
    this.clearInterval = window.setInterval(() => {
      const duration = Date.now() - this.lastUpdate;
      if (duration < 400) return;
      this.clear();
      this.onUpdate({ isPaused: true });
      window.clearInterval(this.clearInterval!);
      this.clearInterval = null;
    }, 1000);
  };

  update = (e: MouseEvent) => {
    const now = Date.now();
    if (!this.clearInterval) this.bindClearInterval();
    if (!this.isFirstCalculation) {
      this.speedX = e.clientX - this.oldX;
      this.speedY = e.clientY - this.oldY;
      this.oldX = e.clientX;
      this.oldY = e.clientY;
      this.onUpdate(baseOptions);
      this.clear();
    } else {
      this.oldX = e.clientX;
      this.oldY = e.clientY;
      this.isFirstCalculation = false;
    }
    this.lastUpdate = now;
  };

  clear() {
    this.speedX = 0;
    this.speedY = 0;
    this.onUpdate({});
  }

  init() {
    window.addEventListener("mousemove", this.update);
  }

  destroy() {
    window.removeEventListener("mousemove", this.update);
  }
}
