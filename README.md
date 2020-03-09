# Icon Generator

This tool will take a directory of svg icons and build corresponding components.

## Using the tool

First install deps: `yarn`

Then run `yarn build-icons`

## What's this doing?

You will notice 2 folders in the root of the project `generate-icons` and `icon-pack`. If `icon-pack` contains a set of SVGs, then `generate-icons` will extract the data from the SVGs and do a few things with it:

- Create a single file (`src/icons.ts`) containing all the data in a normalised, js format.
- Create a file for each icon(`src/icons/xxx.ts`)
- Create an Icons.md file in the root for previewing icons.

The application surrounding this should be stripped away after the lib is verified and turned into a lib 👍



