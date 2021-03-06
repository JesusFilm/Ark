<a href="https://opensource.org/licenses/MIT"><img alt="MIT" src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
<a href="#contributing"><img alt="prs" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
<a href="https://app.fossa.com/projects/git%2Bgithub.com%2FJesusFilm%2FArk?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FJesusFilm%2FArk.svg?type=shield"/></a>

# Base component design system for Jesus Film

The [reusable set of infra-level React components](https://bit.dev/jesus-film/ark)
used to build [jesusfilm.org](https://jesusfilm.org).

## Components

All components in this frontend codebase were [contained and exposed using Bit](https://github.com/teambit/bit) as a set of independently-usable components. See the **[ark collection on bit.dev](https://bit.dev/jesus-film/ark)** to explore and integrate any component into your project.

- Install independent components with npm/yarn.
- Use `bit import` to source and edit components locally for quick editing and integration.
- Try any component hands-on in a live playground.

## Contributing

### Guidelines

The main purpose of this repository is to continue evolving Ark, making it faster and easier to use. Development of Ark happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving our component library.

1. Clone this workspace: `git clone https://github.com/JesusFilm/Ark.git`
2. Install [pnpm](https://pnpm.io/): `npm i -g pnpm`
3. Install Dependencies: `pnpm i`
4. Run the Workspace UI to explore the components: `bit start` and go to https://localhost:3000
5. Enjoy!

### 1. Create a branch

1. `git checkout main` from any folder in your local `ark` repository
2. `git pull origin main` to ensure you have the latest main code
3. `git checkout -b the-name-of-my-branch` (replacing the-name-of-my-branch with a suitable name) to create a branch

### 2. Create a component

1. Create your first component: `bit create react-component elements/my-new-component` (replacing elements with the relevant namespace and my-new-component with a suitable name)
2. Make changes to your new component (files should be located in `src/elements/my-new-component`)
3. Save the files and check in the Workspace UI: `bit start` and go to https://localhost:3000

### 3. Test your component

1. If possible, test any visual changes in all latest versions of common browsers, on both desktop and mobile. You should also write specs in your `my-new-component.spec.tsx` file.
2. Run `bit test` to run the full test suite.
3. Run `pnpm lint` from the project root. (This will run ESLint, and Typescript.)

### 4. Push it

1. Export component and type in relevant core collection component e.g `src/elements/core/index.ts`
2. Run `bit link --rewire` to isolate component imports
3. Run `bit tag elements/my-new-component --soft` to soft tag your new component
3. Run `bit tag elements/core --soft` to soft tag your new component
4. `git add -A && git commit -m "My message"` (replacing My message with a commit message, such as Fix header logo on Android) to stage and commit your changes
5. `git push origin the-name-of-my-branch`
6. Go to the [ark repo](https://github.com/JesusFilm/Ark) and you should see recently pushed branches.
7. Create a PR for your recently pushed branch for review.

## Namespaces

### Providers

React Context Providers that allow passing of data through the component tree without having to pass props down manually at every level. A good example of this is theme data.

### Constants

Hard coded singleton values, like storage-url and enums. In case of change, this central location could update all other components.

### Layout

Components controlling the position of elements in the document. (Grid, breakpoints, etc)

### Elements

Generic building blocks for any front end application.
These components are 'vanilla', meaning they should not contain content (like texts or icons) and no specific styles. This is because different designs could look entirely different, so any styles in the base component could lead to a 'CSS Specificity War'. So, add the bare minimum of css here and keep these components purely logical!

### Compounds

Components made up of multiple of the same or different elements. e.g List of post-card elements.

### Utils

Pure logic components and helpers. (no visual components)

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FJesusFilm%2FArk.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FJesusFilm%2FArk?ref=badge_large)


## Block Query Example

http://54.204.85.23/wp-admin/admin.php?page=graphiql-ide&query=query%20BlockQuery%20%7B%0A%20%20post(id%3A%20%22cG9zdDozMA%3D%3D%22)%20%7B%0A%20%20%20%20author%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20avatar%20%7B%0A%20%20%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20blocks%20%7B%0A%20%20%20%20%20%20...%20on%20CoreParagraphBlock%20%7B%0A%20%20%20%20%20%20%20%20attributes%20%7B%0A%20%20%20%20%20%20%20%20%20%20...%20on%20CoreParagraphBlockAttributes%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20content%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20...%20on%20CoreImageBlock%20%7B%0A%20%20%20%20%20%20%20%20dynamicContent%0A%20%20%20%20%20%20%20%20originalContent%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=BlockQuery
```
query BlockQuery {
  post(id: "cG9zdDozMA==") {
    author {
      node {
        avatar {
          url
        }
        name
      }
    }
    blocks {
      ... on CoreParagraphBlock {
        attributes {
          ... on CoreParagraphBlockAttributes {
            content
          }
        }
        name
      }
      ... on CoreImageBlock {
        name
        attributes {
          ... on CoreImageBlockAttributes {
            id
            href
            title
            url
            alt
            anchor
            align
          }
        }
      }
      name
      ... on CoreListBlock {
        attributes {
          ordered
          values
        }
      }
      ... on CoreHeadingBlock {
        attributes {
          ... on CoreHeadingBlockAttributes {
            align
            textAlign
            content
            fontSize
          }
        }
      }
      ... on CoreGalleryBlock {
        attributes {
          ... on CoreGalleryBlockAttributes {
            align
            images {
              fullUrl
              link
              alt
            }
            imageCrop
            columns
          }
        }
      }
    }
    categories {
      nodes {
        categoryId
        name
      }
    }
    date
    title
  }
}
```