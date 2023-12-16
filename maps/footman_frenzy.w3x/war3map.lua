gg_rct_CENTER = nil
gg_rct_MAP_CENTER = nil
gg_rct_T1_COMPLETE = nil
gg_rct_T1_SHOP_BLOCK_1 = nil
gg_rct_T1_SHOP_BLOCK_2 = nil
gg_rct_T1_SHOP_BLOCK_3 = nil
gg_rct_T1_SHOP_BLOCK_4 = nil
gg_rct_T1_SHOP_BLOCK_5 = nil
gg_rct_T1_SHOP_BLOCK_6 = nil
gg_rct_T1_SHOP_BLOCK_7 = nil
gg_rct_T1_SHOP_KILL_1 = nil
gg_rct_T1_SHOP_KILL_2 = nil
gg_rct_T1_SHOP_KILL_3 = nil
gg_rct_T2_COMPLETE = nil
gg_rct_T2_SHOP_BLOCK_1 = nil
gg_rct_T2_SHOP_BLOCK_2 = nil
gg_rct_T2_SHOP_BLOCK_3 = nil
gg_rct_T2_SHOP_BLOCK_4 = nil
gg_rct_T2_SHOP_BLOCK_5 = nil
gg_rct_T2_SHOP_BLOCK_6 = nil
gg_rct_T2_SHOP_BLOCK_7 = nil
gg_rct_T2_SHOP_KILL_1 = nil
gg_rct_T2_SHOP_KILL_2 = nil
gg_rct_T2_SHOP_KILL_3 = nil
gg_rct_T3_COMPLETE = nil
gg_rct_T3_SHOP_BLOCK_1 = nil
gg_rct_T3_SHOP_BLOCK_2 = nil
gg_rct_T3_SHOP_BLOCK_3 = nil
gg_rct_T3_SHOP_BLOCK_4 = nil
gg_rct_T3_SHOP_BLOCK_5 = nil
gg_rct_T3_SHOP_BLOCK_6 = nil
gg_rct_T3_SHOP_BLOCK_7 = nil
gg_rct_T3_SHOP_KILL_1 = nil
gg_rct_T3_SHOP_KILL_2 = nil
gg_rct_T3_SHOP_KILL_3 = nil
gg_rct_T4_COMPLETE = nil
gg_rct_T4_SHOP_BLOCK_1 = nil
gg_rct_T4_SHOP_BLOCK_2 = nil
gg_rct_T4_SHOP_BLOCK_3 = nil
gg_rct_T4_SHOP_BLOCK_4 = nil
gg_rct_T4_SHOP_BLOCK_5 = nil
gg_rct_T4_SHOP_BLOCK_6 = nil
gg_rct_T4_SHOP_BLOCK_7 = nil
gg_rct_T4_SHOP_KILL_1 = nil
gg_rct_T4_SHOP_KILL_2 = nil
gg_rct_T4_SHOP_KILL_3 = nil
gg_rct_B1 = nil
gg_rct_B2 = nil
gg_rct_B3 = nil
gg_rct_B4 = nil
gg_rct_B5 = nil
gg_rct_B6 = nil
gg_rct_B7 = nil
gg_rct_B8 = nil
gg_rct_Battle2_L = nil
gg_rct_Battle2_R = nil
gg_rct_Battle1_L = nil
gg_rct_Battle1_R = nil
gg_rct_Battle2_M = nil
gg_rct_Battle1_M = nil
gg_rct_T1_PORTAL = nil
gg_rct_T4_PORTAL = nil
gg_rct_T2_PORTAL = nil
gg_rct_T3_PORTAL = nil
gg_cam_Camera_001 = nil
gg_cam_Camera_002 = nil
gg_snd_ThunderClapCaster = nil
gg_snd_SoulPreservation = nil
gg_snd_PossessionMissileLaunch1 = nil
gg_snd_PlaceAncestralGuardian = nil
gg_snd_GruntNoGold1 = nil
gg_snd_Taunt = nil
gg_snd_TheHornOfCenarius = nil
gg_snd_LeftAndRightGlueScreenPopDown = nil
gg_snd_LeftAndRightGlueScreenPopUp = nil
gg_snd_NightElfGoldMineWhat1 = ""
gg_snd_NightElfGoldMineWhat101 = ""
gg_snd_GoodJob = nil
gg_snd_ArrangedTeamInvitation = nil
function InitGlobals()
end

function ItemTable000000_DropItems()
local trigWidget = nil
local trigUnit = nil
local itemID = 0
local canDrop = true

trigWidget = bj_lastDyingWidget
if (trigWidget == nil) then
trigUnit = GetTriggerUnit()
end
if (trigUnit ~= nil) then
canDrop = not IsUnitHidden(trigUnit)
if (canDrop and GetChangingUnit() ~= nil) then
canDrop = (GetChangingUnitPrevOwner() == Player(PLAYER_NEUTRAL_AGGRESSIVE))
end
end
if (canDrop) then
RandomDistReset()
RandomDistAddItem(FourCC("ckng"), 8)
RandomDistAddItem(-1, 92)
itemID = RandomDistChoose()
if (trigUnit ~= nil) then
UnitDropItem(trigUnit, itemID)
else
WidgetDropItem(trigWidget, itemID)
end
end
bj_lastDyingWidget = nil
DestroyTrigger(GetTriggeringTrigger())
end

