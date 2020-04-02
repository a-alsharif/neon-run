gdjs.stage1Code = {};
gdjs.stage1Code.GDPlayerObjects1_1final = [];

gdjs.stage1Code.forEachCount0_3 = 0;

gdjs.stage1Code.forEachCount1_3 = 0;

gdjs.stage1Code.forEachIndex3 = 0;

gdjs.stage1Code.forEachObjects3 = [];

gdjs.stage1Code.forEachTotalCount3 = 0;

gdjs.stage1Code.GDPlayerObjects1= [];
gdjs.stage1Code.GDPlayerObjects2= [];
gdjs.stage1Code.GDPlayerObjects3= [];
gdjs.stage1Code.GDPlatformObjects1= [];
gdjs.stage1Code.GDPlatformObjects2= [];
gdjs.stage1Code.GDPlatformObjects3= [];
gdjs.stage1Code.GDJumpthruObjects1= [];
gdjs.stage1Code.GDJumpthruObjects2= [];
gdjs.stage1Code.GDJumpthruObjects3= [];
gdjs.stage1Code.GDTiledGrassPlatformObjects1= [];
gdjs.stage1Code.GDTiledGrassPlatformObjects2= [];
gdjs.stage1Code.GDTiledGrassPlatformObjects3= [];
gdjs.stage1Code.GDTiledCastlePlatformObjects1= [];
gdjs.stage1Code.GDTiledCastlePlatformObjects2= [];
gdjs.stage1Code.GDTiledCastlePlatformObjects3= [];
gdjs.stage1Code.GDMovingPlatformObjects1= [];
gdjs.stage1Code.GDMovingPlatformObjects2= [];
gdjs.stage1Code.GDMovingPlatformObjects3= [];
gdjs.stage1Code.GDGoLeftObjects1= [];
gdjs.stage1Code.GDGoLeftObjects2= [];
gdjs.stage1Code.GDGoLeftObjects3= [];
gdjs.stage1Code.GDGoRightObjects1= [];
gdjs.stage1Code.GDGoRightObjects2= [];
gdjs.stage1Code.GDGoRightObjects3= [];
gdjs.stage1Code.GDLadderObjects1= [];
gdjs.stage1Code.GDLadderObjects2= [];
gdjs.stage1Code.GDLadderObjects3= [];
gdjs.stage1Code.GDPlayerHitBoxObjects1= [];
gdjs.stage1Code.GDPlayerHitBoxObjects2= [];
gdjs.stage1Code.GDPlayerHitBoxObjects3= [];
gdjs.stage1Code.GDSlimeWalkObjects1= [];
gdjs.stage1Code.GDSlimeWalkObjects2= [];
gdjs.stage1Code.GDSlimeWalkObjects3= [];
gdjs.stage1Code.GDFlyObjects1= [];
gdjs.stage1Code.GDFlyObjects2= [];
gdjs.stage1Code.GDFlyObjects3= [];
gdjs.stage1Code.GDCloudObjects1= [];
gdjs.stage1Code.GDCloudObjects2= [];
gdjs.stage1Code.GDCloudObjects3= [];
gdjs.stage1Code.GDBackgroundObjectsObjects1= [];
gdjs.stage1Code.GDBackgroundObjectsObjects2= [];
gdjs.stage1Code.GDBackgroundObjectsObjects3= [];
gdjs.stage1Code.GDScoreObjects1= [];
gdjs.stage1Code.GDScoreObjects2= [];
gdjs.stage1Code.GDScoreObjects3= [];
gdjs.stage1Code.GDCoinObjects1= [];
gdjs.stage1Code.GDCoinObjects2= [];
gdjs.stage1Code.GDCoinObjects3= [];
gdjs.stage1Code.GDCoinIconObjects1= [];
gdjs.stage1Code.GDCoinIconObjects2= [];
gdjs.stage1Code.GDCoinIconObjects3= [];
gdjs.stage1Code.GDLeftButtonObjects1= [];
gdjs.stage1Code.GDLeftButtonObjects2= [];
gdjs.stage1Code.GDLeftButtonObjects3= [];
gdjs.stage1Code.GDRightButtonObjects1= [];
gdjs.stage1Code.GDRightButtonObjects2= [];
gdjs.stage1Code.GDRightButtonObjects3= [];
gdjs.stage1Code.GDJumpButtonObjects1= [];
gdjs.stage1Code.GDJumpButtonObjects2= [];
gdjs.stage1Code.GDJumpButtonObjects3= [];
gdjs.stage1Code.GDArrowButtonsBgObjects1= [];
gdjs.stage1Code.GDArrowButtonsBgObjects2= [];
gdjs.stage1Code.GDArrowButtonsBgObjects3= [];
gdjs.stage1Code.GDcactusObjects1= [];
gdjs.stage1Code.GDcactusObjects2= [];
gdjs.stage1Code.GDcactusObjects3= [];
gdjs.stage1Code.GDsaveplatformObjects1= [];
gdjs.stage1Code.GDsaveplatformObjects2= [];
gdjs.stage1Code.GDsaveplatformObjects3= [];

