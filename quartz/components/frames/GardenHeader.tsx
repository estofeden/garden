import { QuartzComponentProps } from "../types"
import { pathToRoot } from "../../util/path"

export default function GardenHeader({ cfg, fileData, allFiles }: QuartzComponentProps) {
  const root = pathToRoot(fileData.slug!)
    const pages = [
    ["home", ""],
    ["books", "books"],
    ["film", "film"],
    ["the listening room", "music"],
    ["recipes", "recipes"],
    ["the dressing room", "fashion"],
    ["hopes & dreams", "hopes--and--dreams"],
    ["out & about", "out--and--about"],
    ["made by me", "made-by-me"],
    ["small joys", "small-joys"],
    ["thoughts & discoveries", "thoughts--and--discoveries"],
  ]
  return <div class="garden-header">
    <svg class="party party-left" viewBox="0 0 130 155" aria-hidden="true">
        <path d="M61 -8 C88 20 22 19 35 42 S78 52 48 73 S28 96 35 110" fill="none" stroke="#df939e" stroke-width="5"/>
        <path d="M61 -8 C88 20 22 19 35 42" fill="none" stroke="#f0b9bf" stroke-width="2"/>
        <path d="M98 32 l8 -3 3 8 -8 3z" fill="#e9c65c"/>
        <path d="M74 65 l9 4 -4 7 -8 -4z" fill="#98ab82"/>
        <path d="M105 92 l8 -4 4 7 -8 4z" fill="#9cadd4"/>
        <path d="M23 124 l7 2 -2 9 -7 -2z" fill="#e5a0ab"/>
        <path d="M72 128 l9 -4 3 6 -8 4z" fill="#bb5754"/>
        <path d="M12 57 l7 2 -2 7 -7 -2z" fill="#a1b5d7"/>
        <path d="M108 139 l4 -7 6 4 -4 7z" fill="#e9c65c"/>
      </svg>
<svg class="party party-right" viewBox="0 0 130 155" aria-hidden="true">
        <path d="M58 -9 C35 22 103 18 87 42 S48 49 78 73 S100 100 90 113" fill="none" stroke="#96aa80" stroke-width="5"/>
        <path d="M58 -9 C35 22 103 18 87 42" fill="none" stroke="#c4d0ad" stroke-width="2"/>
        <path d="M22 31 l8 -4 3 8 -8 4z" fill="#e9c65c"/>
        <path d="M45 64 l7 3 -3 8 -7 -3z" fill="#e5a0ab"/>
        <path d="M19 95 l9 -2 2 6 -9 2z" fill="#9cadd4"/>
        <path d="M62 116 l8 4 -4 7 -8 -4z" fill="#bb5754"/>
        <path d="M109 133 l8 -4 3 7 -8 4z" fill="#e9c65c"/>
        <path d="M112 61 l5 -7 6 4 -5 7z" fill="#9cadd4"/>
        <path d="M25 140 l8 -3 2 7 -7 3z" fill="#98ab82"/>
      </svg>
    <h1 class="garden-name"><a href={`${root}/`}>{cfg.pageTitle}</a></h1>
    <nav class="garden-nav" aria-label="Garden navigation">
      {pages.filter(([, slug]) => !slug || allFiles.some(f => f.slug === slug)).map(([label, slug]) =>
        <a href={`${root}/${slug}`} aria-current={(fileData.slug === (slug || "index")) ? "page" : undefined}>{label}</a>
      )}
    </nav>
  </div>
}