function InitSounds()
gg_snd_ThunderClapCaster = CreateSound("Abilities\\Spells\\Human\\ThunderClap\\ThunderClapCaster.wav", false, true, true, 10, 10, "SpellsEAX")
SetSoundDuration(gg_snd_ThunderClapCaster, 3450)
SetSoundChannel(gg_snd_ThunderClapCaster, 0)
SetSoundVolume(gg_snd_ThunderClapCaster, -1)
SetSoundPitch(gg_snd_ThunderClapCaster, 1.0)
SetSoundDistances(gg_snd_ThunderClapCaster, 0.0, 10000.0)
SetSoundDistanceCutoff(gg_snd_ThunderClapCaster, 3000.0)
SetSoundConeAngles(gg_snd_ThunderClapCaster, 0.0, 0.0, 127)
SetSoundConeOrientation(gg_snd_ThunderClapCaster, 0.0, 0.0, 0.0)
gg_snd_SoulPreservation = CreateSound("Abilities/Spells/Demon/SoulPreservation/SoulPreservation.flac", false, true, true, 0, 0, "SpellsEAX")
SetSoundParamsFromLabel(gg_snd_SoulPreservation, "SoulPreservation")
SetSoundDuration(gg_snd_SoulPreservation, 3612)
SetSoundVolume(gg_snd_SoulPreservation, 127)
gg_snd_PossessionMissileLaunch1 = CreateSound("Abilities/Spells/Undead/Possession/PossessionMissileLaunch1.flac", false, true, true, 0, 0, "SpellsEAX")
SetSoundParamsFromLabel(gg_snd_PossessionMissileLaunch1, "PossessionMissileLaunch")
SetSoundDuration(gg_snd_PossessionMissileLaunch1, 1334)
SetSoundVolume(gg_snd_PossessionMissileLaunch1, 127)
gg_snd_PlaceAncestralGuardian = CreateSound("Units/Orc/HealingWard/PlaceAncestralGuardian.flac", false, true, true, 0, 0, "SpellsEAX")
SetSoundParamsFromLabel(gg_snd_PlaceAncestralGuardian, "WardBirth")
SetSoundDuration(gg_snd_PlaceAncestralGuardian, 3062)
SetSoundVolume(gg_snd_PlaceAncestralGuardian, 127)
gg_snd_GruntNoGold1 = CreateSound("Sound/Interface/Warning/Orc/GruntNoGold1.flac", false, false, false, 0, 0, "DefaultEAXON")
SetSoundParamsFromLabel(gg_snd_GruntNoGold1, "NoGoldOrc")
SetSoundDuration(gg_snd_GruntNoGold1, 1497)
SetSoundVolume(gg_snd_GruntNoGold1, 105)
gg_snd_Taunt = CreateSound("Abilities/Spells/NightElf/Taunt/Taunt.flac", false, true, true, 0, 0, "SpellsEAX")
SetSoundParamsFromLabel(gg_snd_Taunt, "Taunt")
SetSoundDuration(gg_snd_Taunt, 2815)
SetSoundVolume(gg_snd_Taunt, 127)
gg_snd_TheHornOfCenarius = CreateSound("Sound/Ambient/DoodadEffects/TheHornOfCenarius.flac", false, false, false, 0, 0, "DefaultEAXON")
SetSoundParamsFromLabel(gg_snd_TheHornOfCenarius, "HornOfCenariusSound")
SetSoundDuration(gg_snd_TheHornOfCenarius, 12120)
SetSoundVolume(gg_snd_TheHornOfCenarius, 127)
gg_snd_LeftAndRightGlueScreenPopDown = CreateSound("Sound/Interface/LeftAndRightGlueScreenPopDown.flac", false, false, false, 0, 0, "DefaultEAXON")
SetSoundParamsFromLabel(gg_snd_LeftAndRightGlueScreenPopDown, "BothGlueScreenPopDown")
SetSoundDuration(gg_snd_LeftAndRightGlueScreenPopDown, 2246)
SetSoundVolume(gg_snd_LeftAndRightGlueScreenPopDown, 64)
gg_snd_LeftAndRightGlueScreenPopUp = CreateSound("Sound/Interface/LeftAndRightGlueScreenPopUp.flac", false, false, false, 0, 0, "DefaultEAXON")
SetSoundParamsFromLabel(gg_snd_LeftAndRightGlueScreenPopUp, "BothGlueScreenPopUp")
SetSoundDuration(gg_snd_LeftAndRightGlueScreenPopUp, 1953)
SetSoundVolume(gg_snd_LeftAndRightGlueScreenPopUp, 64)
gg_snd_NightElfGoldMineWhat1 = "EntangledGoldMineWhat"
gg_snd_NightElfGoldMineWhat101 = "EntangledGoldMineWhat"
gg_snd_GoodJob = CreateSound("Sound/Interface/GoodJob.flac", false, false, false, 0, 0, "DefaultEAXON")
SetSoundParamsFromLabel(gg_snd_GoodJob, "GoodJob")
SetSoundDuration(gg_snd_GoodJob, 2548)
SetSoundVolume(gg_snd_GoodJob, 127)
gg_snd_ArrangedTeamInvitation = CreateSound("Sound/Interface/ArrangedTeamInvitation.flac", false, false, false, 0, 0, "DefaultEAXON")
SetSoundParamsFromLabel(gg_snd_ArrangedTeamInvitation, "ArrangedTeamInvitation")
SetSoundDuration(gg_snd_ArrangedTeamInvitation, 2914)
SetSoundVolume(gg_snd_ArrangedTeamInvitation, 48)
end

