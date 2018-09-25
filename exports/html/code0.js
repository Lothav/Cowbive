gdjs.MenuCode = {};
gdjs.MenuCode.GDCowboyObjects1= [];
gdjs.MenuCode.GDCowboyObjects2= [];
gdjs.MenuCode.GDZombieObjects1= [];
gdjs.MenuCode.GDZombieObjects2= [];
gdjs.MenuCode.GD_39S_39_32to_32startObjects1= [];
gdjs.MenuCode.GD_39S_39_32to_32startObjects2= [];
gdjs.MenuCode.GDLogoObjects1= [];
gdjs.MenuCode.GDLogoObjects2= [];
gdjs.MenuCode.GDMoveTextObjects1= [];
gdjs.MenuCode.GDMoveTextObjects2= [];
gdjs.MenuCode.GDFireTextObjects1= [];
gdjs.MenuCode.GDFireTextObjects2= [];
gdjs.MenuCode.GDhatObjects1= [];
gdjs.MenuCode.GDhatObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};


gdjs.MenuCode.eventsList0xaf9c0 = function(runtimeScene, context) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game");
}}

}


{


{
gdjs.MenuCode.GD_39S_39_32to_32startObjects1.createFrom(runtimeScene.getObjects("'S' to start"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MenuCode.GD_39S_39_32to_32startObjects1.length !== 0 ? gdjs.MenuCode.GD_39S_39_32to_32startObjects1[0] : null), true, "", 0);
}}

}


}; //End of gdjs.MenuCode.eventsList0xaf9c0


gdjs.MenuCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.MenuCode.GDCowboyObjects1.length = 0;
gdjs.MenuCode.GDCowboyObjects2.length = 0;
gdjs.MenuCode.GDZombieObjects1.length = 0;
gdjs.MenuCode.GDZombieObjects2.length = 0;
gdjs.MenuCode.GD_39S_39_32to_32startObjects1.length = 0;
gdjs.MenuCode.GD_39S_39_32to_32startObjects2.length = 0;
gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;
gdjs.MenuCode.GDMoveTextObjects1.length = 0;
gdjs.MenuCode.GDMoveTextObjects2.length = 0;
gdjs.MenuCode.GDFireTextObjects1.length = 0;
gdjs.MenuCode.GDFireTextObjects2.length = 0;
gdjs.MenuCode.GDhatObjects1.length = 0;
gdjs.MenuCode.GDhatObjects2.length = 0;

gdjs.MenuCode.eventsList0xaf9c0(runtimeScene, context);return;
}
gdjs['MenuCode']= gdjs.MenuCode;
