'use strict';

var model = {
	categories: [
		{
			hlink: "selection",
			hline: "Selection",
			contents: [
				{
					tlink: "rclickselect",
					tline: "Right Click: select",
					description: "Выбора объекта, правой кнопкой мыши по объекту, (Right Click) select.",
					imgsrc: "selection/rclickselect.jpg"
				},
				{
					tlink: "aselectall",
					tline: "A: select all",
					description: "Выбор всех объектов, (key:A) select all.",
					imgsrc: "selection/aselectall.jpg"
				},
				{
					tlink: "blcrecselectionadd",
					tline: "B → ЛКМ: rectangle selection (add)",
					description: "Выбора объектов при выделении прямоугольником, (key:B) и ЛКМ rectangle selection (add).",
					imgsrc: "selection/blcrecselectionadd.jpg"
				},
				{
					tlink: "bmcrecselectionremove",
					tline: "B → CКМ: rectangle selection (remove)",
					description: "Для отмены выбора, (key:B) и СКМ rectangle selection (remove).",
					imgsrc: "selection/bmcrecselectionremove.jpg"
				},
				{
					tlink: "сlccircleselectionadd",
					tline: "C → ЛКМ: circle selection (add)",
					description: "Выбор объектов кисточкой, (key:C) и ЛКМ circle selection (add). Scroll Wheel изменить радиус круга.",
					imgsrc: "selection/сlccircleselectionadd.jpg"
				},
				{
					tlink: "сlccircleselectionremove",
					tline: "C → CКМ: circle selection (remove)",
					description: "Для отмены выбора, (key:C) и СКМ circle selection (remove). Scroll Wheel изменить радиус круга.",
					imgsrc: "selection/сlccircleselectionremove.jpg"
				},
				{
					tlink: "ctrllclassoselectionadd",
					tline: "Ctrl + ЛКМ: lasso selection (add)",
					description: "Для выбора объектов, (Ctrl + ЛКМ) lasso selection (add).",
					imgsrc: "selection/ctrllclassoselectionadd.jpg"
				},
				{
					tlink: "ctrllclassoselectionremove",
					tline: "Ctrl + Shift + ЛКМ: lasso selection (remove)",
					description: "Для отмены выбора, (Ctrl + Shift + ЛКМ) lasso selection (remove).",
					imgsrc: "selection/ctrllclassoselectionremove.jpg"
				},
				{
					tlink: "altrcselectedgeloop",
					tline: "Alt + ПКМ: select edge loop",
					description: "Выбор связанных объектов, (Alt + ПКМ) в режиме Edit Mode.",
					imgsrc: "selection/altrcselectedgeloop.jpg"
				},
				{
					tlink: "ctrlaltrcselectedgering",
					tline: "Ctrl + Alt + ПКМ: select edge ring",
					description: "Выбор связанных объектов по кругу, (Ctrl + Alt + ПКМ) в режиме Edit Mode.",
					imgsrc: "selection/ctrlaltrcselectedgering.jpg"
				},
				{
					tlink: "ctrltabswitchprim",
					tline: "Ctrl + Tab: switch between Edge/Vertex/Face selection mode",
					description: "(Ctrl + Tab) switch between Edge/Vertex/Face selection mode в режиме Edit Mode.",
					imgsrc: "selection/ctrltabswitchprim.jpg"
				},
				{
					tlink: "ctrlplusminusgrowshrink",
					tline: "Ctrl + +/-: grow/shrink slection",
					description: "Выбрать 1 объект, применить shortcut для охватывающего массового выделения, (Ctrl + +/-) grow/shrink slection в режиме Edit Mode.",
					imgsrc: "selection/ctrlplusminusgrowshrink.jpg"
				},
				{
					tlink: "lselectsharedVEF",
					tline: "L: select shared Vertices/Edges/Faces",
					description: "Навести курсор на область (например заранее помеченную с помощью mark seam) и нажать \"l\", (key:L) select shared Vertices/Edges/Faces.",
					imgsrc: "selection/lselectsharedVEF.jpg"
				}
			]
		},

		{
			hlink: "navigation",
			hline: "Navigation",
			contents: [
				{
					tlink: "allinnavigations",
					tline: "Navigations",
					description: "Вращение вокруг выделенного объекта, (Middle Click) orbit. Перемещение (лев,прав,верх,вниз), (Shift + Middle Click) pan. (Ctrl + Middle Click) zoom. (Scroll Wheel) zoom.",
					imgsrc: "navigation/mcorbit.jpg"
				},
				{
					tlink: "enterexitcam",
					tline: "Camera views",
					description: "Вид из камеры и отмена, (numpad:0) enter/exit camera view. Проекция, (numpad:5) perspective/orthographic view. Позиция камеры, (numpad:1/3/7) front/right/top view, (Ctrl + numpad:1/3/7) back/left/bottom view.",
					imgsrc: "navigation/enterexitcam.jpg"
				},
				{
					tlink: "dotframeselected",
					tline: "\".\"\: Frame selected / Home: Frame all",
					description: "Перейти к выбранной модели или обозреть все модели, (numpad:.) frame selected, (key:Home) frame all.",
					imgsrc: "navigation/dotframeselected.jpg"
				}
			]
		},

		{
			hlink: "viewport",
			hline: "View Port",
			contents: [
				{
					tlink: "move3dcursor",
					tline: "Left Click: move 3d cursor",
					description: "ЛКМ передвигает 3d каретку в позиции которой создается новый меш, (Left Click) move 3d cursor.",
					imgsrc: "viewport/move3dcursor.jpg"
				},
				{
					tlink: "shiftcresetvp",
					tline: "Shift + C: reset viewport",
					description: "Возвращает 3d каретку в центр (0, 0, 0), (Shift + C) reset viewport.",
					imgsrc: "viewport/shiftcresetvp.jpg"
				},
				{
					tlink: "npisolateframeselect",
					tline: "/: isolate and frame selection",
					description: "Переносится к выбранному мешу и прячет остальные меши (и обратно), (numpad:/) isolate and frame selection.",
					imgsrc: "viewport/npisolateframeselect.jpg"
				},
				{
					tlink: "ztogglewireframe",
					tline: "Z: toggle wireframe/shaded display",
					description: "(key:Z) toggle wireframe/shaded display.",
					imgsrc: "viewport/ztogglewireframe.jpg"
				},
				{
					tlink: "altztexshaded",
					tline: "Alt + Z: toggle texture/shaded display",
					description: "(Alt + Z) toggle texture/shaded display.",
					imgsrc: "viewport/altztexshaded.jpg"
				},
				{
					tlink: "shiftzrendshaded",
					tline: "Shift + Z: toggle rendered/shaded display",
					description: "(Shift + Z) toggle rendered/shaded display.",
					imgsrc: "viewport/shiftzrendshaded.jpg"
				}
			]
		},

		{
			hlink: "modeling",
			hline: "Modeling",
			contents: [
				{
					tlink: "ctrlrloopcut",
					tline: "Ctrl + R: loop cut",
					description: "Scroll Wheel or PageUp/PageDown for more subdivisions, right click to release loop cuts at center, (Ctrl + R) loop cut.",
					imgsrc: "modeling/ctrlrloopcut.jpg"
				},
				{
					tlink: "kknifetool",
					tline: "K: knife tool",
					description: "Отметить зоны для применение нажать ENTER, (key:K) knife tool.",
					imgsrc: "modeling/kknifetool.jpg"
				},
				{
					tlink: "iinset",
					tline: "I: inset",
					description: "Удобно делать окна/двери, (key:I) inset.",
					imgsrc: "modeling/iinset.jpg"
				},
				{
					tlink: "eextrude",
					tline: "E: extrude",
					description: "Экструдирование, (key:E) extrude.",
					imgsrc: "modeling/eextrude.jpg"
				},
				{
					tlink: "ctrlbbevel",
					tline: "Ctrl + B: bevel",
					description: "Scroll Wheel for more subdivisions, (Ctrl + B) bevel.",
					imgsrc: "modeling/ctrlbbevel.jpg"
				},
				{
					tlink: "ggslide",
					tline: "G + G: slide",
					description: "Позиционирование Vertex/Edge/Face в доль меша, (G + G) slide.",
					imgsrc: "modeling/ggslide.jpg"
				},
				{
					tlink: "vrip",
					tline: "V: rip",
					description: "(key:V) rip.",
					imgsrc: "modeling/vrip.jpg"
				},
				{
					tlink: "altvrip",
					tline: "Alt + V: rip fill",
					description: "cursor location is important! (Alt + V) rip fill.",
					imgsrc: "modeling/altvrip.jpg"
				},
				{
					tlink: "ffillconnect",
					tline: "F: fill/connect",
					description: "(key:F) fill/connect.",
					imgsrc: "modeling/ffillconnect.jpg"
				}
			]
		},

		{
			hlink: "objects",
			hline: "Objects",
			contents: [
				{
					tlink: "shiftaaddobj",
					tline: "Shift + A: add objects",
					description: "Добавь на сцену что-нить, (Shift + A) add objects.",
					imgsrc: "objects/shiftaaddobj.jpg"
				},
				{
					tlink: "gsrpos",
					tline: "G/S/R: move/scale/rotate",
					description: "Передвигай, скалируй, вращай, (key:G/key:S/key:R) move/scale/rotate. Передвигай, скалируй, вращай по разным осям (G/S/R + X/Y/Z). Передвигай, скалируй, вращай на заданную величину (G/S/R + -360...+360). Комбинируй G/S/R + X/Y/Z + -360...+360",
					imgsrc: "objects/gsrpos.jpg"
				},
				{
					tlink: "spacesearchmen",
					tline: "Space: search menu",
					description: "Быстрый поиск по элементам интерфейса, (key:Space) search menu.",
					imgsrc: "objects/spacesearchmen.jpg"
				},
				{
					tlink: "ctrlshiftaltc",
					tline: "Ctrl + Shift + Alt + C: set object origin",
					description: "Установить точку основания объекта, (Ctrl + Shift + Alt + C) set object origin.",
					imgsrc: "objects/ctrlshiftaltc.jpg"
				},
				{
					tlink: "shiftcsnaper",
					tline: "Shift + S: snap cursor/selection",
					description: "Передвигай модель к 3d каретке, (Shift + S) snap cursor/selection.",
					imgsrc: "objects/shiftcsnaper.jpg"
				},
				{
					tlink: "shiftdduplicate",
					tline: "Shift + D: duplicate",
					description: "(Shift + D) duplicate.",
					imgsrc: "objects/shiftdduplicate.jpg"
				},
				{
					tlink: "altdduplink",
					tline: "Alt + D: duplicate linked",
					description: "(Alt + D) duplicate linked.",
					imgsrc: "objects/altdduplink.jpg"
				},
				{
					tlink: "pseparateselected",
					tline: "P: separate selected Vertices/Edges/Faces",
					description: "Выделить и применить separate - это отделит выбранные примитивы от основного меша (также выбранные примитивы станут отдельным мешом), (key:P) separate selected Vertices/Edges/Faces.",
					imgsrc: "objects/pseparateselected.jpg"
				},
				{
					tlink: "ctrljjoin",
					tline: "Ctrl + J: join objects",
					description: "Объеденить два меша в один общий меш, (Ctrl + J) join objects.",
					imgsrc: "objects/ctrljjoin.jpg"
				}
			]
		},

		{
			hlink: "animation",
			hline: "Animation",
			contents: [
				{
					tlink: "altaplaypause",
					tline: "Alt + A: play/pause",
					description: "(Alt + A) play/pause.",
					imgsrc: "animation/altaplaypause.jpg"
				},
				{
					tlink: "shiftaltareverse",
					tline: "Shift + Alt + A: play/pause in reverse",
					description: "(Shift + Alt + A) play/pause in reverse.",
					imgsrc: "animation/shiftaltareverse.jpg"
				},
				{
					tlink: "leftrightarrframe",
					tline: "Left/Right Arrows: go to next/previous frame",
					description: "(Left/Right Arrows) go to next/previous frame.",
					imgsrc: "animation/leftrightarrframe.jpg"
				},
				{
					tlink: "shiftupdownarr",
					tline: "Shift + Up/Down Arrows: jump forward/backward by 10 frames",
					description: "(Shift + Up/Down Arrows) jump forward/backward by 10 frames.",
					imgsrc: "animation/shiftupdownarr.jpg"
				},
				{
					tlink: "shiftlrarr",
					tline: "Shift + Left/Right Arrows: go to start/end of the timeline",
					description: "(Shift + Left/Right Arrows) go to start/end of the timeline.",
					imgsrc: "animation/shiftlrarr.jpg"
				}
			]
		},

		{
			hlink: "looptools",
			hline: "Loop tools",
			contents: [
				{
					tlink: "",
					tline: ": ",
					description: "() .",
					imgsrc: "looptools/.jpg"
				}
			]
		},

		{
			hlink: "modifiers",
			hline: "Modifiers",
			contents: [
				{
					tlink: "",
					tline: ": ",
					description: "() .",
					imgsrc: "modifiers/.jpg"
				}
			]
		}
	]
}