function CreateBuildingsForPlayer0()
local p = Player(0)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), -3008.0, 1984.0, 270.000, FourCC("hwtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), -2240.0, 2752.0, 270.000, FourCC("hwtw"))
end

function CreateUnitsForPlayer0()
local p = Player(0)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("nfro"), -3165.8, 2922.8, 324.542, FourCC("nfro"))
end

function CreateBuildingsForPlayer1()
local p = Player(1)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), -1728.0, 2752.0, 270.000, FourCC("hwtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), -1216.0, 2752.0, 270.000, FourCC("hwtw"))
end

function CreateBuildingsForPlayer2()
local p = Player(2)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), -3008.0, 960.0, 270.000, FourCC("hwtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), -3008.0, 1472.0, 270.000, FourCC("hwtw"))
end

function CreateBuildingsForPlayer3()
local p = Player(3)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), 2240.0, 2752.0, 270.000, FourCC("hwtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), 3008.0, 1984.0, 270.000, FourCC("hwtw"))
end

function CreateUnitsForPlayer3()
local p = Player(3)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("necr"), 3183.2, 2927.6, 203.020, FourCC("necr"))
end

function CreateBuildingsForPlayer4()
local p = Player(4)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), 3008.0, 1472.0, 270.000, FourCC("hwtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), 3008.0, 960.0, 270.000, FourCC("hwtw"))
end

function CreateBuildingsForPlayer5()
local p = Player(5)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), 1216.0, 2752.0, 270.000, FourCC("hwtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), 1728.0, 2752.0, 270.000, FourCC("hwtw"))
end

function CreateBuildingsForPlayer6()
local p = Player(6)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), 3008.0, -2496.0, 270.000, FourCC("hwtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), 2240.0, -3264.0, 270.000, FourCC("hwtw"))
end

function CreateUnitsForPlayer6()
local p = Player(6)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("nech"), 3171.8, -3435.6, 314.860, FourCC("nech"))
end

function CreateBuildingsForPlayer7()
local p = Player(7)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), 3008.0, -1472.0, 270.000, FourCC("hwtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), 3008.0, -1984.0, 270.000, FourCC("hwtw"))
end

function CreateBuildingsForPlayer8()
local p = Player(8)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), 1728.0, -3264.0, 270.000, FourCC("hwtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), 1216.0, -3264.0, 270.000, FourCC("hwtw"))
end

function CreateBuildingsForPlayer9()
local p = Player(9)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), -2240.0, -3264.0, 270.000, FourCC("hwtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), -3008.0, -2496.0, 270.000, FourCC("hwtw"))
end

function CreateUnitsForPlayer9()
local p = Player(9)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("nrac"), -3152.7, -3420.2, 249.130, FourCC("nrac"))
end

function CreateBuildingsForPlayer10()
local p = Player(10)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), -3008.0, -1984.0, 270.000, FourCC("hwtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), -3008.0, -1472.0, 270.000, FourCC("hwtw"))
end

function CreateBuildingsForPlayer11()
local p = Player(11)
local u
local unitID
local t
local life

u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), -1216.0, -3264.0, 270.000, FourCC("hwtw"))
u = BlzCreateUnitWithSkin(p, FourCC("hwtw"), -1728.0, -3264.0, 270.000, FourCC("hwtw"))
end

function CreatePlayerBuildings()
CreateBuildingsForPlayer0()
CreateBuildingsForPlayer1()
CreateBuildingsForPlayer2()
CreateBuildingsForPlayer3()
CreateBuildingsForPlayer4()
CreateBuildingsForPlayer5()
CreateBuildingsForPlayer6()
CreateBuildingsForPlayer7()
CreateBuildingsForPlayer8()
CreateBuildingsForPlayer9()
CreateBuildingsForPlayer10()
CreateBuildingsForPlayer11()
end

function CreatePlayerUnits()
CreateUnitsForPlayer0()
CreateUnitsForPlayer3()
CreateUnitsForPlayer6()
CreateUnitsForPlayer9()
end

function CreateAllUnits()
CreatePlayerBuildings()
CreatePlayerUnits()
end

function CreateRegions()
local we

