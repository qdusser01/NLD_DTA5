// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var Item = context.variableManager.getValue("item");
if (Item==null) {
        context.fail("Variable 'item' not found");
}

var time = context.variableManager.getValue("time");
if (time==null) {
        context.fail("Variable 'time' not found");
}

logger.debug("The item is: "+Item+" The time is: "+time+" The LG is: "+context.currentLG.name);