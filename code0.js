gdjs.stage3Code = {};
gdjs.stage3Code.GDPlayerObjects1_1final = [];

gdjs.stage3Code.forEachCount0_3 = 0;

gdjs.stage3Code.forEachCount1_3 = 0;

gdjs.stage3Code.forEachIndex3 = 0;

gdjs.stage3Code.forEachObjects3 = [];

gdjs.stage3Code.forEachTotalCount3 = 0;

gdjs.stage3Code.GDPlayerObjects1= [];
gdjs.stage3Code.GDPlayerObjects2= [];
gdjs.stage3Code.GDPlayerObjects3= [];
gdjs.stage3Code.GDPlatformObjects1= [];
gdjs.stage3Code.GDPlatformObjects2= [];
gdjs.stage3Code.GDPlatformObjects3= [];
gdjs.stage3Code.GDJumpthruObjects1= [];
gdjs.stage3Code.GDJumpthruObjects2= [];
gdjs.stage3Code.GDJumpthruObjects3= [];
gdjs.stage3Code.GDTiledGrassPlatformObjects1= [];
gdjs.stage3Code.GDTiledGrassPlatformObjects2= [];
gdjs.stage3Code.GDTiledGrassPlatformObjects3= [];
gdjs.stage3Code.GDTiledCastlePlatformObjects1= [];
gdjs.stage3Code.GDTiledCastlePlatformObjects2= [];
gdjs.stage3Code.GDTiledCastlePlatformObjects3= [];
gdjs.stage3Code.GDMovingPlatformObjects1= [];
gdjs.stage3Code.GDMovingPlatformObjects2= [];
gdjs.stage3Code.GDMovingPlatformObjects3= [];
gdjs.stage3Code.GDGoLeftObjects1= [];
gdjs.stage3Code.GDGoLeftObjects2= [];
gdjs.stage3Code.GDGoLeftObjects3= [];
gdjs.stage3Code.GDGoRightObjects1= [];
gdjs.stage3Code.GDGoRightObjects2= [];
gdjs.stage3Code.GDGoRightObjects3= [];
gdjs.stage3Code.GDLadderObjects1= [];
gdjs.stage3Code.GDLadderObjects2= [];
gdjs.stage3Code.GDLadderObjects3= [];
gdjs.stage3Code.GDPlayerHitBoxObjects1= [];
gdjs.stage3Code.GDPlayerHitBoxObjects2= [];
gdjs.stage3Code.GDPlayerHitBoxObjects3= [];
gdjs.stage3Code.GDSlimeWalkObjects1= [];
gdjs.stage3Code.GDSlimeWalkObjects2= [];
gdjs.stage3Code.GDSlimeWalkObjects3= [];
gdjs.stage3Code.GDFlyObjects1= [];
gdjs.stage3Code.GDFlyObjects2= [];
gdjs.stage3Code.GDFlyObjects3= [];
gdjs.stage3Code.GDCloudObjects1= [];
gdjs.stage3Code.GDCloudObjects2= [];
gdjs.stage3Code.GDCloudObjects3= [];
gdjs.stage3Code.GDBackgroundObjectsObjects1= [];
gdjs.stage3Code.GDBackgroundObjectsObjects2= [];
gdjs.stage3Code.GDBackgroundObjectsObjects3= [];
gdjs.stage3Code.GDScoreObjects1= [];
gdjs.stage3Code.GDScoreObjects2= [];
gdjs.stage3Code.GDScoreObjects3= [];
gdjs.stage3Code.GDCoinObjects1= [];
gdjs.stage3Code.GDCoinObjects2= [];
gdjs.stage3Code.GDCoinObjects3= [];
gdjs.stage3Code.GDCoinIconObjects1= [];
gdjs.stage3Code.GDCoinIconObjects2= [];
gdjs.stage3Code.GDCoinIconObjects3= [];
gdjs.stage3Code.GDLeftButtonObjects1= [];
gdjs.stage3Code.GDLeftButtonObjects2= [];
gdjs.stage3Code.GDLeftButtonObjects3= [];
gdjs.stage3Code.GDRightButtonObjects1= [];
gdjs.stage3Code.GDRightButtonObjects2= [];
gdjs.stage3Code.GDRightButtonObjects3= [];
gdjs.stage3Code.GDJumpButtonObjects1= [];
gdjs.stage3Code.GDJumpButtonObjects2= [];
gdjs.stage3Code.GDJumpButtonObjects3= [];
gdjs.stage3Code.GDArrowButtonsBgObjects1= [];
gdjs.stage3Code.GDArrowButtonsBgObjects2= [];
gdjs.stage3Code.GDArrowButtonsBgObjects3= [];
gdjs.stage3Code.GDcactusObjects1= [];
gdjs.stage3Code.GDcactusObjects2= [];
gdjs.stage3Code.GDcactusObjects3= [];
gdjs.stage3Code.GDsaveplatformObjects1= [];
gdjs.stage3Code.GDsaveplatformObjects2= [];
gdjs.stage3Code.GDsaveplatformObjects3= [];

