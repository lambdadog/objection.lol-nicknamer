# THIS PROJECT IS CURRENTLY BROKEN

Objection.lol has changed the format they save their objections in,
therefore Objection.lol Nicknamer just throws errors. When I find time
I'll do a deep dive and attempt to fix it.

# Objection.lol Nicknamer

A scrappy and hacked together nicknamer for objection.lol that lets
you assign nicknames to characters in your objection instead of
needing to manually nickname every single scene.

If it breaks, let me know (it should spit out a somewhat acceptable
error, although I'll admit to this project being completely hacked
together). Objection.lol embeds the character pose data in the app
itself, so it's a somewhat manual process updating `mapping.json` (see
below if you're interested in doing so yourself).

## Updating `mapping.json`
 
The `mappings.js` file is what's used to update
`mapping.json`. Essentially you'll need to download the `app.<random
characters>.js` file used for the objection.lol webapp and extract the
character pose data, remove the background field for each character
(as it references another object), then plug it into `mappings.js` as
the variable `characters`.

Once you've done that, run `mappings.js` with NodeJS, and pipe the
output into the `mapping.json` file and you have a fresh new set of
mappings.

I'll admit to not knowing how often (if ever) objections.lol updates
their poses, but I'm hoping it's rare enough that this won't ever be
an issue.