gdjs.stage1Code.conditionTrue_0 = {val:false};
gdjs.stage1Code.condition0IsTrue_0 = {val:false};
gdjs.stage1Code.condition1IsTrue_0 = {val:false};
gdjs.stage1Code.condition2IsTrue_0 = {val:false};
gdjs.stage1Code.condition3IsTrue_0 = {val:false};
gdjs.stage1Code.conditionTrue_1 = {val:false};
gdjs.stage1Code.condition0IsTrue_1 = {val:false};
gdjs.stage1Code.condition1IsTrue_1 = {val:false};
gdjs.stage1Code.condition2IsTrue_1 = {val:false};
gdjs.stage1Code.condition3IsTrue_1 = {val:false};


gdjs.stage1Code.eventsList0x795134 = function(runtimeScene) {

{


gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = !(gdjs.evtTools.storage.elementExistsInJSONFile("presentstage", "stage"));
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("presentstage", "stage", 1);
}}

}


{



}


{


gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("presentstage", "stage");
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("presentstage", "stage", runtimeScene, runtimeScene.getVariables().get("stage"));
}}

}


{


gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("stage")) == 4;
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "stage4", false);
}}

}


{


gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("stage")) == 3;
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "stage3", false);
}}

}


{


gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("stage")) == 2;
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "stage2", false);
}}

}


