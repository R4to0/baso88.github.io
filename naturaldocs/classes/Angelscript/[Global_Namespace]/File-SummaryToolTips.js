﻿NDSummary.OnToolTipsLoaded("AngelscriptClass:[Global_Namespace].File",{459:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype459\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> IsOpen() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns whether the file was successfully opened.</div></div>",460:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype460\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> Close()</div></div><div class=\"TTSummary\">Closes the file if it is open.</div></div>",461:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype461\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> Remove()</div></div><div class=\"TTSummary\">Removes the file. The file must be open, and you must have write access.</div></div>",462:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype462\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">size_t GetSize() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns the size of the file.</div></div>",463:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype463\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">size_t Tell() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Tells the position of the read/write pointer.</div></div>",464:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype464\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/3/2\">size_t Seek(</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">const</span>&nbsp;</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">size_t&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">uiPosition,</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">const</span>&nbsp;</div><div class=\"PType\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">SeekFileFlags_t&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">uiSeekMode</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"4/1/5/5\" style=\"grid-area:2/5/3/6\">)</div></div></div></div><div class=\"TTSummary\">Sets the read/write pointer to a new position. Returns the new position within the file.</div></div>",465:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype465\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> EOFReached() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns whether end of file was reached.</div></div>",466:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype466\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">string</span> ReadCharacter()</div></div><div class=\"TTSummary\">Reads a single character.</div></div>",467:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype467\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"7\" data-NarrowColumnCount=\"6\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/7\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">void</span> ReadLine(</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">string</span>&amp;&nbsp;</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\"><span class=\"SHKeyword\">out</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">szOutLine,</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</div><div class=\"PType\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\"><span class=\"SHKeyword\">in</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">szDelim</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"3/4/4/5\" style=\"grid-area:2/5/3/6\">=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"2/6/3/7\" data-NarrowGridArea=\"3/5/4/6\" style=\"grid-area:2/6/3/7\"><span class=\"SHString\">\'\\n\'</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"2/7/3/8\" data-NarrowGridArea=\"4/1/5/7\" style=\"grid-area:2/7/3/8\">)</div></div></div></div><div class=\"TTSummary\">Reads a line from the file.</div></div>",468:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype468\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">bool</span> Read(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">BLOB@&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">pBlob,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">size_t&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">uiSizeInBytes</div><div class=\"PAfterParameters\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"4/1/5/4\" style=\"grid-area:2/4/3/5\">)</div></div></div></div><div class=\"TTSummary\">Reads a number of bytes into the given BLOB.</div></div>",469:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype469\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">bool</span> Read(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">BLOB@&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">pBlob</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"3/1/4/4\" style=\"grid-area:1/4/2/5\">)</div></div></div></div><div class=\"TTSummary\">Reads as much as possible data into the given BLOB.</div></div>",470:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype470\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/3/2\">BLOB@ ReadBlob(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">size_t&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">uiSizeInBytes,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">bool</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">fCanResize</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"3/4/4/5\" style=\"grid-area:2/5/3/6\"><span class=\"SHKeyword\">true</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"2/6/3/7\" data-NarrowGridArea=\"4/1/5/6\" style=\"grid-area:2/6/3/7\">)</div></div></div></div><div class=\"TTSummary\">Reads a number of bytes into a BLOB.</div></div>",471:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype471\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">BLOB@ ReadBlob()</div></div><div class=\"TTSummary\">Reads as much as possible data into a BLOB.</div></div>",472:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype472\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">void</span> Write(</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">const string</span>&amp;&nbsp;</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\"><span class=\"SHKeyword\">in</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">szString</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"3/1/4/5\" style=\"grid-area:1/5/2/6\">)</div></div></div></div><div class=\"TTSummary\">Writes a string to the file.</div></div>",473:"<div class=\"NDToolTip TFunction LAngelscript\"><div id=\"NDPrototype473\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">void</span> Write(</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">const</span>&nbsp;</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">BLOB@&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">pBlob</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"3/1/4/5\" style=\"grid-area:1/5/2/6\">)</div></div></div></div><div class=\"TTSummary\">Writes a blob to the file.</div></div>"});