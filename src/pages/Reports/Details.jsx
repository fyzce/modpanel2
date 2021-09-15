import React from "react"
import styled from "styled-components"
import useAsync from "/src/util/useAsync"

import { getRobloxUser, getRobloxThumbnail } from "/src/api/roblox"

const DetailsUserElement = styled.a.attrs({
	target: "_blank",
})`
	display: flex;
	flex-direction: row;
`

const DetailsUserAvatarElement = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 50%;
`

const DetailsUserTextElement = styled.div`
	margin-left: 14px;
	display: flex;
	flex-direction: column;
`

const DetailsUserLabelElement = styled.span`
	margin-bottom: 3px;
	color: rgba(0, 0, 0, 0.8);
	font-size: 15px;
	font-weight: 300;
	text-transform: lowercase;
`

const DetailsUserNameElement = styled.span`
	font-size: 18px;
	font-weight: 400;
`

function DetailsUser({ id }) {
	const user = useAsync(getRobloxUser)(id)
	const avatar = useAsync(getRobloxThumbnail)("AvatarHeadShot", id, "100x100")

	return (
		<DetailsUserElement href={`https://www.roblox.com/users/${id}/profile`}>
			<DetailsUserAvatarElement src={avatar} />
			<DetailsUserTextElement>
				<DetailsUserLabelElement>From</DetailsUserLabelElement>
				<DetailsUserNameElement>{user ? user.name : null}</DetailsUserNameElement>
			</DetailsUserTextElement>
		</DetailsUserElement>
	)
}

const DetailsElement = styled.div`
	position: absolute;
	left: 30px;
	bottom: 30px;
	display: flex;
	flex-direction: column;
	pointer-events: none;

	> * {
		pointer-events: all;
	}
`

const NotesElement = styled.p`
	font-size: 18px;
	font-weight: 300;
	font-style: italic;
	margin: 0;
	margin-bottom: 20px;
	max-width: 300px;
`

function Details({ report }) {
	return (
		<DetailsElement>
			<NotesElement>{`"${report.notes}"`}</NotesElement>
			<DetailsUser id={report.from} />
		</DetailsElement>
	)
}

export default Details