gdjs.stage3Code.conditionTrue_0 = {val:false};
gdjs.stage3Code.condition0IsTrue_0 = {val:false};
gdjs.stage3Code.condition1IsTrue_0 = {val:false};
gdjs.stage3Code.condition2IsTrue_0 = {val:false};
gdjs.stage3Code.condition3IsTrue_0 = {val:false};
gdjs.stage3Code.conditionTrue_1 = {val:false};
gdjs.stage3Code.condition0IsTrue_1 = {val:false};
gdjs.stage3Code.condition1IsTrue_1 = {val:false};
gdjs.stage3Code.condition2IsTrue_1 = {val:false};
gdjs.stage3Code.condition3IsTrue_1 = {val:false};


gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.stage3Code.GDPlayerObjects1});gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDsaveplatformObjects1Objects = Hashtable.newFrom({"saveplatform": gdjs.stage3Code.GDsaveplatformObjects1});gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.stage3Code.GDPlayerObjects1});gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDcactusObjects1Objects = Hashtable.newFrom({"cactus": gdjs.stage3Code.GDcactusObjects1});gdjs.stage3Code.eventsList0x7952ac = function(runtimeScene) {

{

gdjs.stage3Code.GDPlayerHitBoxObjects2.createFrom(gdjs.stage3Code.GDPlayerHitBoxObjects1);


gdjs.stage3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage3Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( !(gdjs.stage3Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.stage3Code.condition0IsTrue_0.val = true;
        gdjs.stage3Code.GDPlayerHitBoxObjects2[k] = gdjs.stage3Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.stage3Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.stage3Code.condition0IsTrue_0.val) {
gdjs.stage3Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.stage3Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.stage3Code.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

/* Reuse gdjs.stage3Code.GDPlayerHitBoxObjects1 */

gdjs.stage3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage3Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.stage3Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.stage3Code.condition0IsTrue_0.val = true;
        gdjs.stage3Code.GDPlayerHitBoxObjects1[k] = gdjs.stage3Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.stage3Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.stage3Code.condition0IsTrue_0.val) {
gdjs.stage3Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.stage3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


}; //End of gdjs.stage3Code.eventsList0x7952ac
gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.stage3Code.GDGoLeftObjects1});gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.stage3Code.GDMovingPlatformObjects1});gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.stage3Code.GDGoRightObjects1});gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.stage3Code.GDMovingPlatformObjects1});gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.stage3Code.GDGoLeftObjects1});gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46stage3Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.stage3Code.GDSlimeWalkObjects1, "Fly": gdjs.stage3Code.GDFlyObjects1});gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.stage3Code.GDGoRightObjects1});gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46stage3Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.stage3Code.GDSlimeWalkObjects1, "Fly": gdjs.stage3Code.GDFlyObjects1});gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.stage3Code.GDPlayerHitBoxObjects1});gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46stage3Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.stage3Code.GDSlimeWalkObjects1, "Fly": gdjs.stage3Code.GDFlyObjects1});gdjs.stage3Code.eventsList0x6cc9ec = function(runtimeScene) {

}; //End of gdjs.stage3Code.eventsList0x6cc9ec
gdjs.stage3Code.eventsList0x6cc384 = function(runtimeScene) {

{

/* Reuse gdjs.stage3Code.GDFlyObjects2 */
/* Reuse gdjs.stage3Code.GDSlimeWalkObjects2 */

gdjs.stage3Code.forEachTotalCount3 = 0;
gdjs.stage3Code.forEachObjects3.length = 0;
gdjs.stage3Code.forEachCount0_3 = gdjs.stage3Code.GDSlimeWalkObjects2.length;
gdjs.stage3Code.forEachTotalCount3 += gdjs.stage3Code.forEachCount0_3;
gdjs.stage3Code.forEachObjects3.push.apply(gdjs.stage3Code.forEachObjects3,gdjs.stage3Code.GDSlimeWalkObjects2);
gdjs.stage3Code.forEachCount1_3 = gdjs.stage3Code.GDFlyObjects2.length;
gdjs.stage3Code.forEachTotalCount3 += gdjs.stage3Code.forEachCount1_3;
gdjs.stage3Code.forEachObjects3.push.apply(gdjs.stage3Code.forEachObjects3,gdjs.stage3Code.GDFlyObjects2);
for(gdjs.stage3Code.forEachIndex3 = 0;gdjs.stage3Code.forEachIndex3 < gdjs.stage3Code.forEachTotalCount3;++gdjs.stage3Code.forEachIndex3) {
gdjs.stage3Code.GDFlyObjects3.length = 0;

gdjs.stage3Code.GDSlimeWalkObjects3.length = 0;


if (gdjs.stage3Code.forEachIndex3 < gdjs.stage3Code.forEachCount0_3) {
    gdjs.stage3Code.GDSlimeWalkObjects3.push(gdjs.stage3Code.forEachObjects3[gdjs.stage3Code.forEachIndex3]);
}
else if (gdjs.stage3Code.forEachIndex3 < gdjs.stage3Code.forEachCount0_3+gdjs.stage3Code.forEachCount1_3) {
    gdjs.stage3Code.GDFlyObjects3.push(gdjs.stage3Code.forEachObjects3[gdjs.stage3Code.forEachIndex3]);
}
if (true) {
{runtimeScene.getVariables().getFromIndex(0).add(50);
}}
}

}


}; //End of gdjs.stage3Code.eventsList0x6cc384
gdjs.stage3Code.eventsList0x6cc254 = function(runtimeScene) {

{

gdjs.stage3Code.GDPlayerHitBoxObjects2.createFrom(gdjs.stage3Code.GDPlayerHitBoxObjects1);


gdjs.stage3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage3Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.stage3Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.stage3Code.condition0IsTrue_0.val = true;
        gdjs.stage3Code.GDPlayerHitBoxObjects2[k] = gdjs.stage3Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.stage3Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.stage3Code.condition0IsTrue_0.val) {
gdjs.stage3Code.GDFlyObjects2.createFrom(gdjs.stage3Code.GDFlyObjects1);

/* Reuse gdjs.stage3Code.GDPlayerHitBoxObjects2 */
gdjs.stage3Code.GDSlimeWalkObjects2.createFrom(gdjs.stage3Code.GDSlimeWalkObjects1);

{for(var i = 0, len = gdjs.stage3Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage3Code.GDSlimeWalkObjects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.stage3Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage3Code.GDFlyObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.stage3Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage3Code.GDSlimeWalkObjects2[i].activateBehavior("PlatformerObject", true);
}
for(var i = 0, len = gdjs.stage3Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage3Code.GDFlyObjects2[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.stage3Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage3Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
for(var i = 0, len = gdjs.stage3Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage3Code.GDFlyObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
}{for(var i = 0, len = gdjs.stage3Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.stage3Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.stage3Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.stage3Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}
{ //Subevents
gdjs.stage3Code.eventsList0x6cc384(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.stage3Code.GDFlyObjects1 */
/* Reuse gdjs.stage3Code.GDPlayerHitBoxObjects1 */
/* Reuse gdjs.stage3Code.GDSlimeWalkObjects1 */

gdjs.stage3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage3Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.stage3Code.GDPlayerHitBoxObjects1[i].getY() >= (( gdjs.stage3Code.GDFlyObjects1.length === 0 ) ? (( gdjs.stage3Code.GDSlimeWalkObjects1.length === 0 ) ? 0 :gdjs.stage3Code.GDSlimeWalkObjects1[0].getPointY("")) :gdjs.stage3Code.GDFlyObjects1[0].getPointY("")) - (gdjs.stage3Code.GDPlayerHitBoxObjects1[i].getHeight()) + (( gdjs.stage3Code.GDFlyObjects1.length === 0 ) ? (( gdjs.stage3Code.GDSlimeWalkObjects1.length === 0 ) ? 0 :gdjs.stage3Code.GDSlimeWalkObjects1[0].getHeight()) :gdjs.stage3Code.GDFlyObjects1[0].getHeight()) / 2 ) {
        gdjs.stage3Code.condition0IsTrue_0.val = true;
        gdjs.stage3Code.GDPlayerHitBoxObjects1[k] = gdjs.stage3Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.stage3Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.stage3Code.condition0IsTrue_0.val) {
}

}


}; //End of gdjs.stage3Code.eventsList0x6cc254
gdjs.stage3Code.eventsList0x6cb9a4 = function(runtimeScene) {

{

gdjs.stage3Code.GDFlyObjects2.createFrom(gdjs.stage3Code.GDFlyObjects1);

gdjs.stage3Code.GDSlimeWalkObjects2.createFrom(gdjs.stage3Code.GDSlimeWalkObjects1);


gdjs.stage3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage3Code.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.stage3Code.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.stage3Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.stage3Code.condition0IsTrue_0.val = true;
        gdjs.stage3Code.GDSlimeWalkObjects2[k] = gdjs.stage3Code.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.stage3Code.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.stage3Code.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.stage3Code.GDFlyObjects2[i].getVariableNumber(gdjs.stage3Code.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.stage3Code.condition0IsTrue_0.val = true;
        gdjs.stage3Code.GDFlyObjects2[k] = gdjs.stage3Code.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.stage3Code.GDFlyObjects2.length = k;}if (gdjs.stage3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage3Code.GDFlyObjects2 */
/* Reuse gdjs.stage3Code.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.stage3Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage3Code.GDFlyObjects2[i].addForce(-(300), 0, 0);
}
}{for(var i = 0, len = gdjs.stage3Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage3Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
for(var i = 0, len = gdjs.stage3Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage3Code.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.stage3Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage3Code.GDSlimeWalkObjects2[i].flipX(false);
}
for(var i = 0, len = gdjs.stage3Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage3Code.GDFlyObjects2[i].flipX(false);
}
}}

}


{

gdjs.stage3Code.GDFlyObjects2.createFrom(gdjs.stage3Code.GDFlyObjects1);

gdjs.stage3Code.GDSlimeWalkObjects2.createFrom(gdjs.stage3Code.GDSlimeWalkObjects1);


gdjs.stage3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage3Code.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.stage3Code.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.stage3Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.stage3Code.condition0IsTrue_0.val = true;
        gdjs.stage3Code.GDSlimeWalkObjects2[k] = gdjs.stage3Code.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.stage3Code.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.stage3Code.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.stage3Code.GDFlyObjects2[i].getVariableNumber(gdjs.stage3Code.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.stage3Code.condition0IsTrue_0.val = true;
        gdjs.stage3Code.GDFlyObjects2[k] = gdjs.stage3Code.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.stage3Code.GDFlyObjects2.length = k;}if (gdjs.stage3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage3Code.GDFlyObjects2 */
/* Reuse gdjs.stage3Code.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.stage3Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage3Code.GDFlyObjects2[i].addForce(300, 0, 0);
}
}{for(var i = 0, len = gdjs.stage3Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage3Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.stage3Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage3Code.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.stage3Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.stage3Code.GDSlimeWalkObjects2[i].flipX(true);
}
for(var i = 0, len = gdjs.stage3Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.stage3Code.GDFlyObjects2[i].flipX(true);
}
}}

}


{



}


{

/* Reuse gdjs.stage3Code.GDFlyObjects1 */
gdjs.stage3Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
/* Reuse gdjs.stage3Code.GDSlimeWalkObjects1 */

gdjs.stage3Code.condition0IsTrue_0.val = false;
{
gdjs.stage3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDPlayerHitBoxObjects1Objects, gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46stage3Code_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.stage3Code.eventsList0x6cc254(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.stage3Code.eventsList0x6cb9a4
gdjs.stage3Code.eventsList0x6ccdf4 = function(runtimeScene) {

{

/* Reuse gdjs.stage3Code.GDFlyObjects1 */
/* Reuse gdjs.stage3Code.GDSlimeWalkObjects1 */

gdjs.stage3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage3Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.stage3Code.GDSlimeWalkObjects1[i].getOpacity() == 0 ) {
        gdjs.stage3Code.condition0IsTrue_0.val = true;
        gdjs.stage3Code.GDSlimeWalkObjects1[k] = gdjs.stage3Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.stage3Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.stage3Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.stage3Code.GDFlyObjects1[i].getOpacity() == 0 ) {
        gdjs.stage3Code.condition0IsTrue_0.val = true;
        gdjs.stage3Code.GDFlyObjects1[k] = gdjs.stage3Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.stage3Code.GDFlyObjects1.length = k;}if (gdjs.stage3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage3Code.GDFlyObjects1 */
/* Reuse gdjs.stage3Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.stage3Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDSlimeWalkObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.stage3Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDFlyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.stage3Code.eventsList0x6ccdf4
gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.stage3Code.GDPlayerHitBoxObjects1});gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.stage3Code.GDCoinObjects1});gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDLeftButtonObjects1Objects = Hashtable.newFrom({"LeftButton": gdjs.stage3Code.GDLeftButtonObjects1});gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDRightButtonObjects1Objects = Hashtable.newFrom({"RightButton": gdjs.stage3Code.GDRightButtonObjects1});gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDJumpButtonObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs.stage3Code.GDJumpButtonObjects1});gdjs.stage3Code.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.stage3Code.condition0IsTrue_0.val = false;
{
gdjs.stage3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.stage3Code.condition0IsTrue_0.val) {
gdjs.stage3Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
gdjs.stage3Code.GDsaveplatformObjects1.createFrom(runtimeScene.getObjects("saveplatform"));
{for(var i = 0, len = gdjs.stage3Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDPlayerHitBoxObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.stage3Code.GDsaveplatformObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDsaveplatformObjects1[i].hide();
}
}}

}


{

gdjs.stage3Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.stage3Code.GDsaveplatformObjects1.createFrom(runtimeScene.getObjects("saveplatform"));

gdjs.stage3Code.condition0IsTrue_0.val = false;
{
gdjs.stage3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDPlayerObjects1Objects, gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDsaveplatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("presentstage", "stage", 3);
}}

}


{

gdjs.stage3Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.stage3Code.GDcactusObjects1.createFrom(runtimeScene.getObjects("cactus"));

gdjs.stage3Code.condition0IsTrue_0.val = false;
{
gdjs.stage3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDPlayerObjects1Objects, gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDcactusObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "stage4", false);
}}

}


{


{
}

}


{


{
gdjs.stage3Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.stage3Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.stage3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDPlayerObjects1[i].setPosition((( gdjs.stage3Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.stage3Code.GDPlayerHitBoxObjects1[0].getPointX("")) - 12,(( gdjs.stage3Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.stage3Code.GDPlayerHitBoxObjects1[0].getPointY("")));
}
}}

}


{



}


{

gdjs.stage3Code.GDPlayerObjects1.length = 0;


gdjs.stage3Code.condition0IsTrue_0.val = false;
gdjs.stage3Code.condition1IsTrue_0.val = false;
{
gdjs.stage3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RShift");
}if ( gdjs.stage3Code.condition0IsTrue_0.val ) {
{
{gdjs.stage3Code.conditionTrue_1 = gdjs.stage3Code.condition1IsTrue_0;
gdjs.stage3Code.GDPlayerObjects1_1final.length = 0;gdjs.stage3Code.condition0IsTrue_1.val = false;
gdjs.stage3Code.condition1IsTrue_1.val = false;
{
gdjs.stage3Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.stage3Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.stage3Code.GDPlayerObjects2[i].getAnimation() == 0 ) {
        gdjs.stage3Code.condition0IsTrue_1.val = true;
        gdjs.stage3Code.GDPlayerObjects2[k] = gdjs.stage3Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.stage3Code.GDPlayerObjects2.length = k;if( gdjs.stage3Code.condition0IsTrue_1.val ) {
    gdjs.stage3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.stage3Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.stage3Code.GDPlayerObjects1_1final.indexOf(gdjs.stage3Code.GDPlayerObjects2[j]) === -1 )
            gdjs.stage3Code.GDPlayerObjects1_1final.push(gdjs.stage3Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.stage3Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.stage3Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.stage3Code.GDPlayerObjects2[i].getAnimation() == 2 ) {
        gdjs.stage3Code.condition1IsTrue_1.val = true;
        gdjs.stage3Code.GDPlayerObjects2[k] = gdjs.stage3Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.stage3Code.GDPlayerObjects2.length = k;if( gdjs.stage3Code.condition1IsTrue_1.val ) {
    gdjs.stage3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.stage3Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.stage3Code.GDPlayerObjects1_1final.indexOf(gdjs.stage3Code.GDPlayerObjects2[j]) === -1 )
            gdjs.stage3Code.GDPlayerObjects1_1final.push(gdjs.stage3Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.stage3Code.GDPlayerObjects1.createFrom(gdjs.stage3Code.GDPlayerObjects1_1final);
}
}
}}
if (gdjs.stage3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}}

}


{

gdjs.stage3Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.stage3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage3Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.stage3Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.stage3Code.condition0IsTrue_0.val = true;
        gdjs.stage3Code.GDPlayerHitBoxObjects1[k] = gdjs.stage3Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.stage3Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.stage3Code.condition0IsTrue_0.val) {
gdjs.stage3Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.stage3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.stage3Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.stage3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage3Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.stage3Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.stage3Code.condition0IsTrue_0.val = true;
        gdjs.stage3Code.GDPlayerHitBoxObjects1[k] = gdjs.stage3Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.stage3Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.stage3Code.condition0IsTrue_0.val) {
gdjs.stage3Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.stage3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.stage3Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.stage3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage3Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.stage3Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.stage3Code.condition0IsTrue_0.val = true;
        gdjs.stage3Code.GDPlayerHitBoxObjects1[k] = gdjs.stage3Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.stage3Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.stage3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.stage3Code.eventsList0x7952ac(runtimeScene);} //End of subevents
}

}


{


gdjs.stage3Code.condition0IsTrue_0.val = false;
{
gdjs.stage3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.stage3Code.condition0IsTrue_0.val) {
gdjs.stage3Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.stage3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.stage3Code.condition0IsTrue_0.val = false;
{
gdjs.stage3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.stage3Code.condition0IsTrue_0.val) {
gdjs.stage3Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.stage3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDPlayerObjects1[i].flipX(false);
}
}}

}


{



}


{


{
gdjs.stage3Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.stage3Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.stage3Code.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{



}


{


gdjs.stage3Code.condition0IsTrue_0.val = false;
{
gdjs.stage3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.stage3Code.condition0IsTrue_0.val) {
gdjs.stage3Code.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.stage3Code.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
{for(var i = 0, len = gdjs.stage3Code.GDGoLeftObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDGoLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.stage3Code.GDGoRightObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDGoRightObjects1[i].hide();
}
}}

}


{

gdjs.stage3Code.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.stage3Code.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));

gdjs.stage3Code.condition0IsTrue_0.val = false;
{
gdjs.stage3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDGoLeftObjects1Objects, gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDMovingPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage3Code.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.stage3Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.stage3Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDMovingPlatformObjects1[i].addForce(-(150), 0, 1);
}
}}

}


{

gdjs.stage3Code.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
gdjs.stage3Code.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));

gdjs.stage3Code.condition0IsTrue_0.val = false;
{
gdjs.stage3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDGoRightObjects1Objects, gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDMovingPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage3Code.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.stage3Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.stage3Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDMovingPlatformObjects1[i].addForce(150, 0, 1);
}
}}

}


{



}


{



}


{


gdjs.stage3Code.condition0IsTrue_0.val = false;
{
gdjs.stage3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.stage3Code.condition0IsTrue_0.val) {
gdjs.stage3Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
{for(var i = 0, len = gdjs.stage3Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}}

}


{



}


{

gdjs.stage3Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.stage3Code.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.stage3Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.stage3Code.condition0IsTrue_0.val = false;
{
gdjs.stage3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDGoLeftObjects1Objects, gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46stage3Code_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage3Code.GDFlyObjects1 */
/* Reuse gdjs.stage3Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.stage3Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDSlimeWalkObjects1[i].returnVariable(gdjs.stage3Code.GDSlimeWalkObjects1[i].getVariables().get("GoingLeft")).setNumber(1);
}
for(var i = 0, len = gdjs.stage3Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDFlyObjects1[i].returnVariable(gdjs.stage3Code.GDFlyObjects1[i].getVariables().get("GoingLeft")).setNumber(1);
}
}}

}


{

gdjs.stage3Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.stage3Code.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
gdjs.stage3Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.stage3Code.condition0IsTrue_0.val = false;
{
gdjs.stage3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDGoRightObjects1Objects, gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46stage3Code_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.stage3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage3Code.GDFlyObjects1 */
/* Reuse gdjs.stage3Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.stage3Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDSlimeWalkObjects1[i].returnVariable(gdjs.stage3Code.GDSlimeWalkObjects1[i].getVariables().get("GoingLeft")).setNumber(0);
}
for(var i = 0, len = gdjs.stage3Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDFlyObjects1[i].returnVariable(gdjs.stage3Code.GDFlyObjects1[i].getVariables().get("GoingLeft")).setNumber(0);
}
}}

}


{

gdjs.stage3Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.stage3Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.stage3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage3Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.stage3Code.GDSlimeWalkObjects1[i].getAnimation() == 0 ) {
        gdjs.stage3Code.condition0IsTrue_0.val = true;
        gdjs.stage3Code.GDSlimeWalkObjects1[k] = gdjs.stage3Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.stage3Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.stage3Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.stage3Code.GDFlyObjects1[i].getAnimation() == 0 ) {
        gdjs.stage3Code.condition0IsTrue_0.val = true;
        gdjs.stage3Code.GDFlyObjects1[k] = gdjs.stage3Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.stage3Code.GDFlyObjects1.length = k;}if (gdjs.stage3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.stage3Code.eventsList0x6cb9a4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.stage3Code.GDFlyObjects1.createFrom(runtimeScene.getObjects("Fly"));
gdjs.stage3Code.GDSlimeWalkObjects1.createFrom(runtimeScene.getObjects("SlimeWalk"));

gdjs.stage3Code.condition0IsTrue_0.val = false;
gdjs.stage3Code.condition1IsTrue_0.val = false;
gdjs.stage3Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage3Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.stage3Code.GDSlimeWalkObjects1[i].getAnimation() == 1 ) {
        gdjs.stage3Code.condition0IsTrue_0.val = true;
        gdjs.stage3Code.GDSlimeWalkObjects1[k] = gdjs.stage3Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.stage3Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.stage3Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.stage3Code.GDFlyObjects1[i].getAnimation() == 1 ) {
        gdjs.stage3Code.condition0IsTrue_0.val = true;
        gdjs.stage3Code.GDFlyObjects1[k] = gdjs.stage3Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.stage3Code.GDFlyObjects1.length = k;}if ( gdjs.stage3Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.stage3Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.stage3Code.GDSlimeWalkObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.stage3Code.condition1IsTrue_0.val = true;
        gdjs.stage3Code.GDSlimeWalkObjects1[k] = gdjs.stage3Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.stage3Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.stage3Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.stage3Code.GDFlyObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.stage3Code.condition1IsTrue_0.val = true;
        gdjs.stage3Code.GDFlyObjects1[k] = gdjs.stage3Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.stage3Code.GDFlyObjects1.length = k;}if ( gdjs.stage3Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.stage3Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( !(gdjs.stage3Code.GDSlimeWalkObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.stage3Code.condition2IsTrue_0.val = true;
        gdjs.stage3Code.GDSlimeWalkObjects1[k] = gdjs.stage3Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.stage3Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.stage3Code.GDFlyObjects1.length;i<l;++i) {
    if ( !(gdjs.stage3Code.GDFlyObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.stage3Code.condition2IsTrue_0.val = true;
        gdjs.stage3Code.GDFlyObjects1[k] = gdjs.stage3Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.stage3Code.GDFlyObjects1.length = k;}}
}
if (gdjs.stage3Code.condition2IsTrue_0.val) {
/* Reuse gdjs.stage3Code.GDFlyObjects1 */
/* Reuse gdjs.stage3Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.stage3Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDSlimeWalkObjects1[i].activateBehavior("PlatformerObject", false);
}
for(var i = 0, len = gdjs.stage3Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.stage3Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDSlimeWalkObjects1[i].setOpacity(gdjs.stage3Code.GDSlimeWalkObjects1[i].getOpacity() - (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.stage3Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDFlyObjects1[i].setOpacity(gdjs.stage3Code.GDFlyObjects1[i].getOpacity() - (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.stage3Code.eventsList0x6ccdf4(runtimeScene);} //End of subevents
}

}


{



}


{



}


{

gdjs.stage3Code.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));
gdjs.stage3Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.stage3Code.condition0IsTrue_0.val = false;
gdjs.stage3Code.condition1IsTrue_0.val = false;
{
gdjs.stage3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDPlayerHitBoxObjects1Objects, gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDCoinObjects1Objects, false, runtimeScene, false);
}if ( gdjs.stage3Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.stage3Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.stage3Code.GDCoinObjects1[i].getOpacity() == 255 ) {
        gdjs.stage3Code.condition1IsTrue_0.val = true;
        gdjs.stage3Code.GDCoinObjects1[k] = gdjs.stage3Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.stage3Code.GDCoinObjects1.length = k;}}
if (gdjs.stage3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.stage3Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.stage3Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDCoinObjects1[i].setOpacity(254);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(100);
}}

}


{

gdjs.stage3Code.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));

gdjs.stage3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage3Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.stage3Code.GDCoinObjects1[i].getOpacity() < 255 ) {
        gdjs.stage3Code.condition0IsTrue_0.val = true;
        gdjs.stage3Code.GDCoinObjects1[k] = gdjs.stage3Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.stage3Code.GDCoinObjects1.length = k;}if (gdjs.stage3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage3Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.stage3Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDCoinObjects1[i].setOpacity(gdjs.stage3Code.GDCoinObjects1[i].getOpacity() - (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.stage3Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDCoinObjects1[i].addForce(0, -(30), 0);
}
}}

}


{

gdjs.stage3Code.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));

gdjs.stage3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.stage3Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.stage3Code.GDCoinObjects1[i].getOpacity() == 0 ) {
        gdjs.stage3Code.condition0IsTrue_0.val = true;
        gdjs.stage3Code.GDCoinObjects1[k] = gdjs.stage3Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.stage3Code.GDCoinObjects1.length = k;}if (gdjs.stage3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.stage3Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.stage3Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{



}


{


{
gdjs.stage3Code.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.stage3Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDScoreObjects1[i].setString("x " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{



}


{


gdjs.stage3Code.condition0IsTrue_0.val = false;
{
gdjs.stage3Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.stage3Code.condition0IsTrue_0.val) {
gdjs.stage3Code.GDArrowButtonsBgObjects1.createFrom(runtimeScene.getObjects("ArrowButtonsBg"));
gdjs.stage3Code.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));
gdjs.stage3Code.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));
gdjs.stage3Code.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));
{for(var i = 0, len = gdjs.stage3Code.GDLeftButtonObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDLeftButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.stage3Code.GDRightButtonObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDRightButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.stage3Code.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDJumpButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.stage3Code.GDArrowButtonsBgObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDArrowButtonsBgObjects1[i].hide();
}
}}

}


{


gdjs.stage3Code.condition0IsTrue_0.val = false;
{
gdjs.stage3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.stage3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{

gdjs.stage3Code.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));

gdjs.stage3Code.condition0IsTrue_0.val = false;
{
gdjs.stage3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDLeftButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.stage3Code.condition0IsTrue_0.val) {
gdjs.stage3Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.stage3Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.stage3Code.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));

gdjs.stage3Code.condition0IsTrue_0.val = false;
{
gdjs.stage3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDRightButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.stage3Code.condition0IsTrue_0.val) {
gdjs.stage3Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.stage3Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.stage3Code.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));

gdjs.stage3Code.condition0IsTrue_0.val = false;
{
gdjs.stage3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.stage3Code.mapOfGDgdjs_46stage3Code_46GDJumpButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.stage3Code.condition0IsTrue_0.val) {
gdjs.stage3Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.stage3Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.stage3Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


}; //End of gdjs.stage3Code.eventsList0x5b6e18


gdjs.stage3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.stage3Code.GDPlayerObjects1.length = 0;
gdjs.stage3Code.GDPlayerObjects2.length = 0;
gdjs.stage3Code.GDPlayerObjects3.length = 0;
gdjs.stage3Code.GDPlatformObjects1.length = 0;
gdjs.stage3Code.GDPlatformObjects2.length = 0;
gdjs.stage3Code.GDPlatformObjects3.length = 0;
gdjs.stage3Code.GDJumpthruObjects1.length = 0;
gdjs.stage3Code.GDJumpthruObjects2.length = 0;
gdjs.stage3Code.GDJumpthruObjects3.length = 0;
gdjs.stage3Code.GDTiledGrassPlatformObjects1.length = 0;
gdjs.stage3Code.GDTiledGrassPlatformObjects2.length = 0;
gdjs.stage3Code.GDTiledGrassPlatformObjects3.length = 0;
gdjs.stage3Code.GDTiledCastlePlatformObjects1.length = 0;
gdjs.stage3Code.GDTiledCastlePlatformObjects2.length = 0;
gdjs.stage3Code.GDTiledCastlePlatformObjects3.length = 0;
gdjs.stage3Code.GDMovingPlatformObjects1.length = 0;
gdjs.stage3Code.GDMovingPlatformObjects2.length = 0;
gdjs.stage3Code.GDMovingPlatformObjects3.length = 0;
gdjs.stage3Code.GDGoLeftObjects1.length = 0;
gdjs.stage3Code.GDGoLeftObjects2.length = 0;
gdjs.stage3Code.GDGoLeftObjects3.length = 0;
gdjs.stage3Code.GDGoRightObjects1.length = 0;
gdjs.stage3Code.GDGoRightObjects2.length = 0;
gdjs.stage3Code.GDGoRightObjects3.length = 0;
gdjs.stage3Code.GDLadderObjects1.length = 0;
gdjs.stage3Code.GDLadderObjects2.length = 0;
gdjs.stage3Code.GDLadderObjects3.length = 0;
gdjs.stage3Code.GDPlayerHitBoxObjects1.length = 0;
gdjs.stage3Code.GDPlayerHitBoxObjects2.length = 0;
gdjs.stage3Code.GDPlayerHitBoxObjects3.length = 0;
gdjs.stage3Code.GDSlimeWalkObjects1.length = 0;
gdjs.stage3Code.GDSlimeWalkObjects2.length = 0;
gdjs.stage3Code.GDSlimeWalkObjects3.length = 0;
gdjs.stage3Code.GDFlyObjects1.length = 0;
gdjs.stage3Code.GDFlyObjects2.length = 0;
gdjs.stage3Code.GDFlyObjects3.length = 0;
gdjs.stage3Code.GDCloudObjects1.length = 0;
gdjs.stage3Code.GDCloudObjects2.length = 0;
gdjs.stage3Code.GDCloudObjects3.length = 0;
gdjs.stage3Code.GDBackgroundObjectsObjects1.length = 0;
gdjs.stage3Code.GDBackgroundObjectsObjects2.length = 0;
gdjs.stage3Code.GDBackgroundObjectsObjects3.length = 0;
gdjs.stage3Code.GDScoreObjects1.length = 0;
gdjs.stage3Code.GDScoreObjects2.length = 0;
gdjs.stage3Code.GDScoreObjects3.length = 0;
gdjs.stage3Code.GDCoinObjects1.length = 0;
gdjs.stage3Code.GDCoinObjects2.length = 0;
gdjs.stage3Code.GDCoinObjects3.length = 0;
gdjs.stage3Code.GDCoinIconObjects1.length = 0;
gdjs.stage3Code.GDCoinIconObjects2.length = 0;
gdjs.stage3Code.GDCoinIconObjects3.length = 0;
gdjs.stage3Code.GDLeftButtonObjects1.length = 0;
gdjs.stage3Code.GDLeftButtonObjects2.length = 0;
gdjs.stage3Code.GDLeftButtonObjects3.length = 0;
gdjs.stage3Code.GDRightButtonObjects1.length = 0;
gdjs.stage3Code.GDRightButtonObjects2.length = 0;
gdjs.stage3Code.GDRightButtonObjects3.length = 0;
gdjs.stage3Code.GDJumpButtonObjects1.length = 0;
gdjs.stage3Code.GDJumpButtonObjects2.length = 0;
gdjs.stage3Code.GDJumpButtonObjects3.length = 0;
gdjs.stage3Code.GDArrowButtonsBgObjects1.length = 0;
gdjs.stage3Code.GDArrowButtonsBgObjects2.length = 0;
gdjs.stage3Code.GDArrowButtonsBgObjects3.length = 0;
gdjs.stage3Code.GDcactusObjects1.length = 0;
gdjs.stage3Code.GDcactusObjects2.length = 0;
gdjs.stage3Code.GDcactusObjects3.length = 0;
gdjs.stage3Code.GDsaveplatformObjects1.length = 0;
gdjs.stage3Code.GDsaveplatformObjects2.length = 0;
gdjs.stage3Code.GDsaveplatformObjects3.length = 0;

gdjs.stage3Code.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['stage3Code'] = gdjs.stage3Code;
