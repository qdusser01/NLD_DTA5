// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var myVar = context.variableManager.getValue("TotalPrice");
if (myVar==null) {
        context.fail("Variable 'myVar' not found");
}

// Do some computation using the methods
// you defined in the JS Library
var computedValue = myVar.replace(",",".");
logger.debug("New TotalPrice ="+computedValue);

// Inject the computed value in a runtime variable
context.variableManager.setValue("TotalPrice",computedValue);