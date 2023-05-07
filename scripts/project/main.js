
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	SetUpTrees(2,runtime);
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}

//excludedelement is the correct tree frame answer
function SetUpTrees(excludedelement,runtime)
{
	let trees=runtime.objects.tree.getAllInstances();
	//console.log(trees);
	let treeFramesList=[0,1,2,3];
	treeFramesList.splice(excludedelement, 1);
	
	for(let i=0;i<trees.length;i++)
	{
		//console.log("treeFramesList length = "+ treeFramesList.length);
		const randomIndex = Math.round(Math.random()*(treeFramesList.length-1));
 		const randomFrame = treeFramesList[randomIndex];
	    //console.log("random Frame = "+ randomFrame);
		trees[i].animationFrame=randomFrame;
		treeFramesList.splice(randomIndex, 1);
	}
	
	//randomly select one of the trees to make it the correct tree
	const randomCorrectTreeIndex = Math.round(Math.random()*(trees.length-1));
	trees[randomCorrectTreeIndex].animationFrame=excludedelement;
	//set the global variable to be used by the event sheet
	runtime.globalVars.RandomCorrectAnswerID=randomCorrectTreeIndex;
	
}

