export class FrontMatter {
  path: string
  title: string
  excerpt: string
  tags: string[]
  fromNow: string
  date: string
  featuredImage: Image

  constructor(params: {
    path?: string,
    title?: string,
    excerpt?: string,
    tags?: string[],
    fromNow?: string,
    date?: string,
    featuredImage?: Image,
  } = {}) {
    this.path = params.path || ''
    this.title = params.title || ''
    this.excerpt = params.excerpt || ''
    this.tags = params.tags || []
    this.fromNow = params.fromNow || ''
    this.date = params.date || ''
    this.featuredImage = new Image(params.featuredImage)
  }
}

export class Image {
  childImageSharp: ChildImageSharp

  constructor(params: {childImageSharp?: ChildImageSharp} = {}) {
    this.childImageSharp = params.childImageSharp || new ChildImageSharp()
  }

  get src() {
    return this.childImageSharp.fluid.src
  }

  get aspectRatio () {
    return this.childImageSharp.fluid.aspectRatio
  }

  get inverseRatio() {
    return this.aspectRatio === 0 ? 0.0 : 1.0 / this.aspectRatio
  }
}

export class ChildImageSharp {
  fluid: Fluid

  constructor(params: {fluid?: Fluid} = {}) {
    this.fluid = params.fluid || new Fluid()
  }
}

export class Fluid {
  aspectRatio: number
  src: string

  constructor(params: {aspectRatio?: number, src?: string} = {}) {
    this.aspectRatio = params.aspectRatio || 1
    this.src = params.src || ''
  }
}
