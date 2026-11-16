import PartyInvitation from "./PartyInvitation"
import { PageFrame, PageFrameProps } from "./types"
import GardenHeader from "./GardenHeader"
import HeaderConstructor from "../Header"

const Header = HeaderConstructor()

/**
 * The default page frame — three-column layout with left sidebar, center
 * content (header + body + afterBody), and right sidebar, followed by a footer.
 *
 * This is the original Quartz layout, extracted from renderPage.tsx.
 */
export const DefaultFrame: PageFrame = {
  name: "default",
  render({
    componentData,
    header,
    beforeBody,
    pageBody: Content,
    afterBody,
    left,
    right,
    footer,
    sidebars,
  }: PageFrameProps) {
    return (
      <>
        <GardenHeader {...componentData} />
        <div class="left sidebar" data-sidebar-mode={sidebars?.left ?? "fit"}>
          {left.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>
        <div class="center">
          <div class="page-header">
            <Header {...componentData}>
              {header.map((HeaderComponent) => (
                <HeaderComponent {...componentData} />
              ))}
            </Header>
            <div class="popover-hint">
              {beforeBody.map((BodyComponent) => (
                <BodyComponent {...componentData} />
              ))}
            </div>
          </div>
          {componentData.fileData.slug === "index" ? (
            <PartyInvitation><Content {...componentData} /></PartyInvitation>
          ) : <Content {...componentData} />}
          <hr />
          <div class="page-footer">
            {afterBody.map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
          </div>
        </div>
        <div class="right sidebar" data-sidebar-mode={sidebars?.right ?? "fit"}>
          {right.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>
        <footer class="garden-footer">a little room to be curious.</footer>
      </>
    )
  },
}
