# Click Trap

jQuery plugin for handling Click Trapping.  This plugin allows you to mimic the blur() event on a set of nodes.  Useful for complex controls with internal events that need to be reset when clicked outside of the combined area.

Example:

`$(target).clicktrap(function() { alert('you have clicked outside of the bounds of the target.'); });`

## ChangeLog:

#### 1.0.3

- Fixed a bug that wouldn't traverse all the way down the trapped wrappers children.

#### 1.0.2

- Initial Release