1. 
let bn = "other"
function launchbrowse(bn)
{
    if (bn == "chrome")
        {
        console.log("launch Chrome");
    }
    else {
         console.log("launch firefox");
        }
}
launchbrowse(bn)

2.
let testtype = "Sanity"
function runTest(testtype)
{
switch(testtype)
{
    case "Sanity":
        console.log("Perfom Sanity testing")
    break;
    case "Regression":
        console.log("Perfom Regression testing")
    break;
default:
    console.log("Perfom Smoke testing")
    break;
    }
}
runTest(testtype)