export enum ModerationPresetReason {
	GRIEFING = "GRIEFING",
	NSFW = "NSFW",
	SCRIBBLING = "SCRIBBLING",
	HARASSMENT = "HARASSMENT",
	EXPLOITS = "EXPLOITS",
	FALSE_VOTEKICKING = "FALSE_VOTEKICKING",
	PROFANITY = "PROFANITY",
	HATE_SPEECH = "HATE_SPEECH",
	OTHER = "OTHER",
}

export const ModerationPresetReasonStrings = {
	[ModerationPresetReason.GRIEFING]: "Griefing",
	[ModerationPresetReason.NSFW]: "NSFW",
	[ModerationPresetReason.SCRIBBLING]: "Scribbling",
	[ModerationPresetReason.HARASSMENT]: "Harassment",
	[ModerationPresetReason.EXPLOITS]: "Exploits",
	[ModerationPresetReason.FALSE_VOTEKICKING]: "False vote-kicking",
	[ModerationPresetReason.PROFANITY]: "Profanity",
	[ModerationPresetReason.HATE_SPEECH]: "Hate speech",
	[ModerationPresetReason.OTHER]: "Other",
} as Record<ModerationPresetReason, string>

export default ModerationPresetReason