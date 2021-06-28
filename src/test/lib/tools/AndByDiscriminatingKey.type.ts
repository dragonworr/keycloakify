
import { AndByDiscriminatingKey } from "../../../lib/tools/AndByDiscriminatingKey";
import { doExtends } from "tsafe/doExtends";

type Base =
	{ pageId: "a"; onlyA: string; } |
	{ pageId: "b"; onlyB: string; } |
	{ pageId: "only base"; onlyBase: string; };

type Extension =
	{ pageId: "a"; onlyExtA: string; } |
	{ pageId: "b"; onlyExtB: string; } |
	{ pageId: "only ext"; onlyExt: string; };

type Got = AndByDiscriminatingKey<"pageId", Extension, Base>;

type Expected =
	{ pageId: "a"; onlyA: string; onlyExtA: string; } |
	{ pageId: "b"; onlyB: string; onlyExtB: string; } |
	{ pageId: "only base"; onlyBase: string; } |
	{ pageId: "only ext"; onlyExt: string; };

doExtends<Got, Expected>();
doExtends<Expected, Got>();

const x: Got = null as any;

if (x.pageId === "a") {

	x.onlyA;
	x.onlyExtA;

	//@ts-expect-error
	x.onlyB;

	//@ts-expect-error
	x.onlyBase;

	//@ts-expect-error
	x.onlyExt;

}


if (x.pageId === "b") {

	x.onlyB;
	x.onlyExtB;

	//@ts-expect-error
	x.onlyA;

	//@ts-expect-error
	x.onlyBase;

	//@ts-expect-error
	x.onlyExt;

}

if (x.pageId === "only base") {

	x.onlyBase;

	//@ts-expect-error
	x.onlyA;

	//@ts-expect-error
	x.onlyB;

	//@ts-expect-error
	x.onlyExt;

}

if (x.pageId === "only ext") {

	x.onlyExt;


	//@ts-expect-error
	x.onlyA;

	//@ts-expect-error
	x.onlyB;

	//@ts-expect-error
	x.onlyBase;

}

