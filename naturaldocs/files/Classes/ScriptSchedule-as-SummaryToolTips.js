﻿NDSummary.OnToolTipsLoaded("File:Classes/ScriptSchedule.as",{127:"<div class=\"NDToolTip TClass LAngelscript\"><div class=\"TTSummary\">Global namespace.</div></div>",130:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype130\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/2/2\">Task@ GetTask(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">int</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">iIndex</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"3/1/4/4\" style=\"grid-area:1/4/2/5\">) <span class=\"SHKeyword\">const</span></div></div></div></div><div class=\"TTSummary\">Gets a task in this schedule.</div></div>",131:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype131\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">string</span> szName() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the name of this schedule.</div></div>",132:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype132\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/4/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/4/2\">ScriptSchedule@ ScriptSchedule(</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\"><span class=\"SHKeyword\">int</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">iInterruptMask,</div><div class=\"PType\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\"><span class=\"SHKeyword\">int</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">iSoundMask,</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</div><div class=\"PType\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\"><span class=\"SHKeyword\">in</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"3/4/4/5\" data-NarrowGridArea=\"4/3/5/4\" style=\"grid-area:3/4/4/5\">szName</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"3/5/4/6\" data-NarrowGridArea=\"5/1/6/5\" style=\"grid-area:3/5/4/6\">)</div></div></div></div><div class=\"TTSummary\">Constructor</div></div>",133:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype133\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">Schedule@ opImplCast()</div></div><div class=\"TTSummary\">Cast to Schedule</div></div>",134:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype134\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">void</span> AddTask(</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">const</span> ScriptTask&amp;&nbsp;</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\"><span class=\"SHKeyword\">in</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">task</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"3/1/4/5\" style=\"grid-area:1/5/2/6\">)</div></div></div></div><div class=\"TTSummary\">Adds a task to the list</div></div>",136:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype136\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> cTasks</div></div><div class=\"TTSummary\">Number of tasks in this schedule.</div></div>",137:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype137\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> iInterruptMask</div></div><div class=\"TTSummary\">A bit mask of conditions that can interrupt this schedule.</div></div>",138:"<div class=\"NDToolTip TVariable LAngelscript\"><div id=\"NDPrototype138\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> iSoundMask</div></div><div class=\"TTSummary\">A more specific mask that indicates which TYPES of sounds will interrupt the schedule in the event that the schedule is broken by COND_HEAR_SOUND.</div></div>"});