{


{
}

}


}; //End of gdjs.stage1Code.eventsList0x795134
gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.stage1Code.GDPlayerObjects1});gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDcactusObjects1Objects = Hashtable.newFrom({"cactus": gdjs.stage1Code.GDcactusObjects1});gdjs.stage1Code.eventsList0x6ccb8c = function(runtimeScene) {

{

gdjs.stage1Code.GDPlayerHitBoxObjects2.createFrom(gdjs.stage1Code.GDPlayerHitBoxObjects1);


gdjs.stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage1Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( !(gdjs.stage1Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.stage1Code.condition0IsTrue_0.val = true;
        gdjs.stage1Code.GDPlayerHitBoxObjects2[k] = gdjs.stage1Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.stage1Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.stage1Code.condition0IsTrue_0.val) {
gdjs.stage1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

/* Reuse gdjs.stage1Code.GDPlayerHitBoxObjects1 */

gdjs.stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage1Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.stage1Code.condition0IsTrue_0.val = true;
        gdjs.stage1Code.GDPlayerHitBoxObjects1[k] = gdjs.stage1Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.stage1Code.condition0IsTrue_0.val) {
gdjs.stage1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


}; //End of gdjs.stage1Code.eventsList0x6ccb8c
gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.stage1Code.GDGoLeftObjects1});gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.stage1Code.GDMovingPlatformObjects1});gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.stage1Code.GDGoRightObjects1});gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.stage1Code.GDMovingPlatformObjects1});gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.stage1Code.GDGoLeftObjects1});gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46stage1Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.stage1Code.GDSlimeWalkObjects1, "Fly": gdjs.stage1Code.GDFlyObjects1});gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.stage1Code.GDGoRightObjects1});gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46stage1Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.stage1Code.GDSlimeWalkObjects1, "Fly": gdjs.stage1Code.GDFlyObjects1});gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.stage1Code.GDPlayerHitBoxObjects1});gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46stage1Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.stage1Code.GDSlimeWalkObjects1, "Fly": gdjs.stage1Code.GDFlyObjects1});gdjs.stage1Code.eventsList0x71ad64 = function(runtimeScene) {

}; //End of gdjs.stage1Code.eventsList0x71ad64
gdjs.stage1Code.eventsList0x71c6f4 = function(runtimeScene) {

{

/* Reuse gdjs.stage1Code.GDFlyObjects2 */
/* Reuse gdjs.stage1Code.GDSlimeWalkObjects2 */

gdjs.stage1Code.forEachTotalCount3 = 0;
gdjs.stage1Code.forEachObjects3.length = 0;
gdjs.stage1Code.forEachCount0_3 = gdjs.stage1Code.GDSlimeWalkObjects2.length;
gdjs.stage1Code.forEachTotalCount3 += gdjs.stage1Code.forEachCount0_3;
gdjs.stage1Code.forEachObjects3.push.apply(gdjs.stage1Code.forEachObjects3,gdjs.stage1Code.GDSlimeWalkObjects2);
gdjs.stage1Code.forEachCount1_3 = gdjs.stage1Code.GDFlyObjects2.length;
gdjs.stage1Code.forEachTotalCount3 += gdjs.stage1Code.forEachCount1_3;
gdjs.stage1Code.forEachObjects3.push.apply(gdjs.stage1Code.forEachObjects3,gdjs.stage1Code.GDFlyObjects2);
for(gdjs.stage1Code.forEachIndex3 = 0;gdjs.stage1Code.forEachIndex3 < gdjs.stage1Code.forEachTotalCount3;++gdjs.stage1Code.forEachIndex3) {
gdjs.stage1Code.GDFlyObjects3.length = 0;

gdjs.stage1Code.GDSlimeWalkObjects3.length = 0;


if (gdjs.stage1Code.forEachIndex3 < gdjs.stage1Code.forEachCount0_3) {
    gdjs.stage1Code.GDSlimeWalkObjects3.push(gdjs.stage1Code.forEachObjects3[gdjs.stage1Code.forEachIndex3]);
}
else if (gdjs.stage1Code.forEachIndex3 < gdjs.stage1Code.forEachCount0_3+gdjs.stage1Code.forEachCount1_3) {
    gdjs.stage1Code.GDFlyObjects3.push(gdjs.stage1Code.forEachObjects3[gdjs.stage1Code.forEachIndex3]);
}
if (true) {
{runtimeScene.getVariables().getFromIndex(0).add(50);
}}
}

}


}; //End of gdjs.stage1Code.eventsList0x71c6f4
gdjs.stage1Code.eventsList0x71c5c4 = function(runtimeScene) {

{

gdjs.stage1Code.GDPlayerHitBoxObjects2.createFrom(gdjs.stage1Code.GDPlayerHitBoxObjects1);


gdjs.stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage1Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.stage1Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.stage1Code.condition0IsTrue_0.val = true;
        gdjs.stage1Code.GDPlayerHitBoxObjects2[k] = gdjs.stage1Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.stage1Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.stage1Code.condition0IsTrue_0.val) {
gdjs.stage1Code.GDFlyObjects2.createFrom(gdjs.stage1Code.GDFlyObjects1);

/* Reuse gdjs.stage1Code.GDPlayerHitBoxObjects2 */
gdjs.stage1Code.GDSlimeWalkObjects2.createFrom(gdjs.stage1Code.GDSlimeWalkObjects1);

{for(var i = 0, len = gdjs.stage1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage1Code.GDSlimeWalkObjects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.stage1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage1Code.GDFlyObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.stage1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage1Code.GDSlimeWalkObjects2[i].activateBehavior("PlatformerObject", true);
}
for(var i = 0, len = gdjs.stage1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage1Code.GDFlyObjects2[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.stage1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage1Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
for(var i = 0, len = gdjs.stage1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage1Code.GDFlyObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
}{for(var i = 0, len = gdjs.stage1Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.stage1Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}
{ //Subevents
gdjs.stage1Code.eventsList0x71c6f4(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.stage1Code.GDFlyObjects1 */
/* Reuse gdjs.stage1Code.GDPlayerHitBoxObjects1 */
/* Reuse gdjs.stage1Code.GDSlimeWalkObjects1 */

gdjs.stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage1Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDPlayerHitBoxObjects1[i].getY() >= (( gdjs.stage1Code.GDFlyObjects1.length === 0 ) ? (( gdjs.stage1Code.GDSlimeWalkObjects1.length === 0 ) ? 0 :gdjs.stage1Code.GDSlimeWalkObjects1[0].getPointY("")) :gdjs.stage1Code.GDFlyObjects1[0].getPointY("")) - (gdjs.stage1Code.GDPlayerHitBoxObjects1[i].getHeight()) + (( gdjs.stage1Code.GDFlyObjects1.length === 0 ) ? (( gdjs.stage1Code.GDSlimeWalkObjects1.length === 0 ) ? 0 :gdjs.stage1Code.GDSlimeWalkObjects1[0].getHeight()) :gdjs.stage1Code.GDFlyObjects1[0].getHeight()) / 2 ) {
        gdjs.stage1Code.condition0IsTrue_0.val = true;
        gdjs.stage1Code.GDPlayerHitBoxObjects1[k] = gdjs.stage1Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.stage1Code.condition0IsTrue_0.val) {
}

}


}; //End of gdjs.stage1Code.eventsList0x71c5c4
gdjs.stage1Code.eventsList0x79413c = function(runtimeScene) {

{

gdjs.stage1Code.GDFlyObjects2.createFrom(gdjs.stage1Code.GDFlyObjects1);

gdjs.stage1Code.GDSlimeWalkObjects2.createFrom(gdjs.stage1Code.GDSlimeWalkObjects1);


gdjs.stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage1Code.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.stage1Code.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.stage1Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.stage1Code.condition0IsTrue_0.val = true;
        gdjs.stage1Code.GDSlimeWalkObjects2[k] = gdjs.stage1Code.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.stage1Code.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.stage1Code.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.stage1Code.GDFlyObjects2[i].getVariableNumber(gdjs.stage1Code.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.stage1Code.condition0IsTrue_0.val = true;
        gdjs.stage1Code.GDFlyObjects2[k] = gdjs.stage1Code.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.stage1Code.GDFlyObjects2.length = k;}if (gdjs.stage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage1Code.GDFlyObjects2 */
/* Reuse gdjs.stage1Code.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.stage1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage1Code.GDFlyObjects2[i].addForce(-(300), 0, 0);
}
}{for(var i = 0, len = gdjs.stage1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage1Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
for(var i = 0, len = gdjs.stage1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage1Code.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.stage1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage1Code.GDSlimeWalkObjects2[i].flipX(false);
}
for(var i = 0, len = gdjs.stage1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage1Code.GDFlyObjects2[i].flipX(false);
}
}}

}


{

gdjs.stage1Code.GDFlyObjects2.createFrom(gdjs.stage1Code.GDFlyObjects1);

gdjs.stage1Code.GDSlimeWalkObjects2.createFrom(gdjs.stage1Code.GDSlimeWalkObjects1);


gdjs.stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage1Code.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.stage1Code.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.stage1Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.stage1Code.condition0IsTrue_0.val = true;
        gdjs.stage1Code.GDSlimeWalkObjects2[k] = gdjs.stage1Code.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.stage1Code.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.stage1Code.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.stage1Code.GDFlyObjects2[i].getVariableNumber(gdjs.stage1Code.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.stage1Code.condition0IsTrue_0.val = true;
        gdjs.stage1Code.GDFlyObjects2[k] = gdjs.stage1Code.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.stage1Code.GDFlyObjects2.length = k;}if (gdjs.stage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage1Code.GDFlyObjects2 */
/* Reuse gdjs.stage1Code.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.stage1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage1Code.GDFlyObjects2[i].addForce(300, 0, 0);
}
}{for(var i = 0, len = gdjs.stage1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage1Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.stage1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage1Code.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.stage1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage1Code.GDSlimeWalkObjects2[i].flipX(true);
}
for(var i = 0, len = gdjs.stage1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage1Code.GDFlyObjects2[i].flipX(true);
}
}}

}


{



}


{

/* Reuse gdjs.stage1Code.GDFlyObjects1 */
gdjs.stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
/* Reuse gdjs.stage1Code.GDSlimeWalkObjects1 */

gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDPlayerHitBoxObjects1Objects, gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46stage1Code_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.stage1Code.eventsList0x71c5c4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.stage1Code.eventsList0x79413c
gdjs.stage1Code.eventsList0x71b16c = function(runtimeScene) {

{

/* Reuse gdjs.stage1Code.GDFlyObjects1 */
/* Reuse gdjs.stage1Code.GDSlimeWalkObjects1 */

gdjs.stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage1Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDSlimeWalkObjects1[i].getOpacity() == 0 ) {
        gdjs.stage1Code.condition0IsTrue_0.val = true;
        gdjs.stage1Code.GDSlimeWalkObjects1[k] = gdjs.stage1Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.stage1Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDFlyObjects1[i].getOpacity() == 0 ) {
        gdjs.stage1Code.condition0IsTrue_0.val = true;
        gdjs.stage1Code.GDFlyObjects1[k] = gdjs.stage1Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDFlyObjects1.length = k;}if (gdjs.stage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage1Code.GDFlyObjects1 */
/* Reuse gdjs.stage1Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.stage1Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDSlimeWalkObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.stage1Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDFlyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.stage1Code.eventsList0x71b16c
gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.stage1Code.GDPlayerHitBoxObjects1});gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.stage1Code.GDCoinObjects1});gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDLeftButtonObjects1Objects = Hashtable.newFrom({"LeftButton": gdjs.stage1Code.GDLeftButtonObjects1});gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDRightButtonObjects1Objects = Hashtable.newFrom({"RightButton": gdjs.stage1Code.GDRightButtonObjects1});gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDJumpButtonObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs.stage1Code.GDJumpButtonObjects1});gdjs.stage1Code.eventsList0x5b6e18 = function(runtimeScene) {

{



}


{


{
}

}


{


gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
gdjs.stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
gdjs.stage1Code.GDsaveplatformObjects1.createFrom(runtimeScene.getObjects("saveplatform"));
{for(var i = 0, len = gdjs.stage1Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerHitBoxObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.stage1Code.GDsaveplatformObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDsaveplatformObjects1[i].hide();
}
}
{ //Subevents
gdjs.stage1Code.eventsList0x795134(runtimeScene);} //End of subevents
}

}


{

gdjs.stage1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.stage1Code.GDcactusObjects1.createFrom(runtimeScene.getObjects("cactus"));

gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDPlayerObjects1Objects, gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDcactusObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "stage2", false);
}}

}


{


{
gdjs.stage1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].setPosition((( gdjs.stage1Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.stage1Code.GDPlayerHitBoxObjects1[0].getPointX("")) - 12,(( gdjs.stage1Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.stage1Code.GDPlayerHitBoxObjects1[0].getPointY("")));
}
}}

}


{



}


{

gdjs.stage1Code.GDPlayerObjects1.length = 0;


gdjs.stage1Code.condition0IsTrue_0.val = false;
gdjs.stage1Code.condition1IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RShift");
}if ( gdjs.stage1Code.condition0IsTrue_0.val ) {
{
{gdjs.stage1Code.conditionTrue_1 = gdjs.stage1Code.condition1IsTrue_0;
gdjs.stage1Code.GDPlayerObjects1_1final.length = 0;gdjs.stage1Code.condition0IsTrue_1.val = false;
gdjs.stage1Code.condition1IsTrue_1.val = false;
{
gdjs.stage1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.stage1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.stage1Code.GDPlayerObjects2[i].getAnimation() == 0 ) {
        gdjs.stage1Code.condition0IsTrue_1.val = true;
        gdjs.stage1Code.GDPlayerObjects2[k] = gdjs.stage1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.stage1Code.GDPlayerObjects2.length = k;if( gdjs.stage1Code.condition0IsTrue_1.val ) {
    gdjs.stage1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.stage1Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.stage1Code.GDPlayerObjects1_1final.indexOf(gdjs.stage1Code.GDPlayerObjects2[j]) === -1 )
            gdjs.stage1Code.GDPlayerObjects1_1final.push(gdjs.stage1Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.stage1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.stage1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.stage1Code.GDPlayerObjects2[i].getAnimation() == 2 ) {
        gdjs.stage1Code.condition1IsTrue_1.val = true;
        gdjs.stage1Code.GDPlayerObjects2[k] = gdjs.stage1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.stage1Code.GDPlayerObjects2.length = k;if( gdjs.stage1Code.condition1IsTrue_1.val ) {
    gdjs.stage1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.stage1Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.stage1Code.GDPlayerObjects1_1final.indexOf(gdjs.stage1Code.GDPlayerObjects2[j]) === -1 )
            gdjs.stage1Code.GDPlayerObjects1_1final.push(gdjs.stage1Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.stage1Code.GDPlayerObjects1.createFrom(gdjs.stage1Code.GDPlayerObjects1_1final);
}
}
}}
if (gdjs.stage1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}}

}


{

gdjs.stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage1Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.stage1Code.condition0IsTrue_0.val = true;
        gdjs.stage1Code.GDPlayerHitBoxObjects1[k] = gdjs.stage1Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.stage1Code.condition0IsTrue_0.val) {
gdjs.stage1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage1Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.stage1Code.condition0IsTrue_0.val = true;
        gdjs.stage1Code.GDPlayerHitBoxObjects1[k] = gdjs.stage1Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.stage1Code.condition0IsTrue_0.val) {
gdjs.stage1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage1Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.stage1Code.condition0IsTrue_0.val = true;
        gdjs.stage1Code.GDPlayerHitBoxObjects1[k] = gdjs.stage1Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.stage1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.stage1Code.eventsList0x6ccb8c(runtimeScene);} //End of subevents
}

}


{


gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
gdjs.stage1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
gdjs.stage1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].flipX(false);
}
}}

}


{



}


{


{
gdjs.stage1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.stage1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.stage1Code.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{



}


{


gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
gdjs.stage1Code.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.stage1Code.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
{for(var i = 0, len = gdjs.stage1Code.GDGoLeftObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDGoLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.stage1Code.GDGoRightObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDGoRightObjects1[i].hide();
}
}}

}


{

gdjs.stage1Code.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.stage1Code.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));

gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDGoLeftObjects1Objects, gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDMovingPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage1Code.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.stage1Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.stage1Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDMovingPlatformObjects1[i].addForce(-(150), 0, 1);
}
}}

}


{

gdjs.stage1Code.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
gdjs.stage1Code.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));

gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDGoRightObjects1Objects, gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDMovingPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage1Code.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.stage1Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.stage1Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDMovingPlatformObjects1[i].addForce(150, 0, 1);
}
}}

}


{



}


{



}


{


gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
gdjs.stage1Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
{for(var i = 0, len = gdjs.stage1Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}}

}


{



}


{

gdjs.stage1Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.stage1Code.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.stage1Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDGoLeftObjects1Objects, gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46stage1Code_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage1Code.GDFlyObjects1 */
/* Reuse gdjs.stage1Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.stage1Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDSlimeWalkObjects1[i].returnVariable(gdjs.stage1Code.GDSlimeWalkObjects1[i].getVariables().get("GoingLeft")).setNumber(1);
}
for(var i = 0, len = gdjs.stage1Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDFlyObjects1[i].returnVariable(gdjs.stage1Code.GDFlyObjects1[i].getVariables().get("GoingLeft")).setNumber(1);
}
}}

}


{

gdjs.stage1Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.stage1Code.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
gdjs.stage1Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDGoRightObjects1Objects, gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46stage1Code_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage1Code.GDFlyObjects1 */
/* Reuse gdjs.stage1Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.stage1Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDSlimeWalkObjects1[i].returnVariable(gdjs.stage1Code.GDSlimeWalkObjects1[i].getVariables().get("GoingLeft")).setNumber(0);
}
for(var i = 0, len = gdjs.stage1Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDFlyObjects1[i].returnVariable(gdjs.stage1Code.GDFlyObjects1[i].getVariables().get("GoingLeft")).setNumber(0);
}
}}

}


{

gdjs.stage1Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.stage1Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage1Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDSlimeWalkObjects1[i].getAnimation() == 0 ) {
        gdjs.stage1Code.condition0IsTrue_0.val = true;
        gdjs.stage1Code.GDSlimeWalkObjects1[k] = gdjs.stage1Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.stage1Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDFlyObjects1[i].getAnimation() == 0 ) {
        gdjs.stage1Code.condition0IsTrue_0.val = true;
        gdjs.stage1Code.GDFlyObjects1[k] = gdjs.stage1Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDFlyObjects1.length = k;}if (gdjs.stage1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.stage1Code.eventsList0x79413c(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.stage1Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.stage1Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.stage1Code.condition0IsTrue_0.val = false;
gdjs.stage1Code.condition1IsTrue_0.val = false;
gdjs.stage1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage1Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDSlimeWalkObjects1[i].getAnimation() == 1 ) {
        gdjs.stage1Code.condition0IsTrue_0.val = true;
        gdjs.stage1Code.GDSlimeWalkObjects1[k] = gdjs.stage1Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.stage1Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDFlyObjects1[i].getAnimation() == 1 ) {
        gdjs.stage1Code.condition0IsTrue_0.val = true;
        gdjs.stage1Code.GDFlyObjects1[k] = gdjs.stage1Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDFlyObjects1.length = k;}if ( gdjs.stage1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.stage1Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDSlimeWalkObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.stage1Code.condition1IsTrue_0.val = true;
        gdjs.stage1Code.GDSlimeWalkObjects1[k] = gdjs.stage1Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.stage1Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDFlyObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.stage1Code.condition1IsTrue_0.val = true;
        gdjs.stage1Code.GDFlyObjects1[k] = gdjs.stage1Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDFlyObjects1.length = k;}if ( gdjs.stage1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.stage1Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( !(gdjs.stage1Code.GDSlimeWalkObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.stage1Code.condition2IsTrue_0.val = true;
        gdjs.stage1Code.GDSlimeWalkObjects1[k] = gdjs.stage1Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.stage1Code.GDFlyObjects1.length;i<l;++i) {
    if ( !(gdjs.stage1Code.GDFlyObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.stage1Code.condition2IsTrue_0.val = true;
        gdjs.stage1Code.GDFlyObjects1[k] = gdjs.stage1Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDFlyObjects1.length = k;}}
}
if (gdjs.stage1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.stage1Code.GDFlyObjects1 */
/* Reuse gdjs.stage1Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.stage1Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDSlimeWalkObjects1[i].activateBehavior("PlatformerObject", false);
}
for(var i = 0, len = gdjs.stage1Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.stage1Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDSlimeWalkObjects1[i].setOpacity(gdjs.stage1Code.GDSlimeWalkObjects1[i].getOpacity() - (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.stage1Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDFlyObjects1[i].setOpacity(gdjs.stage1Code.GDFlyObjects1[i].getOpacity() - (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.stage1Code.eventsList0x71b16c(runtimeScene);} //End of subevents
}

}


{



}


{



}


{

gdjs.stage1Code.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));
gdjs.stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.stage1Code.condition0IsTrue_0.val = false;
gdjs.stage1Code.condition1IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDPlayerHitBoxObjects1Objects, gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDCoinObjects1Objects, false, runtimeScene, false);
}if ( gdjs.stage1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.stage1Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDCoinObjects1[i].getOpacity() == 255 ) {
        gdjs.stage1Code.condition1IsTrue_0.val = true;
        gdjs.stage1Code.GDCoinObjects1[k] = gdjs.stage1Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDCoinObjects1.length = k;}}
if (gdjs.stage1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.stage1Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.stage1Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDCoinObjects1[i].setOpacity(254);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(100);
}}

}


{

gdjs.stage1Code.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));

gdjs.stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage1Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDCoinObjects1[i].getOpacity() < 255 ) {
        gdjs.stage1Code.condition0IsTrue_0.val = true;
        gdjs.stage1Code.GDCoinObjects1[k] = gdjs.stage1Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDCoinObjects1.length = k;}if (gdjs.stage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage1Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.stage1Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDCoinObjects1[i].setOpacity(gdjs.stage1Code.GDCoinObjects1[i].getOpacity() - (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.stage1Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDCoinObjects1[i].addForce(0, -(30), 0);
}
}}

}


{

gdjs.stage1Code.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));

gdjs.stage1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage1Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDCoinObjects1[i].getOpacity() == 0 ) {
        gdjs.stage1Code.condition0IsTrue_0.val = true;
        gdjs.stage1Code.GDCoinObjects1[k] = gdjs.stage1Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDCoinObjects1.length = k;}if (gdjs.stage1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage1Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.stage1Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{



}


{


{
gdjs.stage1Code.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.stage1Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDScoreObjects1[i].setString("x " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{



}


{


gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
gdjs.stage1Code.GDArrowButtonsBgObjects1.createFrom(runtimeScene.getObjects("ArrowButtonsBg"));
gdjs.stage1Code.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));
gdjs.stage1Code.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));
gdjs.stage1Code.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));
{for(var i = 0, len = gdjs.stage1Code.GDLeftButtonObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDLeftButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.stage1Code.GDRightButtonObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDRightButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.stage1Code.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDJumpButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.stage1Code.GDArrowButtonsBgObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDArrowButtonsBgObjects1[i].hide();
}
}}

}


{


gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{

gdjs.stage1Code.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));

gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDLeftButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
gdjs.stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.stage1Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.stage1Code.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));

gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDRightButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
gdjs.stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.stage1Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.stage1Code.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));

gdjs.stage1Code.condition0IsTrue_0.val = false;
{
gdjs.stage1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDJumpButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.stage1Code.condition0IsTrue_0.val) {
gdjs.stage1Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.stage1Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


{
}

}


{


{
}

}


}; //End of gdjs.stage1Code.eventsList0x5b6e18


gdjs.stage1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.stage1Code.GDPlayerObjects1.length = 0;
gdjs.stage1Code.GDPlayerObjects2.length = 0;
gdjs.stage1Code.GDPlayerObjects3.length = 0;
gdjs.stage1Code.GDPlatformObjects1.length = 0;
gdjs.stage1Code.GDPlatformObjects2.length = 0;
gdjs.stage1Code.GDPlatformObjects3.length = 0;
gdjs.stage1Code.GDJumpthruObjects1.length = 0;
gdjs.stage1Code.GDJumpthruObjects2.length = 0;
gdjs.stage1Code.GDJumpthruObjects3.length = 0;
gdjs.stage1Code.GDTiledGrassPlatformObjects1.length = 0;
gdjs.stage1Code.GDTiledGrassPlatformObjects2.length = 0;
gdjs.stage1Code.GDTiledGrassPlatformObjects3.length = 0;
gdjs.stage1Code.GDTiledCastlePlatformObjects1.length = 0;
gdjs.stage1Code.GDTiledCastlePlatformObjects2.length = 0;
gdjs.stage1Code.GDTiledCastlePlatformObjects3.length = 0;
gdjs.stage1Code.GDMovingPlatformObjects1.length = 0;
gdjs.stage1Code.GDMovingPlatformObjects2.length = 0;
gdjs.stage1Code.GDMovingPlatformObjects3.length = 0;
gdjs.stage1Code.GDGoLeftObjects1.length = 0;
gdjs.stage1Code.GDGoLeftObjects2.length = 0;
gdjs.stage1Code.GDGoLeftObjects3.length = 0;
gdjs.stage1Code.GDGoRightObjects1.length = 0;
gdjs.stage1Code.GDGoRightObjects2.length = 0;
gdjs.stage1Code.GDGoRightObjects3.length = 0;
gdjs.stage1Code.GDLadderObjects1.length = 0;
gdjs.stage1Code.GDLadderObjects2.length = 0;
gdjs.stage1Code.GDLadderObjects3.length = 0;
gdjs.stage1Code.GDPlayerHitBoxObjects1.length = 0;
gdjs.stage1Code.GDPlayerHitBoxObjects2.length = 0;
gdjs.stage1Code.GDPlayerHitBoxObjects3.length = 0;
gdjs.stage1Code.GDSlimeWalkObjects1.length = 0;
gdjs.stage1Code.GDSlimeWalkObjects2.length = 0;
gdjs.stage1Code.GDSlimeWalkObjects3.length = 0;
gdjs.stage1Code.GDFlyObjects1.length = 0;
gdjs.stage1Code.GDFlyObjects2.length = 0;
gdjs.stage1Code.GDFlyObjects3.length = 0;
gdjs.stage1Code.GDCloudObjects1.length = 0;
gdjs.stage1Code.GDCloudObjects2.length = 0;
gdjs.stage1Code.GDCloudObjects3.length = 0;
gdjs.stage1Code.GDBackgroundObjectsObjects1.length = 0;
gdjs.stage1Code.GDBackgroundObjectsObjects2.length = 0;
gdjs.stage1Code.GDBackgroundObjectsObjects3.length = 0;
gdjs.stage1Code.GDScoreObjects1.length = 0;
gdjs.stage1Code.GDScoreObjects2.length = 0;
gdjs.stage1Code.GDScoreObjects3.length = 0;
gdjs.stage1Code.GDCoinObjects1.length = 0;
gdjs.stage1Code.GDCoinObjects2.length = 0;
gdjs.stage1Code.GDCoinObjects3.length = 0;
gdjs.stage1Code.GDCoinIconObjects1.length = 0;
gdjs.stage1Code.GDCoinIconObjects2.length = 0;
gdjs.stage1Code.GDCoinIconObjects3.length = 0;
gdjs.stage1Code.GDLeftButtonObjects1.length = 0;
gdjs.stage1Code.GDLeftButtonObjects2.length = 0;
gdjs.stage1Code.GDLeftButtonObjects3.length = 0;
gdjs.stage1Code.GDRightButtonObjects1.length = 0;
gdjs.stage1Code.GDRightButtonObjects2.length = 0;
gdjs.stage1Code.GDRightButtonObjects3.length = 0;
gdjs.stage1Code.GDJumpButtonObjects1.length = 0;
gdjs.stage1Code.GDJumpButtonObjects2.length = 0;
gdjs.stage1Code.GDJumpButtonObjects3.length = 0;
gdjs.stage1Code.GDArrowButtonsBgObjects1.length = 0;
gdjs.stage1Code.GDArrowButtonsBgObjects2.length = 0;
gdjs.stage1Code.GDArrowButtonsBgObjects3.length = 0;
gdjs.stage1Code.GDcactusObjects1.length = 0;
gdjs.stage1Code.GDcactusObjects2.length = 0;
gdjs.stage1Code.GDcactusObjects3.length = 0;
gdjs.stage1Code.GDsaveplatformObjects1.length = 0;
gdjs.stage1Code.GDsaveplatformObjects2.length = 0;
gdjs.stage1Code.GDsaveplatformObjects3.length = 0;

gdjs.stage1Code.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['stage1Code'] = gdjs.stage1Code;
