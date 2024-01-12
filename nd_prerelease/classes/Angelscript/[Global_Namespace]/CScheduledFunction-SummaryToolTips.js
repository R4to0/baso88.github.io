﻿NDSummary.OnToolTipsLoaded("AngelscriptClass:[Global_Namespace].CScheduledFunction",{1096:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype1096\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> GetNextCallTime() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the next call time, in seconds</div></div>",1097:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype1097\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">void</span> SetNextCallTime(</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">const</span>&nbsp;</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\"><span class=\"SHKeyword\">float</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">flNextCallTime</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"3/1/4/5\" style=\"grid-area:1/5/2/6\">)</div></div></div></div><div class=\"TTSummary\">Sets the next call time, in seconds. Is an absolute value (g_Engine.time + RepeatTime by default).Times in the past will result in a call on the next frame.</div></div>",1098:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype1098\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">float</span> GetRepeatTime() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the repeat time, in seconds</div></div>",1099:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype1099\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">void</span> SetRepeatTime(</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">const</span>&nbsp;</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\"><span class=\"SHKeyword\">float</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">flRepeatTime</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"3/1/4/5\" style=\"grid-area:1/5/2/6\">)</div></div></div></div><div class=\"TTSummary\">Sets the repeat time, in seconds. Must be a positive value (may be zero)</div></div>",1100:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype1100\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> GetRepeatCount() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the repeat count</div></div>",1101:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype1101\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> IsInfiniteRepeat() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns whether this function repeats infinitely</div></div>",1102:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype1102\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">void</span> SetRepeatCount(</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">const</span>&nbsp;</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\"><span class=\"SHKeyword\">int</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">iRepeatCount</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"3/1/4/5\" style=\"grid-area:1/5/2/6\">)</div></div></div></div><div class=\"TTSummary\">Sets the repeat count. Must be a positive value (may be zero) or REPEAT_INFINITE_TIMES</div></div>",1103:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype1103\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> MakeInfiniteRepeat()</div></div><div class=\"TTSummary\">Makes this an infinite repeat function</div></div>",1104:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype1104\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> HasBeenRemoved() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns whether this function has been removed from the scheduler or not</div></div>"});