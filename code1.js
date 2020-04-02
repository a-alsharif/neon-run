gdjs.stage4Code = {};
gdjs.stage4Code.GDPlayerObjects1_1final = [];

gdjs.stage4Code.forEachCount0_3 = 0;

gdjs.stage4Code.forEachCount1_3 = 0;

gdjs.stage4Code.forEachIndex3 = 0;

gdjs.stage4Code.forEachObjects3 = [];

gdjs.stage4Code.forEachTotalCount3 = 0;

gdjs.stage4Code.GDPlayerObjects1= [];
gdjs.stage4Code.GDPlayerObjects2= [];
gdjs.stage4Code.GDPlayerObjects3= [];
gdjs.stage4Code.GDPlatformObjects1= [];
gdjs.stage4Code.GDPlatformObjects2= [];
gdjs.stage4Code.GDPlatformObjects3= [];
gdjs.stage4Code.GDJumpthruObjects1= [];
gdjs.stage4Code.GDJumpthruObjects2= [];
gdjs.stage4Code.GDJumpthruObjects3= [];
gdjs.stage4Code.GDTiledGrassPlatformObjects1= [];
gdjs.stage4Code.GDTiledGrassPlatformObjects2= [];
gdjs.stage4Code.GDTiledGrassPlatformObjects3= [];
gdjs.stage4Code.GDTiledCastlePlatformObjects1= [];
gdjs.stage4Code.GDTiledCastlePlatformObjects2= [];
gdjs.stage4Code.GDTiledCastlePlatformObjects3= [];
gdjs.stage4Code.GDMovingPlatformObjects1= [];
gdjs.stage4Code.GDMovingPlatformObjects2= [];
gdjs.stage4Code.GDMovingPlatformObjects3= [];
gdjs.stage4Code.GDGoLeftObjects1= [];
gdjs.stage4Code.GDGoLeftObjects2= [];
gdjs.stage4Code.GDGoLeftObjects3= [];
gdjs.stage4Code.GDGoRightObjects1= [];
gdjs.stage4Code.GDGoRightObjects2= [];
gdjs.stage4Code.GDGoRightObjects3= [];
gdjs.stage4Code.GDLadderObjects1= [];
gdjs.stage4Code.GDLadderObjects2= [];
gdjs.stage4Code.GDLadderObjects3= [];
gdjs.stage4Code.GDPlayerHitBoxObjects1= [];
gdjs.stage4Code.GDPlayerHitBoxObjects2= [];
gdjs.stage4Code.GDPlayerHitBoxObjects3= [];
gdjs.stage4Code.GDSlimeWalkObjects1= [];
gdjs.stage4Code.GDSlimeWalkObjects2= [];
gdjs.stage4Code.GDSlimeWalkObjects3= [];
gdjs.stage4Code.GDFlyObjects1= [];
gdjs.stage4Code.GDFlyObjects2= [];
gdjs.stage4Code.GDFlyObjects3= [];
gdjs.stage4Code.GDCloudObjects1= [];
gdjs.stage4Code.GDCloudObjects2= [];
gdjs.stage4Code.GDCloudObjects3= [];
gdjs.stage4Code.GDBackgroundObjectsObjects1= [];
gdjs.stage4Code.GDBackgroundObjectsObjects2= [];
gdjs.stage4Code.GDBackgroundObjectsObjects3= [];
gdjs.stage4Code.GDScoreObjects1= [];
gdjs.stage4Code.GDScoreObjects2= [];
gdjs.stage4Code.GDScoreObjects3= [];
gdjs.stage4Code.GDCoinObjects1= [];
gdjs.stage4Code.GDCoinObjects2= [];
gdjs.stage4Code.GDCoinObjects3= [];
gdjs.stage4Code.GDCoinIconObjects1= [];
gdjs.stage4Code.GDCoinIconObjects2= [];
gdjs.stage4Code.GDCoinIconObjects3= [];
gdjs.stage4Code.GDLeftButtonObjects1= [];
gdjs.stage4Code.GDLeftButtonObjects2= [];
gdjs.stage4Code.GDLeftButtonObjects3= [];
gdjs.stage4Code.GDRightButtonObjects1= [];
gdjs.stage4Code.GDRightButtonObjects2= [];
gdjs.stage4Code.GDRightButtonObjects3= [];
gdjs.stage4Code.GDJumpButtonObjects1= [];
gdjs.stage4Code.GDJumpButtonObjects2= [];
gdjs.stage4Code.GDJumpButtonObjects3= [];
gdjs.stage4Code.GDArrowButtonsBgObjects1= [];
gdjs.stage4Code.GDArrowButtonsBgObjects2= [];
gdjs.stage4Code.GDArrowButtonsBgObjects3= [];
gdjs.stage4Code.GDcactusObjects1= [];
gdjs.stage4Code.GDcactusObjects2= [];
gdjs.stage4Code.GDcactusObjects3= [];
gdjs.stage4Code.GDsaveplatformObjects1= [];
gdjs.stage4Code.GDsaveplatformObjects2= [];
gdjs.stage4Code.GDsaveplatformObjects3= [];