gg_rct_CENTER = Rect(-1472.0, -1888.0, 1504.0, 1344.0)
gg_rct_MAP_CENTER = Rect(-64.0, -320.0, 64.0, -192.0)
gg_rct_T1_COMPLETE = Rect(-3584.0, 416.0, -640.0, 3360.0)
gg_rct_T1_SHOP_BLOCK_1 = Rect(-3456.0, 2272.0, -3008.0, 2496.0)
gg_rct_T1_SHOP_BLOCK_2 = Rect(-2752.0, 2752.0, -2528.0, 3200.0)
gg_rct_T1_SHOP_BLOCK_3 = Rect(-3072.0, 2432.0, -2944.0, 2560.0)
gg_rct_T1_SHOP_BLOCK_4 = Rect(-2816.0, 2688.0, -2688.0, 2816.0)
gg_rct_T1_SHOP_BLOCK_5 = Rect(-3008.0, 2496.0, -2880.0, 2624.0)
gg_rct_T1_SHOP_BLOCK_6 = Rect(-2880.0, 2624.0, -2752.0, 2752.0)
gg_rct_T1_SHOP_BLOCK_7 = Rect(-2944.0, 2560.0, -2816.0, 2688.0)
gg_rct_T1_SHOP_KILL_1 = Rect(-3392.0, 2656.0, -2912.0, 3104.0)
gg_rct_T1_SHOP_KILL_2 = Rect(-2912.0, 2784.0, -2752.0, 3104.0)
gg_rct_T1_SHOP_KILL_3 = Rect(-3392.0, 2496.0, -3040.0, 2656.0)
gg_rct_T2_COMPLETE = Rect(640.0, 384.0, 3616.0, 3360.0)
gg_rct_T2_SHOP_BLOCK_1 = Rect(2496.0, 2752.0, 2752.0, 3200.0)
gg_rct_T2_SHOP_BLOCK_2 = Rect(3008.0, 2272.0, 3424.0, 2496.0)
gg_rct_T2_SHOP_BLOCK_3 = Rect(2688.0, 2688.0, 2816.0, 2816.0)
gg_rct_T2_SHOP_BLOCK_4 = Rect(2944.0, 2432.0, 3072.0, 2560.0)
gg_rct_T2_SHOP_BLOCK_5 = Rect(2752.0, 2624.0, 2880.0, 2752.0)
gg_rct_T2_SHOP_BLOCK_6 = Rect(2880.0, 2496.0, 3008.0, 2624.0)
gg_rct_T2_SHOP_BLOCK_7 = Rect(2816.0, 2560.0, 2944.0, 2688.0)
gg_rct_T2_SHOP_KILL_1 = Rect(2912.0, 2624.0, 3360.0, 3104.0)
gg_rct_T2_SHOP_KILL_2 = Rect(3040.0, 2464.0, 3360.0, 2624.0)
gg_rct_T2_SHOP_KILL_3 = Rect(2752.0, 2752.0, 2912.0, 3104.0)
gg_rct_T3_COMPLETE = Rect(640.0, -3840.0, 3584.0, -864.0)
gg_rct_T3_SHOP_BLOCK_1 = Rect(2528.0, -3712.0, 2752.0, -3264.0)
gg_rct_T3_SHOP_BLOCK_2 = Rect(3008.0, -3008.0, 3392.0, -2784.0)
gg_rct_T3_SHOP_BLOCK_3 = Rect(2688.0, -3328.0, 2816.0, -3200.0)
gg_rct_T3_SHOP_BLOCK_4 = Rect(2944.0, -3072.0, 3072.0, -2944.0)
gg_rct_T3_SHOP_BLOCK_5 = Rect(2752.0, -3264.0, 2880.0, -3136.0)
gg_rct_T3_SHOP_BLOCK_6 = Rect(2880.0, -3136.0, 3008.0, -3008.0)
gg_rct_T3_SHOP_BLOCK_7 = Rect(2816.0, -3200.0, 2944.0, -3072.0)
gg_rct_T3_SHOP_KILL_1 = Rect(2912.0, -3648.0, 3360.0, -3168.0)
gg_rct_T3_SHOP_KILL_2 = Rect(3040.0, -3168.0, 3360.0, -3008.0)
gg_rct_T3_SHOP_KILL_3 = Rect(2752.0, -3648.0, 2912.0, -3296.0)
gg_rct_T4_COMPLETE = Rect(-3552.0, -3808.0, -640.0, -864.0)
gg_rct_T4_SHOP_BLOCK_1 = Rect(-2752.0, -3712.0, -2528.0, -3264.0)
gg_rct_T4_SHOP_BLOCK_2 = Rect(-3456.0, -3008.0, -3008.0, -2784.0)
gg_rct_T4_SHOP_BLOCK_3 = Rect(-2816.0, -3328.0, -2688.0, -3200.0)
gg_rct_T4_SHOP_BLOCK_4 = Rect(-3072.0, -3072.0, -2944.0, -2944.0)
gg_rct_T4_SHOP_BLOCK_5 = Rect(-2880.0, -3264.0, -2752.0, -3136.0)
gg_rct_T4_SHOP_BLOCK_6 = Rect(-3008.0, -3136.0, -2880.0, -3008.0)
gg_rct_T4_SHOP_BLOCK_7 = Rect(-2944.0, -3200.0, -2816.0, -3072.0)
gg_rct_T4_SHOP_KILL_1 = Rect(-3360.0, -3648.0, -2912.0, -3168.0)
gg_rct_T4_SHOP_KILL_2 = Rect(-3360.0, -3168.0, -3040.0, -3008.0)
gg_rct_T4_SHOP_KILL_3 = Rect(-2912.0, -3648.0, -2752.0, -3296.0)
gg_rct_B1 = Rect(-1344.0, 1056.0, -1312.0, 1088.0)
gg_rct_B2 = Rect(1312.0, 1056.0, 1344.0, 1088.0)
gg_rct_B3 = Rect(1344.0, -1632.0, 1376.0, -1600.0)
gg_rct_B4 = Rect(-1376.0, -1600.0, -1344.0, -1568.0)
gg_rct_B5 = Rect(-1440.0, -288.0, -1408.0, -256.0)
gg_rct_B6 = Rect(1344.0, -288.0, 1376.0, -256.0)
gg_rct_B7 = Rect(-32.0, 1248.0, 0.0, 1280.0)
gg_rct_B8 = Rect(-32.0, -1824.0, 0.0, -1792.0)
gg_rct_Battle2_L = Rect(-3264.0, -2304.0, -3104.0, -2144.0)
gg_rct_Battle2_R = Rect(-992.0, -2304.0, -832.0, -2144.0)
gg_rct_Battle1_L = Rect(832.0, -2336.0, 992.0, -2176.0)
gg_rct_Battle1_R = Rect(3104.0, -2336.0, 3264.0, -2176.0)
gg_rct_Battle2_M = Rect(-2112.0, -2304.0, -1952.0, -2144.0)
gg_rct_Battle1_M = Rect(1984.0, -2336.0, 2144.0, -2176.0)
gg_rct_T1_PORTAL = Rect(-2720.0, 544.0, -2400.0, 736.0)
gg_rct_T4_PORTAL = Rect(-2720.0, -1248.0, -2400.0, -1056.0)
gg_rct_T2_PORTAL = Rect(2400.0, 544.0, 2720.0, 736.0)
gg_rct_T3_PORTAL = Rect(2400.0, -1248.0, 2720.0, -1056.0)
end

