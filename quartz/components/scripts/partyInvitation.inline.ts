// Starts open. Scrolling down returns the paper and photo strips to the envelope.
let disposePartyInvitation: (() => void) | undefined

function setupPartyInvitation() {
  disposePartyInvitation?.()
  const root = document.querySelector<HTMLElement>(".party-invitation")
  if (!root) return
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
  let scheduled = 0
  const clamp = (n: number) => Math.min(1, Math.max(0, n))
  function update() {
    scheduled = 0
    if (!root) return
    const stage = root.firstElementChild as HTMLElement
    const range = Math.max(1, root.offsetHeight - stage.offsetHeight)
    const stickyTop = Math.min(12, window.innerHeight - stage.offsetHeight - 16)
    stage.style.top = reduced.matches ? "0px" : `${stickyTop}px`
    const progress = clamp((stickyTop - root.getBoundingClientRect().top) / range)
    // Keep the full letter visible when reduced motion is requested.
    const reveal = reduced.matches ? 1 : 1 - progress
    const lift = clamp((reveal - 0.24) / 0.76)
    const flap = clamp(reveal / 0.28)
    root.style.setProperty("--invitation-lift", String(lift))
    root.style.setProperty("--invitation-flap", `${-180 * flap}deg`)
    root.style.setProperty("--invitation-pink-tilt", `${-6 * lift}deg`)
    root.style.setProperty("--invitation-blue-tilt", `${5 * lift}deg`)
    root.style.setProperty("--invitation-seal", String(clamp(1 - reveal * 5)))
    root.classList.toggle("invitation-is-open", flap > 0.65)
  }
  function schedule() {
    if (!scheduled) scheduled = requestAnimationFrame(update)
  }
  const observer = new ResizeObserver(schedule)
  observer.observe(root)
  window.addEventListener("scroll", schedule, { passive: true })
  window.addEventListener("resize", schedule)
  reduced.addEventListener("change", schedule)
  update()
  disposePartyInvitation = () => {
    window.removeEventListener("scroll", schedule)
    window.removeEventListener("resize", schedule)
    reduced.removeEventListener("change", schedule)
    observer.disconnect()
    cancelAnimationFrame(scheduled)
    disposePartyInvitation = undefined
  }
}

document.addEventListener("nav", setupPartyInvitation)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupPartyInvitation, { once: true })
} else {
  setupPartyInvitation()
}
