import SnapshotLogType from "../enum/SnapshotLogType"

type SnapshotPlayerData = {
	userId: number,
	position: {
		x: number,
		y: number,
	},
}

type SnapshotLogData = {
	userId: number,
	type: SnapshotLogType,
	data: any,
}

type SnapshotCanvasData = {
	userId: number,
	data: string | Buffer,
}

type SnapshotData = {
	id: string,
	players: SnapshotPlayerData[],
	logs: SnapshotLogData[],
	canvas: SnapshotCanvasData[],
}

class Snapshot {
	constructor(data: SnapshotData) {

	}
}

export default Snapshot
export { Snapshot, SnapshotData }