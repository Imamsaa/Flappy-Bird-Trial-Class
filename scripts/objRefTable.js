const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Plugins.Button,
		C3.Plugins.Mouse,
		C3.Plugins.TiledBg,
		C3.Behaviors.destroy,
		C3.Plugins.Text,
		C3.Plugins.Browser,
		C3.Behaviors.solid,
		C3.Plugins.Touch,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Text.Acts.SetWebFont,
		C3.Plugins.TiledBg.Acts.SetX,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Mouse.Cnds.OnAnyClick,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Cnds.IsBetweenAngles,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.TiledBg.Cnds.CompareX,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.TiledBg.Exps.X,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Text.Acts.MoveToTop,
		C3.Plugins.Button.Cnds.OnClicked
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{Bird: 0},
	{Button: 0},
	{Mouse: 0},
	{TiledBackground: 0},
	{TiledBackground2: 0},
	{Background: 0},
	{Scored: 0},
	{DestroyOutsideLayout: 0},
	{BottomPipe: 0},
	{TopPipe: 0},
	{ScoreText: 0},
	{Sprite: 0},
	{Browser: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Solid: 0},
	{PLAY: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Button2: 0},
	{Touch: 0},
	{start: 0},
	{SecondsPerObstacle: 0},
	{JumpStrength: 0},
	{ScrollSpeed: 0},
	{Score: 0}
];

self.InstanceType = {
	Bird: class extends self.ISpriteInstance {},
	Button: class extends self.IButtonInstance {},
	Mouse: class extends self.IInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	Background: class extends self.ISpriteInstance {},
	BottomPipe: class extends self.ISpriteInstance {},
	TopPipe: class extends self.ISpriteInstance {},
	ScoreText: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	PLAY: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Button2: class extends self.IButtonInstance {},
	Touch: class extends self.IInstance {},
	start: class extends self.ISpriteInstance {}
}