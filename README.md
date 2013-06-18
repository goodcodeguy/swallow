# jQuery Swallow

jQuery plugin for handling click events with complex html controls.  This plugin allows you to mimic the blur() event on a complex set of nodes.  Useful for controls with internal events that need to be reset when clicked outside of the combined area.

Example:

`$(target).swallow(function() { alert('you have clicked outside of the bounds of the target.'); });`

## ChangeLog:

#### 1.0.0

- Initial Release