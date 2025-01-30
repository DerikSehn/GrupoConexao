
export const handleScrollToSection = (selector: string) => {
    const target = document.querySelector(selector)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }