﻿NDSummary.OnToolTipsLoaded("File:Classes/CSoundEnt.as",{896:"<div class=\"NDToolTip TClass LAngelscript\"><div class=\"TTSummary\">Global namespace.</div></div>",899:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype899\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/6/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/6/2\"><span class=\"SHKeyword\">void</span> InsertSound(</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\"><span class=\"SHKeyword\">int</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">iType,</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">const</span> Vector&amp;&nbsp;</div><div class=\"PType\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\"><span class=\"SHKeyword\">in</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">vecOrigin,</div><div class=\"PType\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\"><span class=\"SHKeyword\">int</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"3/4/4/5\" data-NarrowGridArea=\"4/3/5/4\" style=\"grid-area:3/4/4/5\">iVolume,</div><div class=\"PType\" data-WideGridArea=\"4/3/5/4\" data-NarrowGridArea=\"5/2/6/3\" style=\"grid-area:4/3/5/4\"><span class=\"SHKeyword\">float</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"4/4/5/5\" data-NarrowGridArea=\"5/3/6/4\" style=\"grid-area:4/4/5/5\">flDuration,</div><div class=\"PType\" data-WideGridArea=\"5/3/6/4\" data-NarrowGridArea=\"6/2/7/3\" style=\"grid-area:5/3/6/4\">CBaseEntity@&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"5/4/6/5\" data-NarrowGridArea=\"6/3/7/4\" style=\"grid-area:5/4/6/5\">pOwner</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"5/5/6/6\" data-NarrowGridArea=\"7/1/8/5\" style=\"grid-area:5/5/6/6\">)</div></div></div></div><div class=\"TTSummary\">Inserts a sound. iType is one of the bits_SOUND enum.</div></div>",900:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype900\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> ActiveList()</div></div><div class=\"TTSummary\">Returns the head of the active list.</div></div>",901:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype901\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> FreeList()</div></div><div class=\"TTSummary\">Returns the head of the free list.</div></div>",902:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype902\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/2/2\">CSound@ SoundPointerForIndex(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">int</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">iIndex</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"3/1/4/4\" style=\"grid-area:1/4/2/5\">)</div></div></div></div><div class=\"TTSummary\">Return a pointer for this index in the sound list.</div></div>",903:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype903\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">int</span> ClientSoundIndex(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">edict_t@&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">pClient</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"3/1/4/4\" style=\"grid-area:1/4/2/5\">)</div></div></div></div><div class=\"TTSummary\">Gets the index for the given client.</div></div>",904:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype904\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> IsEmpty()</div></div><div class=\"TTSummary\">Returns whether the sound list is empty.</div></div>",905:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype905\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">int</span> ISoundsInList(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">int</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">iListType</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"3/1/4/4\" style=\"grid-area:1/4/2/5\">)</div></div></div></div><div class=\"TTSummary\">Returns the number of sounds in the given list. Must be either SOUNDLISTTYPE_FREE or SOUNDLISTTYPE_ACTIVE.</div></div>",907:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype907\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const int</span> m_cLastActiveSounds</div></div><div class=\"TTSummary\">keeps track of the number of active sounds at the last update. (for diagnostic work)</div></div>"});