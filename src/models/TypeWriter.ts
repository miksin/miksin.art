/* eslint-disable no-undef */
export class TypeWriter {
  typed: string
  currentIndex: number
  words: string[]
  typeInterval: number
  delInterval: number
  goalInterval: number
  timer: NodeJS.Timeout | null

  constructor (words: string[] = [''], options: {
    typeInterval?: number,
    delInterval?: number,
    goalInterval?: number,
  } = {}) {
    this.typed = ''
    this.currentIndex = 0
    this.words = words.length > 0 ? words : ['']
    this.typeInterval = options.typeInterval || 300
    this.delInterval = options.delInterval || 100
    this.goalInterval = options.goalInterval || 1000
    this.timer = null
  }

  get target (): string {
    return this.words[this.currentIndex]
  }

  /*
   * 1: need to type
   * 0: equal
   * -1: need to delete
  */
  get diff (): number {
    let common = ''
    for (let i = 0; i < this.typed.length; i++) {
      if (i >= this.target.length || this.typed[i] !== this.target[i]) break
      common += this.target[i]
    }

    if (common.length < this.typed.length) return -1
    if (this.target.length > common.length) return 1
    return 0
  }

  update (onUpdated: Function = () => {}): void {
    let delay = this.typeInterval

    switch (this.diff) {
      case -1:
        this.typed = this.typed.substring(0, this.typed.length - 1)
        delay = this.delInterval
        break;
      case 1:
        this.typed += this.target[this.typed.length]
        break
      default:
        this.currentIndex = (this.currentIndex + 1) % this.words.length
        delay = this.goalInterval
        break
    }

    onUpdated(this.typed)
    this.nextTick(delay, onUpdated)
  }

  nextTick (delay: number, onUpdated: Function): void {
    this.timer = setTimeout(() => {
      this.update(onUpdated)
    }, delay);
  }

  destroy (): void {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
}
