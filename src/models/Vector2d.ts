export class Vector2d {
  x: number
  y: number

  constructor (x: number, y: number) {
    this.x = x
    this.y = y
  }

  static fromPCS (length: number, radian: number): Vector2d {
    const x = Math.cos(radian) * length
    const y = Math.sin(radian) * length
    return new Vector2d(x, y)
  }

  clone (): Vector2d {
    return new Vector2d(this.x, this.y)
  }

  scale (ratio: number): Vector2d {
    this.x *= ratio
    this.y *= ratio
    return this
  }

  get length (): number {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }

  // angle in radians
  get angle (): number {
    return Math.atan2(this.y, this.x)
  }

  set angle (radian: number) {
    const length = this.length
    this.x = length * Math.cos(radian)
    this.y = length * Math.sin(radian)
  }

  // angle in degree
  get deg (): number {
    return this.angle * (180 / Math.PI)
  }

  set deg (degree: number) {
    this.angle = degree / 180 * Math.PI
  }
}
