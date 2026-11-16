import { ComponentChildren } from "preact"

export default function PartyInvitation({ children }: { children: ComponentChildren }) {
  return (
    <section class="party-invitation" aria-label="An open letter about eden-jun">
      <div class="invitation-stage">
        <div class="invitation-envelope">
          <div class="invitation-flap" aria-hidden="true" />
          <div class="invitation-paper-slot">
            <div class="invitation-paper">
              <h2 class="invitation-paper-title">a little about me</h2>
              <div class="invitation-composition">
                <div class="invitation-strip invitation-strip-pink" role="img" aria-label="Pink and brown photo strip with three empty photo spaces">
                  {[0, 1, 2].map(i => <div class="invitation-photo-space" key={i} />)}
                </div>
                <div class="invitation-about">{children}</div>
                <div class="invitation-strip invitation-strip-blue" role="img" aria-label="Blue and white photo strip with three empty photo spaces">
                  {[0, 1, 2].map(i => <div class="invitation-photo-space" key={i} />)}
                </div>
              </div>
            </div>
          </div>
          <div class="invitation-front" aria-hidden="true" />
          <span class="invitation-wax" aria-hidden="true" />
        </div>
        <p class="invitation-caption">you’ve been invited</p>
      </div>
    </section>
  )
}