function CreateCameras()
gg_cam_Camera_001 = CreateCameraSetup()
CameraSetupSetField(gg_cam_Camera_001, CAMERA_FIELD_ZOFFSET, 0.0, 0.0)
CameraSetupSetField(gg_cam_Camera_001, CAMERA_FIELD_ROTATION, 90.0, 0.0)
CameraSetupSetField(gg_cam_Camera_001, CAMERA_FIELD_ANGLE_OF_ATTACK, 270.0, 0.0)
CameraSetupSetField(gg_cam_Camera_001, CAMERA_FIELD_TARGET_DISTANCE, 10067.2, 0.0)
CameraSetupSetField(gg_cam_Camera_001, CAMERA_FIELD_ROLL, 0.0, 0.0)
CameraSetupSetField(gg_cam_Camera_001, CAMERA_FIELD_FIELD_OF_VIEW, 70.0, 0.0)
CameraSetupSetField(gg_cam_Camera_001, CAMERA_FIELD_FARZ, 10000.0, 0.0)
CameraSetupSetField(gg_cam_Camera_001, CAMERA_FIELD_NEARZ, 16.0, 0.0)
CameraSetupSetField(gg_cam_Camera_001, CAMERA_FIELD_LOCAL_PITCH, 0.0, 0.0)
CameraSetupSetField(gg_cam_Camera_001, CAMERA_FIELD_LOCAL_YAW, 0.0, 0.0)
CameraSetupSetField(gg_cam_Camera_001, CAMERA_FIELD_LOCAL_ROLL, 0.0, 0.0)
CameraSetupSetDestPosition(gg_cam_Camera_001, 0.0, -256.0, 0.0)
gg_cam_Camera_002 = CreateCameraSetup()
CameraSetupSetField(gg_cam_Camera_002, CAMERA_FIELD_ZOFFSET, 350.0, 0.0)
CameraSetupSetField(gg_cam_Camera_002, CAMERA_FIELD_ROTATION, 90.0, 0.0)
CameraSetupSetField(gg_cam_Camera_002, CAMERA_FIELD_ANGLE_OF_ATTACK, 340.0, 0.0)
CameraSetupSetField(gg_cam_Camera_002, CAMERA_FIELD_TARGET_DISTANCE, 600.0, 0.0)
CameraSetupSetField(gg_cam_Camera_002, CAMERA_FIELD_ROLL, 0.0, 0.0)
CameraSetupSetField(gg_cam_Camera_002, CAMERA_FIELD_FIELD_OF_VIEW, 80.0, 0.0)
CameraSetupSetField(gg_cam_Camera_002, CAMERA_FIELD_FARZ, 10000.0, 0.0)
CameraSetupSetField(gg_cam_Camera_002, CAMERA_FIELD_NEARZ, 16.0, 0.0)
CameraSetupSetField(gg_cam_Camera_002, CAMERA_FIELD_LOCAL_PITCH, 0.0, 0.0)
CameraSetupSetField(gg_cam_Camera_002, CAMERA_FIELD_LOCAL_YAW, 0.0, 0.0)
CameraSetupSetField(gg_cam_Camera_002, CAMERA_FIELD_LOCAL_ROLL, 0.0, 0.0)
CameraSetupSetDestPosition(gg_cam_Camera_002, 0.0, -3000.0, 0.0)
end

