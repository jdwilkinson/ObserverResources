# Observer Resources

This repo contains the code to serve https://observer-resources.com, which contains an **unofficial** listing of resources that are useful for USAU-certified [observers](https://usaultimate.org/observers).  The intention is that this site accepts new resources from the community, and is updated frequently.

## Resource listing

The resources are stored in JSON format, and dynamically loaded into the site.  The file [resources.json](https://github.com/jdwilkinson/ObserverResources/blob/main/src/resources/resources.json) is the repository of resources, separated by type.

#### Adding a new resource into an existing category

This is the simplest operation.  Simply make a new object entry in `resources.json` under the appropriate heading, fill in its properties, and add any images or files necessary.  Such a change might look like [this](https://github.com/jdwilkinson/ObserverResources/commit/c7970c13095a3242d7e7c620dd35ecea7d2b2dde).

#### Adding a new resource category

More complicated is the creation of a brand-new category of resources.  The changes to `resources.json` are almost the same; you just need to add a new top-level field as well.  Then you'll need to plumb the new category through to the UI by editing a few `.tsx` files.  An example serves as the easiest explanation; the resulting change might look like [this](https://github.com/jdwilkinson/ObserverResources/commit/cc2d1630c8c0547d97559feed2ab2890cfec8219).

#### Modifying a resource

If, for example, the link or name of a resource needs to be updated, simply make the change directly to [resources.json].  No other plumbing is required.

#### Deleting a resource

To remove a single resource from a category, simply remove the entry from `resources.json`.  To remove an entire category and all the resources in it, you'll need to "un-plumb" the category from the UI.  This change will effectively be the opposite of the example in the "Adding a new resource category" section above.

## Hosting and infrastructure

Code is converted into a website via these mechanisms:

* This repo hosts the source code.
* The site is hosted on Netlify, which automatically handles the HTTPS certificate.
* Upon a push to the `main` branch, Netlify automatically recompiles and redeploys the site.
* The domain is registered via PorkBun.

## Contact

To contact the author, send a DM to **Wilk** on the observer Discord.

That's the best way to suggest new resources, although if you know what a "pull request" is, feel free to send one of those as well!
