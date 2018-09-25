gdjs.GameCode = {};
gdjs.GameCode.GDCowboyObjects1= [];
gdjs.GameCode.GDCowboyObjects2= [];
gdjs.GameCode.GDCowboyObjects3= [];
gdjs.GameCode.GDCowboyObjects4= [];
gdjs.GameCode.GDCowboyObjects5= [];
gdjs.GameCode.GDZombieAxeObjects1= [];
gdjs.GameCode.GDZombieAxeObjects2= [];
gdjs.GameCode.GDZombieAxeObjects3= [];
gdjs.GameCode.GDZombieAxeObjects4= [];
gdjs.GameCode.GDZombieAxeObjects5= [];
gdjs.GameCode.GDCowboyLifeObjects1= [];
gdjs.GameCode.GDCowboyLifeObjects2= [];
gdjs.GameCode.GDCowboyLifeObjects3= [];
gdjs.GameCode.GDCowboyLifeObjects4= [];
gdjs.GameCode.GDCowboyLifeObjects5= [];
gdjs.GameCode.GDZombiesKilledObjects1= [];
gdjs.GameCode.GDZombiesKilledObjects2= [];
gdjs.GameCode.GDZombiesKilledObjects3= [];
gdjs.GameCode.GDZombiesKilledObjects4= [];
gdjs.GameCode.GDZombiesKilledObjects5= [];
gdjs.GameCode.GDBackgroundObjects1= [];
gdjs.GameCode.GDBackgroundObjects2= [];
gdjs.GameCode.GDBackgroundObjects3= [];
gdjs.GameCode.GDBackgroundObjects4= [];
gdjs.GameCode.GDBackgroundObjects5= [];
gdjs.GameCode.GDBarrelObjects1= [];
gdjs.GameCode.GDBarrelObjects2= [];
gdjs.GameCode.GDBarrelObjects3= [];
gdjs.GameCode.GDBarrelObjects4= [];
gdjs.GameCode.GDBarrelObjects5= [];
gdjs.GameCode.GDWallSObjects1= [];
gdjs.GameCode.GDWallSObjects2= [];
gdjs.GameCode.GDWallSObjects3= [];
gdjs.GameCode.GDWallSObjects4= [];
gdjs.GameCode.GDWallSObjects5= [];
gdjs.GameCode.GDBooksNObjects1= [];
gdjs.GameCode.GDBooksNObjects2= [];
gdjs.GameCode.GDBooksNObjects3= [];
gdjs.GameCode.GDBooksNObjects4= [];
gdjs.GameCode.GDBooksNObjects5= [];
gdjs.GameCode.GDCandleNObjects1= [];
gdjs.GameCode.GDCandleNObjects2= [];
gdjs.GameCode.GDCandleNObjects3= [];
gdjs.GameCode.GDCandleNObjects4= [];
gdjs.GameCode.GDCandleNObjects5= [];
gdjs.GameCode.GDWallWObjects1= [];
gdjs.GameCode.GDWallWObjects2= [];
gdjs.GameCode.GDWallWObjects3= [];
gdjs.GameCode.GDWallWObjects4= [];
gdjs.GameCode.GDWallWObjects5= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBarrelObjects2Objects = Hashtable.newFrom({"Barrel": gdjs.GameCode.GDBarrelObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBarrelObjects2Objects = Hashtable.newFrom({"Barrel": gdjs.GameCode.GDBarrelObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallSObjects2Objects = Hashtable.newFrom({"WallS": gdjs.GameCode.GDWallSObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBooksNObjects2Objects = Hashtable.newFrom({"BooksN": gdjs.GameCode.GDBooksNObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBooksNObjects2Objects = Hashtable.newFrom({"BooksN": gdjs.GameCode.GDBooksNObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCandleNObjects2Objects = Hashtable.newFrom({"CandleN": gdjs.GameCode.GDCandleNObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCandleNObjects2Objects = Hashtable.newFrom({"CandleN": gdjs.GameCode.GDCandleNObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallWObjects2Objects = Hashtable.newFrom({"WallW": gdjs.GameCode.GDWallWObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallWObjects2Objects = Hashtable.newFrom({"WallW": gdjs.GameCode.GDWallWObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects2Objects = Hashtable.newFrom({"ZombieAxe": gdjs.GameCode.GDZombieAxeObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects2Objects = Hashtable.newFrom({"ZombieAxe": gdjs.GameCode.GDZombieAxeObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects2Objects = Hashtable.newFrom({"ZombieAxe": gdjs.GameCode.GDZombieAxeObjects2});gdjs.GameCode.eventsList0x82bfe8 = function(runtimeScene, context) {

{

gdjs.GameCode.GDCowboyObjects4.createFrom(gdjs.GameCode.GDCowboyObjects3);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects4[i].getAnimationFrame() == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCowboyObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects4[i].returnVariable(gdjs.GameCode.GDCowboyObjects4[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{

gdjs.GameCode.GDCowboyObjects4.createFrom(gdjs.GameCode.GDCowboyObjects3);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects4[i].getAnimationFrame() == 5 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCowboyObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects4[i].returnVariable(gdjs.GameCode.GDCowboyObjects4[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{

gdjs.GameCode.GDCowboyObjects4.createFrom(gdjs.GameCode.GDCowboyObjects3);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCowboyObjects4[i].getVariableNumber(gdjs.GameCode.GDCowboyObjects4[i].getVariables().getFromIndex(2)) == 0) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects4[i].getAnimationFrame() == 0 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCowboyObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects4[i].returnVariable(gdjs.GameCode.GDCowboyObjects4[i].getVariables().getFromIndex(2)).setNumber(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "shot.wav", false, 30, 1.2);
}}

}


{

/* Reuse gdjs.GameCode.GDCowboyObjects3 */

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects3.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCowboyObjects3[i].getVariableNumber(gdjs.GameCode.GDCowboyObjects3[i].getVariables().getFromIndex(2)) == 5) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects3[k] = gdjs.GameCode.GDCowboyObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects3.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects3[i].getAnimationFrame() == 5 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects3[k] = gdjs.GameCode.GDCowboyObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects3.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCowboyObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects3[i].returnVariable(gdjs.GameCode.GDCowboyObjects3[i].getVariables().getFromIndex(2)).setNumber(5);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "9mm.wav", false, 30, 1.2);
}}

}


}; //End of gdjs.GameCode.eventsList0x82bfe8
gdjs.GameCode.eventsList0x828aa8 = function(runtimeScene, context) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDCowboyObjects3.createFrom(gdjs.GameCode.GDCowboyObjects2);

{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects3[i].setAnimation(24 + (gdjs.GameCode.GDCowboyObjects3[i].getDirectionOrAngle()));
}
}{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects3[i].returnVariable(gdjs.GameCode.GDCowboyObjects3[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
{ //Subevents
gdjs.GameCode.eventsList0x82bfe8(runtimeScene, context);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "f"));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCowboyObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects2[i].setAnimation((gdjs.GameCode.GDCowboyObjects2[i].getDirectionOrAngle()));
}
}{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects2[i].returnVariable(gdjs.GameCode.GDCowboyObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects2[i].returnVariable(gdjs.GameCode.GDCowboyObjects2[i].getVariables().getFromIndex(2)).setNumber(-1);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x828aa8
gdjs.GameCode.eventsList0x877738 = function(runtimeScene, context) {

{

gdjs.GameCode.GDCowboyObjects4.createFrom(gdjs.GameCode.GDCowboyObjects3);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects4[i].getAnimationFrame() == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCowboyObjects4[i].getVariableNumber(gdjs.GameCode.GDCowboyObjects4[i].getVariables().getFromIndex(2)) == 0) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCowboyObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects4[i].returnVariable(gdjs.GameCode.GDCowboyObjects4[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects4[i].returnVariable(gdjs.GameCode.GDCowboyObjects4[i].getVariables().getFromIndex(2)).setNumber(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "shot.wav", false, 30, 1.2);
}}

}


{

gdjs.GameCode.GDCowboyObjects4.createFrom(gdjs.GameCode.GDCowboyObjects3);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects4[i].getAnimationFrame() == 5 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCowboyObjects4[i].getVariableNumber(gdjs.GameCode.GDCowboyObjects4[i].getVariables().getFromIndex(2)) == 5) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCowboyObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects4[i].returnVariable(gdjs.GameCode.GDCowboyObjects4[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "9mm.wav", false, 30, 1.2);
}{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects4[i].returnVariable(gdjs.GameCode.GDCowboyObjects4[i].getVariables().getFromIndex(2)).setNumber(5);
}
}}

}


{

gdjs.GameCode.GDCowboyObjects4.createFrom(gdjs.GameCode.GDCowboyObjects3);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects4[i].getAnimationFrame() == 10 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCowboyObjects4[i].getVariableNumber(gdjs.GameCode.GDCowboyObjects4[i].getVariables().getFromIndex(2)) == 10) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCowboyObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects4[i].returnVariable(gdjs.GameCode.GDCowboyObjects4[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects4[i].returnVariable(gdjs.GameCode.GDCowboyObjects4[i].getVariables().getFromIndex(2)).setNumber(10);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "shot.wav", false, 30, 1.2);
}}

}


{

gdjs.GameCode.GDCowboyObjects4.createFrom(gdjs.GameCode.GDCowboyObjects3);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects4[i].getAnimationFrame() == 15 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCowboyObjects4[i].getVariableNumber(gdjs.GameCode.GDCowboyObjects4[i].getVariables().getFromIndex(2)) == 15) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCowboyObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects4[i].returnVariable(gdjs.GameCode.GDCowboyObjects4[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects4[i].returnVariable(gdjs.GameCode.GDCowboyObjects4[i].getVariables().getFromIndex(2)).setNumber(15);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "9mm.wav", false, 30, 1.2);
}}

}


{

gdjs.GameCode.GDCowboyObjects4.createFrom(gdjs.GameCode.GDCowboyObjects3);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects4[i].getAnimationFrame() == 20 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCowboyObjects4[i].getVariableNumber(gdjs.GameCode.GDCowboyObjects4[i].getVariables().getFromIndex(2)) == 20) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCowboyObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects4[i].returnVariable(gdjs.GameCode.GDCowboyObjects4[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects4[i].returnVariable(gdjs.GameCode.GDCowboyObjects4[i].getVariables().getFromIndex(2)).setNumber(20);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "shot.wav", false, 30, 1.2);
}}

}


{

/* Reuse gdjs.GameCode.GDCowboyObjects3 */

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects3[i].getAnimationFrame() == 25 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects3[k] = gdjs.GameCode.GDCowboyObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects3.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects3.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCowboyObjects3[i].getVariableNumber(gdjs.GameCode.GDCowboyObjects3[i].getVariables().getFromIndex(2)) == 25) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects3[k] = gdjs.GameCode.GDCowboyObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects3.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCowboyObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects3[i].returnVariable(gdjs.GameCode.GDCowboyObjects3[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects3[i].returnVariable(gdjs.GameCode.GDCowboyObjects3[i].getVariables().getFromIndex(2)).setNumber(25);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "9mm.wav", false, 30, 1.2);
}}

}


}; //End of gdjs.GameCode.eventsList0x877738
gdjs.GameCode.eventsList0x8635f8 = function(runtimeScene, context) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
gdjs.GameCode.GDCowboyObjects3.createFrom(gdjs.GameCode.GDCowboyObjects2);

{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects3[i].setDirectionOrAngle(0);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
gdjs.GameCode.GDCowboyObjects3.createFrom(gdjs.GameCode.GDCowboyObjects2);

{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects3[i].setDirectionOrAngle(1);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
gdjs.GameCode.GDCowboyObjects3.createFrom(gdjs.GameCode.GDCowboyObjects2);

{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects3[i].setDirectionOrAngle(2);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
gdjs.GameCode.GDCowboyObjects3.createFrom(gdjs.GameCode.GDCowboyObjects2);

{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects3[i].setDirectionOrAngle(3);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDCowboyObjects3.createFrom(gdjs.GameCode.GDCowboyObjects2);

{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects3[i].setDirectionOrAngle(4);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDCowboyObjects3.createFrom(gdjs.GameCode.GDCowboyObjects2);

{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects3[i].setDirectionOrAngle(5);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDCowboyObjects3.createFrom(gdjs.GameCode.GDCowboyObjects2);

{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects3[i].setDirectionOrAngle(6);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDCowboyObjects3.createFrom(gdjs.GameCode.GDCowboyObjects2);

{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects3[i].setDirectionOrAngle(7);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDCowboyObjects3.createFrom(gdjs.GameCode.GDCowboyObjects2);

{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects3[i].setAnimation(16 + (gdjs.GameCode.GDCowboyObjects3[i].getDirectionOrAngle()));
}
}
{ //Subevents
gdjs.GameCode.eventsList0x877738(runtimeScene, context);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "f"));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCowboyObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects2[i].setAnimation(8 + (gdjs.GameCode.GDCowboyObjects2[i].getDirectionOrAngle()));
}
}{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects2[i].returnVariable(gdjs.GameCode.GDCowboyObjects2[i].getVariables().getFromIndex(0)).setNumber(0
);
}
}{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects2[i].returnVariable(gdjs.GameCode.GDCowboyObjects2[i].getVariables().getFromIndex(2)).setNumber(-1);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x8635f8
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects4Objects = Hashtable.newFrom({"ZombieAxe": gdjs.GameCode.GDZombieAxeObjects4});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects4Objects = Hashtable.newFrom({"ZombieAxe": gdjs.GameCode.GDZombieAxeObjects4});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects4Objects = Hashtable.newFrom({"ZombieAxe": gdjs.GameCode.GDZombieAxeObjects4});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects4Objects = Hashtable.newFrom({"ZombieAxe": gdjs.GameCode.GDZombieAxeObjects4});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects4Objects = Hashtable.newFrom({"ZombieAxe": gdjs.GameCode.GDZombieAxeObjects4});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects4Objects = Hashtable.newFrom({"ZombieAxe": gdjs.GameCode.GDZombieAxeObjects4});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects4Objects = Hashtable.newFrom({"ZombieAxe": gdjs.GameCode.GDZombieAxeObjects4});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects4Objects = Hashtable.newFrom({"ZombieAxe": gdjs.GameCode.GDZombieAxeObjects4});gdjs.GameCode.eventsList0x878db8 = function(runtimeScene, context) {

{

gdjs.GameCode.GDCowboyObjects4.createFrom(gdjs.GameCode.GDCowboyObjects3);

gdjs.GameCode.GDZombieAxeObjects4.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.raycastObjectToPosition(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects4Objects, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointX(""))+75, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointY(""))+160, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointX(""))+75, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointY(""))+100+500, runtimeScene.getVariables().getFromIndex(0), runtimeScene.getVariables().getFromIndex(1), false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects4[i].getDirectionOrAngle() == 0 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects4[i].returnVariable(gdjs.GameCode.GDZombieAxeObjects4[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


{

gdjs.GameCode.GDCowboyObjects4.createFrom(gdjs.GameCode.GDCowboyObjects3);

gdjs.GameCode.GDZombieAxeObjects4.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.raycastObjectToPosition(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects4Objects, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointX(""))+75, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointY(""))+160, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointX(""))+75-500, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointY(""))+100, runtimeScene.getVariables().getFromIndex(0), runtimeScene.getVariables().getFromIndex(1), false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects4[i].getDirectionOrAngle() == 1 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects4[i].returnVariable(gdjs.GameCode.GDZombieAxeObjects4[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


{

gdjs.GameCode.GDCowboyObjects4.createFrom(gdjs.GameCode.GDCowboyObjects3);

gdjs.GameCode.GDZombieAxeObjects4.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.raycastObjectToPosition(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects4Objects, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointX(""))+75, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointY(""))+160, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointX(""))+75, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointY(""))+100-500, runtimeScene.getVariables().getFromIndex(0), runtimeScene.getVariables().getFromIndex(1), false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects4[i].getDirectionOrAngle() == 2 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects4[i].returnVariable(gdjs.GameCode.GDZombieAxeObjects4[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


{

gdjs.GameCode.GDCowboyObjects4.createFrom(gdjs.GameCode.GDCowboyObjects3);

gdjs.GameCode.GDZombieAxeObjects4.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.raycastObjectToPosition(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects4Objects, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointX(""))+75, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointY(""))+160, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointX(""))+75+500, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointY(""))+100, runtimeScene.getVariables().getFromIndex(0), runtimeScene.getVariables().getFromIndex(1), false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects4[i].getDirectionOrAngle() == 3 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects4[i].returnVariable(gdjs.GameCode.GDZombieAxeObjects4[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


{

gdjs.GameCode.GDCowboyObjects4.createFrom(gdjs.GameCode.GDCowboyObjects3);

gdjs.GameCode.GDZombieAxeObjects4.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.raycastObjectToPosition(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects4Objects, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointX(""))+75, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointY(""))+160, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointX(""))-75-355, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointY(""))+100+355, runtimeScene.getVariables().getFromIndex(0), runtimeScene.getVariables().getFromIndex(1), false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects4[i].getDirectionOrAngle() == 4 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects4[i].returnVariable(gdjs.GameCode.GDZombieAxeObjects4[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


{

gdjs.GameCode.GDCowboyObjects4.createFrom(gdjs.GameCode.GDCowboyObjects3);

gdjs.GameCode.GDZombieAxeObjects4.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.raycastObjectToPosition(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects4Objects, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointX(""))+75, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointY(""))+160, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointX(""))+75-355, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointY(""))+100-355, runtimeScene.getVariables().getFromIndex(0), runtimeScene.getVariables().getFromIndex(1), false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects4[i].getDirectionOrAngle() == 5 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects4[i].returnVariable(gdjs.GameCode.GDZombieAxeObjects4[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


{

gdjs.GameCode.GDCowboyObjects4.createFrom(gdjs.GameCode.GDCowboyObjects3);

gdjs.GameCode.GDZombieAxeObjects4.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.raycastObjectToPosition(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects4Objects, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointX(""))+75, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointY(""))+160, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointX(""))+75+355, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointY(""))+100-355, runtimeScene.getVariables().getFromIndex(0), runtimeScene.getVariables().getFromIndex(1), false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects4[i].getDirectionOrAngle() == 6 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects4[i].returnVariable(gdjs.GameCode.GDZombieAxeObjects4[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


{

gdjs.GameCode.GDCowboyObjects4.createFrom(gdjs.GameCode.GDCowboyObjects3);

gdjs.GameCode.GDZombieAxeObjects4.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.raycastObjectToPosition(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects4Objects, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointX(""))+75, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointY(""))+160, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointX(""))+75+355, (( gdjs.GameCode.GDCowboyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects4[0].getPointY(""))+100+355, runtimeScene.getVariables().getFromIndex(0), runtimeScene.getVariables().getFromIndex(1), false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects4[i].getDirectionOrAngle() == 7 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects4[k] = gdjs.GameCode.GDCowboyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects4.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects4[i].returnVariable(gdjs.GameCode.GDZombieAxeObjects4[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


{

gdjs.GameCode.GDZombieAxeObjects3.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects3[i].getVariableNumber(gdjs.GameCode.GDZombieAxeObjects3[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects3[k] = gdjs.GameCode.GDZombieAxeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects3[i].returnVariable(gdjs.GameCode.GDZombieAxeObjects3[i].getVariables().getFromIndex(0)).sub(1);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x878db8
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCowboyObjects3Objects = Hashtable.newFrom({"Cowboy": gdjs.GameCode.GDCowboyObjects3});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects3Objects = Hashtable.newFrom({"ZombieAxe": gdjs.GameCode.GDZombieAxeObjects3});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCowboyObjects2Objects = Hashtable.newFrom({"Cowboy": gdjs.GameCode.GDCowboyObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects2Objects = Hashtable.newFrom({"ZombieAxe": gdjs.GameCode.GDZombieAxeObjects2});gdjs.GameCode.eventsList0x9b5398 = function(runtimeScene, context) {

{

gdjs.GameCode.GDZombieAxeObjects3.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects3[i].getAnimationFrame() != 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects3[k] = gdjs.GameCode.GDZombieAxeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects3[i].returnVariable(gdjs.GameCode.GDZombieAxeObjects3[i].getVariables().getFromIndex(3)).setNumber(-1);
}
}}

}


{

gdjs.GameCode.GDZombieAxeObjects3.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects3[i].getAnimationFrame() == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects3[k] = gdjs.GameCode.GDZombieAxeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects3.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects3.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDZombieAxeObjects3[i].getVariableNumber(gdjs.GameCode.GDZombieAxeObjects3[i].getVariables().getFromIndex(3)) == 0) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects3[k] = gdjs.GameCode.GDZombieAxeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects3.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "axe_impact.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects3[i].returnVariable(gdjs.GameCode.GDZombieAxeObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}}

}


{


{
}

}


}; //End of gdjs.GameCode.eventsList0x9b5398
gdjs.GameCode.eventsList0x8bb358 = function(runtimeScene, context) {

{

gdjs.GameCode.GDZombieAxeObjects3.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects3[i].getVariableNumber(gdjs.GameCode.GDZombieAxeObjects3[i].getVariables().getFromIndex(2)) == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects3[k] = gdjs.GameCode.GDZombieAxeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDCowboyObjects3.createFrom(gdjs.GameCode.GDCowboyObjects1);

/* Reuse gdjs.GameCode.GDZombieAxeObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects3[i].addForceTowardObject((gdjs.GameCode.GDCowboyObjects3.length !== 0 ? gdjs.GameCode.GDCowboyObjects3[0] : null), 50, 0);
}
}}

}


{

gdjs.GameCode.GDZombieAxeObjects3.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects3[i].getVariableNumber(gdjs.GameCode.GDZombieAxeObjects3[i].getVariables().getFromIndex(2)) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects3[k] = gdjs.GameCode.GDZombieAxeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDCowboyObjects3.createFrom(gdjs.GameCode.GDCowboyObjects1);

/* Reuse gdjs.GameCode.GDZombieAxeObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects3[i].addForceTowardObject((gdjs.GameCode.GDCowboyObjects3.length !== 0 ? gdjs.GameCode.GDCowboyObjects3[0] : null), 1, 0);
}
}}

}


{

gdjs.GameCode.GDZombieAxeObjects3.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects3[i].averageForceAngleIs(90, 44) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects3[k] = gdjs.GameCode.GDZombieAxeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects3[i].setDirectionOrAngle(0);
}
}}

}


{

gdjs.GameCode.GDZombieAxeObjects3.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects3[i].averageForceAngleIs(180, 45) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects3[k] = gdjs.GameCode.GDZombieAxeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects3[i].setDirectionOrAngle(1);
}
}}

}


{

gdjs.GameCode.GDZombieAxeObjects3.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects3[i].averageForceAngleIs(270, 45) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects3[k] = gdjs.GameCode.GDZombieAxeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects3[i].setDirectionOrAngle(2);
}
}}

}


{

gdjs.GameCode.GDZombieAxeObjects3.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects3[i].averageForceAngleIs(360, 45) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects3[k] = gdjs.GameCode.GDZombieAxeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects3[i].setDirectionOrAngle(3);
}
}}

}


{

gdjs.GameCode.GDZombieAxeObjects3.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects3[i].averageForceAngleIs(0, 45) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects3[k] = gdjs.GameCode.GDZombieAxeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects3[i].setDirectionOrAngle(3);
}
}}

}


{

gdjs.GameCode.GDZombieAxeObjects3.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects3[i].averageForceAngleIs(135, 45) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects3[k] = gdjs.GameCode.GDZombieAxeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects3[i].setDirectionOrAngle(4);
}
}}

}


{

gdjs.GameCode.GDZombieAxeObjects3.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects3[i].averageForceAngleIs(225, 45) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects3[k] = gdjs.GameCode.GDZombieAxeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects3[i].setDirectionOrAngle(5);
}
}}

}


{

gdjs.GameCode.GDZombieAxeObjects3.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects3[i].averageForceAngleIs(315, 45) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects3[k] = gdjs.GameCode.GDZombieAxeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects3[i].setDirectionOrAngle(6);
}
}}

}


{

gdjs.GameCode.GDZombieAxeObjects3.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects3[i].averageForceAngleIs(45, 45) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects3[k] = gdjs.GameCode.GDZombieAxeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects3[i].setDirectionOrAngle(7);
}
}}

}


{

gdjs.GameCode.GDCowboyObjects3.createFrom(gdjs.GameCode.GDCowboyObjects1);

gdjs.GameCode.GDZombieAxeObjects3.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCowboyObjects3Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects3Objects, 130, true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects3[i].setAnimation((gdjs.GameCode.GDZombieAxeObjects3[i].getDirectionOrAngle()));
}
}}

}


{

gdjs.GameCode.GDCowboyObjects2.createFrom(gdjs.GameCode.GDCowboyObjects1);

/* Reuse gdjs.GameCode.GDZombieAxeObjects2 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCowboyObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects2Objects, 130, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects2[i].setAnimation(8 + (gdjs.GameCode.GDZombieAxeObjects2[i].getDirectionOrAngle()));
}
}{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects2[i].returnVariable(gdjs.GameCode.GDZombieAxeObjects2[i].getVariables().getFromIndex(2)).setNumber(1);
}
}
{ //Subevents
gdjs.GameCode.eventsList0x9b5398(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.GameCode.eventsList0x8bb358
gdjs.GameCode.eventsList0x868878 = function(runtimeScene, context) {

{

gdjs.GameCode.GDCowboyObjects3.createFrom(gdjs.GameCode.GDCowboyObjects1);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects3[i].getVariableNumber(gdjs.GameCode.GDCowboyObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects3[k] = gdjs.GameCode.GDCowboyObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x878db8(runtimeScene, context);} //End of subevents
}

}


{

/* Reuse gdjs.GameCode.GDZombieAxeObjects2 */

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects2[i].getVariableNumber(gdjs.GameCode.GDZombieAxeObjects2[i].getVariables().getFromIndex(0)) > 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects2[k] = gdjs.GameCode.GDZombieAxeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects2[i].getVariableNumber(gdjs.GameCode.GDZombieAxeObjects2[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects2[k] = gdjs.GameCode.GDZombieAxeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x8bb358(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.GameCode.eventsList0x868878
gdjs.GameCode.eventsList0x9a9d98 = function(runtimeScene, context) {

{

gdjs.GameCode.GDZombieAxeObjects3.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects3[i].getVariableNumber(gdjs.GameCode.GDZombieAxeObjects3[i].getVariables().getFromIndex(0)) <= 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects3[k] = gdjs.GameCode.GDZombieAxeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects3[i].setZOrder((gdjs.GameCode.GDZombieAxeObjects3[i].getPointY("")) + 100);
}
}{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects3[i].returnVariable(gdjs.GameCode.GDZombieAxeObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "zombie_death.wav", false, 50, 1);
}{runtimeScene.getVariables().getFromIndex(2).add(1);
}}

}


{

/* Reuse gdjs.GameCode.GDZombieAxeObjects2 */

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects2[i].getAnimationFrame() >= 10 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects2[k] = gdjs.GameCode.GDZombieAxeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects2[i].getVariableNumber(gdjs.GameCode.GDZombieAxeObjects2[i].getVariables().getFromIndex(0)) > 0 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects2[k] = gdjs.GameCode.GDZombieAxeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects2[i].returnVariable(gdjs.GameCode.GDZombieAxeObjects2[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects2[i].setAnimation(0);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x9a9d98
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCowboyObjects3Objects = Hashtable.newFrom({"Cowboy": gdjs.GameCode.GDCowboyObjects3});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects3Objects = Hashtable.newFrom({"ZombieAxe": gdjs.GameCode.GDZombieAxeObjects3});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCowboyObjects2Objects = Hashtable.newFrom({"Cowboy": gdjs.GameCode.GDCowboyObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects2Objects = Hashtable.newFrom({"ZombieAxe": gdjs.GameCode.GDZombieAxeObjects2});gdjs.GameCode.eventsList0x8fb228 = function(runtimeScene, context) {

{

gdjs.GameCode.GDCowboyObjects3.createFrom(gdjs.GameCode.GDCowboyObjects1);

gdjs.GameCode.GDZombieAxeObjects3.createFrom(gdjs.GameCode.GDZombieAxeObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects3[i].getAnimationFrame() == 13 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects3[k] = gdjs.GameCode.GDZombieAxeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects3.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCowboyObjects3Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects3Objects, 130, false);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCowboyObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects3[i].returnVariable(gdjs.GameCode.GDCowboyObjects3[i].getVariables().getFromIndex(1)).sub(1);
}
}}

}


{

gdjs.GameCode.GDCowboyObjects2.createFrom(gdjs.GameCode.GDCowboyObjects1);

/* Reuse gdjs.GameCode.GDZombieAxeObjects2 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCowboyObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects2Objects, 130, true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects2[i].returnVariable(gdjs.GameCode.GDZombieAxeObjects2[i].getVariables().getFromIndex(2)).setNumber(0);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x8fb228
gdjs.GameCode.eventsList0x9f7070 = function(runtimeScene, context) {

{


{
gdjs.GameCode.GDBarrelObjects2.createFrom(runtimeScene.getObjects("Barrel"));
gdjs.GameCode.GDBooksNObjects2.createFrom(runtimeScene.getObjects("BooksN"));
gdjs.GameCode.GDCandleNObjects2.createFrom(runtimeScene.getObjects("CandleN"));
gdjs.GameCode.GDCowboyObjects2.createFrom(gdjs.GameCode.GDCowboyObjects1);

gdjs.GameCode.GDCowboyLifeObjects2.createFrom(runtimeScene.getObjects("CowboyLife"));
gdjs.GameCode.GDWallSObjects2.createFrom(runtimeScene.getObjects("WallS"));
gdjs.GameCode.GDWallWObjects2.createFrom(runtimeScene.getObjects("WallW"));
gdjs.GameCode.GDZombieAxeObjects2.createFrom(runtimeScene.getObjects("ZombieAxe"));
gdjs.GameCode.GDZombiesKilledObjects2.createFrom(runtimeScene.getObjects("ZombiesKilled"));
{for(var i = 0, len = gdjs.GameCode.GDCowboyLifeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyLifeObjects2[i].setString("Cowboy Pos: " + gdjs.evtTools.common.toString((( gdjs.GameCode.GDCowboyObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects2[0].getPointX(""))) + " - " +gdjs.evtTools.common.toString((( gdjs.GameCode.GDCowboyObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCowboyObjects2[0].getPointY(""))));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects2[i].setZOrder(1000 + (gdjs.GameCode.GDCowboyObjects2[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.GameCode.GDCowboyLifeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyLifeObjects2[i].setString("Health: " + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDCowboyObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCowboyObjects2[0].getVariables()).getFromIndex(1)))*10) + "%");
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameCode.GDCowboyObjects2.length !== 0 ? gdjs.GameCode.GDCowboyObjects2[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBarrelObjects2Objects);
}
}{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBarrelObjects2Objects);
}
}{for(var i = 0, len = gdjs.GameCode.GDBarrelObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBarrelObjects2[i].setZOrder(1290 + (gdjs.GameCode.GDBarrelObjects2[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallSObjects2Objects);
}
}{for(var i = 0, len = gdjs.GameCode.GDWallSObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWallSObjects2[i].setZOrder(1500 + (gdjs.GameCode.GDWallSObjects2[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.GameCode.GDZombiesKilledObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDZombiesKilledObjects2[i].setString("Zombies Killed: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBooksNObjects2Objects);
}
}{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBooksNObjects2Objects);
}
}{for(var i = 0, len = gdjs.GameCode.GDBooksNObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBooksNObjects2[i].setZOrder(1280 + (gdjs.GameCode.GDBooksNObjects2[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCandleNObjects2Objects);
}
}{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCandleNObjects2Objects);
}
}{for(var i = 0, len = gdjs.GameCode.GDCandleNObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCandleNObjects2[i].setZOrder(1280 + (gdjs.GameCode.GDCandleNObjects2[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallWObjects2Objects);
}
}{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallWObjects2Objects);
}
}{for(var i = 0, len = gdjs.GameCode.GDWallWObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWallWObjects2[i].setZOrder(-1);
}
}}

}


{

gdjs.GameCode.GDZombieAxeObjects2.createFrom(runtimeScene.getObjects("ZombieAxe"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects2[i].getVariableNumber(gdjs.GameCode.GDZombieAxeObjects2[i].getVariables().getFromIndex(0)) > 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects2[k] = gdjs.GameCode.GDZombieAxeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDCowboyObjects2.createFrom(gdjs.GameCode.GDCowboyObjects1);

/* Reuse gdjs.GameCode.GDZombieAxeObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects2[i].setZOrder(1000 + (gdjs.GameCode.GDZombieAxeObjects2[i].getPointY("")) + 100);
}
}{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects2Objects);
}
}{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects2Objects);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 500 - (gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene)*2);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDZombieAxeObjects2.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDZombieAxeObjects2Objects, gdjs.random(800), gdjs.random(600), "");
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "zombie.wav", false, 50, 1);
}}

}


{

gdjs.GameCode.GDCowboyObjects2.createFrom(gdjs.GameCode.GDCowboyObjects1);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCowboyObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects2[k] = gdjs.GameCode.GDCowboyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x828aa8(runtimeScene, context);} //End of subevents
}

}


{

gdjs.GameCode.GDCowboyObjects2.createFrom(gdjs.GameCode.GDCowboyObjects1);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects2[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects2[k] = gdjs.GameCode.GDCowboyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x8635f8(runtimeScene, context);} //End of subevents
}

}


{

gdjs.GameCode.GDZombieAxeObjects2.createFrom(runtimeScene.getObjects("ZombieAxe"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects2[i].getVariableNumber(gdjs.GameCode.GDZombieAxeObjects2[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects2[k] = gdjs.GameCode.GDZombieAxeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects2[i].getVariableNumber(gdjs.GameCode.GDZombieAxeObjects2[i].getVariables().getFromIndex(0)) > 0 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects2[k] = gdjs.GameCode.GDZombieAxeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x868878(runtimeScene, context);} //End of subevents
}

}


{

gdjs.GameCode.GDZombieAxeObjects2.createFrom(runtimeScene.getObjects("ZombieAxe"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects2[i].getVariableNumber(gdjs.GameCode.GDZombieAxeObjects2[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects2[k] = gdjs.GameCode.GDZombieAxeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects2[i].setAnimation(16 + (gdjs.GameCode.GDZombieAxeObjects2[i].getDirectionOrAngle()));
}
}
{ //Subevents
gdjs.GameCode.eventsList0x9a9d98(runtimeScene, context);} //End of subevents
}

}


{

gdjs.GameCode.GDZombieAxeObjects2.createFrom(runtimeScene.getObjects("ZombieAxe"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects2[i].getVariableNumber(gdjs.GameCode.GDZombieAxeObjects2[i].getVariables().getFromIndex(2)) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects2[k] = gdjs.GameCode.GDZombieAxeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x8fb228(runtimeScene, context);} //End of subevents
}

}


{

/* Reuse gdjs.GameCode.GDCowboyObjects1 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects1[i].getVariableNumber(gdjs.GameCode.GDCowboyObjects1[i].getVariables().getFromIndex(1)) <= 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects1[k] = gdjs.GameCode.GDCowboyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCowboyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects1[i].setAnimation(32 + (gdjs.GameCode.GDCowboyObjects1[i].getDirectionOrAngle()));
}
}}

}


}; //End of gdjs.GameCode.eventsList0x9f7070
gdjs.GameCode.eventsList0x8e6be8 = function(runtimeScene, context) {

{

gdjs.GameCode.GDCowboyObjects2.createFrom(gdjs.GameCode.GDCowboyObjects1);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects2[i].hasAnimationEnded() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects2[k] = gdjs.GameCode.GDCowboyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

/* Reuse gdjs.GameCode.GDZombieAxeObjects1 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDZombieAxeObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDZombieAxeObjects1[i].getVariableNumber(gdjs.GameCode.GDZombieAxeObjects1[i].getVariables().getFromIndex(0)) > 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDZombieAxeObjects1[k] = gdjs.GameCode.GDZombieAxeObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDZombieAxeObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDZombieAxeObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects1[i].setAnimation(24);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x8e6be8
gdjs.GameCode.eventsList0xaf9c0 = function(runtimeScene, context) {

{

gdjs.GameCode.GDCowboyObjects1.createFrom(runtimeScene.getObjects("Cowboy"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects1[i].getVariableNumber(gdjs.GameCode.GDCowboyObjects1[i].getVariables().getFromIndex(1)) > 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects1[k] = gdjs.GameCode.GDCowboyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x9f7070(runtimeScene, context);} //End of subevents
}

}


{

gdjs.GameCode.GDCowboyObjects1.createFrom(runtimeScene.getObjects("Cowboy"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCowboyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowboyObjects1[i].getVariableNumber(gdjs.GameCode.GDCowboyObjects1[i].getVariables().getFromIndex(1)) <= 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCowboyObjects1[k] = gdjs.GameCode.GDCowboyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCowboyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCowboyObjects1 */
gdjs.GameCode.GDCowboyLifeObjects1.createFrom(runtimeScene.getObjects("CowboyLife"));
gdjs.GameCode.GDZombieAxeObjects1.createFrom(runtimeScene.getObjects("ZombieAxe"));
{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.GameCode.GDZombieAxeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDZombieAxeObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.GameCode.GDCowboyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.GameCode.GDCowboyLifeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCowboyLifeObjects1[i].setString("Health: 0%");
}
}
{ //Subevents
gdjs.GameCode.eventsList0x8e6be8(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.GameCode.eventsList0xaf9c0


gdjs.GameCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.GameCode.GDCowboyObjects1.length = 0;
gdjs.GameCode.GDCowboyObjects2.length = 0;
gdjs.GameCode.GDCowboyObjects3.length = 0;
gdjs.GameCode.GDCowboyObjects4.length = 0;
gdjs.GameCode.GDCowboyObjects5.length = 0;
gdjs.GameCode.GDZombieAxeObjects1.length = 0;
gdjs.GameCode.GDZombieAxeObjects2.length = 0;
gdjs.GameCode.GDZombieAxeObjects3.length = 0;
gdjs.GameCode.GDZombieAxeObjects4.length = 0;
gdjs.GameCode.GDZombieAxeObjects5.length = 0;
gdjs.GameCode.GDCowboyLifeObjects1.length = 0;
gdjs.GameCode.GDCowboyLifeObjects2.length = 0;
gdjs.GameCode.GDCowboyLifeObjects3.length = 0;
gdjs.GameCode.GDCowboyLifeObjects4.length = 0;
gdjs.GameCode.GDCowboyLifeObjects5.length = 0;
gdjs.GameCode.GDZombiesKilledObjects1.length = 0;
gdjs.GameCode.GDZombiesKilledObjects2.length = 0;
gdjs.GameCode.GDZombiesKilledObjects3.length = 0;
gdjs.GameCode.GDZombiesKilledObjects4.length = 0;
gdjs.GameCode.GDZombiesKilledObjects5.length = 0;
gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDBackgroundObjects4.length = 0;
gdjs.GameCode.GDBackgroundObjects5.length = 0;
gdjs.GameCode.GDBarrelObjects1.length = 0;
gdjs.GameCode.GDBarrelObjects2.length = 0;
gdjs.GameCode.GDBarrelObjects3.length = 0;
gdjs.GameCode.GDBarrelObjects4.length = 0;
gdjs.GameCode.GDBarrelObjects5.length = 0;
gdjs.GameCode.GDWallSObjects1.length = 0;
gdjs.GameCode.GDWallSObjects2.length = 0;
gdjs.GameCode.GDWallSObjects3.length = 0;
gdjs.GameCode.GDWallSObjects4.length = 0;
gdjs.GameCode.GDWallSObjects5.length = 0;
gdjs.GameCode.GDBooksNObjects1.length = 0;
gdjs.GameCode.GDBooksNObjects2.length = 0;
gdjs.GameCode.GDBooksNObjects3.length = 0;
gdjs.GameCode.GDBooksNObjects4.length = 0;
gdjs.GameCode.GDBooksNObjects5.length = 0;
gdjs.GameCode.GDCandleNObjects1.length = 0;
gdjs.GameCode.GDCandleNObjects2.length = 0;
gdjs.GameCode.GDCandleNObjects3.length = 0;
gdjs.GameCode.GDCandleNObjects4.length = 0;
gdjs.GameCode.GDCandleNObjects5.length = 0;
gdjs.GameCode.GDWallWObjects1.length = 0;
gdjs.GameCode.GDWallWObjects2.length = 0;
gdjs.GameCode.GDWallWObjects3.length = 0;
gdjs.GameCode.GDWallWObjects4.length = 0;
gdjs.GameCode.GDWallWObjects5.length = 0;

gdjs.GameCode.eventsList0xaf9c0(runtimeScene, context);return;
}
gdjs['GameCode']= gdjs.GameCode;