gdjs.stage4Code.conditionTrue_0 = {val:false};
gdjs.stage4Code.condition0IsTrue_0 = {val:false};
gdjs.stage4Code.condition1IsTrue_0 = {val:false};
gdjs.stage4Code.condition2IsTrue_0 = {val:false};
gdjs.stage4Code.condition3IsTrue_0 = {val:false};
gdjs.stage4Code.conditionTrue_1 = {val:false};
gdjs.stage4Code.condition0IsTrue_1 = {val:false};
gdjs.stage4Code.condition1IsTrue_1 = {val:false};
gdjs.stage4Code.condition2IsTrue_1 = {val:false};
gdjs.stage4Code.condition3IsTrue_1 = {val:false};


gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.stage4Code.GDPlayerObjects1});gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDcactusObjects1Objects = Hashtable.newFrom({"cactus": gdjs.stage4Code.GDcactusObjects1});gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.stage4Code.GDPlayerObjects1});gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDsaveplatformObjects1Objects = Hashtable.newFrom({"saveplatform": gdjs.stage4Code.GDsaveplatformObjects1});gdjs.stage4Code.eventsList0x71a084 = function(runtimeScene) {

{

gdjs.stage4Code.GDPlayerHitBoxObjects2.createFrom(gdjs.stage4Code.GDPlayerHitBoxObjects1);


gdjs.stage4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage4Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( !(gdjs.stage4Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.stage4Code.condition0IsTrue_0.val = true;
        gdjs.stage4Code.GDPlayerHitBoxObjects2[k] = gdjs.stage4Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.stage4Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.stage4Code.condition0IsTrue_0.val) {
gdjs.stage4Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.stage4Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.stage4Code.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

/* Reuse gdjs.stage4Code.GDPlayerHitBoxObjects1 */

gdjs.stage4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage4Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.stage4Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.stage4Code.condition0IsTrue_0.val = true;
        gdjs.stage4Code.GDPlayerHitBoxObjects1[k] = gdjs.stage4Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.stage4Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.stage4Code.condition0IsTrue_0.val) {
gdjs.stage4Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.stage4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


}; //End of gdjs.stage4Code.eventsList0x71a084
gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.stage4Code.GDGoLeftObjects1});gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.stage4Code.GDMovingPlatformObjects1});gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.stage4Code.GDGoRightObjects1});gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.stage4Code.GDMovingPlatformObjects1});gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.stage4Code.GDGoLeftObjects1});gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46stage4Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.stage4Code.GDSlimeWalkObjects1, "Fly": gdjs.stage4Code.GDFlyObjects1});gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.stage4Code.GDGoRightObjects1});gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46stage4Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.stage4Code.GDSlimeWalkObjects1, "Fly": gdjs.stage4Code.GDFlyObjects1});gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.stage4Code.GDPlayerHitBoxObjects1});gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46stage4Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.stage4Code.GDSlimeWalkObjects1, "Fly": gdjs.stage4Code.GDFlyObjects1});gdjs.stage4Code.eventsList0x795554 = function(runtimeScene) {

}; //End of gdjs.stage4Code.eventsList0x795554
gdjs.stage4Code.eventsList0x794eec = function(runtimeScene) {

{

/* Reuse gdjs.stage4Code.GDFlyObjects2 */
/* Reuse gdjs.stage4Code.GDSlimeWalkObjects2 */

gdjs.stage4Code.forEachTotalCount3 = 0;
gdjs.stage4Code.forEachObjects3.length = 0;
gdjs.stage4Code.forEachCount0_3 = gdjs.stage4Code.GDSlimeWalkObjects2.length;
gdjs.stage4Code.forEachTotalCount3 += gdjs.stage4Code.forEachCount0_3;
gdjs.stage4Code.forEachObjects3.push.apply(gdjs.stage4Code.forEachObjects3,gdjs.stage4Code.GDSlimeWalkObjects2);
gdjs.stage4Code.forEachCount1_3 = gdjs.stage4Code.GDFlyObjects2.length;
gdjs.stage4Code.forEachTotalCount3 += gdjs.stage4Code.forEachCount1_3;
gdjs.stage4Code.forEachObjects3.push.apply(gdjs.stage4Code.forEachObjects3,gdjs.stage4Code.GDFlyObjects2);
for(gdjs.stage4Code.forEachIndex3 = 0;gdjs.stage4Code.forEachIndex3 < gdjs.stage4Code.forEachTotalCount3;++gdjs.stage4Code.forEachIndex3) {
gdjs.stage4Code.GDFlyObjects3.length = 0;

gdjs.stage4Code.GDSlimeWalkObjects3.length = 0;


if (gdjs.stage4Code.forEachIndex3 < gdjs.stage4Code.forEachCount0_3) {
    gdjs.stage4Code.GDSlimeWalkObjects3.push(gdjs.stage4Code.forEachObjects3[gdjs.stage4Code.forEachIndex3]);
}
else if (gdjs.stage4Code.forEachIndex3 < gdjs.stage4Code.forEachCount0_3+gdjs.stage4Code.forEachCount1_3) {
    gdjs.stage4Code.GDFlyObjects3.push(gdjs.stage4Code.forEachObjects3[gdjs.stage4Code.forEachIndex3]);
}
if (true) {
{runtimeScene.getVariables().getFromIndex(0).add(50);
}}
}

}


}; //End of gdjs.stage4Code.eventsList0x794eec
gdjs.stage4Code.eventsList0x794dbc = function(runtimeScene) {

{

gdjs.stage4Code.GDPlayerHitBoxObjects2.createFrom(gdjs.stage4Code.GDPlayerHitBoxObjects1);


gdjs.stage4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage4Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.stage4Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.stage4Code.condition0IsTrue_0.val = true;
        gdjs.stage4Code.GDPlayerHitBoxObjects2[k] = gdjs.stage4Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.stage4Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.stage4Code.condition0IsTrue_0.val) {
gdjs.stage4Code.GDFlyObjects2.createFrom(gdjs.stage4Code.GDFlyObjects1);

/* Reuse gdjs.stage4Code.GDPlayerHitBoxObjects2 */
gdjs.stage4Code.GDSlimeWalkObjects2.createFrom(gdjs.stage4Code.GDSlimeWalkObjects1);

{for(var i = 0, len = gdjs.stage4Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage4Code.GDSlimeWalkObjects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.stage4Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage4Code.GDFlyObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.stage4Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage4Code.GDSlimeWalkObjects2[i].activateBehavior("PlatformerObject", true);
}
for(var i = 0, len = gdjs.stage4Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage4Code.GDFlyObjects2[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.stage4Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage4Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
for(var i = 0, len = gdjs.stage4Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage4Code.GDFlyObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
}{for(var i = 0, len = gdjs.stage4Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.stage4Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.stage4Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.stage4Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}
{ //Subevents
gdjs.stage4Code.eventsList0x794eec(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.stage4Code.GDFlyObjects1 */
/* Reuse gdjs.stage4Code.GDPlayerHitBoxObjects1 */
/* Reuse gdjs.stage4Code.GDSlimeWalkObjects1 */

gdjs.stage4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage4Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.stage4Code.GDPlayerHitBoxObjects1[i].getY() >= (( gdjs.stage4Code.GDFlyObjects1.length === 0 ) ? (( gdjs.stage4Code.GDSlimeWalkObjects1.length === 0 ) ? 0 :gdjs.stage4Code.GDSlimeWalkObjects1[0].getPointY("")) :gdjs.stage4Code.GDFlyObjects1[0].getPointY("")) - (gdjs.stage4Code.GDPlayerHitBoxObjects1[i].getHeight()) + (( gdjs.stage4Code.GDFlyObjects1.length === 0 ) ? (( gdjs.stage4Code.GDSlimeWalkObjects1.length === 0 ) ? 0 :gdjs.stage4Code.GDSlimeWalkObjects1[0].getHeight()) :gdjs.stage4Code.GDFlyObjects1[0].getHeight()) / 2 ) {
        gdjs.stage4Code.condition0IsTrue_0.val = true;
        gdjs.stage4Code.GDPlayerHitBoxObjects1[k] = gdjs.stage4Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.stage4Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.stage4Code.condition0IsTrue_0.val) {
}

}


}; //End of gdjs.stage4Code.eventsList0x794dbc
gdjs.stage4Code.eventsList0x79450c = function(runtimeScene) {

{

gdjs.stage4Code.GDFlyObjects2.createFrom(gdjs.stage4Code.GDFlyObjects1);

gdjs.stage4Code.GDSlimeWalkObjects2.createFrom(gdjs.stage4Code.GDSlimeWalkObjects1);


gdjs.stage4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage4Code.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.stage4Code.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.stage4Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.stage4Code.condition0IsTrue_0.val = true;
        gdjs.stage4Code.GDSlimeWalkObjects2[k] = gdjs.stage4Code.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.stage4Code.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.stage4Code.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.stage4Code.GDFlyObjects2[i].getVariableNumber(gdjs.stage4Code.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.stage4Code.condition0IsTrue_0.val = true;
        gdjs.stage4Code.GDFlyObjects2[k] = gdjs.stage4Code.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.stage4Code.GDFlyObjects2.length = k;}if (gdjs.stage4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage4Code.GDFlyObjects2 */
/* Reuse gdjs.stage4Code.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.stage4Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage4Code.GDFlyObjects2[i].addForce(-(300), 0, 0);
}
}{for(var i = 0, len = gdjs.stage4Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage4Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
for(var i = 0, len = gdjs.stage4Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage4Code.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.stage4Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage4Code.GDSlimeWalkObjects2[i].flipX(false);
}
for(var i = 0, len = gdjs.stage4Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage4Code.GDFlyObjects2[i].flipX(false);
}
}}

}


{

gdjs.stage4Code.GDFlyObjects2.createFrom(gdjs.stage4Code.GDFlyObjects1);

gdjs.stage4Code.GDSlimeWalkObjects2.createFrom(gdjs.stage4Code.GDSlimeWalkObjects1);


gdjs.stage4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage4Code.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.stage4Code.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.stage4Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.stage4Code.condition0IsTrue_0.val = true;
        gdjs.stage4Code.GDSlimeWalkObjects2[k] = gdjs.stage4Code.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.stage4Code.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.stage4Code.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.stage4Code.GDFlyObjects2[i].getVariableNumber(gdjs.stage4Code.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.stage4Code.condition0IsTrue_0.val = true;
        gdjs.stage4Code.GDFlyObjects2[k] = gdjs.stage4Code.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.stage4Code.GDFlyObjects2.length = k;}if (gdjs.stage4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage4Code.GDFlyObjects2 */
/* Reuse gdjs.stage4Code.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.stage4Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage4Code.GDFlyObjects2[i].addForce(300, 0, 0);
}
}{for(var i = 0, len = gdjs.stage4Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage4Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.stage4Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage4Code.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.stage4Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage4Code.GDSlimeWalkObjects2[i].flipX(true);
}
for(var i = 0, len = gdjs.stage4Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage4Code.GDFlyObjects2[i].flipX(true);
}
}}

}


{



}


{

/* Reuse gdjs.stage4Code.GDFlyObjects1 */
gdjs.stage4Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
/* Reuse gdjs.stage4Code.GDSlimeWalkObjects1 */

gdjs.stage4Code.condition0IsTrue_0.val = false;
{
gdjs.stage4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDPlayerHitBoxObjects1Objects, gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46stage4Code_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.stage4Code.eventsList0x794dbc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.stage4Code.eventsList0x79450c
gdjs.stage4Code.eventsList0x79595c = function(runtimeScene) {

{

/* Reuse gdjs.stage4Code.GDFlyObjects1 */
/* Reuse gdjs.stage4Code.GDSlimeWalkObjects1 */

gdjs.stage4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage4Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.stage4Code.GDSlimeWalkObjects1[i].getOpacity() == 0 ) {
        gdjs.stage4Code.condition0IsTrue_0.val = true;
        gdjs.stage4Code.GDSlimeWalkObjects1[k] = gdjs.stage4Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.stage4Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.stage4Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.stage4Code.GDFlyObjects1[i].getOpacity() == 0 ) {
        gdjs.stage4Code.condition0IsTrue_0.val = true;
        gdjs.stage4Code.GDFlyObjects1[k] = gdjs.stage4Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.stage4Code.GDFlyObjects1.length = k;}if (gdjs.stage4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage4Code.GDFlyObjects1 */
/* Reuse gdjs.stage4Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.stage4Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDSlimeWalkObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.stage4Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDFlyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.stage4Code.eventsList0x79595c
gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.stage4Code.GDPlayerHitBoxObjects1});gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.stage4Code.GDCoinObjects1});gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDLeftButtonObjects1Objects = Hashtable.newFrom({"LeftButton": gdjs.stage4Code.GDLeftButtonObjects1});gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDRightButtonObjects1Objects = Hashtable.newFrom({"RightButton": gdjs.stage4Code.GDRightButtonObjects1});gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDJumpButtonObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs.stage4Code.GDJumpButtonObjects1});gdjs.stage4Code.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.stage4Code.condition0IsTrue_0.val = false;
{
gdjs.stage4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.stage4Code.condition0IsTrue_0.val) {
gdjs.stage4Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
gdjs.stage4Code.GDsaveplatformObjects1.createFrom(runtimeScene.getObjects("saveplatform"));
{for(var i = 0, len = gdjs.stage4Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDPlayerHitBoxObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.stage4Code.GDsaveplatformObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDsaveplatformObjects1[i].hide();
}
}}

}


{

gdjs.stage4Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.stage4Code.GDcactusObjects1.createFrom(runtimeScene.getObjects("cactus"));

gdjs.stage4Code.condition0IsTrue_0.val = false;
{
gdjs.stage4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDPlayerObjects1Objects, gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDcactusObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "stage1", false);
}}

}


{

gdjs.stage4Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.stage4Code.GDsaveplatformObjects1.createFrom(runtimeScene.getObjects("saveplatform"));

gdjs.stage4Code.condition0IsTrue_0.val = false;
{
gdjs.stage4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDPlayerObjects1Objects, gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDsaveplatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("presentstage", "stage", 4);
}}

}


{


{
}

}


{


{
gdjs.stage4Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.stage4Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.stage4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDPlayerObjects1[i].setPosition((( gdjs.stage4Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.stage4Code.GDPlayerHitBoxObjects1[0].getPointX("")) - 12,(( gdjs.stage4Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.stage4Code.GDPlayerHitBoxObjects1[0].getPointY("")));
}
}}

}


{



}


{

gdjs.stage4Code.GDPlayerObjects1.length = 0;


gdjs.stage4Code.condition0IsTrue_0.val = false;
gdjs.stage4Code.condition1IsTrue_0.val = false;
{
gdjs.stage4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RShift");
}if ( gdjs.stage4Code.condition0IsTrue_0.val ) {
{
{gdjs.stage4Code.conditionTrue_1 = gdjs.stage4Code.condition1IsTrue_0;
gdjs.stage4Code.GDPlayerObjects1_1final.length = 0;gdjs.stage4Code.condition0IsTrue_1.val = false;
gdjs.stage4Code.condition1IsTrue_1.val = false;
{
gdjs.stage4Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.stage4Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.stage4Code.GDPlayerObjects2[i].getAnimation() == 0 ) {
        gdjs.stage4Code.condition0IsTrue_1.val = true;
        gdjs.stage4Code.GDPlayerObjects2[k] = gdjs.stage4Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.stage4Code.GDPlayerObjects2.length = k;if( gdjs.stage4Code.condition0IsTrue_1.val ) {
    gdjs.stage4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.stage4Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.stage4Code.GDPlayerObjects1_1final.indexOf(gdjs.stage4Code.GDPlayerObjects2[j]) === -1 )
            gdjs.stage4Code.GDPlayerObjects1_1final.push(gdjs.stage4Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.stage4Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.stage4Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.stage4Code.GDPlayerObjects2[i].getAnimation() == 2 ) {
        gdjs.stage4Code.condition1IsTrue_1.val = true;
        gdjs.stage4Code.GDPlayerObjects2[k] = gdjs.stage4Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.stage4Code.GDPlayerObjects2.length = k;if( gdjs.stage4Code.condition1IsTrue_1.val ) {
    gdjs.stage4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.stage4Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.stage4Code.GDPlayerObjects1_1final.indexOf(gdjs.stage4Code.GDPlayerObjects2[j]) === -1 )
            gdjs.stage4Code.GDPlayerObjects1_1final.push(gdjs.stage4Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.stage4Code.GDPlayerObjects1.createFrom(gdjs.stage4Code.GDPlayerObjects1_1final);
}
}
}}
if (gdjs.stage4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}}

}


{

gdjs.stage4Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.stage4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage4Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.stage4Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.stage4Code.condition0IsTrue_0.val = true;
        gdjs.stage4Code.GDPlayerHitBoxObjects1[k] = gdjs.stage4Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.stage4Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.stage4Code.condition0IsTrue_0.val) {
gdjs.stage4Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.stage4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.stage4Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.stage4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage4Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.stage4Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.stage4Code.condition0IsTrue_0.val = true;
        gdjs.stage4Code.GDPlayerHitBoxObjects1[k] = gdjs.stage4Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.stage4Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.stage4Code.condition0IsTrue_0.val) {
gdjs.stage4Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.stage4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.stage4Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.stage4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage4Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.stage4Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.stage4Code.condition0IsTrue_0.val = true;
        gdjs.stage4Code.GDPlayerHitBoxObjects1[k] = gdjs.stage4Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.stage4Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.stage4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.stage4Code.eventsList0x71a084(runtimeScene);} //End of subevents
}

}


{


gdjs.stage4Code.condition0IsTrue_0.val = false;
{
gdjs.stage4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.stage4Code.condition0IsTrue_0.val) {
gdjs.stage4Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.stage4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.stage4Code.condition0IsTrue_0.val = false;
{
gdjs.stage4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.stage4Code.condition0IsTrue_0.val) {
gdjs.stage4Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.stage4Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDPlayerObjects1[i].flipX(false);
}
}}

}


{



}


{


{
gdjs.stage4Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.stage4Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.stage4Code.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{



}


{


gdjs.stage4Code.condition0IsTrue_0.val = false;
{
gdjs.stage4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.stage4Code.condition0IsTrue_0.val) {
gdjs.stage4Code.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.stage4Code.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
{for(var i = 0, len = gdjs.stage4Code.GDGoLeftObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDGoLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.stage4Code.GDGoRightObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDGoRightObjects1[i].hide();
}
}}

}


{

gdjs.stage4Code.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.stage4Code.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));

gdjs.stage4Code.condition0IsTrue_0.val = false;
{
gdjs.stage4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDGoLeftObjects1Objects, gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDMovingPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage4Code.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.stage4Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.stage4Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDMovingPlatformObjects1[i].addForce(-(150), 0, 1);
}
}}

}


{

gdjs.stage4Code.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
gdjs.stage4Code.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));

gdjs.stage4Code.condition0IsTrue_0.val = false;
{
gdjs.stage4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDGoRightObjects1Objects, gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDMovingPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage4Code.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.stage4Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.stage4Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDMovingPlatformObjects1[i].addForce(150, 0, 1);
}
}}

}


{



}


{



}


{


gdjs.stage4Code.condition0IsTrue_0.val = false;
{
gdjs.stage4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.stage4Code.condition0IsTrue_0.val) {
gdjs.stage4Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
{for(var i = 0, len = gdjs.stage4Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}}

}


{



}


{

gdjs.stage4Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.stage4Code.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.stage4Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.stage4Code.condition0IsTrue_0.val = false;
{
gdjs.stage4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDGoLeftObjects1Objects, gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46stage4Code_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage4Code.GDFlyObjects1 */
/* Reuse gdjs.stage4Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.stage4Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDSlimeWalkObjects1[i].returnVariable(gdjs.stage4Code.GDSlimeWalkObjects1[i].getVariables().get("GoingLeft")).setNumber(1);
}
for(var i = 0, len = gdjs.stage4Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDFlyObjects1[i].returnVariable(gdjs.stage4Code.GDFlyObjects1[i].getVariables().get("GoingLeft")).setNumber(1);
}
}}

}


{

gdjs.stage4Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.stage4Code.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
gdjs.stage4Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.stage4Code.condition0IsTrue_0.val = false;
{
gdjs.stage4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDGoRightObjects1Objects, gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46stage4Code_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage4Code.GDFlyObjects1 */
/* Reuse gdjs.stage4Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.stage4Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDSlimeWalkObjects1[i].returnVariable(gdjs.stage4Code.GDSlimeWalkObjects1[i].getVariables().get("GoingLeft")).setNumber(0);
}
for(var i = 0, len = gdjs.stage4Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDFlyObjects1[i].returnVariable(gdjs.stage4Code.GDFlyObjects1[i].getVariables().get("GoingLeft")).setNumber(0);
}
}}

}


{

gdjs.stage4Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.stage4Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.stage4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage4Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.stage4Code.GDSlimeWalkObjects1[i].getAnimation() == 0 ) {
        gdjs.stage4Code.condition0IsTrue_0.val = true;
        gdjs.stage4Code.GDSlimeWalkObjects1[k] = gdjs.stage4Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.stage4Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.stage4Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.stage4Code.GDFlyObjects1[i].getAnimation() == 0 ) {
        gdjs.stage4Code.condition0IsTrue_0.val = true;
        gdjs.stage4Code.GDFlyObjects1[k] = gdjs.stage4Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.stage4Code.GDFlyObjects1.length = k;}if (gdjs.stage4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.stage4Code.eventsList0x79450c(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.stage4Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.stage4Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.stage4Code.condition0IsTrue_0.val = false;
gdjs.stage4Code.condition1IsTrue_0.val = false;
gdjs.stage4Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage4Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.stage4Code.GDSlimeWalkObjects1[i].getAnimation() == 1 ) {
        gdjs.stage4Code.condition0IsTrue_0.val = true;
        gdjs.stage4Code.GDSlimeWalkObjects1[k] = gdjs.stage4Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.stage4Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.stage4Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.stage4Code.GDFlyObjects1[i].getAnimation() == 1 ) {
        gdjs.stage4Code.condition0IsTrue_0.val = true;
        gdjs.stage4Code.GDFlyObjects1[k] = gdjs.stage4Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.stage4Code.GDFlyObjects1.length = k;}if ( gdjs.stage4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.stage4Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.stage4Code.GDSlimeWalkObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.stage4Code.condition1IsTrue_0.val = true;
        gdjs.stage4Code.GDSlimeWalkObjects1[k] = gdjs.stage4Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.stage4Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.stage4Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.stage4Code.GDFlyObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.stage4Code.condition1IsTrue_0.val = true;
        gdjs.stage4Code.GDFlyObjects1[k] = gdjs.stage4Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.stage4Code.GDFlyObjects1.length = k;}if ( gdjs.stage4Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.stage4Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( !(gdjs.stage4Code.GDSlimeWalkObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.stage4Code.condition2IsTrue_0.val = true;
        gdjs.stage4Code.GDSlimeWalkObjects1[k] = gdjs.stage4Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.stage4Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.stage4Code.GDFlyObjects1.length;i<l;++i) {
    if ( !(gdjs.stage4Code.GDFlyObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.stage4Code.condition2IsTrue_0.val = true;
        gdjs.stage4Code.GDFlyObjects1[k] = gdjs.stage4Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.stage4Code.GDFlyObjects1.length = k;}}
}
if (gdjs.stage4Code.condition2IsTrue_0.val) {
/* Reuse gdjs.stage4Code.GDFlyObjects1 */
/* Reuse gdjs.stage4Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.stage4Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDSlimeWalkObjects1[i].activateBehavior("PlatformerObject", false);
}
for(var i = 0, len = gdjs.stage4Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.stage4Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDSlimeWalkObjects1[i].setOpacity(gdjs.stage4Code.GDSlimeWalkObjects1[i].getOpacity() - (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.stage4Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDFlyObjects1[i].setOpacity(gdjs.stage4Code.GDFlyObjects1[i].getOpacity() - (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.stage4Code.eventsList0x79595c(runtimeScene);} //End of subevents
}

}


{



}


{



}


{

gdjs.stage4Code.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));
gdjs.stage4Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.stage4Code.condition0IsTrue_0.val = false;
gdjs.stage4Code.condition1IsTrue_0.val = false;
{
gdjs.stage4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDPlayerHitBoxObjects1Objects, gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDCoinObjects1Objects, false, runtimeScene, false);
}if ( gdjs.stage4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.stage4Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.stage4Code.GDCoinObjects1[i].getOpacity() == 255 ) {
        gdjs.stage4Code.condition1IsTrue_0.val = true;
        gdjs.stage4Code.GDCoinObjects1[k] = gdjs.stage4Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.stage4Code.GDCoinObjects1.length = k;}}
if (gdjs.stage4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.stage4Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.stage4Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDCoinObjects1[i].setOpacity(254);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(100);
}}

}


{

gdjs.stage4Code.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));

gdjs.stage4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage4Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.stage4Code.GDCoinObjects1[i].getOpacity() < 255 ) {
        gdjs.stage4Code.condition0IsTrue_0.val = true;
        gdjs.stage4Code.GDCoinObjects1[k] = gdjs.stage4Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.stage4Code.GDCoinObjects1.length = k;}if (gdjs.stage4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage4Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.stage4Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDCoinObjects1[i].setOpacity(gdjs.stage4Code.GDCoinObjects1[i].getOpacity() - (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.stage4Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDCoinObjects1[i].addForce(0, -(30), 0);
}
}}

}


{

gdjs.stage4Code.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));

gdjs.stage4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage4Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.stage4Code.GDCoinObjects1[i].getOpacity() == 0 ) {
        gdjs.stage4Code.condition0IsTrue_0.val = true;
        gdjs.stage4Code.GDCoinObjects1[k] = gdjs.stage4Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.stage4Code.GDCoinObjects1.length = k;}if (gdjs.stage4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage4Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.stage4Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{



}


{


{
gdjs.stage4Code.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.stage4Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDScoreObjects1[i].setString("x " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{



}


{


gdjs.stage4Code.condition0IsTrue_0.val = false;
{
gdjs.stage4Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.stage4Code.condition0IsTrue_0.val) {
gdjs.stage4Code.GDArrowButtonsBgObjects1.createFrom(runtimeScene.getObjects("ArrowButtonsBg"));
gdjs.stage4Code.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));
gdjs.stage4Code.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));
gdjs.stage4Code.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));
{for(var i = 0, len = gdjs.stage4Code.GDLeftButtonObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDLeftButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.stage4Code.GDRightButtonObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDRightButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.stage4Code.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDJumpButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.stage4Code.GDArrowButtonsBgObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDArrowButtonsBgObjects1[i].hide();
}
}}

}


{


gdjs.stage4Code.condition0IsTrue_0.val = false;
{
gdjs.stage4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.stage4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{

gdjs.stage4Code.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));

gdjs.stage4Code.condition0IsTrue_0.val = false;
{
gdjs.stage4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDLeftButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.stage4Code.condition0IsTrue_0.val) {
gdjs.stage4Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.stage4Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.stage4Code.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));

gdjs.stage4Code.condition0IsTrue_0.val = false;
{
gdjs.stage4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDRightButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.stage4Code.condition0IsTrue_0.val) {
gdjs.stage4Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.stage4Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.stage4Code.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));

gdjs.stage4Code.condition0IsTrue_0.val = false;
{
gdjs.stage4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.stage4Code.mapOfGDgdjs_46stage4Code_46GDJumpButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.stage4Code.condition0IsTrue_0.val) {
gdjs.stage4Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.stage4Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.stage4Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


}; //End of gdjs.stage4Code.eventsList0x5b6e18


gdjs.stage4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.stage4Code.GDPlayerObjects1.length = 0;
gdjs.stage4Code.GDPlayerObjects2.length = 0;
gdjs.stage4Code.GDPlayerObjects3.length = 0;
gdjs.stage4Code.GDPlatformObjects1.length = 0;
gdjs.stage4Code.GDPlatformObjects2.length = 0;
gdjs.stage4Code.GDPlatformObjects3.length = 0;
gdjs.stage4Code.GDJumpthruObjects1.length = 0;
gdjs.stage4Code.GDJumpthruObjects2.length = 0;
gdjs.stage4Code.GDJumpthruObjects3.length = 0;
gdjs.stage4Code.GDTiledGrassPlatformObjects1.length = 0;
gdjs.stage4Code.GDTiledGrassPlatformObjects2.length = 0;
gdjs.stage4Code.GDTiledGrassPlatformObjects3.length = 0;
gdjs.stage4Code.GDTiledCastlePlatformObjects1.length = 0;
gdjs.stage4Code.GDTiledCastlePlatformObjects2.length = 0;
gdjs.stage4Code.GDTiledCastlePlatformObjects3.length = 0;
gdjs.stage4Code.GDMovingPlatformObjects1.length = 0;
gdjs.stage4Code.GDMovingPlatformObjects2.length = 0;
gdjs.stage4Code.GDMovingPlatformObjects3.length = 0;
gdjs.stage4Code.GDGoLeftObjects1.length = 0;
gdjs.stage4Code.GDGoLeftObjects2.length = 0;
gdjs.stage4Code.GDGoLeftObjects3.length = 0;
gdjs.stage4Code.GDGoRightObjects1.length = 0;
gdjs.stage4Code.GDGoRightObjects2.length = 0;
gdjs.stage4Code.GDGoRightObjects3.length = 0;
gdjs.stage4Code.GDLadderObjects1.length = 0;
gdjs.stage4Code.GDLadderObjects2.length = 0;
gdjs.stage4Code.GDLadderObjects3.length = 0;
gdjs.stage4Code.GDPlayerHitBoxObjects1.length = 0;
gdjs.stage4Code.GDPlayerHitBoxObjects2.length = 0;
gdjs.stage4Code.GDPlayerHitBoxObjects3.length = 0;
gdjs.stage4Code.GDSlimeWalkObjects1.length = 0;
gdjs.stage4Code.GDSlimeWalkObjects2.length = 0;
gdjs.stage4Code.GDSlimeWalkObjects3.length = 0;
gdjs.stage4Code.GDFlyObjects1.length = 0;
gdjs.stage4Code.GDFlyObjects2.length = 0;
gdjs.stage4Code.GDFlyObjects3.length = 0;
gdjs.stage4Code.GDCloudObjects1.length = 0;
gdjs.stage4Code.GDCloudObjects2.length = 0;
gdjs.stage4Code.GDCloudObjects3.length = 0;
gdjs.stage4Code.GDBackgroundObjectsObjects1.length = 0;
gdjs.stage4Code.GDBackgroundObjectsObjects2.length = 0;
gdjs.stage4Code.GDBackgroundObjectsObjects3.length = 0;
gdjs.stage4Code.GDScoreObjects1.length = 0;
gdjs.stage4Code.GDScoreObjects2.length = 0;
gdjs.stage4Code.GDScoreObjects3.length = 0;
gdjs.stage4Code.GDCoinObjects1.length = 0;
gdjs.stage4Code.GDCoinObjects2.length = 0;
gdjs.stage4Code.GDCoinObjects3.length = 0;
gdjs.stage4Code.GDCoinIconObjects1.length = 0;
gdjs.stage4Code.GDCoinIconObjects2.length = 0;
gdjs.stage4Code.GDCoinIconObjects3.length = 0;
gdjs.stage4Code.GDLeftButtonObjects1.length = 0;
gdjs.stage4Code.GDLeftButtonObjects2.length = 0;
gdjs.stage4Code.GDLeftButtonObjects3.length = 0;
gdjs.stage4Code.GDRightButtonObjects1.length = 0;
gdjs.stage4Code.GDRightButtonObjects2.length = 0;
gdjs.stage4Code.GDRightButtonObjects3.length = 0;
gdjs.stage4Code.GDJumpButtonObjects1.length = 0;
gdjs.stage4Code.GDJumpButtonObjects2.length = 0;
gdjs.stage4Code.GDJumpButtonObjects3.length = 0;
gdjs.stage4Code.GDArrowButtonsBgObjects1.length = 0;
gdjs.stage4Code.GDArrowButtonsBgObjects2.length = 0;
gdjs.stage4Code.GDArrowButtonsBgObjects3.length = 0;
gdjs.stage4Code.GDcactusObjects1.length = 0;
gdjs.stage4Code.GDcactusObjects2.length = 0;
gdjs.stage4Code.GDcactusObjects3.length = 0;
gdjs.stage4Code.GDsaveplatformObjects1.length = 0;
gdjs.stage4Code.GDsaveplatformObjects2.length = 0;
gdjs.stage4Code.GDsaveplatformObjects3.length = 0;

gdjs.stage4Code.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['stage4Code'] = gdjs.stage4Code;
