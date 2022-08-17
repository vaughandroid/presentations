# So, are you saying we should stop using errors completely?

* Errors can still be useful for those "should never happen" cases.
* Rule of thumb: If there's a user story for this problem, don't use an Error.
* Alternative rule of thumb: Errors should result in hard failure (crash/something went wrong).