function InitUpgrades_Player0()
SetPlayerTechResearched(Player(0), FourCC("Robf"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(0), FourCC("Resi"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(0), FourCC("Rhse"), 1)
end

function InitUpgrades_Player1()
SetPlayerTechResearched(Player(1), FourCC("Robf"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(1), FourCC("Resi"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(1), FourCC("Rhse"), 1)
end

function InitUpgrades_Player2()
SetPlayerTechResearched(Player(2), FourCC("Robf"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(2), FourCC("Resi"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(2), FourCC("Rhse"), 1)
end

function InitUpgrades_Player3()
SetPlayerTechResearched(Player(3), FourCC("Robf"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(3), FourCC("Resi"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(3), FourCC("Rhse"), 1)
end

function InitUpgrades_Player4()
SetPlayerTechResearched(Player(4), FourCC("Robf"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(4), FourCC("Resi"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(4), FourCC("Rhse"), 1)
end

function InitUpgrades_Player5()
SetPlayerTechResearched(Player(5), FourCC("Robf"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(5), FourCC("Resi"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(5), FourCC("Rhse"), 1)
end

function InitUpgrades_Player6()
SetPlayerTechResearched(Player(6), FourCC("Robf"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(6), FourCC("Resi"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(6), FourCC("Rhse"), 1)
end

function InitUpgrades_Player7()
SetPlayerTechResearched(Player(7), FourCC("Robf"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(7), FourCC("Resi"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(7), FourCC("Rhse"), 1)
end

function InitUpgrades_Player8()
SetPlayerTechResearched(Player(8), FourCC("Robf"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(8), FourCC("Resi"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(8), FourCC("Rhse"), 1)
end

function InitUpgrades_Player9()
SetPlayerTechResearched(Player(9), FourCC("Robf"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(9), FourCC("Resi"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(9), FourCC("Rhse"), 1)
end

function InitUpgrades_Player10()
SetPlayerTechResearched(Player(10), FourCC("Robf"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(10), FourCC("Resi"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(10), FourCC("Rhse"), 1)
end

function InitUpgrades_Player11()
SetPlayerTechResearched(Player(11), FourCC("Robf"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rows"), 1)
SetPlayerTechResearched(Player(11), FourCC("Resi"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rupc"), 1)
SetPlayerTechResearched(Player(11), FourCC("Rhse"), 1)
end

function InitUpgrades()
InitUpgrades_Player0()
InitUpgrades_Player1()
InitUpgrades_Player2()
InitUpgrades_Player3()
InitUpgrades_Player4()
InitUpgrades_Player5()
InitUpgrades_Player6()
InitUpgrades_Player7()
InitUpgrades_Player8()
InitUpgrades_Player9()
InitUpgrades_Player10()
InitUpgrades_Player11()
end

function InitCustomPlayerSlots()
SetPlayerStartLocation(Player(0), 0)
ForcePlayerStartLocation(Player(0), 0)
SetPlayerColor(Player(0), ConvertPlayerColor(0))
SetPlayerRacePreference(Player(0), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(0), false)
SetPlayerController(Player(0), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(1), 1)
ForcePlayerStartLocation(Player(1), 1)
SetPlayerColor(Player(1), ConvertPlayerColor(1))
SetPlayerRacePreference(Player(1), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(1), false)
SetPlayerController(Player(1), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(2), 2)
ForcePlayerStartLocation(Player(2), 2)
SetPlayerColor(Player(2), ConvertPlayerColor(2))
SetPlayerRacePreference(Player(2), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(2), false)
SetPlayerController(Player(2), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(3), 3)
ForcePlayerStartLocation(Player(3), 3)
SetPlayerColor(Player(3), ConvertPlayerColor(3))
SetPlayerRacePreference(Player(3), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(3), false)
SetPlayerController(Player(3), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(4), 4)
ForcePlayerStartLocation(Player(4), 4)
SetPlayerColor(Player(4), ConvertPlayerColor(4))
SetPlayerRacePreference(Player(4), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(4), false)
SetPlayerController(Player(4), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(5), 5)
ForcePlayerStartLocation(Player(5), 5)
SetPlayerColor(Player(5), ConvertPlayerColor(5))
SetPlayerRacePreference(Player(5), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(5), false)
SetPlayerController(Player(5), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(6), 6)
ForcePlayerStartLocation(Player(6), 6)
SetPlayerColor(Player(6), ConvertPlayerColor(6))
SetPlayerRacePreference(Player(6), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(6), false)
SetPlayerController(Player(6), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(7), 7)
ForcePlayerStartLocation(Player(7), 7)
SetPlayerColor(Player(7), ConvertPlayerColor(7))
SetPlayerRacePreference(Player(7), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(7), false)
SetPlayerController(Player(7), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(8), 8)
ForcePlayerStartLocation(Player(8), 8)
SetPlayerColor(Player(8), ConvertPlayerColor(8))
SetPlayerRacePreference(Player(8), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(8), false)
SetPlayerController(Player(8), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(9), 9)
ForcePlayerStartLocation(Player(9), 9)
SetPlayerColor(Player(9), ConvertPlayerColor(9))
SetPlayerRacePreference(Player(9), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(9), false)
SetPlayerController(Player(9), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(10), 10)
ForcePlayerStartLocation(Player(10), 10)
SetPlayerColor(Player(10), ConvertPlayerColor(10))
SetPlayerRacePreference(Player(10), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(10), false)
SetPlayerController(Player(10), MAP_CONTROL_USER)
SetPlayerStartLocation(Player(11), 11)
ForcePlayerStartLocation(Player(11), 11)
SetPlayerColor(Player(11), ConvertPlayerColor(11))
SetPlayerRacePreference(Player(11), RACE_PREF_HUMAN)
SetPlayerRaceSelectable(Player(11), false)
SetPlayerController(Player(11), MAP_CONTROL_USER)
end

function InitCustomTeams()
SetPlayerTeam(Player(0), 0)
SetPlayerState(Player(0), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(1), 0)
SetPlayerState(Player(1), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(2), 0)
SetPlayerState(Player(2), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerAllianceStateAllyBJ(Player(0), Player(1), true)
SetPlayerAllianceStateAllyBJ(Player(0), Player(2), true)
SetPlayerAllianceStateAllyBJ(Player(1), Player(0), true)
SetPlayerAllianceStateAllyBJ(Player(1), Player(2), true)
SetPlayerAllianceStateAllyBJ(Player(2), Player(0), true)
SetPlayerAllianceStateAllyBJ(Player(2), Player(1), true)
SetPlayerAllianceStateVisionBJ(Player(0), Player(1), true)
SetPlayerAllianceStateVisionBJ(Player(0), Player(2), true)
SetPlayerAllianceStateVisionBJ(Player(1), Player(0), true)
SetPlayerAllianceStateVisionBJ(Player(1), Player(2), true)
SetPlayerAllianceStateVisionBJ(Player(2), Player(0), true)
SetPlayerAllianceStateVisionBJ(Player(2), Player(1), true)
SetPlayerTeam(Player(3), 1)
SetPlayerState(Player(3), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(4), 1)
SetPlayerState(Player(4), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(5), 1)
SetPlayerState(Player(5), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerAllianceStateAllyBJ(Player(3), Player(4), true)
SetPlayerAllianceStateAllyBJ(Player(3), Player(5), true)
SetPlayerAllianceStateAllyBJ(Player(4), Player(3), true)
SetPlayerAllianceStateAllyBJ(Player(4), Player(5), true)
SetPlayerAllianceStateAllyBJ(Player(5), Player(3), true)
SetPlayerAllianceStateAllyBJ(Player(5), Player(4), true)
SetPlayerAllianceStateVisionBJ(Player(3), Player(4), true)
SetPlayerAllianceStateVisionBJ(Player(3), Player(5), true)
SetPlayerAllianceStateVisionBJ(Player(4), Player(3), true)
SetPlayerAllianceStateVisionBJ(Player(4), Player(5), true)
SetPlayerAllianceStateVisionBJ(Player(5), Player(3), true)
SetPlayerAllianceStateVisionBJ(Player(5), Player(4), true)
SetPlayerTeam(Player(6), 2)
SetPlayerState(Player(6), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(7), 2)
SetPlayerState(Player(7), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(8), 2)
SetPlayerState(Player(8), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerAllianceStateAllyBJ(Player(6), Player(7), true)
SetPlayerAllianceStateAllyBJ(Player(6), Player(8), true)
SetPlayerAllianceStateAllyBJ(Player(7), Player(6), true)
SetPlayerAllianceStateAllyBJ(Player(7), Player(8), true)
SetPlayerAllianceStateAllyBJ(Player(8), Player(6), true)
SetPlayerAllianceStateAllyBJ(Player(8), Player(7), true)
SetPlayerAllianceStateVisionBJ(Player(6), Player(7), true)
SetPlayerAllianceStateVisionBJ(Player(6), Player(8), true)
SetPlayerAllianceStateVisionBJ(Player(7), Player(6), true)
SetPlayerAllianceStateVisionBJ(Player(7), Player(8), true)
SetPlayerAllianceStateVisionBJ(Player(8), Player(6), true)
SetPlayerAllianceStateVisionBJ(Player(8), Player(7), true)
SetPlayerTeam(Player(9), 3)
SetPlayerState(Player(9), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(10), 3)
SetPlayerState(Player(10), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerTeam(Player(11), 3)
SetPlayerState(Player(11), PLAYER_STATE_ALLIED_VICTORY, 1)
SetPlayerAllianceStateAllyBJ(Player(9), Player(10), true)
SetPlayerAllianceStateAllyBJ(Player(9), Player(11), true)
SetPlayerAllianceStateAllyBJ(Player(10), Player(9), true)
SetPlayerAllianceStateAllyBJ(Player(10), Player(11), true)
SetPlayerAllianceStateAllyBJ(Player(11), Player(9), true)
SetPlayerAllianceStateAllyBJ(Player(11), Player(10), true)
SetPlayerAllianceStateVisionBJ(Player(9), Player(10), true)
SetPlayerAllianceStateVisionBJ(Player(9), Player(11), true)
SetPlayerAllianceStateVisionBJ(Player(10), Player(9), true)
SetPlayerAllianceStateVisionBJ(Player(10), Player(11), true)
SetPlayerAllianceStateVisionBJ(Player(11), Player(9), true)
SetPlayerAllianceStateVisionBJ(Player(11), Player(10), true)
end

function InitAllyPriorities()
SetStartLocPrioCount(0, 2)
SetStartLocPrio(0, 0, 1, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(0, 1, 2, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(1, 2)
SetStartLocPrio(1, 0, 0, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(1, 1, 2, MAP_LOC_PRIO_LOW)
SetStartLocPrioCount(2, 2)
SetStartLocPrio(2, 0, 0, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(2, 1, 1, MAP_LOC_PRIO_LOW)
SetStartLocPrioCount(3, 2)
SetStartLocPrio(3, 0, 4, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(3, 1, 5, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(4, 2)
SetStartLocPrio(4, 0, 3, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(4, 1, 5, MAP_LOC_PRIO_LOW)
SetStartLocPrioCount(5, 2)
SetStartLocPrio(5, 0, 3, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(5, 1, 4, MAP_LOC_PRIO_LOW)
SetStartLocPrioCount(6, 2)
SetStartLocPrio(6, 0, 7, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(6, 1, 8, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(7, 2)
SetStartLocPrio(7, 0, 6, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(7, 1, 8, MAP_LOC_PRIO_LOW)
SetStartLocPrioCount(8, 2)
SetStartLocPrio(8, 0, 6, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(8, 1, 7, MAP_LOC_PRIO_LOW)
SetStartLocPrioCount(9, 2)
SetStartLocPrio(9, 0, 10, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(9, 1, 11, MAP_LOC_PRIO_HIGH)
SetStartLocPrioCount(10, 2)
SetStartLocPrio(10, 0, 9, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(10, 1, 11, MAP_LOC_PRIO_LOW)
SetStartLocPrioCount(11, 2)
SetStartLocPrio(11, 0, 9, MAP_LOC_PRIO_HIGH)
SetStartLocPrio(11, 1, 10, MAP_LOC_PRIO_LOW)
end

function main()
SetCameraBounds(-3328.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), -3584.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM), 3328.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), 3072.0 - GetCameraMargin(CAMERA_MARGIN_TOP), -3328.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), 3072.0 - GetCameraMargin(CAMERA_MARGIN_TOP), 3328.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), -3584.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM))
SetDayNightModels("Environment\\DNC\\DNCLordaeron\\DNCLordaeronTerrain\\DNCLordaeronTerrain.mdl", "Environment\\DNC\\DNCLordaeron\\DNCLordaeronUnit\\DNCLordaeronUnit.mdl")
SetTerrainFogEx(0, 100000.0, 100000.0, 0.500, 0.000, 0.000, 0.000)
NewSoundEnvironment("Default")
SetAmbientDaySound("CityScapeDay")
SetAmbientNightSound("CityScapeNight")
SetMapMusic("Music", true, 0)
InitSounds()
CreateRegions()
CreateCameras()
InitUpgrades()
CreateAllUnits()
InitBlizzard()
InitGlobals()
end

function config()
SetMapName("")
SetMapDescription("TRIGSTR_3435")
SetPlayers(12)
SetTeams(12)
SetGamePlacement(MAP_PLACEMENT_TEAMS_TOGETHER)
DefineStartLocation(0, -2560.0, 2304.0)
DefineStartLocation(1, -1472.0, 2304.0)
DefineStartLocation(2, -2560.0, 1216.0)
DefineStartLocation(3, 2560.0, 2304.0)
DefineStartLocation(4, 2560.0, 1216.0)
DefineStartLocation(5, 1472.0, 2304.0)
DefineStartLocation(6, 2560.0, -2752.0)
DefineStartLocation(7, 2560.0, -1728.0)
DefineStartLocation(8, 1472.0, -2752.0)
DefineStartLocation(9, -2560.0, -2752.0)
DefineStartLocation(10, -2560.0, -1728.0)
DefineStartLocation(11, -1472.0, -2752.0)
InitCustomPlayerSlots()
InitCustomTeams()
InitAllyPriorities()
end

